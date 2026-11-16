import {KEY, normalizeEntries, mergeEntry, subtractSubmitted, summary} from './cellife-export-basket.js';

const routes = JSON.parse(document.getElementById('CellifeExportRoutes')?.textContent || '{"root":"/","cart":"/cart"}');
const cartPath = routes.cart.replace(/\/$/, ''), pendingKey = KEY + ':submitted';
function readState() {
  const stored = JSON.parse(localStorage.getItem(KEY) || '[]');
  return {items:normalizeEntries(Array.isArray(stored) ? stored : stored.items), moved:stored.moved || {}};
}
function read() { return readState().items; }
function writeState(state) {
  localStorage.setItem(KEY, JSON.stringify({items:normalizeEntries(state.items), moved:state.moved}));
  document.dispatchEvent(new CustomEvent('cellife:export-change'));
}
function save(items) {
  const state = readState(), valid = normalizeEntries(items);
  for (const [key, moved] of Object.entries(state.moved)) {
    if (!valid.some(item => item.variantId === moved.variantId && item.quantity >= moved.quantity)) delete state.moved[key];
  }
  writeState({items:valid, moved:state.moved});
}
function message(target, text) { if (target) target.textContent = text; }
function count() { try { return read().reduce((sum, item) => sum + item.quantity, 0); } catch { return 0; } }
function refreshIndicators() {
  const total = count();
  document.documentElement.classList.toggle('cellife-export-pending', total > 0);
  const cartLink = document.getElementById('cart-icon-bubble');
  let badge = cartLink?.querySelector('[data-export-count]');
  if (!badge && cartLink && total) {
    badge = document.createElement('span'); badge.dataset.exportCount = '';
    badge.className = 'cellife-export-count'; cartLink.append(badge);
  }
  if (badge) {
    badge.hidden = !total;
    if (badge.textContent !== String(total)) badge.textContent = String(total);
    badge.setAttribute('aria-label', 'Export enquiry items: ' + total);
  }
  // Only cart checkout controls change. Regular product payment buttons stay native.
  document.querySelectorAll('button[name="checkout"]').forEach(button => {
    if (!button.dataset.exportOriginalLabel) button.dataset.exportOriginalLabel = button.textContent.trim();
    const label = total ? 'Review export enquiry' : button.dataset.exportOriginalLabel;
    if (button.textContent.trim() !== label) button.textContent = label;
  });
}
function interceptCheckout(event) {
  if (!count()) return;
  const target = event.target.closest?.('button[name="checkout"], a[href]');
  const isCartLink = target?.id === 'cart-icon-bubble';
  const href = target?.getAttribute('href') || '';
  const payment = target?.matches('button[name="checkout"]') || /^\/(?:[a-z]{2}(?:-[a-z]{2})?\/)?checkout(?:[/?#]|$)/i.test(href);
  if (isCartLink || payment) {
    event.preventDefault(); event.stopImmediatePropagation();
    location.assign(cartPath + '#cellife-export-enquiry');
  }
}
document.addEventListener('click', interceptCheckout, true);
document.addEventListener('submit', event => {
  if (event.submitter?.name === 'checkout' && count()) {
    event.preventDefault(); event.stopImmediatePropagation(); location.assign(cartPath + '#cellife-export-enquiry');
  }
}, true);
// Dawn replaces cart controls using Section Rendering.
new MutationObserver(refreshIndicators).observe(document.body, {childList:true, subtree:true});
document.addEventListener('cellife:export-change', refreshIndicators);
window.addEventListener('storage', event => { if (event.key === KEY || event.key === null) document.dispatchEvent(new CustomEvent('cellife:export-change')); });
refreshIndicators();

const metadata = new Map();
async function getProduct(handle, fresh = false) {
  if (!fresh && metadata.has(handle)) return metadata.get(handle);
  const url = new URL(routes.root + 'products/' + handle, location.origin);
  url.searchParams.set('view', 'cellife-export-data');
  const response = await fetch(url, {cache:'no-store', credentials:'same-origin'});
  if (!response.ok) throw new Error('Product information could not be loaded. Please try again.');
  let product;
  try { product = JSON.parse(await response.text()); }
  catch { throw new Error('Product information could not be loaded. Please try again.'); }
  if (product.exportOnly !== true || product.handle !== handle || !/^\d{1,24}$/.test(String(product.id)) || typeof product.title !== 'string' || !product.title || typeof product.url !== 'string' || !Array.isArray(product.variants) || product.variants.some(v => !/^\d{1,24}$/.test(String(v.id)) || typeof v.title !== 'string')) throw new Error('An item is no longer available for export enquiry. Remove it to continue.');
  product.url = new URL(product.url, location.origin).href;
  if (new URL(product.url).origin !== location.origin) throw new Error('Invalid product link.');
  metadata.set(handle, product);
  return product;
}
async function resolveItems(entries, fresh = false) {
  return Promise.all(entries.map(async entry => {
    const product = await getProduct(entry.handle, fresh), variant = product.variants.find(v => String(v.id) === entry.variantId);
    if (!variant) throw new Error('A selected variant no longer exists. Remove that item and select it again.');
    return {entry, product, variant};
  }));
}
if (!customElements.get('cellife-export-picker')) customElements.define('cellife-export-picker', class extends HTMLElement {
  connectedCallback() {
    if (this.ready) return; this.ready = true;
    const button = this.querySelector('[data-export-add]'), status = this.querySelector('[data-export-status]');
    let product;
    try { product = JSON.parse(this.querySelector('[data-export-product]').textContent); if (!product.exportOnly) return; }
    catch { return; }
    button.disabled = false;
    button.addEventListener('click', async () => {
      const input = this.querySelector('[data-export-quantity]');
      if (!input.reportValidity()) return;
      button.disabled = true;
      try {
        const entry = normalizeEntries([{handle:product.handle, variantId:this.querySelector('[data-export-variant]').value, quantity:Number(input.value)}])[0];
        await resolveItems([entry], true);
        save(mergeEntry(read(), entry));
        message(status, 'Added to your export enquiry cart. You can keep browsing or review your enquiry cart.');
      } catch (error) { message(status, error instanceof DOMException ? 'Your browser could not save the enquiry cart. Enable browser storage or contact Cellife directly.' : error.message); }
      finally { button.disabled = false; }
    });
  }
});

if (!customElements.get('cellife-export-enquiry')) customElements.define('cellife-export-enquiry', class extends HTMLElement {
  connectedCallback() {
    if (this.ready) return; this.ready = true;
    this.form = this.querySelector('form');
    this.fields = this.querySelector('[data-export-fields]');
    this.items = this.querySelector('[data-export-items]');
    this.status = this.querySelector('[data-export-message]');
    this.native = JSON.parse(this.querySelector('[data-export-native]').textContent);
    if (typeof window.subscribe === 'function') this.unsubscribeCart = window.subscribe('cart-update', ({cartData}) => {
      if (!Array.isArray(cartData?.items)) return;
      this.native.items = this.native.items.filter(item => cartData.items.some(line => line.key === item.key));
      this.native.regularCount = cartData.items.filter(line => !this.native.items.some(item => item.key === line.key)).reduce((sum,line) => sum + line.quantity, 0);
      this.querySelector('[data-export-mixed]').hidden = !this.native.regularCount;
      this.querySelector('[data-export-native-warning]').hidden = !this.native.items.length;
      this.render();
    });
    this.querySelector('[data-export-mixed]').hidden = !this.native.regularCount;
    this.querySelector('[data-export-native-warning]').hidden = !this.native.items.length;
    const country = this.querySelector('#ExportCountry');
    [...country.options].filter(option => ['Australia','---'].includes(option.value)).forEach(option => option.disabled = true);
    country.addEventListener('change', () => country.setCustomValidity(country.value === 'Australia' ? 'Choose a destination outside Australia.' : ''));
    this.querySelector('[data-export-migrate]').addEventListener('click', () => this.migrate());
    this.handleChange = () => this.render(); document.addEventListener('cellife:export-change', this.handleChange);
    this.form.addEventListener('submit', event => this.submit(event), {capture:true});
    if (this.querySelector('[data-export-success]')) {
      try {
        const submitted = normalizeEntries(JSON.parse(sessionStorage.getItem(pendingKey) || '[]'));
        if (submitted.length) save(subtractSubmitted(read(), submitted));
        sessionStorage.removeItem(pendingKey);
      } catch { /* Keep the saved enquiry if a confirmed submission cannot be reconciled. */ }
      this.querySelector('[data-export-success]').focus();
    }
    this.render();
  }
  disconnectedCallback() { document.removeEventListener('cellife:export-change', this.handleChange); this.unsubscribeCart?.(); }
  async render() {
    const version = this.version = (this.version || 0) + 1;
    this.fields.disabled = true; this.hidden = false;
    let entries;
    try { entries = read(); }
    catch { message(this.status, 'The saved enquiry cart could not be read. Please contact Cellife for help.'); return; }
    const success = Boolean(this.querySelector('[data-export-success]'));
    this.hidden = !entries.length && !this.native.items.length && !success;
    this.querySelector('[data-export-empty]').hidden = entries.length > 0 || success;
    this.items.replaceChildren();
    if (!entries.length) return;
    let resolved = [];
    try { resolved = await resolveItems(entries); }
    catch (error) { message(this.status, error.message); }
    if (this.version !== version) return;
    for (const entry of entries) {
      const item = resolved.find(item => item.entry.variantId === entry.variantId);
      const row = document.createElement('div'); row.className = 'cellife-export-item';
      const info = document.createElement('div'), title = document.createElement('h3');
      title.textContent = item?.product.title || entry.handle; info.append(title);
      if (item) { const details = document.createElement('p'); details.textContent = item.variant.title + (item.variant.sku ? ' · SKU: ' + item.variant.sku : ''); info.append(details); }
      const label = document.createElement('label'); label.textContent = 'Quantity';
      const input = document.createElement('input'); input.type = 'number'; input.min = '1'; input.max = '999'; input.step = '1'; input.value = entry.quantity;
      label.append(input);
      input.addEventListener('change', () => {
        if (!input.reportValidity()) return;
        try { save(read().map(existing => existing.variantId === entry.variantId ? {...existing, quantity:Number(input.value)} : existing)); }
        catch (error) { message(this.status, error.message); }
      });
      const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'link underlined-link'; remove.textContent = 'Remove'; remove.setAttribute('aria-label', 'Remove ' + (item?.product.title || entry.handle));
      remove.addEventListener('click', () => { try { save(read().filter(existing => existing.variantId !== entry.variantId)); } catch (error) { message(this.status, error.message); } });
      row.append(info, label, remove); this.items.append(row);
    }
    this.fields.disabled = resolved.length !== entries.length || this.native.items.length > 0;
    if (!this.fields.disabled) message(this.status, 'Availability, pricing and shipping will be confirmed by the Cellife team.');
  }
  async submit(event) {
    if (this.prepared) { this.prepared = false; return; }
    event.preventDefault();
    event.stopImmediatePropagation(); // Only the fully prepared second submit reaches Shopify's handlers.
    if (this.submitting) return;
    const country = this.querySelector('#ExportCountry');
    if (!country.value || ['Australia','---'].includes(country.value) || this.native.items.length) {
      country.setCustomValidity('Choose an export destination outside Australia.'); country.reportValidity(); return;
    }
    this.submitting = true;
    const button = this.form.querySelector('button[type="submit"]'); button.disabled = true;
    try {
      const entries = read(); if (!entries.length) throw new Error('Add a product before submitting.');
      const resolved = await resolveItems(entries, true);
      this.querySelector('[data-export-summary]').value = summary(resolved);
      // Snapshot only product IDs/quantities, never the customer's form fields.
      try { sessionStorage.setItem(pendingKey, JSON.stringify(entries)); } catch { /* Confirmation will retain cart if storage is unavailable. */ }
      this.prepared = true; button.disabled = false;
      this.form.requestSubmit(button); // Preserve native Shopify validation and spam protection.
    } catch (error) { message(this.status, error.message); }
    finally { this.submitting = false; button.disabled = false; }
  }
  async migrate() {
    const button = this.querySelector('[data-export-migrate]'); button.disabled = true;
    try {
      const cartResponse = await fetch(cartPath + '.js', {cache:'no-store'}); if (!cartResponse.ok) throw new Error('Could not read the shopping cart.');
      const cart = await cartResponse.json();
      const lines = cart.items.filter(item => this.native.items.some(native => native.key === item.key));
      const entries = lines.map(item => ({handle:item.handle, variantId:String(item.variant_id), quantity:item.quantity}));
      await resolveItems(entries, true);
      // Journal each line so retrying a failed cart update cannot duplicate its quantity.
      const state = readState(), journal = state.moved;
      let items = state.items;
      for (let index = 0; index < lines.length; index++) if (!journal[lines[index].key]) { items = mergeEntry(items, entries[index]); journal[lines[index].key] = {variantId:entries[index].variantId,quantity:entries[index].quantity}; }
      // One atomic browser-storage write precedes the Shopify mutation. Retries are idempotent.
      writeState({items, moved:journal});
      const response = await fetch(cartPath + '/update.js', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({updates:Object.fromEntries(lines.map(line => [line.key,0]))})});
      if (!response.ok) throw new Error('Products are saved in your enquiry cart, but the shopping cart could not be updated. Please retry.');
      const updated = await response.json();
      if (updated.items.some(item => lines.some(line => line.key === item.key))) throw new Error('Some export products remain in the shopping cart. Please retry.');
      writeState({items:read(), moved:{}});
      location.assign(cartPath + '?export_cart_updated=' + Date.now() + '#cellife-export-enquiry');
    } catch (error) { message(this.status, error.message); button.disabled = false; }
  }
});
