class UpsellCarousel extends HTMLElement {
  connectedCallback() {
    const root = this.querySelector('.swiper');
    if (!root) return;

    this.swiper = new Swiper(root, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: this.querySelector('.swiper-pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: this.querySelector('.swiper-button-next'),
        prevEl: this.querySelector('.swiper-button-prev'),
      },
      breakpoints: {
        750: { slidesPerView: 2 },
        990: { slidesPerView: 3 },
      },
    });
  }
}
customElements.define('upsell-carousel', UpsellCarousel);
