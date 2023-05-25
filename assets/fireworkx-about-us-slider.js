var swiper = new Swiper(".fwx-about-us-thumbs-swiper", {
  spaceBetween: 10,
  slidesPerView: 2,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    375: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".fwx-about-us-images-swiper", {
  spaceBetween: 5,
  pagination: {
    el: ".fwx-about-swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
