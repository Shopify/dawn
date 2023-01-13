if (!customElements.get('product-info')) {
  customElements.define('product-info', class ProductInfo extends HTMLElement {
    constructor() {
      super();
      this.input = this.querySelector('.quantity__input');
      this.currentVariant = this.querySelector('.product-variant-id');
      this.variantSelects = this.querySelector('variant-radios')
      this.submitButton = this.querySelector('[type="submit"]');
      this.destinationQty = this.querySelector('.quantity-cart');

      if (this.variantSelects) {
        this.variantSelects.addEventListener('change', this.onVariantChange.bind(this));
      }
    }

    cartUpdateUnsubscriber = undefined;

    connectedCallback() {
      this.setQuantityBoundries();    
      this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, this.fetchCartQty.bind(this));
    }

    disconnectedCallback() {
      if (this.cartUpdateUnsubscriber) {
        this.cartUpdateUnsubscriber();
      }
    }

    setQuantityBoundries() {
      const data = {
        cartQuantity: this.input.dataset.cartQuantity ? parseInt(this.input.dataset.cartQuantity) : 0,
        min: this.input.dataset.min ? parseInt(this.input.dataset.min) : 1,
        max: this.input.dataset.max ? parseInt(this.input.dataset.max) : null,
        step: this.input.step ? parseInt(this.input.step) : 1
      }

      let min = data.min;
      const max = data.max === null ? data.max : data.max - data.cartQuantity;
      if (max !== null) min = Math.min(min, max);
      if (data.cartQuantity >= data.min) min = Math.min(min, data.step);

      this.input.min = min;
      this.input.max = max;
      this.input.value = min;
      publish(PUB_SUB_EVENTS.quantityUpdate, undefined);  
    }

    onVariantChange() {
      this.fetchCartQty()
    }

    fetchCartQty() {
      this.querySelector('.quantity__rules-cart .loading-overlay').classList.remove('hidden');
      fetch("/cart?section_id=main-cart-items")
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, 'text/html')
        const sourceQty = html.querySelector((`[data-quantity-variant-id~="${this.currentVariant.value}"]`))
        const quantityRulesCartClassname = '.quantity__rules-cart';
        if (sourceQty) {
          const valueQtyCart = sourceQty.value;         
          this.querySelector(quantityRulesCartClassname).classList.toggle('hidden', valueQtyCart <= 0);
          if (valueQtyCart && this.input) {
            this.input.dataset.cartQuantity = valueQtyCart;
            this.destinationQty.innerHTML = valueQtyCart;
          }
        } else {
          if (this.input) this.input.dataset.cartQuantity = 0;
          this.destinationQty.innerHTML = 0;
          this.querySelector(quantityRulesCartClassname).classList.add('hidden')
        }
        this.fetchQtyRules();
      })
      .catch(e => {
        console.error(e);
      });
    }

    fetchQtyRules() {
      fetch(`${this.dataset.url}?variant=${this.currentVariant.value}&section_id=${this.dataset.section}`).then((response) => {
        return response.text()
      })
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, 'text/html')
        const sourceQty = html.querySelector(('.quantity-input'))
        const sourceQtyRules = html.querySelector(('.quantity__rules'))
        if (sourceQty && sourceQtyRules) {
          this.input.innerHTML = sourceQty.innerHTML
          this.querySelector('.quantity__rules').innerHTML = sourceQtyRules.innerHTML
        }
        this.setQuantityBoundries();
        // TODO: Move this to ensure loading state is removed even if error is thrown
        this.querySelector('.quantity__rules-cart .loading-overlay').classList.add('hidden');
      })
      .catch(e => {
        console.error(e);
      });
    }
  }
)};



