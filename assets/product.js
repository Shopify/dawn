if (!customElements.get('product')) {
  customElements.define(
    'product',
    class Product extends HTMLElement {
      constructor() {
        super();
      }

      onVariantChangeUnsubscriber = undefined;

      connectedCallback() {
        this.onVariantChangeUnsubscriber = subscribe(PUB_SUB_EVENTS.variantChangeStart);
      }

      disconnectedCallback() {}

      handleOptionValueChange(event) {
        debugger;
      }
    }
  );
}
