/**
 * Standard Actions configuration for Dawn.
 *
 * Storefront Renderer injects the Shopify Standard Actions bundle
 * (`window.Shopify.actions.{updateCart,openCart,getCart,…}`). This file
 * overrides the bundle's built-in Dawn refresh path with an explicit,
 * in-theme version so forks that change Dawn's cart contract keep
 * working. Remove this file and the built-in defaults take over.
 *
 *   - openCart   — opens <cart-drawer>; falls back to /cart.
 *   - updateCart — after the Storefront API mutation, refreshes the
 *     affected cart sections and publishes `cart-update` so Dawn's
 *     pubsub subscribers react.
 *   - other actions (getCart, etc.) keep the default implementation.
 */

// Cart custom elements that advertise sections via getSectionsToRender().
// If Dawn adds a new cart custom element, add its tag here.
const DAWN_CART_TAGS = ['cart-drawer', 'cart-items', 'cart-drawer-items', 'cart-notification'];

// Sections that Dawn's own pubsub subscribers refresh (cart.js's
// CartItems#onCartUpdate fetches and replaces these directly when
// cart-update fires; cart-drawer.js's renderContents handles the
// drawer body). We skip them here to avoid double-rendering.
// Format is '<element-tag>:<getSectionsToRender entry id>'.
// If you change which sections those subscribers refresh, update this set.
const DAWN_PUBSUB_REFRESHED_SECTIONS = new Set([
  'cart-drawer:cart-drawer',
  'cart-drawer-items:CartDrawer',
  'cart-items:main-cart-items',
]);

// Walk every mounted Dawn cart custom element, collect the sections it
// wants rendered, and dedupe. Returns a Map keyed by section id, each
// entry pointing at the DOM mount and the selector used to extract the
// fresh fragment.
function collectCartSections() {
  const sections = new Map();

  for (const el of document.querySelectorAll(DAWN_CART_TAGS.join(','))) {
    let entries;
    try {
      entries = el.getSectionsToRender?.();
    } catch {
      continue;
    }

    const tag = el.tagName.toLowerCase();
    for (const entry of entries ?? []) {
      if (DAWN_PUBSUB_REFRESHED_SECTIONS.has(`${tag}:${entry.id}`)) continue;

      const sectionId = entry.section ?? entry.id;
      if (!sectionId || sections.has(sectionId)) continue;

      // Two patterns coexist in getSectionsToRender():
      //   - cart-items style: entry.section is the parent Liquid section
      //     id, entry.selector is a child node inside it.
      //   - cart-drawer / cart-notification style: entry.id IS the mount;
      //     there is no parent wrapper.
      const root = entry.section ? document.getElementById(entry.id) : document;
      if (!root) continue;

      const mount = entry.selector
        ? (root.querySelector(entry.selector) ?? (entry.section ? root : null))
        : document.getElementById(entry.id);
      if (!mount) continue;

      sections.set(sectionId, {
        mount,
        extractSelector: entry.selector || '.shopify-section',
      });
    }
  }

  return sections;
}

// After a Storefront API mutation, refresh every Dawn cart section
// that isn't already refreshed by Dawn's own pubsub subscribers, then
// publish 'cart-update' so the subscribers run.
//
// We always fetch /cart.js (with sections= when we have any) so that
// `cartData` is defined for subscribers. quick-add-bulk.js reads
// `event.cartData.items` unconditionally — publishing without cartData
// makes it throw.
async function refreshDawnCartUI() {
  const sections = collectCartSections();
  const sectionsQuery = sections.size
    ? `?sections=${[...sections.keys()].join(',')}`
    : '';
  // `routes` is a Dawn global, but don't assume it's defined.
  const cartUrl = (typeof routes !== 'undefined' && routes?.cart_url) || '/cart';
  const url = `${cartUrl}.js${sectionsQuery}`;
  const cartData = await fetch(url, { headers: { Accept: 'application/json' } })
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null);

  if (cartData?.sections) {
    for (const [id, { mount, extractSelector }] of sections) {
      const html = cartData.sections[id];
      if (!html) continue;
      const source = new DOMParser()
        .parseFromString(html, 'text/html')
        .querySelector(extractSelector);
      if (source) mount.replaceChildren(...source.childNodes);
    }
  }

  // Hand off to Dawn's existing subscribers. cartData is the full
  // Cart Ajax payload (items, item_count, token, …) plus sections;
  // quick-add-bulk.js and price-per-item.js read it directly.
  publish(PUB_SUB_EVENTS.cartUpdate, {
    source: 'external-refresh',
    cartData: cartData ?? undefined,
  });
}

function initStandardActions() {
  const actions = window.Shopify?.actions;
  if (!actions) return;

  actions.openCart.configure({
    async handler(defaultHandler) {
      const drawer = document.querySelector('cart-drawer');
      if (drawer && typeof drawer.open === 'function') {
        drawer.open();
        return;
      }
      return defaultHandler();
    },
  });

  actions.updateCart.configure({
    // Dawn doesn't currently listen for shopify:cart:* events, but the
    // bundle requires an eventTarget. document is the conventional root.
    eventTarget: () => document,
    async handler(defaultHandler) {
      const result = await defaultHandler();
      try {
        await refreshDawnCartUI();
      } catch (error) {
        console.error('[Dawn] Standard Actions cart refresh failed; reloading.', error);
        window.location.reload();
      }
      return result;
    },
  });
}

// Run immediately if the standard-actions bundle has already attached
// `Shopify.actions`; otherwise wait for DOMContentLoaded, which fires after
// all module scripts have executed regardless of document order.
if (window.Shopify?.actions) {
  initStandardActions();
} else {
  document.addEventListener('DOMContentLoaded', initStandardActions, { once: true });
}
