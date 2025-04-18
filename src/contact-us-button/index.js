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

customElements.define('link-button', LinkButton, { extends: 'button' });
