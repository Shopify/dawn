const splide = new Splide('#main-carousel', {
  heightRatio: 1,
  cover: true,
  pagination: false,
  loop: true,
  breakpoints: {
    800: {
      pagination: true,
    },
  },
});

function initThumbnail(thumbnail, index) {
  thumbnail?.addEventListener('click', function () {
    splide.go(index);
  });
}

const thumbnails = document?.getElementsByClassName('thumbnail');
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

splide.on('arrows:updated', disableCarouselArrows('main-carousel'));

splide.mount();

const related_carousel = new Splide('#related-products-carousel', {
  cover: true,
  pagination: false,
  // loop: true,
  perPage: 4,
  perMove: 1,
  focus: 0,
  omitEnd: true,
  drag: 'free',
  // type: 'loop',
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
});

related_carousel.on('arrows:updated', disableCarouselArrows('related-products-carousel'));

related_carousel.mount();

function disableCarouselArrows(carousel_id) {
  const items = document?.querySelectorAll(`#${carousel_id} li.splide__slide`);
  const firstElement = items?.[0];
  const lastElement = items?.[items?.length - 1];

  const prevBtn = document?.querySelector(`#${carousel_id} .splide__arrow--prev`);
  const nextBtn = document?.querySelector(`#${carousel_id} .splide__arrow--next`);

  return function () {
    if (firstElement?.classList.contains('is-active')) {
      console.log('disable prev');
      prevBtn.setAttribute('disabled', true);
    }

    if (lastElement?.classList.contains('is-active')) {
      console.log('disable next');
      nextBtn.setAttribute('disabled', true);
    }
  };
}
