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
      // Store a bound close function to prevent duplicate listeners
      if (!cartDrawer._boundCloseFunction) {
        cartDrawer._boundCloseFunction = cartDrawer.close.bind(cartDrawer);
      }

      // Override the renderContents method to prevent problematic re-opening
      const originalRenderContents = cartDrawer.renderContents;
      cartDrawer.renderContents = function (parsedState) {
        this.querySelector('.drawer__inner').classList.contains('is-empty') &&
          this.querySelector('.drawer__inner').classList.remove('is-empty');
        this.productId = parsedState.id;
        this.getSectionsToRender().forEach((section) => {
          const sectionElement = section.selector
            ? document.querySelector(section.selector)
            : document.getElementById(section.id);

          if (!sectionElement) return;
          sectionElement.innerHTML = this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
        });

        // Fix: Remove the problematic setTimeout that calls this.open()
        // Only re-add the overlay event listener without forcing the drawer open
        setTimeout(() => {
          const overlay = this.querySelector('#CartDrawer-Overlay');
          if (overlay) {
            // Remove any existing listeners first
            overlay.removeEventListener('click', this._boundCloseFunction);
            // Add fresh listener with the stored bound function
            overlay.addEventListener('click', this._boundCloseFunction);
          }
          // DON'T call this.open() here - this was causing the double-click issue
        });
      };

      // Override the close method for extra safety
      const originalClose = cartDrawer.close;
      cartDrawer.close = function () {
        // Remove both classes immediately
        this.classList.remove('active', 'animate');
        // Call original close method
        if (originalClose) {
          originalClose.call(this);
        }
      };
    }
  }

  // Initialize cart drawer fix when DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    initCartDrawerFix();
  });

  // Add more methods as needed for future features
})();
