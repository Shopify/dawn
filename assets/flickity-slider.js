class FlickityComponent extends HTMLElement {
  constructor() {
    super();
    this.slider = this.querySelector('[data-slider]');
    this.init();
  }

  init() {
    const flickityInstance = new Flickity( this.slider, {
      // options
      cellAlign: 'left',
      contain: true,
      freeScroll: true,
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      watchCSS: true
    });
  }
}

customElements.define('flickity-component', FlickityComponent);
