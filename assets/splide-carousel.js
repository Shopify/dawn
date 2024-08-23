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

    const carouselType = this.getAttribute('data-type') ?? 'default';

    if (carouselType == 'thumbnail') {
      this.createCarouselWithThumbnail(this.carousel_id, this.carousel_options);
    } else {
      this.createCarousel(this.carousel_id, this.carousel_options);
    }
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

  createCarousel(carousel_id, options) {
    const id = `#${carousel_id}`;

    try {
      const newCarousel = new Splide(id, options);

      newCarousel.on('arrows:updated', this.disableCarouselArrows(carousel_id));
      newCarousel.mount();
    } catch (error) {
      console.error(error);
      console.error(`Error mounting related carousel ${carousel_id}`, error);
    }
  }

  createCarouselWithThumbnail(carousel_id, options) {
    const id = `#${carousel_id}`;

    try {
      const splide = new Splide(id, options);

      function initThumbnail(thumbnail, index) {
        thumbnail?.addEventListener('click', function () {
          splide.go(index);
        });
      }

      const thumbnails = this?.getElementsByClassName('thumbnail');
      let current;

      for (let i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i);
      }

      splide.on('mounted move', function () {
        const thumbnail = thumbnails[splide.index];

        if (thumbnail) {
          if (current) {
            current.classList.remove('is-active');
          }

          thumbnail.classList.add('is-active');
          thumbnail.setAttribute('aria-current', 'true');
          current = thumbnail;
        }
      });

      splide.on('arrows:updated', this.disableCarouselArrows('main-carousel'));

      splide.mount();
      console.log('carousel moundted');
    } catch (error) {
      console.error(error);
      console.error(`Error mounting related carousel ${carousel_id}`, error);
    }
  }
}

customElements.define('splide-carousel', SplideCarousel);
