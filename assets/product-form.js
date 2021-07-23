class ProductForm extends HTMLElement {
  constructor() {
    super();

    this.form = this.querySelector('form');
    this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
    this.cartNotification = document.querySelector('cart-notification');
  }

  onSubmitHandler(evt) {
    evt.preventDefault();
    this.cartNotification.setActiveElement(document.activeElement);

    const submitButton = this.querySelector('[type="submit"]');

    submitButton.setAttribute('disabled', true);
    submitButton.classList.add('loading');
    let parsedForm = JSON.parse(serializeForm(this.form));
    let properties = {};
    for (const key in parsedForm) {
      const propertiesKeyMatch = key.substring(0, 11);
      if (propertiesKeyMatch === 'properties[') {
        const startIndex = key.indexOf('[') + 1;
        const endIndex = key.indexOf(']');
        const propertyKey = key.substring(startIndex, endIndex);
        const propertyValue = parsedForm[key];
        properties[propertyKey] = propertyValue;
      }
    }
    parsedForm.properties = properties;

    const body = JSON.stringify({
      ...parsedForm,
      sections: this.cartNotification
        .getSectionsToRender()
        .map((section) => section.id),
      sections_url: window.location.pathname,
    });

    fetch(`${routes.cart_add_url}`, { ...fetchConfig('javascript'), body })
      .then((response) => response.json())
      .then((parsedState) => {
        this.cartNotification.renderContents(parsedState);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        submitButton.classList.remove('loading');
        submitButton.removeAttribute('disabled');
      });
  }
}

customElements.define('product-form', ProductForm);
