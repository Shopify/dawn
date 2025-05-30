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
   * Simplified fix since the floating cart icon is now a proper button
   */
  function initCartDrawerFix() {
    // Simple approach: ensure close buttons work with single click
    document.addEventListener('click', function (e) {
      if (e.target.closest('.drawer__close')) {
        e.stopPropagation();
        const cartDrawer = document.querySelector('cart-drawer');
        if (cartDrawer && cartDrawer.classList.contains('active')) {
          cartDrawer.classList.remove('active', 'animate');
          document.body.classList.remove('overflow-hidden');
        }
      }
    });

    // Ensure overlay clicks work properly
    document.addEventListener('click', function (e) {
      if (e.target.id === 'CartDrawer-Overlay') {
        e.stopPropagation();
        const cartDrawer = document.querySelector('cart-drawer');
        if (cartDrawer && cartDrawer.classList.contains('active')) {
          cartDrawer.classList.remove('active', 'animate');
          document.body.classList.remove('overflow-hidden');
        }
      }
    });
  }

  // Initialize cart drawer fix when DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    initCartDrawerFix();
  });

  // Add more methods as needed for future features
})();
