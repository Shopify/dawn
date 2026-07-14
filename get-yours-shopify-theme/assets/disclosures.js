class DisclosuresContent extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', (event) => {
      if (event.target.closest('.disclosures-item__content')) return;
      if (
        event.target.closest('.disclosures-item__header') &&
        event.target !== event.target.closest('.disclosures-item__header')
      )
        return;

      const item = event.target.closest('.disclosures-item');
      if (item) {
        const content = item.querySelector('.disclosures-item__content');
        if (content && event.clientX <= content.getBoundingClientRect().right) return;
      }

      const details = this.closest('details');
      if (details) details.removeAttribute('open');
    });
  }
}

if (!customElements.get('disclosures-content')) {
  customElements.define('disclosures-content', DisclosuresContent);
}
