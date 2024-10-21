class ProductCard extends HTMLElement {
  constructor() {
    super();

    this.elements = {
      swatches: this.querySelectorAll('.product_tile_color_holder input[type="radio"]'),
      swatchLabels: this.querySelectorAll('.product_tile_color_holder label'),
      swatchName: this.querySelector('.product-tile-color-name'),
      image: this.querySelector('.card__media img:first-child'),
      priceRegular: this.querySelector('.price__regular .price-item'),
      priceSaleOriginal: this.querySelector('.price__sale .price-item--regular'),
      priceSale: this.querySelector('.price__sale .price-item--sale'),
      titles: this.querySelectorAll('.full-unstyled-link:not(.product_tile_color_holder__more-colors)'),
      links: this.querySelectorAll('.full-unstyled-link'),
    };

    this.elements.swatches.forEach((el) => {
      el.addEventListener('change', this.onSwatchChange.bind(this));
    });

    this.elements.swatchLabels.forEach((el) => {
      el.addEventListener('mouseenter', this.onSwatchChange.bind(this));
    });
  }

  onSwatchChangeMouseEnter(e) {
    const targetSwatch = e.target.getAttribute('for');

    console.log(targetSwatch);

    if (targetSwatch) {
      const targetSwatchElement = document.querySelector(`#${targetSwatch}`);
      // this.onSwatchChange({
      //   target: targetSwatchElement,
      // });
    }
  }

  onSwatchChange(e) {
    const {
      dataset: { productName, productImage, productPrice, productCompareAtPrice, productUrl },
      value,
    } = e.target;

    if (productName) {
      this.elements.titles.forEach((el) => {
        el.innerHTML = productName;
      });
    }

    if (productUrl) {
      this.elements.links.forEach((el) => {
        el.href = productUrl;
      });
    }

    if (productImage) {
      this.elements.image.src = productImage;
      this.elements.image.srcset = productImage;
    }

    if (productCompareAtPrice !== productPrice) {
      this.elements.priceSaleOriginal.innerHTML = productCompareAtPrice;
      this.elements.priceSale.innerHTML = productPrice;
    } else {
      if (productPrice) {
        this.elements.priceRegular.innerHTML = productPrice;
      }
    }

    if (this.elements.swatchName) {
      this.elements.swatchName.innerHTML = value;
    }

    this.classList.add('swatch-selected');
  }

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
