class ProductCard extends HTMLElement {
  constructor() {
    super();

    console.log(this.querySelectorAll);

    // this.swatches = this.querySelectorAll('.product_tile_color_holder input[type"radio"]');

    // if (this.swatches) {
    //   this.swatches.forEach((el) => {
    //     el.addEventListener('change', this.onSwatchChange.bind(this));
    //   });
    // }

    // this.detailsContainer = this.querySelector('details');
    // this.summaryToggle = this.querySelector('summary');
    // this.header = document.querySelector('.section-header');

    // this.detailsContainer.addEventListener('keyup', (event) => event.code.toUpperCase() === 'ESCAPE' && this.close());
    // this.summaryToggle.addEventListener('click', this.onSummaryClick.bind(this));
    // this.querySelector('button[type="button"]').addEventListener('click', this.close.bind(this));

    // this.summaryToggle.setAttribute('role', 'button');
  }

  // onSwatchChange(e) {
  //   console.log(e);
  // }

  // isOpen() {
  //   return this.detailsContainer.hasAttribute('open');
  // }

  // onSummaryClick(event) {
  //   event.preventDefault();
  //   event.target.closest('details').hasAttribute('open') ? this.close() : this.open(event);
  // }

  // onBodyClick(event) {
  //   if (!this.contains(event.target) || event.target.classList.contains('modal-overlay')) this.close(false);
  // }

  // open(event) {
  //   this.onBodyClickEvent = this.onBodyClickEvent || this.onBodyClick.bind(this);
  //   event.target.closest('details').setAttribute('open', true);
  //   document.body.addEventListener('click', this.onBodyClickEvent);
  //   document.body.classList.add('overflow-hidden');
  //   this.header.classList.add('shopify-section-header-hidden');

  //   trapFocus(
  //     this.detailsContainer.querySelector('[tabindex="-1"]'),
  //     this.detailsContainer.querySelector('input:not([type="hidden"])')
  //   );
  // }

  // close(focusToggle = true) {
  //   removeTrapFocus(focusToggle ? this.summaryToggle : null);
  //   this.detailsContainer.removeAttribute('open');
  //   document.body.removeEventListener('click', this.onBodyClickEvent);
  //   document.body.classList.remove('overflow-hidden');
  // }
}

customElements.define('product-card', ProductCard);
