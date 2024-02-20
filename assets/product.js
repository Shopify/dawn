if (!customElements.get('product')) {
  customElements.define(
    'product',
    class Product extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {}

      disconnectedCallback() {}
    }
  );
}
