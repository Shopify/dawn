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

splide.mount();

const related_carousel = new Splide('#related-products-carousel', {
  heightRatio: 1,
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

related_carousel.mount();
