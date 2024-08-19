class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector('details');
    this.content = this.mainDetailsToggle.querySelector('summary').nextElementSibling;
    
    this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));
    this.mainDetailsToggle.addEventListener('toggle', this.onToggle.bind(this));
  }
  
  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    })
  }

  onToggle() {
    if (!this.animations) this.animations = this.content.getAnimations();

    if (this.mainDetailsToggle.hasAttribute('open')) {
      this.animations.forEach(animation => animation.play());
    } else {
      this.animations.forEach(animation => animation.cancel());
    }
  }

  close() {
    this.mainDetailsToggle.removeAttribute('open');
    this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
  }
}

customElements.define('details-disclosure', DetailsDisclosure);

class HeaderMenu extends DetailsDisclosure {
  constructor() {
    super();
    this.header = document.querySelector('.header-wrapper');
    this.allMenus = this.header.querySelectorAll('details');
    this.mainDetailsToggle.addEventListener('mouseover', this.onMouseOver.bind(this));
    this.mainDetailsToggle.querySelector('summary').nextElementSibling.addEventListener('mouseleave', this.onMouseLeave.bind(this));
  }

  onMouseOver() {
    this.allMenus.forEach(menu => {
      menu.removeAttribute('open');
      menu.querySelector('summary').setAttribute('aria-expanded', false);
    });
    if (!this.mainDetailsToggle.open) {
      this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', true);
      this.mainDetailsToggle.setAttribute('open', true);
    }
  }

  onMouseLeave() {
    this.allMenus.forEach(menu => {
      menu.removeAttribute('open');
      menu.querySelector('summary').setAttribute('aria-expanded', false);
    });
  }
  
  onToggle() {
    if (!this.header) return;
    this.header.preventHide = this.mainDetailsToggle.open;
    if (document.documentElement.style.getPropertyValue('--header-bottom-position-desktop') !== '') return;
    document.documentElement.style.setProperty('--header-bottom-position-desktop', `${Math.floor(this.header.getBoundingClientRect().bottom)}px`);
  }
}

customElements.define('header-menu', HeaderMenu);
