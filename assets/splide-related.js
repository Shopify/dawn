function disableCarouselArrows(carousel_id) {
  const items = document?.querySelectorAll(`#${carousel_id} li.splide__slide`);
  const firstElement = items?.[0];
  const lastElement = items?.[items?.length - 1];

  const prevBtn = document?.querySelector(`#${carousel_id} .splide__arrow--prev`);
  const nextBtn = document?.querySelector(`#${carousel_id} .splide__arrow--next`);

  return function () {
    if (firstElement?.classList.contains('is-active')) {
      prevBtn.setAttribute('disabled', true);
    }

    if (lastElement?.classList.contains('is-active')) {
      nextBtn.setAttribute('disabled', true);
    }
  };
}

function createRelatedProducts() {
  try {
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
  } catch (error) {
    console.error(error);
    console.error('Error mounting related carousel', error);
  }
}

try {
  createRelatedProducts();

  const targetNode = document.querySelector('.related-products');
  const config = { childList: true, subtree: true };

  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // Check if the added nodes include the carousel
        if (document.querySelector('#related-products-carousel .splide__list')) {
          createRelatedProducts();
          observer.disconnect(); // Stop observing once the carousel is initialized
          break;
        }
      }
    }
  };

  const observer = new MutationObserver(callback);

  if (targetNode) {
    observer.observe(targetNode, config);
  }
} catch (error) {}
