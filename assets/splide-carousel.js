class SplideCarousel extends HTMLElement {
  defaultOptions = {
    cover: true,
    pagination: false,
    perPage: 4,
    perMove: 1,
    focus: 0,
    omitEnd: true,
    drag: 'free',
    snap: true,
    autoWidth: true,
    gap: 2,
    breakpoints: {
      800: {
        perPage: 4,
      },
      400: {
        perPage: 2,
      },
    },
  };

  constructor() {
    super();
    this.carousel_id = this.getAttribute('data-id');

    const options = this.getAttribute('data-options');
    const carousel_options = options ? JSON.parse(options) : {};

    this.carousel_options = Object.assign({}, this.defaultOptions, carousel_options);

    this.createRelatedProducts(this.carousel_id, this.carousel_options);
  }

  disableCarouselArrows(carousel_id) {
    const items = this.querySelectorAll(`#${carousel_id} li.splide__slide`);
    const firstElement = items?.[0];
    const lastElement = items?.[items?.length - 1];

    const prevBtn = this?.querySelector(`#${carousel_id} .splide__arrow--prev`);
    const nextBtn = this?.querySelector(`#${carousel_id} .splide__arrow--next`);

    return function () {
      if (firstElement?.classList.contains('is-active')) {
        prevBtn.setAttribute('disabled', true);
      }

      if (lastElement?.classList.contains('is-active')) {
        nextBtn.setAttribute('disabled', true);
      }
    };
  }

  createRelatedProducts(carousel_id, options) {
    const id = `#${carousel_id}`;

    try {
      const related_carousel = new Splide(id, options);

      related_carousel.on('arrows:updated', this.disableCarouselArrows(carousel_id));
      related_carousel.mount();
    } catch (error) {
      console.error(error);
      console.error(`Error mounting related carousel ${carousel_id}`, error);
    }
  }
}

customElements.define('splide-carousel', SplideCarousel);
