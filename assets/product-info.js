class ProductInfo extends HTMLElement {
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
    this.submitButton.addEventListener('cart-success', this.onSubmit.bind(this))
  }

  connectedCallback() {
    // listening to propagation
    document.body.addEventListener('quantity-update', this.onPropagate.bind(this))
  }

  disconnectedCallback() {
    document.body.removeEventListener('quantity-update', this.onPropagate.bind(this))
  }

  onPropagate(event) {
    // Update all elements in the page
    if (event.detail.variant === this.currentVariant.value) {
      this.destinationQty.innerHTML = event.detail.quantity
      this.input.dataset.cartquantity = event.detail.quantity
    }
  }

  onSubmit(event) {
    // wait until it's added to cart
    if (event.type === 'cart-success') {
      this.fetchCartQty(this.currentVariant.value, this.input, this.destinationQty)
    }
  }

  onQuantityUpdate(event) {
    // If the amount in cart is more than the min, thew new min is the step (only in the pdp and feat prod)
    if (parseInt(this.input.dataset.cartquantity) >= parseInt(this.input.min) && (Object.keys(this.input.dataset).length === 0)) {
      this.input.setAttribute("min", step)
    }
  }

  onVariantChange() {
    // Get qty rules
    fetchQtyRules(this.currentVariant.value, this.input)
    // Get cart qty
    this.fetchCartQty(this.currentVariant.value, this.input, this.destinationQty)
  }

  fetchCartQty(id, input, destinationQty) {
    fetch("/cart?section_id=main-cart-items")
    .then((response) => response.text())
    .then((responseText) => {
      const html = new DOMParser().parseFromString(responseText, 'text/html')
      const sourceQty = html.querySelector((`[data-variantid~="${id}"]`))
      if (sourceQty) {
        const valueQtyCart = sourceQty.value
        if (valueQtyCart) this.currentCart = valueQtyCart;
        if (valueQtyCart && input) input.dataset.cartquantity = valueQtyCart;
        if (valueQtyCart && input) destinationQty.innerHTML = valueQtyCart;
        const quantityUpdate = new CustomEvent('quantity-update', {
          bubbles: true,
          detail: { quantity: valueQtyCart, variant: this.currentVariant.value }
        });
        document.body.dispatchEvent(quantityUpdate);
      }
    })
    .catch(e => {
      console.error(e);
    });
  }
}

customElements.define('product-info', ProductInfo);

function fetchQtyRules(variantId, qty) {
  // When I change the variant, I fetch the new variant rules
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

