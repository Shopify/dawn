const splide = new Splide('#main-carousel', {
  heightRatio: 1,
  cover: true,
  pagination: false,
  width: '640px',
  loop: true,
  breakpoints: {
    800: {
      pagination: true,
      width: '100vw',
    },
  },
});

function initThumbnail(thumbnail, index) {
  thumbnail?.addEventListener('click', function () {
    splide.go(index);
  });
}

const thumbnails = document?.getElementsByClassName('thumbnail');
const thumbnailContainer = document?.getElementsById('thumbnails');
let current;

for (let i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

splide.on('mounted move', function () {
  console.log('Mounted');
  const thumbnail = thumbnails[splide.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove('is-active');
    }

    thumbnail.classList.add('is-active');
    thumbnail.setAttribute('aria-current', 'true');
    current = thumbnail;
    thumbnailContainer.scrollLeft = thumbnail.offsetLeft;
  }
});

splide.mount();

// const related_carousel = new Splide('#related-products-carousel', {
//   heightRatio: 1,
//   cover: true,
//   pagination: false,
//   width: '320px',
//   height: '444px',
//   loop: true,
//   breakpoints: {
//     800: {
//       width: '197px',
//       height: '294px',
//       // perPage:2
//     },
//   },
// });

// related_carousel.mount();

// related_carousel.on('mount', () => {
//   console.log('Mounted carousel');
// });
