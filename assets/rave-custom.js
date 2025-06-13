// RAVE YOGA CUSTOM JAVASCRIPT
// Custom JS for Rave Yoga Shopify Theme - Sprint 1

(function () {
  'use strict';

  /**
   * Debounce function to limit the rate at which a function can fire.
   * @param {function} func Function to debounce.
   * @param {number} wait Timeout in milliseconds.
   * @returns {function} Debounced function.
   */
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  /**
   * Example: Add a class to the body when the page is scrolled.
   */
  // function handleScroll() {
  //   if (window.scrollY > 50) {
  //     document.body.classList.add('scrolled');
  //   } else {
  //     document.body.classList.remove('scrolled');
  //   }
  // }
  // window.addEventListener('scroll', debounce(handleScroll, 100));

  /**
   * Smooth scrolling for anchor links
   */
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Skip if it's just "#" or has no length
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();

          // Get header height for offset
          const header = document.querySelector('header.header');
          const headerHeight = header ? header.offsetHeight : 0;

          // Calculate position
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = targetPosition - headerHeight - 20; // 20px extra padding

          // Smooth scroll
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      });
    });
  }

  /**
   * Initialize custom scripts on DOMContentLoaded
   */
  document.addEventListener('DOMContentLoaded', function () {
    initSmoothScrolling();
    // console.log("Rave Yoga custom JS initialized.");
  });

  /**
   * Shopify Theme Editor Support
   * - Listen for section load/select events if you need to re-initialize JS for dynamic sections.
   */
  document.addEventListener('shopify:section:load', function (event) {
    initSmoothScrolling();
  });

  // Additional initialization code can go here

  // Add more methods as needed for future features
})();

// Ultimate fix for multicolumn layout on sweden-retreat page
document.addEventListener('DOMContentLoaded', function () {
  // Check if we're on the sweden-retreat page
  if (window.location.pathname.includes('sweden-retreat')) {
    // Function to fix the layout
    function applyMulticolumnFix() {
      console.log('Applying ultimate fix to multicolumn layout...');

      // Find the multicolumn element
      const multicolumn = document.getElementById('multicolumn_C4WQAd');
      if (!multicolumn) return;

      // Get the slider/list element with the grid class
      const slider = multicolumn.querySelector(
        '.multicolumn-list.grid--3-col-desktop, .multicolumn-list.grid.grid--3-col-desktop'
      );
      if (!slider) return;

      // Override the grid class
      if (slider.classList.contains('grid--3-col-desktop')) {
        console.log('Found the grid--3-col-desktop class, applying targeted fix...');

        // Force it to use flex layout instead of grid
        slider.setAttribute(
          'style',
          'display: flex !important; ' +
            'flex-wrap: nowrap !important; ' +
            'width: 100% !important; ' +
            'gap: 20px !important; ' +
            'justify-content: space-between !important; ' +
            'align-items: stretch !important;'
        );

        // Get all grid items
        const items = slider.querySelectorAll('.grid__item, .multicolumn-list__item');
        items.forEach((item) => {
          item.setAttribute(
            'style',
            'flex: 0 0 30% !important; ' +
              'width: 30% !important; ' +
              'max-width: 30% !important; ' +
              'margin: 0 !important; ' +
              'padding: 0 !important; ' +
              'box-sizing: border-box !important; ' +
              'float: none !important;'
          );
        });

        console.log('Grid fixes applied successfully.');
      }
    }

    // Apply the fix immediately and after short delays
    applyMulticolumnFix();

    for (let i = 1; i <= 10; i++) {
      setTimeout(applyMulticolumnFix, i * 100); // Apply every 100ms for 1 second
    }

    // Also reapply on window resize
    window.addEventListener('resize', applyMulticolumnFix);

    // Apply on DOMContentLoaded again to be double sure
    window.addEventListener('load', function () {
      applyMulticolumnFix();
      setTimeout(applyMulticolumnFix, 500);
    });
  }
});
