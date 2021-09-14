var swiper = new Swiper(".mySwiper", {
    spaceBetween: 4,
    slidesPerView: 2,

    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 2
      },
      375: {
        slidesPerView: 4,
        spaceBetween: 2
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 2
      }
    },
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
});