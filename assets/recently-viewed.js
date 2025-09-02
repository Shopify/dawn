class RecentlyViewedProducts extends HTMLElement {
  constructor() {
    super();
    this.limit = parseInt(this.dataset.limit || '4', 10);
    this.current = {
      handle: this.dataset.currentHandle || '',
      id: this.dataset.currentId || '',
      title: this.dataset.currentTitle || '',
      url: this.dataset.currentUrl || '',
      image: this.dataset.currentImage || '',
    };
    this.columnsDesktop = this.dataset.columnsDesktop || '4';
    this.columnsMobile = this.dataset.columnsMobile || '2';
    this.sectionId = this.dataset.sectionId || '';
    this.headingEl = this.querySelector('.related-products__heading');
    this.loadingEl = this.querySelector('.recently-viewed__loading');
    this.sliderComponent = this.querySelector('slider-component');
    this.listEl = this.querySelector('.recently-viewed__grid');
    this.headerEl = this.querySelector('.recs-slider__header');
  }

  connectedCallback() {
    try {
      this.trackCurrentProduct();
      this.renderList();
    } catch (e) {
      console.error('[recently-viewed] error', e);
      this.remove();
    }
  }

  trackCurrentProduct() {
    if (!this.current.handle) return;
    const key = 'recently_viewed_products';
    let items = [];
    try {
      items = JSON.parse(localStorage.getItem(key) || '[]');
      if (!Array.isArray(items)) items = [];
    } catch {
      items = [];
    }
    // Remove any existing entry for this handle, then unshift
    items = items.filter((p) => p && p.handle && p.handle !== this.current.handle);
    items.unshift(this.current);
    const maxStored = Math.max(this.limit * 3, 12);
    items = items.slice(0, maxStored);
    localStorage.setItem(key, JSON.stringify(items));
  }

  async renderList() {
    const key = 'recently_viewed_products';
    let items = [];
    try {
      items = JSON.parse(localStorage.getItem(key) || '[]');
      if (!Array.isArray(items)) items = [];
    } catch {
      items = [];
    }
    const handles = [];
    for (const p of items) {
      if (!p || !p.handle || p.handle === this.current.handle) continue;
      if (!handles.includes(p.handle)) handles.push(p.handle);
      if (handles.length >= this.limit) break;
    }
    if (handles.length === 0) {
      this.closest('.color-scheme, .gradient')?.remove?.();
      this.remove();
      return;
    }

    // UL classes are defined in Liquid markup to ensure slider works across breakpoints.

    this.showLoading();

    try {
      const snippets = await Promise.all(
        handles.map(async (h) => {
          try {
            const resp = await fetch(`/products/${encodeURIComponent(h)}?view=recent-card`, {
              headers: { 'Cache-Control': 'no-cache' },
            });
            if (!resp.ok) return '';
            return await resp.text();
          } catch {
            return '';
          }
        }),
      );
      const fragment = document.createDocumentFragment();
      for (const htmlStr of snippets) {
        if (!htmlStr) continue;
        const tmp = document.createElement('div');
        tmp.innerHTML = htmlStr;
        const li = tmp.querySelector('li.grid__item');
        if (li) fragment.appendChild(li);
      }
      if (!fragment.childNodes.length) {
        this.remove();
        return;
      }
      // Assign slider slide ids and classes
      this.listEl.innerHTML = '';
      this.listEl.appendChild(fragment);
      const slides = Array.from(this.listEl.children);
      slides.forEach((el, idx) => {
        el.classList.add('slider__slide');
        el.id = `Slide-${this.sectionId || 'recently'}-${idx + 1}`;
      });
      this.showContent();
      // Initialize slider pages
      this.sliderComponent?.resetPages?.();
    } catch (e) {
      console.error('[recently-viewed] failed to load product cards', e);
      this.remove();
    }
  }

  showLoading() {
    if (this.headingEl) this.headingEl.hidden = true;
    if (this.loadingEl) this.loadingEl.hidden = false;
    if (this.listEl) this.listEl.hidden = true;
    if (this.headerEl) this.headerEl.hidden = true;
  }

  showContent() {
    if (this.headingEl) this.headingEl.hidden = false;
    if (this.loadingEl) this.loadingEl.hidden = true;
    if (this.sliderComponent) this.sliderComponent.hidden = false;
    if (this.headerEl) this.headerEl.hidden = false;
    // Unhide wrappers forcibly to avoid any flash due to CSS/UA styles
    this.hidden = false;
    this.style.display = '';
    if (this.sliderComponent) this.sliderComponent.style.display = '';
    if (this.headerEl) this.headerEl.style.display = '';
  }
}

customElements.define('recently-viewed-products', RecentlyViewedProducts);
