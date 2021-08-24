if (!customElements.get('product-form')) {
  customElements.define('product-form', class ProductForm extends HTMLElement {
    constructor() {
      super();

      this.form = this.querySelector('form');
      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      this.cartNotification = document.querySelector('cart-notification');
    }

    onSubmitHandler(evt) {
      evt.preventDefault();
      let sections = [];
      let onSuccess;

      if (window.location.pathname !== '/cart') {
        this.cartNotification.setActiveElement(document.activeElement);
        sections = this.cartNotification.getSectionsToRender().map((section) => section.id),
        onSuccess = (parsedState) => {
          this.cartNotification.renderContents(parsedState);
        }
      } else {
        onSuccess = (parsedState) => {
          window.location.reload();
        }
      }

      const submitButton = this.querySelector('[type="submit"]');

      submitButton.setAttribute('disabled', true);
      submitButton.classList.add('loading');

      const body = JSON.stringify({
        ...JSON.parse(serializeForm(this.form)),
        sections,
        sections_url: window.location.pathname
      });

      fetch(`${routes.cart_add_url}`, { ...fetchConfig('javascript'), body })
        .then((response) => response.json())
        .then(onSuccess)
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          submitButton.classList.remove('loading');
          submitButton.removeAttribute('disabled');
        });
    }
  });
}
