document.addEventListener('DOMContentLoaded', function () {
  let swiperInstances = [];

  function initializeCardSwipers() {
    // Destroy existing swiper instances
    swiperInstances.forEach((swiper) => {
      if (swiper && typeof swiper.destroy === 'function') {
        swiper.destroy(true, true);
      }
    });
    swiperInstances = []; // Initialize new swiper instances for cards with multiple images
    const swiperSelectors = ['.card-swiper', '.tabbed-product-swiper', '.featured-artist-swiper'];

    swiperSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((swiperEl) => {
        let progressBar, cardLink;

        // Handle different class patterns for progress bars and card links
        if (selector === '.tabbed-product-swiper') {
          progressBar = swiperEl.parentElement.querySelector('.tabbed-product-card__progress-bar');
          cardLink = swiperEl.closest('.tabbed-product-card-link');
        } else if (selector === '.featured-artist-swiper') {
          progressBar = swiperEl.parentElement.querySelector('.featured-artist-card__progress-bar');
          cardLink = swiperEl.closest('.featured-artist-card-link');
        } else {
          progressBar = swiperEl.parentElement.querySelector('.card__progress-bar');
          cardLink = swiperEl.closest('.card-link');
        }
        const swiperInstance = new Swiper(swiperEl, {
          loop: false,
          effect: 'fade',
          fadeEffect: { crossFade: true },
          allowTouchMove: window.innerWidth <= 768, // Enable touch on mobile/tablet
          autoplay: false,
          on: {
            slideChange: function () {
              if (progressBar) {
                progressBar.style.width = ((this.activeIndex + 1) / this.slides.length) * 100 + '%';
              }
            },
            init: function () {
              if (progressBar) {
                progressBar.style.width = (1 / this.slides.length) * 100 + '%';
              }
            },
          },
        });

        swiperInstances.push(swiperInstance);

        // Add hover interaction if card has multiple slides
        if (cardLink && swiperInstance.slides.length > 1) {
          let hoverInterval;
          let currentSlideIndex = 0;

          cardLink.addEventListener('mouseenter', () => {
            hoverInterval = setInterval(() => {
              currentSlideIndex = (currentSlideIndex + 1) % swiperInstance.slides.length;
              swiperInstance.slideTo(currentSlideIndex, 300);
            }, 800);
          });

          cardLink.addEventListener('mouseleave', () => {
            if (hoverInterval) {
              clearInterval(hoverInterval);
              hoverInterval = null;
            }
            currentSlideIndex = 0;
            swiperInstance.slideTo(0, 300);
          });
        }
      });
    });
  }

  // Initialize swipers after a short delay to ensure DOM is ready
  setTimeout(initializeCardSwipers, 500);

  // Export function for manual initialization if needed
  window.initializeCardSwipers = initializeCardSwipers;
});
