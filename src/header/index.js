import '../scss/header.scss';

class CustomHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const burgerButton = this.querySelector('.burger-btn');

    if (burgerButton) {
      burgerButton.addEventListener('click', () => {
        this.toggleMenu();
      });
    }
  }

  toggleMenu() {
    console.log('Бургер-меню нажато!');
    this.classList.toggle('active');
  }
}

customElements.define('custom-header', CustomHeader);
