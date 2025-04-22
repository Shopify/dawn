import '../scss/contact-us-button.scss';

class LinkButton extends HTMLButtonElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.url = this.getAttribute('data-url') || '#';

    this.addEventListener('click', () => {
      window.location.href = this.url;
    });
  }

  updateUrl(newUrl) {
    this.url = newUrl;
  }
}
console.log(9876);

customElements.define('link-button', LinkButton, { extends: 'button' });
