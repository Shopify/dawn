if (!customElements.get('product-info')) {
  customElements.define('product-info', class ProductInfo extends HTMLElement {
    constructor() {
      super();
      this.input = this.querySelector('.quantity__input');
      this.currentVariant = this.querySelector('.product-variant-id');
      this.variantSelects = this.querySelector('variant-radios')
      this.submitButton = this.querySelector('[type="submit"]');
      this.destinationQty = this.querySelector('.quantity-cart')

      this.input.addEventListener('change', this.onQuantityUpdate.bind(this))

      if (this.variantSelects) {
        this.variantSelects.addEventListener('change', this.onVariantChange.bind(this));
      }
    }

    cartUpdateUnsubscriber = undefined;

    connectedCallback() {
      this.onQuantityUpdate();
      this.cartUpdateUnsubscriber = subscribe('cart-update', this.fetchCartQty.bind(this))
    }

    disconnectedCallback() {
      if (this.cartUpdateUnsubscriber) {
        this.cartUpdateUnsubscriber();
      }
    }

    onQuantityUpdate() {
      // If the amount in cart is more than the min, thew new min is the step (only in the pdp and feat prod)
      if (parseInt(this.input.dataset.cartQuantity) >= parseInt(this.input.min)) {
        this.input.min = this.input.step
        this.input.max = (parseInt(this.input.dataset.max) - parseInt(this.input.dataset.cartQuantity))
        // if the are items in cart, the new max is max - the items in cart
        publish('quantity-updated', undefined)
      }
    }

    onVariantChange() {
      // Get cart qty then qty rules
      this.fetchCartQty()
    }

    fetchCartQty() {
      this.querySelector('.product-form__input .loading-overlay').classList.remove('hidden');
      fetch("/cart?section_id=main-cart-items")
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, 'text/html')
        const sourceQty = html.querySelector((`[data-variantid~="${this.currentVariant.value}"]`))
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
        this.querySelector('.product-form__input .loading-overlay').classList.add('hidden');
      })
      .catch(e => {
        console.error(e);
      });
    }
  }
)};



