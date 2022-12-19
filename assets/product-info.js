if (!customElements.get('product-info')) {
  customElements.define('product-info', class ProductInfo extends HTMLElement {
    constructor() {
      super();
      this.input = this.querySelector('.quantity__input');
      this.currentVariant = this.querySelector('.product-variant-id');
      this.variantSelects = this.querySelector('variant-radios')
      this.submitButton = this.querySelector('[type="submit"]');
      this.destinationQty = this.querySelector('.quantity-cart')
      this.onQuantityUpdate();
      this.input.addEventListener('change', this.onQuantityUpdate.bind(this))


      if (this.variantSelects) {
        this.variantSelects.addEventListener('change', this.onVariantChange.bind(this));
      }
    }

    connectedCallback() {
      subscribe('cart-update', this.fetchCartQty.bind(this))
    }

    disconnectedCallback() {
      const sub = subscribe('cart-update', this.fetchCartQty.bind(this));
      sub.unsubscribe()
    }

    onQuantityUpdate() {
      // If the amount in cart is more than the min, thew new min is the step (only in the pdp and feat prod)
      if (parseInt(this.input.dataset.cartquantity) >= parseInt(this.input.min)) {
        this.input.min = this.input.step
        this.input.max = (parseInt(this.input.dataset.max) - parseInt(this.input.dataset.cartquantity))
        // if the are items in cart, the new max is max - the items in cart
      }
    }

    onVariantChange() {
      // Get qty rules
      fetchQtyRules(this.currentVariant.value, this.input)
      // Get cart qty
      this.fetchCartQty()
    }

    fetchCartQty() {
      fetch("/cart?section_id=main-cart-items")
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, 'text/html')
        const sourceQty = html.querySelector((`[data-variantid~="${this.currentVariant.value}"]`))
        if (sourceQty) {
          const valueQtyCart = sourceQty.value
          if (valueQtyCart > 0) { 
            this.querySelector('.quantity__rules-cart').classList.remove('hidden')
          } else {
            console.log('hello')
            this.querySelector('.quantity__rules-cart').classList.add('hidden')
          }
          if (valueQtyCart && this.input) this.input.dataset.cartquantity = valueQtyCart;
          if (valueQtyCart && this.input) this.destinationQty.innerHTML = valueQtyCart;
        } else {
          if (this.input) this.input.dataset.cartquantity = 0;
          this.destinationQty.innerHTML = 0;
        }
      })
      .catch(e => {
        console.error(e);
      });
    }
  }
)};

function fetchQtyRules(variantId, qty) {
  fetch(`/admin/api/2022-04/variants/${variantId}.json`).then((response) => {
    return response.text()
  })
  .then((state) => {
    const parsedState = JSON.parse(state);
    if (parsedState.variant !== null) {
      // Updating qty rules
      // qty.closest('.product-form__quantity').querySelector('.quantity-min').innerHTML = parsedState.variant.quantityLimit.min
      // qty.closest('.product-form__quantity').querySelector('.quantity-max').innerHTML = parsedState.variant.quantityLimit.max
      // qty.closest('.product-form__quantity').querySelector('.quantity-steps').innerHTML = parsedState.variant.quantityLimit.increment
      // qty.setAttribute("min", parsedState.variant.quantityLimit.min);
      // qty.setAttribute("max", parsedState.variant.quantityLimit.max);
      // qty.setAttribute("step", parsedState.variant.quantityLimit.increment);
    }
  })
  .catch(e => {
    console.error(e);
  });
}

