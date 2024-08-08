/**
 * Details Disclosure custom element class.
 * @extends HTMLElement
 */
class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    /** @type {HTMLElement} */
    this.mainDetailsToggle = this.querySelector('details');
    /** @type {HTMLElement} */
    this.content = this.mainDetailsToggle.querySelector('summary').nextElementSibling;

    this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));
    this.mainDetailsToggle.addEventListener('toggle', this.onToggle.bind(this));
  }

  /**
   * Handle focus out event. Closes the details disclosure if focus is outside of it.
   */
  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    });
  }

  /**
   * Handle toggle event. Play or cancel animations when the details disclosure is toggled.
   */
  onToggle() {
    if (!this.animations) this.animations = this.content.getAnimations();

    if (this.mainDetailsToggle.hasAttribute('open')) {
      this.animations.forEach((animation) => animation.play());
    } else {
      this.animations.forEach((animation) => animation.cancel());
    }
  }

  /**
   * Close the details disclosure.
   */
  close() {
    this.mainDetailsToggle.removeAttribute('open');
    this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
  }
}

customElements.define('details-disclosure', DetailsDisclosure);

/**
 * Header Menu custom element class.
 * @extends DetailsDisclosure
 */
class HeaderMenu extends DetailsDisclosure {
  constructor() {
    super();
    /** @type {HTMLElement|undefined} */
    this.header = document.querySelector('.header-wrapper');
  }


  /**
   * Handle toggle event, Toggles the visibility of the header menu details disclosure.
   */
  onToggle() {
    if (!this.header) return;
    this.header.preventHide = this.mainDetailsToggle.open;

    if (document.documentElement.style.getPropertyValue('--header-bottom-position-desktop') !== '') return;
    document.documentElement.style.setProperty(
      '--header-bottom-position-desktop',
      `${Math.floor(this.header.getBoundingClientRect().bottom)}px`
    );
  }
}

customElements.define('header-menu', HeaderMenu);
