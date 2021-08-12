class DeliveryOptions extends HTMLElement {
    constructor() {
      super();

      const { dataCollectionId, paginationOffset, productsPerPage } = this.dataset
      this.fetchAvailability(dataCollectionId, paginationOffset, productsPerPage);
    }
  
    fetchAvailability(collectionId, paginationOffset, productsPerPage) {
      
      // fetch the delivery options for the collection (per page)
      // Hardcoded return value

      const deliveryOptions = {
        "7001560088776": "$2.39",
        "7001604096200": "$50"
      }

      Object.keys(deliveryOptions).forEach((productId) => {
        const cardInformation = document.body.querySelector("card-information", `[data-id=${productId}]`)
        const deliveryOptionElement = cardInformation.querySelector("product_delivery_options")

        this.renderPreview(deliveryOptionElement, deliveryOptions[productId]);
      })
    }
  
  renderPreview(deliveryOptionElement, deliveryOption) {
    const p = document.createElement('p');
    p.innerHTML = `Deliver from as low as ${deliveryOption}`
    deliveryOptionElement.appendChild(p)
  }
}
  
  customElements.define("delivery-options", DeliveryOptions);