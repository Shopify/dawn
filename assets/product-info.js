class ProductInfo extends HTMLElement {
  constructor() {
    super();

    this.createObserver();

    this.input = this.querySelector('.quantity__input');
    this.currentVariant = this.querySelector('.product-variant-id');
    this.variantSelects = this.querySelector('variant-radios')
    this.submitButton = this.querySelector('[type="submit"]');
    this.destinationQty = this.querySelector('.quantity-cart')

    this.variantSelects.addEventListener('change', this.onVariantChange.bind(this));
    this.submitButton.addEventListener('click', this.onSubmit.bind(this))
  }

  createObserver() {
    const targetNode = document.getElementById('global-state');
    const config = { childList: true };

    const globalData = JSON.parse(document.querySelector('#global-state').text)

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
          if (this.currentVariant.value === globalData.variantId) {
            console.log('There has been a change', this.destinationQty);
            this.destinationQty.innerHTML = globalData.newVariantQty
          }
        }
      }
    });

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
    // observer.disconnect();  

  }


  onSubmit() {
    fetchCartQty(this.dataset.url, this.currentVariant.value,  this.dataset.section, this.input, this.destinationQty)
      // Update global data 
    document.querySelector('#global-state').innerHTML = `{ newVariantQty: ${this.input.value}, variantId: ${this.currentVariant.value} }`
  }

  onVariantChange() {
    // Get qty rules
    fetchQtyRules(this.currentVariant.value, this.input)
    // Get cart qty
    fetchCartQty(this.dataset.url, this.currentVariant.value,  this.dataset.section, this.input, this.destinationQty)
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

function fetchCartQty(url, id, section, input, destinationQty) {
  fetch(`${url}?variant=${id}&section_id=${section}`)
  .then((response) => response.text())
  .then((responseText) => {
    const html = new DOMParser().parseFromString(responseText, 'text/html')
    const sourceQty = html.querySelector((`[data-variantid~="${id}"]`))
    if (sourceQty) {
      const valueQtyCart = sourceQty.innerHTML
      if (valueQtyCart && input) input.dataset.cartquantity = valueQtyCart;
      if (valueQtyCart && input) destinationQty.innerHTML = valueQtyCart;
    }
  })
}