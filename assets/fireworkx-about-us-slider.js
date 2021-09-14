var swiper = new Swiper(".mySwiper", {
    spaceBetween: 5,
    slidesPerView: 7,

    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      375: {
        slidesPerView: 4,
        spaceBetween: 5
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 5
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