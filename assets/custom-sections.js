if (!customElements.get('cs-scroller')) {
  customElements.define(
    'cs-scroller',
    class CsScroller extends HTMLElement {
      connectedCallback() {
        this.track = this.querySelector('.cs-scroller__track');
        if (!this.track) return;

        const sectionRoot = this.closest('.shopify-section') || document;
        this.prevButtons = sectionRoot.querySelectorAll(`[data-scroller-prev="${this.id}"]`);
        this.nextButtons = sectionRoot.querySelectorAll(`[data-scroller-next="${this.id}"]`);

        this.prevButtons.forEach((button) => button.addEventListener('click', () => this.scrollByPage(-1)));
        this.nextButtons.forEach((button) => button.addEventListener('click', () => this.scrollByPage(1)));

        this.onScroll = this.updateButtons.bind(this);
        this.track.addEventListener('scroll', this.onScroll, { passive: true });
        this.resizeObserver = new ResizeObserver(this.onScroll);
        this.resizeObserver.observe(this.track);
        this.updateButtons();

        if (window.Shopify && Shopify.designMode) {
          this.addEventListener('shopify:block:select', (event) => {
            this.track.scrollTo({ left: event.target.offsetLeft - this.track.offsetLeft, behavior: 'smooth' });
          });
        }
      }

      disconnectedCallback() {
        this.track?.removeEventListener('scroll', this.onScroll);
        this.resizeObserver?.disconnect();
      }

      scrollByPage(direction) {
        const item = this.track.firstElementChild;
        const gap = parseFloat(getComputedStyle(this.track).columnGap) || 0;
        const step = item ? item.getBoundingClientRect().width + gap : this.track.clientWidth;
        const perPage = Math.max(1, Math.floor((this.track.clientWidth + gap) / step));
        this.track.scrollBy({ left: direction * step * perPage, behavior: 'smooth' });
      }

      updateButtons() {
        const max = this.track.scrollWidth - this.track.clientWidth - 2;
        const atStart = this.track.scrollLeft <= 2;
        const atEnd = this.track.scrollLeft >= max;
        this.prevButtons.forEach((button) => (button.disabled = atStart));
        this.nextButtons.forEach((button) => (button.disabled = atEnd || max <= 0));
        this.classList.toggle('is-scrollable', max > 0);
      }
    }
  );
}

// Mega drawer close link: toggle the drawer through its own summary so Dawn's
// HeaderDrawer runs its normal close routine (focus, scroll lock, animation).
document.addEventListener('click', (event) => {
  const closeLink = event.target.closest('.mega-drawer__close');
  if (!closeLink) return;
  event.preventDefault();
  closeLink.closest('.menu-drawer-container')?.querySelector(':scope > summary')?.click();
});

// Product page sticky add-to-cart bar: shows once the main buy button scrolls out of
// view, and mirrors the main button's label/disabled state and the current price.
if (!customElements.get('product-sticky-bar')) {
  customElements.define(
    'product-sticky-bar',
    class ProductStickyBar extends HTMLElement {
      connectedCallback() {
        this.button = this.querySelector('.product-sticky-bar__button');
        this.priceEl = this.querySelector('.product-sticky-bar__price');
        this.sectionId = this.dataset.sectionId;
        this.hidden = false;

        const form = document.getElementById(this.dataset.formId);
        if (!form) return;

        this.observer = new IntersectionObserver(([entry]) => {
          const pastButton = !entry.isIntersecting && entry.boundingClientRect.top < 0;
          this.classList.toggle('is-visible', pastButton);
        });
        this.observer.observe(form);

        // Dawn re-renders the price and buy buttons on variant change; watch the whole
        // product info column and re-sync from whatever elements are current.
        this.sync = this.sync.bind(this);
        const info = document.getElementById(`ProductInfo-${this.sectionId}`);
        if (info) {
          this.mutationObserver = new MutationObserver(this.sync);
          this.mutationObserver.observe(info, { subtree: true, childList: true, attributes: true, attributeFilter: ['disabled'] });
        }
        this.sync();
      }

      disconnectedCallback() {
        this.observer?.disconnect();
        this.mutationObserver?.disconnect();
      }

      sync() {
        const mainButton = document.getElementById(`ProductSubmitButton-${this.sectionId}`);
        if (mainButton) {
          this.button.disabled = mainButton.disabled;
          const label = mainButton.querySelector('span')?.textContent.trim();
          if (label) this.button.textContent = label;
        }
        const price = document.querySelector(`#price-${this.sectionId} .price-item--last, #price-${this.sectionId} .price-item--regular`);
        if (price && price.textContent.trim()) this.priceEl.textContent = price.textContent.trim();
      }
    }
  );
}

// Collection grid size toggle: stores the choice per browser and applies it via
// data-grid-view on the .collection-bold wrapper (which survives filter re-renders).
if (!customElements.get('grid-view-toggle')) {
  customElements.define(
    'grid-view-toggle',
    class GridViewToggle extends HTMLElement {
      connectedCallback() {
        this.wrapper = this.closest('.collection-bold');
        if (!this.wrapper) return;
        let saved = null;
        try {
          saved = localStorage.getItem('collection-grid-view');
        } catch (e) {}
        if (saved) this.wrapper.dataset.gridView = saved;
        this.update();
        this.querySelectorAll('button[data-view]').forEach((button) =>
          button.addEventListener('click', () => {
            this.wrapper.dataset.gridView = button.dataset.view;
            try {
              localStorage.setItem('collection-grid-view', button.dataset.view);
            } catch (e) {}
            this.update();
          })
        );
      }

      update() {
        this.querySelectorAll('button[data-view]').forEach((button) =>
          button.setAttribute('aria-pressed', String(button.dataset.view === this.wrapper.dataset.gridView))
        );
      }
    }
  );
}

// "View more" toggle for clamped collection descriptions
document.addEventListener('click', (event) => {
  const toggle = event.target.closest('[data-clamp-toggle]');
  if (!toggle) return;
  const target = document.getElementById(toggle.getAttribute('aria-controls'));
  if (!target) return;
  const expanded = target.classList.toggle('is-expanded');
  toggle.setAttribute('aria-expanded', String(expanded));
  toggle.textContent = expanded ? toggle.dataset.lessLabel : toggle.dataset.moreLabel;
});
