/*
 * Ron's Pijamas – custom theme scripts
 *
 * Loaded globally from layout/theme.liquid with `defer`, as the last theme
 * script, so it runs after Dawn's global.js, pubsub.js and constants.js and
 * can use their helpers (e.g. subscribe(), PUB_SUB_EVENTS, debounce()).
 *
 * Keep all brand customisations here instead of editing Dawn's core files,
 * so future Dawn updates can be merged cleanly.
 */

/*
 * Sticky add to cart (sections/rons-sticky-atc.liquid)
 *
 * Watches the main product form's submit button. When it leaves the viewport
 * (scrolled past), the bar slides in. The bar mirrors the button's disabled
 * state and label, and the selected variant's price, and clicking it clicks
 * the real submit button so Dawn's product-form handles the add to cart.
 */
if (!customElements.get('rons-sticky-atc')) {
  class RonsStickyAtc extends HTMLElement {
    connectedCallback() {
      this.productInfo = document.querySelector(`product-info[data-product-id="${this.dataset.productId}"]`);
      if (!this.productInfo) return;

      this.sectionId = this.productInfo.dataset.section;
      this.stickyButton = this.querySelector('[data-sticky-button]');
      this.stickyButtonText = this.querySelector('[data-sticky-button-text]');
      this.stickyPrice = this.querySelector('[data-sticky-price]');
      this.stickyVariant = this.querySelector('[data-sticky-variant]');

      this.stickyButton.addEventListener('click', this.onClick.bind(this));
      this.bindMainButton();
      this.syncPrice();

      if (typeof subscribe === 'function') {
        this.unsubscribe = subscribe(PUB_SUB_EVENTS.variantChange, (event) => {
          if (event.data.sectionId !== this.sectionId) return;
          if (this.stickyVariant && event.data.variant) this.stickyVariant.textContent = event.data.variant.title;
          // Dawn swaps the price markup synchronously before publishing; read it on the next frame to be safe.
          requestAnimationFrame(() => {
            this.syncPrice();
            this.syncButton();
          });
        });
      }
    }

    disconnectedCallback() {
      this.unsubscribe?.();
      this.observer?.disconnect();
      this.mutationObserver?.disconnect();
      this.setVisible(false);
    }

    get mainButton() {
      return document.getElementById(`ProductSubmitButton-${this.sectionId}`);
    }

    bindMainButton() {
      const button = this.mainButton;
      if (!button) return;

      this.observer = new IntersectionObserver(([entry]) => {
        // Only show once the button is above the viewport (scrolled past), not before reaching it.
        this.setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      });
      this.observer.observe(button);

      this.mutationObserver = new MutationObserver(() => this.syncButton());
      this.mutationObserver.observe(button, {
        attributes: true,
        attributeFilter: ['disabled', 'aria-disabled', 'class'],
        childList: true,
        characterData: true,
        subtree: true,
      });
      this.syncButton();
    }

    setVisible(visible) {
      this.classList.toggle('is-visible', visible);
      this.setAttribute('aria-hidden', String(!visible));
      this.stickyButton.tabIndex = visible ? 0 : -1;
      document.body.classList.toggle('rons-sticky-atc-visible', visible);
    }

    syncButton() {
      const button = this.mainButton;
      if (!button) return;
      const label = button.querySelector('span');
      this.stickyButton.disabled = button.hasAttribute('disabled');
      this.stickyButton.classList.toggle('loading', button.classList.contains('loading'));
      if (label) this.stickyButtonText.textContent = label.textContent.trim();
    }

    syncPrice() {
      const price = document.querySelector(`#price-${this.sectionId} .price`);
      if (price && this.stickyPrice) this.stickyPrice.innerHTML = price.outerHTML;
    }

    onClick() {
      const button = this.mainButton;
      if (!button || button.hasAttribute('disabled')) return;
      button.click();
    }
  }

  customElements.define('rons-sticky-atc', RonsStickyAtc);
}
