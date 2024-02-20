// Name must contain a dash
if (!customElements.get('product-wrapper')) {
  customElements.define(
    'product-wrapper',
    class ProductWrapper extends HTMLElement {
      constructor() {
        super();
      }

      onVariantChangeUnsubscriber = undefined;

      connectedCallback() {
        this.onVariantChangeUnsubscriber = subscribe(
          PUB_SUB_EVENTS.variantChangeStart,
          this.handleOptionValueChange.bind(this)
        );
      }

      disconnectedCallback() {}

      handleOptionValueChange(event) {
        debugger;
      }
    }
  );
}
