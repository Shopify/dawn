function disableCarouselArrows(id) {
  const items = document?.querySelectorAll(`${id} li.splide__slide`);
  const firstElement = items?.[0];
  const lastElement = items?.[items?.length - 1];

  const prevBtn = document?.querySelector(`${id} .splide__arrow--prev`);
  const nextBtn = document?.querySelector(`${id} .splide__arrow--next`);

  return function () {
    if (firstElement?.classList.contains('is-active')) {
      prevBtn.setAttribute('disabled', true);
    }

    if (lastElement?.classList.contains('is-active')) {
      nextBtn.setAttribute('disabled', true);
    }
  };
}

function createRelatedProducts(carouselId) {
  const idSelector = `#${carouselId}`;

  try {
    const related_carousel = new Splide(idSelector, {
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

    related_carousel.on('arrows:updated', disableCarouselArrows(idSelector));

    related_carousel.mount();
  } catch (error) {
    console.error('Error mounting related carousel' + carouselId, error);
  }
}

function observeElement(element, carouselId) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        const classList = mutation.target.classList;
        if (classList.contains('recommendations-loaded')) {
          createRelatedProducts(carouselId);
          observer.disconnect(); // Optionally disconnect after firing the function
        }
      }
    });
  });

  observer.observe(element, { attributes: true });
}

try {
  const carouselId = 'related-products-carousel';
  const relatedCarousel = document.querySelector('product-recommendations');
  if (relatedCarousel) {
    observeElement(relatedCarousel, carouselId);
  }
} catch (error) {
  console.error('Unable to create related products carousel', error);
}

try {
  const cartCarousel = document.querySelector('cart-recommendations');
  const carouselId = 'cart-recommendations-carousel';

  if (cartCarousel) {
    observeElement(cartCarousel, carouselId);
  }
} catch (error) {
  console.error('Unable to create cart carousel', error);
}
