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
        this.initializeProductSwapUtility();

        this.onVariantChangeUnsubscriber = subscribe(
          PUB_SUB_EVENTS.variantChangeStart,
          this.handleOptionValueChange.bind(this)
        );
      }

      disconnectedCallback() {
        this.onVariantChangeUnsubscriber();
      }

      initializeProductSwapUtility() {
        this.swapProductUtility = new HTMLUpdateUtility();
        this.swapProductUtility.addPreProcessCallback((html) => {
          html
            .querySelectorAll('.scroll-trigger')
            .forEach((element) => element.classList.add('scroll-trigger--cancel'));
          return html;
        });
        this.swapProductUtility.addPostProcessCallback((newNode) => {
          window?.Shopify?.PaymentButton?.init();
          window?.ProductModel?.loadShopifyXR();
          publish(PUB_SUB_EVENTS.sectionRefreshed, {
            data: {
              sectionId: this.dataset.section,
              resource: {
                type: SECTION_REFRESH_RESOURCE_TYPE.product,
                id: this.dataset.productId,
                // TODO need to update dataset productID after swap happens
              },
            },
          });
        });
      }

      handleOptionValueChange({ data: { event } }) {
        if (!this.contains(event.data.event.target)) return;

        debugger;
      }
    }
  );
}
