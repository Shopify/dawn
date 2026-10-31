/*
  DOUCE: prev/next arrows on the main product image.
  The arrows only click Dawn's own thumbnail buttons, so media-gallery.js
  keeps handling the active image, ARIA state and variant media switching.
*/
(function () {
  const ARROW =
    '<svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5l7 7-7 7"/></svg>';

  function setup(root) {
    root.querySelectorAll('media-gallery').forEach((gallery) => {
      if (gallery.dataset.douceArrows) return;
      const viewer = gallery.querySelector('slider-component[id^="GalleryViewer-"]');
      const thumbnails = () => Array.from(gallery.querySelectorAll('.thumbnail-list__item button.thumbnail'));
      if (!viewer || thumbnails().length < 2) return;
      gallery.dataset.douceArrows = 'true';

      const nav = document.createElement('div');
      nav.className = 'douce-gallery-arrows';
      [
        ['prev', 'Previous image', -1],
        ['next', 'Next image', 1],
      ].forEach(([name, label, step]) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `douce-gallery-arrow douce-gallery-arrow--${name}`;
        button.setAttribute('aria-label', label);
        button.innerHTML = ARROW;
        button.addEventListener('click', () => {
          const list = thumbnails();
          const current = Math.max(
            0,
            list.findIndex((thumb) => thumb.getAttribute('aria-current') === 'true')
          );
          list[(current + step + list.length) % list.length].click();
        });
        nav.appendChild(button);
      });
      viewer.appendChild(nav);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setup(document));
  } else {
    setup(document);
  }
  document.addEventListener('shopify:section:load', (event) => setup(event.target));
  // Dawn re-mounts <product-info> when it swaps to another product (combined listings).
  document.addEventListener('product-info:loaded', (event) => setup(event.target));
})();

/*
  DOUCE: purchase options (Subscribe & Save / one-time).
  Keeps the hidden `selling_plan` input of the native product form in sync
  with the selected card, and re-renders the cards when the variant changes
  (prices differ per variant) while keeping the shopper's choice.
*/
(function () {
  function sync(container) {
    const input = container.querySelector('.douce-purchase__input');
    const checked = container.querySelector('.douce-purchase__radio-input:checked');
    if (!input) return;
    const value = checked ? checked.value : '';
    input.value = value;
    input.disabled = value === '';
  }

  document.addEventListener('change', (event) => {
    if (!event.target.classList || !event.target.classList.contains('douce-purchase__radio-input')) return;
    const container = event.target.closest('.douce-purchase');
    if (container) sync(container);
  });

  function onVariantChange({ data }) {
    if (!data || !data.html || !data.sectionId) return;
    const id = `DoucePurchase-${data.sectionId}`;
    const current = document.getElementById(id);
    const fresh = data.html.getElementById(id);
    if (!current || !fresh) return;

    const previous = current.querySelector('.douce-purchase__radio-input:checked');
    const previousValue = previous ? previous.value : null;
    current.innerHTML = fresh.innerHTML;

    if (previousValue !== null) {
      const radios = Array.from(current.querySelectorAll('.douce-purchase__radio-input'));
      const match =
        radios.find((radio) => radio.value === previousValue) ||
        (previousValue !== '' ? radios.find((radio) => radio.value !== '') : null);
      if (match) match.checked = true;
    }
    sync(current);
  }

  function init() {
    document.querySelectorAll('.douce-purchase').forEach(sync);
    if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
      subscribe(PUB_SUB_EVENTS.variantChange, onVariantChange);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/*
  DOUCE: "Add to cart · $69.00" on the main button. The price follows the
  selected purchase option (subscription or one-time) times the quantity.
  Dawn rewrites the label on variant changes; the observer re-applies it.
*/
(function () {
  const SEP = ' · ';

  function update(info) {
    const button = info.querySelector('button[id^="ProductSubmitButton-"]');
    const label = button && button.querySelector('span');
    const purchase = info.querySelector('.douce-purchase');
    if (!label || !purchase || typeof window.douceFormatMoney !== 'function') return;

    const base = label.textContent.split(SEP)[0].trim();
    const addLabel = (window.variantStrings && window.variantStrings.addToCart) || base;
    if (button.disabled || base !== addLabel) {
      if (label.textContent !== base) label.textContent = base;
      return;
    }

    const kit = info.querySelector('.dc-kit__input:checked');
    const option =
      kit && kit.value !== 'self'
        ? kit
        : purchase.querySelector('.douce-purchase__radio-input:checked') ||
          purchase.querySelector('.douce-purchase__radio-input');
    const price = Number(option && option.dataset.price);
    if (!price) return;

    const quantityInput = info.querySelector('.quantity__input');
    const quantity = Math.max(1, parseInt(quantityInput && quantityInput.value, 10) || 1);
    const text = base + SEP + window.douceFormatMoney(price * quantity, purchase.dataset.moneyFormat);
    if (label.textContent !== text) label.textContent = text;
  }

  function watch(root) {
    root.querySelectorAll('product-info[id^="MainProduct-"]').forEach((info) => {
      if (info.dataset.douceAtcPrice) return;
      info.dataset.douceAtcPrice = 'true';
      const run = () => update(info);
      info.addEventListener('change', run);
      new MutationObserver(run).observe(info, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['disabled'],
      });
      run();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => watch(document));
  } else {
    watch(document);
  }
  document.addEventListener('shopify:section:load', (event) => watch(event.target));
  document.addEventListener('product-info:loaded', (event) => watch(event.target.closest('section') || document));
})();

/*
  DOUCE: kit picker. The cards are radios, not links: the checked card decides
  which variant the native product form adds to the cart (the current product
  on its own, or a kit, which is another product). Nothing navigates.

  - On change, the variant id of the checked card is written to the product
    form(s), the same way Dawn does it, and the Add to cart state follows.
  - A kit cannot be bought on a selling plan of the standalone product, so while
    a kit is selected the purchase options are forced to "One-time purchase" and hidden.
  - Dawn re-renders the section when the finish changes; the fresh cards already
    carry the kit variants matching the new finish. They are swapped in, the
    shopper's choice is kept, and the variant id is re-applied after Dawn's own update.
*/
(function () {
  const selection = {};

  function setSubmit(info, radio) {
    const button = info.querySelector('button[id^="ProductSubmitButton-"]');
    const label = button && button.querySelector('span');
    if (!button || !label || !window.variantStrings) return;
    if (radio.dataset.available === 'true') {
      if (button.disabled) {
        button.removeAttribute('disabled');
        label.textContent = window.variantStrings.addToCart;
      }
    } else if (!button.disabled) {
      button.setAttribute('disabled', 'disabled');
      label.textContent = window.variantStrings.soldOut;
    }
  }

  function apply(container) {
    const info = container.closest('product-info');
    const radio = container.querySelector('.dc-kit__input:checked');
    if (!info || !radio) return;
    const isKit = radio.value !== 'self';
    selection[container.id] = radio.value;

    const section = info.dataset.section;
    info
      .querySelectorAll(`#product-form-${section}, #product-form-installment-${section}`)
      .forEach((form) => {
        const input = form.querySelector('input[name="id"]');
        if (!input || input.value === radio.dataset.variantId) return;
        input.value = radio.dataset.variantId;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      });

    info.querySelectorAll('.douce-purchase').forEach((purchase) => {
      purchase.toggleAttribute('data-kit-selected', isKit);
      if (!isKit) return;
      const oneTime = Array.from(purchase.querySelectorAll('.douce-purchase__radio-input')).find(
        (r) => r.value === ''
      );
      if (oneTime && !oneTime.checked) {
        oneTime.checked = true;
        oneTime.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });

    setSubmit(info, radio);
  }

  // When the product on its own is sold out in this finish, its card cannot be selected.
  // If a kit is available the first one is chosen; otherwise no card is selected.
  function normalize(container) {
    const self = container.querySelector('.dc-kit__input[value="self"]');
    if (!self) return;
    const kits = Array.from(container.querySelectorAll('.dc-kit__input')).filter(
      (r) => r.value !== 'self' && !r.disabled
    );
    const soldOut = self.dataset.available !== 'true';
    const card = self.closest('.dc-kit');
    if (!soldOut) return;
    self.disabled = true;
    card.classList.add('dc-kit--soldout');
    const sub = card.querySelector('.dc-kit__sub');
    const text = (window.variantStrings && window.variantStrings.soldOut) || 'Sold out';
    if (sub) sub.textContent = text;
    else {
      const holder = card.querySelector('.dc-kit__title');
      if (holder) holder.insertAdjacentHTML('afterend', `<span class="dc-kit__sub">${text}</span>`);
    }
    if (!kits.length) {
      // Nothing is available in this finish: no card can be selected.
      self.checked = false;
      return;
    }
    if (self.checked || !container.querySelector('.dc-kit__input:checked')) {
      kits[0].checked = true;
      kits[0].dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  document.addEventListener('change', (event) => {
    const target = event.target;
    if (!target.classList || !target.classList.contains('dc-kit__input')) return;
    const container = target.closest('.dc-kits[id^="DouceKits-"]');
    if (container) apply(container);
  });

  function onVariantChange({ data }) {
    if (!data || !data.html) return;
    document.querySelectorAll('.dc-kits[id^="DouceKits-"]').forEach((current) => {
      const fresh = data.html.getElementById(current.id);
      if (fresh) current.innerHTML = fresh.innerHTML;
      const wanted = selection[current.id];
      const radios = Array.from(current.querySelectorAll('.dc-kit__input'));
      const match = radios.find((r) => r.value === wanted && !r.disabled);
      if (match) match.checked = true;
      apply(current);
      normalize(current);
    });
  }

  function init() {
    document.querySelectorAll('.dc-kits[id^="DouceKits-"]').forEach(normalize);
    if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
      subscribe(PUB_SUB_EVENTS.variantChange, onVariantChange);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
