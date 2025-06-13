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
   * Initialize custom scripts on DOMContentLoaded
   */
  // document.addEventListener('DOMContentLoaded', function() {
  //   // Initialize sliders, event listeners, etc.
  //   console.log("Rave Yoga custom JS initialized.");
  // });

  /**
   * Shopify Theme Editor Support
   * - Listen for section load/select events if you need to re-initialize JS for dynamic sections.
   */
  // document.addEventListener('shopify:section:load', function(event) {
  //   const sectionId = event.detail.sectionId;
  //   const sectionElement = event.target;
  //   // Example: Re-initialize a slider in the loaded section
  //   // if (sectionElement.querySelector('.my-slider')) {
  //   //   initializeSlider(sectionElement.querySelector('.my-slider'));
  //   // }
  // });

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

// Ensure smooth scrolling to booking options section
document.addEventListener('DOMContentLoaded', function () {
  // Fix anchor links for the booking section
  const bookButtons = document.querySelectorAll('a[href="#booking-options-section"]');

  bookButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      // Try multiple ways to find the target section
      let targetSection = document.getElementById('booking-options-section');

      if (!targetSection) {
        targetSection = document.querySelector('.section-multicolumn_C4WQAd');
      }

      if (!targetSection) {
        // Find by heading text as last resort
        const headings = document.querySelectorAll('.multicolumn .title');
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.trim() === 'BOOKING OPTIONS') {
            targetSection = headings[i].closest('.shopify-section');
            break;
          }
        }
      }

      if (targetSection) {
        // Calculate offset for fixed header
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Smooth scroll to element
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        // Add highlight effect to indicate where user has scrolled to
        targetSection.classList.add('highlight-section');
        setTimeout(function () {
          targetSection.classList.remove('highlight-section');
        }, 2000);
      }
    });
  });
});
