class InfoButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', (event) => {
      event.preventDefault();
      const input = this.closest('.variant-list__container');
      input.querySelector('qty-vol-popover').classList.toggle('hidden')
    });
  }
}

customElements.define('info-button', InfoButton);