/* Refresh only the requested collection section; each row keeps its own page. */
if (!customElements.get('cellife-paged-collection')) {
  customElements.define('cellife-paged-collection', class extends HTMLElement {
    connectedCallback() {
      if (this.onPageClick) return;
      this.onPageClick = async (event) => {
        const link = event.target.closest('.pagination a[href]');
        if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        if (this.getAttribute('aria-busy') === 'true') return;
        this.setAttribute('aria-busy', 'true');
        try {
          const url = new URL(link.href);
          url.searchParams.set('section_id', this.dataset.sectionId);
          const response = await fetch(url);
          if (!response.ok) throw new Error('Section unavailable');
          const doc = new DOMParser().parseFromString(await response.text(), 'text/html');
          const replacement = [...doc.querySelectorAll('cellife-paged-collection')]
            .find(section => section.dataset.sectionId === this.dataset.sectionId);
          if (!replacement) throw new Error('Missing section');
          this.replaceWith(replacement);
          replacement.querySelector('h2').focus({ preventScroll: true });
          replacement.querySelector('[data-page-status]').textContent =
            replacement.querySelector('.pagination__item--current')?.getAttribute('aria-label') || '';
        } catch {
          // Native pagination remains usable when the section endpoint fails.
          window.location.assign(link.href);
        } finally {
          this.removeAttribute('aria-busy');
        }
      };
      this.addEventListener('click', this.onPageClick);
      this.resizeObserver = new ResizeObserver(([entry]) => {
        if (this.cardWidth === entry.contentRect.width) return;
        this.cardWidth = entry.contentRect.width;
        this.alignCardContent();
      });
      this.resizeObserver.observe(this);
      this.alignCardContent();
      document.fonts.ready.then(() => { if (this.isConnected) this.alignCardContent(); });
    }
    alignCardContent() {
      const groups = [
        ['--cellife-card-title-height', '.card > .card__content .card__heading'],
        ['--cellife-card-price-height', '.card > .card__content .price']
      ];
      for (const [property] of groups) this.style.setProperty(property, '0px');
      const heights = groups.map(([, selector]) => Math.ceil(Math.max(0,
        ...[...this.querySelectorAll(selector)].map(element => element.getBoundingClientRect().height)
      )));
      groups.forEach(([property], index) => this.style.setProperty(property, heights[index] + 'px'));
    }
    disconnectedCallback() {
      this.resizeObserver?.disconnect();
      this.removeEventListener('click', this.onPageClick);
      this.onPageClick = null;
    }
  });
}
