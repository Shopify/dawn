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

  /**
   * Cart Drawer Close Fix
   * Fixes the issue where cart drawer requires two clicks to close
   */
  function initCartDrawerFix() {
    const cartDrawer = document.querySelector('cart-drawer');
    if (cartDrawer) {
      const originalClose = cartDrawer.close;
      cartDrawer.close = function () {
        // Remove both animate and active classes
        this.classList.remove('active', 'animate');
        // Call original close method
        if (originalClose) {
          originalClose.call(this);
        }
        // Ensure visibility is properly hidden
        this.style.visibility = 'hidden';
        // Reset any pointer events
        this.style.pointerEvents = 'none';

        // Reset after a short delay to ensure transition completes
        setTimeout(() => {
          this.style.visibility = '';
          this.style.pointerEvents = '';
        }, 300);
      };
    }
  }

  // Initialize cart drawer fix when DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    initCartDrawerFix();
  });

  // Add more methods as needed for future features
})();
