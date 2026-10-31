/*
  DOUCE theme behaviours: before/after compare, inline videos, sticky add to
  cart, bundle builder and the long-form table of contents.
*/

(() => {
  const formatMoney = (cents, format) => {
    const value = (Number(cents) || 0) / 100;
    const fixed = (decimals, thousands, decimal) => {
      const parts = value.toFixed(decimals).split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
      return parts.join(decimal);
    };
    // Some stores wrap the format in HTML (<span class=money>); prices are set as text.
    const template = (format || '${{amount}}').replace(/<[^>]*>/g, '');
    return template.replace(/\{\{\s*(\w+)\s*\}\}/, (_, key) => {
      switch (key) {
        case 'amount_no_decimals':
          return fixed(0, ',', '.');
        case 'amount_with_comma_separator':
          return fixed(2, '.', ',');
        case 'amount_no_decimals_with_comma_separator':
          return fixed(0, '.', ',');
        case 'amount_with_apostrophe_separator':
          return fixed(2, "'", '.');
        default:
          return fixed(2, ',', '.');
      }
    });
  };
  window.douceFormatMoney = formatMoney;

  /* Before / after slider */
  if (!customElements.get('douce-compare')) {
    customElements.define(
      'douce-compare',
      class DouceCompare extends HTMLElement {
        connectedCallback() {
          this.range = this.querySelector('input[type="range"]');
          if (!this.range) return;
          this.update = () => this.style.setProperty('--dc-pos', `${this.range.value}%`);
          this.range.addEventListener('input', this.update);
          this.update();
        }
      }
    );
  }

  /* Click-to-play video */
  if (!customElements.get('douce-video')) {
    customElements.define(
      'douce-video',
      class DouceVideo extends HTMLElement {
        connectedCallback() {
          this.video = this.querySelector('video');
          this.toggle = this.querySelector('.dc-video-toggle');
          if (!this.video) return;
          if (this.video.autoplay) this.classList.add('is-playing');
          const play = () => {
            this.video.controls = true;
            this.video.play();
          };
          this.toggle?.addEventListener('click', play);
          this.video.addEventListener('play', () => this.classList.add('is-playing'));
          this.video.addEventListener('pause', () => {
            if (!this.video.seeking) this.classList.remove('is-playing');
          });
        }
      }
    );
  }

  /* Sticky add to cart */
  if (!customElements.get('douce-sticky-atc')) {
    customElements.define(
      'douce-sticky-atc',
      class DouceStickyAtc extends HTMLElement {
        connectedCallback() {
          this.mainButton = document.querySelector('product-info product-form [name="add"]');
          this.button = this.querySelector('[data-sticky-button]');
          if (!this.mainButton || !this.button) return;

          const img = this.querySelector('.dc-media img');
          this.orig = {
            title: this.querySelector('.dc-sticky-atc__title')?.textContent,
            sub: this.querySelector('[data-sticky-variant]')?.textContent,
            src: img?.getAttribute('src'),
            srcset: img?.getAttribute('srcset'),
          };

          this.button.addEventListener('click', () => {
            if (this.mainButton.disabled) {
              this.mainButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
              return;
            }
            this.mainButton.click();
          });

          const mobileAllowed = this.dataset.mobile !== 'false';
          this.observer = new IntersectionObserver(([entry]) => {
            const passed = !entry.isIntersecting && entry.boundingClientRect.top < 0;
            const allowed = mobileAllowed || window.matchMedia('(min-width: 750px)').matches;
            this.setVisible(passed && allowed);
          });
          this.observer.observe(this.mainButton);

          this.onPurchaseChange = (event) => {
            const cls = event.target.classList;
            if (cls?.contains('douce-purchase__radio-input') || cls?.contains('dc-kit__input')) this.syncPurchasePrice();
          };
          document.addEventListener('change', this.onPurchaseChange);
          this.syncPurchasePrice();

          if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
            this.unsubscribe = subscribe(PUB_SUB_EVENTS.variantChange, (event) => this.onVariantChange(event));
          }
        }

        disconnectedCallback() {
          this.observer?.disconnect();
          this.unsubscribe?.();
          document.removeEventListener('change', this.onPurchaseChange);
        }

        setVisible(visible) {
          this.classList.toggle('is-visible', visible);
          this.setAttribute('aria-hidden', String(!visible));
          this.button.tabIndex = visible ? 0 : -1;
        }

        onVariantChange(event) {
          const variant = event?.data?.variant;
          const sectionId = event?.data?.sectionId;
          // Let product-info.js swap the price markup first, then copy it.
          requestAnimationFrame(() => {
            const variantEl = this.querySelector('[data-sticky-variant]');
            if (variant && variantEl && variant.title && variant.title !== 'Default Title') {
              variantEl.textContent = variant.title;
              if (this.orig) this.orig.sub = variant.title;
            }
            if (!this.syncPurchasePrice()) {
              const price = sectionId && document.getElementById(`price-${sectionId}`);
              const priceItem = price?.querySelector('.price--on-sale .price-item--last, .price__regular .price-item--regular');
              const target = this.querySelector('[data-sticky-price]');
              if (priceItem && target) target.textContent = priceItem.textContent.trim();
            }
            const available = !variant || variant.available;
            const label = this.querySelector('[data-sticky-label]');
            const soldOut = window.variantStrings?.soldOut || this.button.dataset.soldOut;
            if (label) label.textContent = available ? this.button.dataset.label : soldOut;
            this.button.disabled = !available;
          });
        }

        // Shows the kit chosen in the kit picker (title, image, price), or restores the product.
        syncKit() {
          const radio = document.querySelector('product-info .dc-kit__input:checked');
          const isKit = Boolean(radio && radio.value !== 'self');
          const title = this.querySelector('.dc-sticky-atc__title');
          const sub = this.querySelector('[data-sticky-variant]');
          const img = this.querySelector('.dc-media img');
          const o = this.orig || {};
          if (title) title.textContent = isKit && radio.dataset.title ? radio.dataset.title : o.title;
          if (sub) sub.textContent = isKit ? radio.dataset.variantTitle || o.sub || '' : o.sub;
          if (img) {
            const src = isKit && radio.dataset.image ? radio.dataset.image : o.src;
            if (src) img.setAttribute('src', src);
            if (isKit && radio.dataset.image) img.removeAttribute('srcset');
            else if (o.srcset) img.setAttribute('srcset', o.srcset);
          }
          if (isKit) {
            const target = this.querySelector('[data-sticky-price]');
            const price = Number(radio.dataset.price);
            const purchase = document.querySelector('product-info .douce-purchase');
            if (target && price) {
              target.textContent = formatMoney(price, purchase?.dataset.moneyFormat || window.Shopify?.money_format);
              return true;
            }
          }
          return false;
        }

        // Shows the price of the chosen purchase option (subscription or one-time).
        syncPurchasePrice() {
          if (this.syncKit()) return true;
          const purchase = document.querySelector('product-info .douce-purchase');
          const option = purchase?.querySelector('.douce-purchase__radio-input:checked');
          const target = this.querySelector('[data-sticky-price]');
          const price = Number(option?.dataset.price);
          if (!price || !target) return false;
          target.textContent = formatMoney(price, purchase.dataset.moneyFormat);
          return true;
        }
      }
    );
  }

  /* Bundle builder */
  if (!customElements.get('douce-bundle')) {
    customElements.define(
      'douce-bundle',
      class DouceBundle extends HTMLElement {
        connectedCallback() {
          this.items = [...this.querySelectorAll('[data-bundle-item]')];
          this.format = this.dataset.moneyFormat;
          this.tier2 = Number(this.dataset.tier2) || 0;
          this.tier3 = Number(this.dataset.tier3) || 0;
          this.strings = JSON.parse(this.querySelector('[data-bundle-strings]')?.textContent || '{}');
          this.items.forEach((item) => {
            item.querySelectorAll('[data-step]').forEach((btn) =>
              btn.addEventListener('click', () => this.step(item, Number(btn.dataset.step)))
            );
          });
          this.submit = this.querySelector('[data-bundle-submit]');
          this.submit?.addEventListener('click', () => this.addToCart());
          this.render();
        }

        step(item, delta) {
          const qty = Math.max(0, Math.min(99, (Number(item.dataset.qty) || 0) + delta));
          item.dataset.qty = String(qty);
          const out = item.querySelector('output');
          if (out) out.textContent = qty;
          this.render();
        }

        render() {
          const chosen = this.items.filter((item) => Number(item.dataset.qty) > 0);
          const count = chosen.reduce((sum, item) => sum + Number(item.dataset.qty), 0);
          const subtotal = chosen.reduce((sum, item) => sum + Number(item.dataset.qty) * Number(item.dataset.price), 0);
          const rate = count >= 3 ? this.tier3 : count === 2 ? this.tier2 : 0;
          const saving = Math.round((subtotal * rate) / 100);
          const s = this.strings;

          const lines = this.querySelector('[data-bundle-lines]');
          if (lines) {
            lines.innerHTML = '';
            if (!chosen.length) {
              const li = document.createElement('li');
              li.className = 'dc-bundle__empty';
              li.textContent = s.empty || '';
              lines.appendChild(li);
            }
            chosen.forEach((item) => {
              const li = document.createElement('li');
              const name = document.createElement('span');
              const total = document.createElement('span');
              name.textContent = `${item.dataset.qty} × ${item.dataset.title}`;
              total.textContent = formatMoney(Number(item.dataset.qty) * Number(item.dataset.price), this.format);
              li.append(name, total);
              lines.appendChild(li);
            });
          }

          let message = s.best || '';
          if (count < 2) message = (s.add_more || '').replace('[count]', 2 - count).replace('[percent]', this.tier2);
          else if (count === 2) message = (s.add_one || '').replace('[percent]', this.tier3);
          const progress = count >= 3 ? 100 : count === 2 ? 55 : count === 1 ? 10 : 0;

          this.setText('[data-bundle-message]', message);
          this.setText('[data-bundle-tier]', rate ? (s.applied || '').replace('[percent]', rate) : s.none || '');
          this.setText('[data-bundle-saving]', `−${formatMoney(saving, this.format)}`);
          this.setText('[data-bundle-total]', formatMoney(subtotal - saving, this.format));
          this.querySelector('[data-bundle-bar]')?.style.setProperty('--dc-progress', `${progress}%`);
          if (this.submit) this.submit.disabled = count === 0;
        }

        setText(selector, text) {
          const el = this.querySelector(selector);
          if (el) el.textContent = text;
        }

        async addToCart() {
          const items = this.items
            .filter((item) => Number(item.dataset.qty) > 0 && item.dataset.variant)
            .map((item) => ({ id: Number(item.dataset.variant), quantity: Number(item.dataset.qty) }));
          if (!items.length) return;

          const error = this.querySelector('[data-bundle-error]');
          if (error) error.hidden = true;
          this.submit.setAttribute('aria-busy', 'true');
          this.submit.disabled = true;

          const cart = document.querySelector('cart-drawer');
          const body = { items };
          if (cart) {
            body.sections = cart.getSectionsToRender().map((section) => section.id);
            body.sections_url = window.location.pathname;
          }

          try {
            const res = await fetch(`${window.routes?.cart_add_url || '/cart/add'}.js`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
              body: JSON.stringify(body),
            });
            const data = await res.json();
            if (!res.ok || data.status) throw new Error(data.description || data.message || 'Error');
            if (typeof publish === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
              publish(PUB_SUB_EVENTS.cartUpdate, { source: 'douce-bundle', cartData: data });
            }
            if (cart && typeof cart.renderContents === 'function') {
              cart.classList.remove('is-empty');
              cart.renderContents(data);
            } else {
              window.location.href = window.routes?.cart_url || '/cart';
            }
          } catch (e) {
            if (error) {
              error.textContent = e.message;
              error.hidden = false;
            }
          } finally {
            this.submit.removeAttribute('aria-busy');
            this.submit.disabled = false;
          }
        }
      }
    );
  }

  /* Table of contents: highlight the section in view */
  if (!customElements.get('douce-toc')) {
    customElements.define(
      'douce-toc',
      class DouceToc extends HTMLElement {
        connectedCallback() {
          const links = [...this.querySelectorAll('a[href^="#"]')];
          const targets = links.map((a) => document.getElementById(a.hash.slice(1))).filter(Boolean);
          if (!targets.length) return;
          this.observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                links.forEach((a) => a.setAttribute('aria-current', String(a.hash === `#${entry.target.id}`)));
              });
            },
            { rootMargin: '-30% 0px -60% 0px' }
          );
          targets.forEach((t) => this.observer.observe(t));
        }

        disconnectedCallback() {
          this.observer?.disconnect();
        }
      }
    );
  }
})();
