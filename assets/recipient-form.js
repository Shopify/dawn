if (!customElements.get('recipient-form')) {
  customElements.define('recipient-form', class RecipientForm extends HTMLElement {
    constructor() {
      super();
      this.checkboxInput = this.querySelector(`#Recipient-Checkbox-${ this.dataset.sectionId }`);
      this.emailInput = this.querySelector(`#Recipient-Email-${ this.dataset.sectionId }`);
      this.nameInput = this.querySelector(`#Recipient-Name-${ this.dataset.sectionId }`);
      this.messageInput = this.querySelector(`#Recipient-Message-${ this.dataset.sectionId }`);
      this.currentProductVariantId = this.dataset.productVariantId;
      this.addEventListener('change', this.onChange.bind(this));
    }

    cartUpdateUnsubscriber = undefined;
    variantChangeUnsubscriber = undefined;

    connectedCallback() {
      this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
        if (event.source === 'product-form' && event.productVariantId.toString() === this.currentProductVariantId) {
          this.resetRecipientForm();
        }
      });

      this.variantChangeUnsubscriber = subscribe(PUB_SUB_EVENTS.variantChange, (event) => {
        if (event.data.sectionId === this.dataset.sectionId) {
          this.currentProductVariantId = event.data.variant.id.toString();
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
    }

    onChange() {
      if (!this.checkboxInput.checked) {
        this.clearInputFields();
      }
    }

    clearInputFields() {
      this.emailInput.value = '';
      this.nameInput.value = '';
      this.messageInput.value = '';
    }

    resetRecipientForm() {
      if (this.checkboxInput.checked) {
        this.checkboxInput.checked = false;
        this.clearInputFields();
      }
    }
  });
}
