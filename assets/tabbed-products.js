document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tabbed-product-tab');
  const grids = document.querySelectorAll('.tabbed-product-grid');
  const viewAllButton = document.getElementById('view-all-button');
  let swiperInstances = [];

  function initializeSwipers() {
    swiperInstances.forEach((swiper) => {
      if (swiper && typeof swiper.destroy === 'function') {
        swiper.destroy(true, true);
      }
    });
    swiperInstances = [];

    document.querySelectorAll('.tabbed-product-swiper').forEach((swiperEl) => {
      const progressBar = swiperEl.parentElement.querySelector('.tabbed-product-card__progress-bar');
      const cardLink = swiperEl.closest('.tabbed-product-card-link');

      const swiperInstance = new Swiper(swiperEl, {
        loop: false,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        allowTouchMove: false,
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
  }

  setTimeout(initializeSwipers, 500);
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selectedTab = tab.dataset.tab;
      const collectionTitle = tab.dataset.collectionTitle;
      const collectionUrl = tab.dataset.collectionUrl;

      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      grids.forEach((grid) => {
        if (grid.dataset.tab === selectedTab) {
          grid.classList.remove('hidden');
          grid.classList.add('fade-in');
        } else {
          grid.classList.add('hidden');
          grid.classList.remove('fade-in');
        }
      });

      if (viewAllButton && collectionTitle && collectionUrl) {
        viewAllButton.textContent = `View All ${collectionTitle}`;
        viewAllButton.href = collectionUrl;
      }

      setTimeout(initializeSwipers, 150);
    });
  });
});
