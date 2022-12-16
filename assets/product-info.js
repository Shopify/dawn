import { subscribe, publish } from "./pubsub.js";

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
    subscribe('quantity-update', this.onPropagate.bind(this))
  }

  disconnectedCallback() {
    const unsubscribe = subscribe('quantity-update', this.onPropagate.bind(this));
    unsubscribe()  }

  onPropagate(data) {
    // Update elements in the page with the new qty
    if (data.variant === this.currentVariant.value) {
      this.destinationQty.innerHTML = data.quantity
      this.input.dataset.cartquantity = data.quantity
    }
  }

  onSubmit(event) {
    // wait until it's added to cart
    if (event.type === 'cart-success') {
      this.fetchCartQty(this.currentVariant.value, this.input, this.destinationQty)
    }
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
        if (valueQtyCart && input) input.dataset.cartquantity = valueQtyCart;
        if (valueQtyCart && input) destinationQty.innerHTML = valueQtyCart;
        publish('quantity-update', { "quantity": valueQtyCart, "variant": this.currentVariant.value })
      } else {
        if (input) input.dataset.cartquantity = 0;
        destinationQty.innerHTML = 0;
      }
    })
    .catch(e => {
      console.error(e);
    });
  }
}

customElements.define('product-info', ProductInfo);

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

