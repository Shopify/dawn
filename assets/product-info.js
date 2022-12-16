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

    connectedCallback() {
      subscribe('cart-update', this.fetchCartQty.bind(this))
    }

    disconnectedCallback() {
      const sub = subscribe('cart-update', this.fetchCartQty.bind(this));
      sub.unsubscribe()
    }

    onQuantityUpdate() {
      // If the amount in cart is more than the min, thew new min is the step (only in the pdp and feat prod)
      if (parseInt(this.input.dataset.cartquantity) >= parseInt(this.input.min) && (Object.keys(this.input.dataset).length === 0)) {
        this.input.setAttribute("min", step)
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

// customElements.define('product-info', ProductInfo);

function fetchQtyRules(variantId, qty) {
  fetch(`/admin/api/2022-04/variants/${variantId}.json`).then((response) => {
    return response.text()
  })
  .then((state) => {
    const parsedState = JSON.parse(state);
    if (parsedState.variant !== null) {
      // Updating qty rules
      qty.closest('.product-form__quantity').querySelector('.quantity-min').innerHTML = "10"
      qty.closest('.product-form__quantity').querySelector('.quantity-max').innerHTML = "100"
      qty.closest('.product-form__quantity').querySelector('.quantity-steps').innerHTML = "5"
      qty.setAttribute("min", 10);
      qty.setAttribute("max", 40);
      qty.setAttribute("step", 5);
    }
  })
  .catch(e => {
    console.error(e);
  });
}

