if (!customElements.get('product-info')) {
  customElements.define('product-info', class ProductInfo extends HTMLElement {
    constructor() {
      super();
      this.input = this.querySelector('.quantity__input');
      this.currentVariant = this.querySelector('.product-variant-id');
      this.variantSelects = this.querySelector('variant-radios')
      this.submitButton = this.querySelector('[type="submit"]');
      this.updateButton(this.input.value, this.input.dataset.cartQuantity);
    }

    cartUpdateUnsubscriber = undefined;
    variantChangeUnsubscriber = undefined;
    quantityChangeUnsubscriber = undefined;

    connectedCallback() {
      if (!this.input) return;
      this.quantityForm = this.querySelector('.product-form__quantity');
      if (!this.quantityForm) return;
      this.setQuantityBoundries();  
      if (!this.dataset.originalSection) {
        this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, this.fetchQuantityRules.bind(this));
      }
      this.variantChangeUnsubscriber = subscribe(PUB_SUB_EVENTS.variantChange, (event) => {
        const sectionId = this.dataset.originalSection ? this.dataset.originalSection : this.dataset.section;
        if (event.data.sectionId !== sectionId) return;
        this.updateQuantityRules(event.data.sectionId, event.data.html);
        this.setQuantityBoundries();
      });
      this.quantityChangeUnsubscriber = subscribe(PUB_SUB_EVENTS.quantityChange, (event) => {
        if (event.data.id !== 'CartDrawer-Form') {
          this.updateButton(event.data.value, event.data.cartQty);
        }
      });
    }

    disconnectedCallback() {
      if (this.cartUpdateUnsubscriber) {
        this.cartUpdateUnsubscriber();
      }
      if (this.variantChangeUnsubscriber) {
        this.variantChangeUnsubscriber();
      }
      if (this.quantityChangeUnsubscriber) {
        this.quantityChangeUnsubscriber();
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
      if (data.cartQuantity > 0) {
        this.input.value = data.cartQuantity;
      }
      this.updateButton(parseInt(this.input.value), data.cartQuantity)
      publish(PUB_SUB_EVENTS.quantityUpdate, undefined);  
    }

    fetchQuantityRules() {
      if (!this.currentVariant || !this.currentVariant.value) return;
      fetch(`${this.dataset.url}?variant=${this.currentVariant.value}&section_id=${this.dataset.section}`).then((response) => {
        return response.text()
      })
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, 'text/html');
        this.updateQuantityRules(this.dataset.section, html);
        this.setQuantityBoundries();
      })
      .catch(e => {
        console.error(e);
      })
    }

    updateQuantityRules(sectionId, html) {
      const quantityFormUpdated = html.getElementById(`Quantity-Form-${sectionId}`);
      const selectors = ['.quantity__input', '.quantity__rules'];
      for (let selector of selectors) { 
        const current = this.quantityForm.querySelector(selector);
        const updated = quantityFormUpdated.querySelector(selector);
        if (!current || !updated) continue;
        if (selector === '.quantity__input') {
          const attributes = ['data-cart-quantity', 'data-min', 'data-max', 'step'];
          for (let attribute of attributes) {
            const valueUpdated = updated.getAttribute(attribute);
            if (valueUpdated !== null) current.setAttribute(attribute, valueUpdated);
          }
        } else {
          current.innerHTML = updated.innerHTML;
        }
      }
    }

    updateButton(value, cartQty) {
      if (cartQty === value) {
        this.submitButton.querySelector('.added-to-cart').classList.remove('hidden')
        this.submitButton.querySelector('.cart-label-default').classList.add('hidden')
      } else if (cartQty > 0) {
        this.submitButton.querySelector('.added-to-cart').classList.add('hidden')
        this.submitButton.querySelector('.cart-label-default').classList.remove('hidden')
        this.submitButton.querySelector('.cart-label-default').innerText = window.variantStrings.updateCart;
      } else {
        this.submitButton.querySelector('.added-to-cart').classList.add('hidden')
        this.submitButton.querySelector('.cart-label-default').classList.remove('hidden')
        this.submitButton.querySelector('.cart-label-default').innerText = window.variantStrings.addToCart;
      }
    }
  }
)};



