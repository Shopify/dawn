class SplideCarousel extends HTMLElement {
  constructor() {
    super();
    this.carousel_id = this.getAttribute('data-id');
    console.log(this.carousel_id);

    this.createRelatedProducts(this.carousel_id);
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

  createRelatedProducts(carousel_id) {
    const id = `#${carousel_id}`;

    const carouselOptions = Object.assign(
      {},
      {
        cover: true,
        pagination: false,
        perPage: 4,
        perMove: 1,
        focus: 0,
        omitEnd: true,
        drag: 'free',
        snap: true,
        autoWidth: true,
        breakpoints: {
          800: {
            perPage: 4,
          },
          400: {
            perPage: 2,
          },
        },
      }
    );

    try {
      const related_carousel = new Splide(id, carouselOptions);

      related_carousel.on('arrows:updated', this.disableCarouselArrows(carousel_id));
      related_carousel.mount();
    } catch (error) {
      console.error(error);
      console.error(`Error mounting related carousel ${carousel_id}`, error);
    }
  }
}

customElements.define('splide-carousel', SplideCarousel);
