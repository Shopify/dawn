if (!customElements.get('multicolumn-ugc')) {
  class MultiColumnUGC extends HTMLElement {
    constructor() {
      super();

      console.log('digi-swiperOptions', this.getAttribute('data-swiper-options'));

      const swiperOptions = JSON.parse(this.getAttribute('data-swiper-options')) || {};

      this.initSlider(swiperOptions);
    }

    initSlider(swiperOptions) {
      this.slider = new Swiper(this, {
        slidesPerView: swiperOptions.slidesPerViewMobile || 1.1,
        spaceBetween: swiperOptions.spaceBetweenMobile || 2,
        slidesOffsetBefore: swiperOptions.slidesOffsetBeforeMobile || 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          750: {
            enabled: true,
            spaceBetween: swiperOptions.spaceBetweenDesktop || 2,
            slidesPerView: swiperOptions.slidesPerViewDesktop || 5,
            slidesOffsetBefore: swiperOptions.slidesOffsetBeforeDesktop || 0,
            loop: false,
          },
        },
      });
    }
  }

  customElements.define('multicolumn-ugc', MultiColumnUGC);
}
