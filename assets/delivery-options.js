class DeliveryOptions extends HTMLElement {
    constructor() {
      super();
      this.fetchAvailability(this.dataset.productIds);
    }
  
    fetchAvailability(productIds) {
      productIds.forEach((productId) => {
        const cardInformation = document.body.querySelector("card-information", `[data-id=${productId}]`)
        const deliveryOptionElement = cardInformation.querySelector("product_delivery_options")

        this.renderPreview(deliveryOptionElement, productId);
      })
    }
  
  renderPreview(deliveryOptionElement, productId) {
    const p = document.createElement('p');
    p.innerHTML = `Delivery Options for: ${productId}`
    deliveryOptionElement.appendChild(p)
  }
}
  
  customElements.define("delivery-options", DeliveryOptions);