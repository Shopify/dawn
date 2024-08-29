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

function createRelatedProducts(carouselId, options) {
  const idSelector = `#${carouselId}`;

  try {
    const carouselElement = document.querySelector(idSelector);
    if (!carouselElement) return;

    const carouselOptions = Object.assign(
      {},
      {
        cover: true,
        pagination: false,
        perPage: 4,
        perMove: 1,
        focus: 0,
        omitEnd: true,
        drag: 'free',
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
      },
      options
    );

    console.log(carouselOptions);
    const related_carousel = new Splide(idSelector, carouselOptions);

    related_carousel.on('arrows:updated', disableCarouselArrows(idSelector));

    related_carousel.mount();
  } catch (error) {
    console.error(`Error mounting carousel with ID - ${carouselId} ${error}`);
  }
}

function observeElement(element, carouselId, options) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        const classList = mutation.target.classList;
        if (classList.contains('recommendations-loaded')) {
          createRelatedProducts(carouselId, options);
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
    observeElement(relatedCarousel, carouselId, {
      breakpoints: { 1280: { padding: { left: 16 } } },
    });
  }
} catch (error) {
  console.error(`Unable to create carousel with ID - ${carouselId} `, error);
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

try {
  const searchCarousel = document.querySelector('#predictive-search-block');
  const carouselId = 'predictive-search-carousel';

  if (searchCarousel) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('search-items-loaded')) {
              createRelatedProducts(carouselId, { gap: 24 });
              // observer.disconnect();
            }
          });
        } else if (mutation.type === 'attributes') {
          if (mutation.attributeName === 'class' && mutation.target.classList.contains('search-items-loaded')) {
            createRelatedProducts(carouselId);
            // observer.disconnect();
          }
        }
      });
    });

    observer.observe(searchCarousel, {
      childList: true, // Observe direct children
      attributes: true, // Observe attribute changes
      subtree: true,
    });
  }
} catch (error) {
  console.error('Unable to create predictive search carousel', error);
}
