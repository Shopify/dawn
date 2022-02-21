if (!customElements.get('product-form')) {
  customElements.define('product-form', class ProductForm extends HTMLElement {
    constructor() {
      super();

      this.form = this.querySelector('form');
      this.form.querySelector('[name=id]').disabled = false;
      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      this.cartNotification = document.querySelector('cart-notification');
    }

    onSubmitHandler(evt) {
      evt.preventDefault();
      const submitButton = this.querySelector('[type="submit"]');
      if (submitButton.classList.contains('loading') || submitButton.classList.contains('success-message') || submitButton.getAttribute('aria-disabled') === 'true') return;

      this.handleErrorMessage();
      this.cartNotification.setActiveElement(document.activeElement);

      submitButton.setAttribute('aria-disabled', true);
      submitButton.classList.add('loading');
      this.querySelector('.loading-overlay__spinner').classList.remove('hidden');

      const config = fetchConfig('javascript');
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      delete config.headers['Content-Type'];

      const formData = new FormData(this.form);
      formData.append('sections', this.cartNotification.getSectionsToRender().map((section) => section.id));
      formData.append('sections_url', window.location.pathname);
      config.body = formData;

      fetch(`${routes.cart_add_url}`, config)
        .then((response) => response.json())
        .then((response) => {
          if (response.status) {
            this.handleErrorMessage(response.description);

            const soldOutMessage = submitButton.querySelector('.sold-out-message');
            if (!soldOutMessage) return;
            submitButton.setAttribute('aria-disabled', true);
            submitButton.querySelector('span').classList.add('hidden');
            soldOutMessage.classList.remove('hidden');
            this.error = true;
            return;
          }

          this.error = false;
          this.displaySuccessMessage(submitButton);

          if (!document.body.classList.contains('overflow-hidden')) {
            this.cartNotification.renderContents(response);
          } else {
            document.body.addEventListener('modalClosed', () => {
              setTimeout(() => { this.cartNotification.renderContents(response) });
            }, { once: true });
          }
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          submitButton.classList.remove('loading');
          if (!this.error) submitButton.removeAttribute('aria-disabled');
          this.querySelector('.loading-overlay__spinner').classList.add('hidden');
        });
    }

    displaySuccessMessage(submitButton) {
      submitButton.classList.toggle('button--secondary');
      submitButton.classList.toggle('button--primary');
      submitButton.classList.add('success-message');
          
      const originalMessage = submitButton.querySelector('span');
      originalMessage.classList.add('hidden');

      const addedToCart = submitButton.querySelector('.added-to-cart');
      addedToCart.classList.remove('hidden');

      setTimeout(() => {
        originalMessage.classList.remove('hidden');
        if (!addedToCart.classList.contains('hidden')) {
          addedToCart.classList.add('hidden');
          submitButton.classList.toggle('button--primary');
          submitButton.classList.toggle('button--secondary');
        }
        submitButton.classList.remove('success-message');
      }, 3000);
    }

    handleErrorMessage(errorMessage = false) {
      this.errorMessageWrapper = this.errorMessageWrapper || this.querySelector('.product-form__error-message-wrapper');
      if (!this.errorMessageWrapper) return;
      this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector('.product-form__error-message');

      this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);

      if (errorMessage) {
        this.errorMessage.textContent = errorMessage;
      }      
    }
  });
}
