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
   * Uses aggressive event handling to ensure reliability
   */
  function initCartDrawerFix() {
    // Method 1: Prevent default close behavior and implement our own
    document.addEventListener('click', function (e) {
      // Check if click is on drawer close button
      if (e.target.closest('.drawer__close')) {
        e.preventDefault();
        e.stopPropagation();

        const cartDrawer = e.target.closest('cart-drawer');
        if (cartDrawer) {
          // Force immediate close
          cartDrawer.classList.remove('active', 'animate');
          cartDrawer.style.visibility = 'hidden';
          document.body.classList.remove('overflow-hidden');

          // Reset visibility after animation
          setTimeout(() => {
            cartDrawer.style.visibility = '';
          }, 300);
        }
        return false;
      }

      // Check if click is on overlay
      if (e.target.id === 'CartDrawer-Overlay' || e.target.closest('#CartDrawer-Overlay')) {
        e.preventDefault();
        e.stopPropagation();

        const cartDrawer = document.querySelector('cart-drawer');
        if (cartDrawer) {
          // Force immediate close
          cartDrawer.classList.remove('active', 'animate');
          cartDrawer.style.visibility = 'hidden';
          document.body.classList.remove('overflow-hidden');

          // Reset visibility after animation
          setTimeout(() => {
            cartDrawer.style.visibility = '';
          }, 300);
        }
        return false;
      }
    });

    // Method 2: Use MutationObserver to fix cart drawer whenever it's added/modified
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === 'childList') {
          const cartDrawer = document.querySelector('cart-drawer');
          if (cartDrawer && !cartDrawer._raveFixed) {
            cartDrawer._raveFixed = true;

            // Override the problematic methods
            if (cartDrawer.renderContents) {
              const originalRenderContents = cartDrawer.renderContents;
              cartDrawer.renderContents = function (parsedState) {
                // Call original method first
                originalRenderContents.call(this, parsedState);

                // Remove the auto-open behavior by clearing any pending opens
                this.classList.remove('animate');
              };
            }
          }
        }
      });
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Method 3: Also fix any existing onclick handlers
    setTimeout(() => {
      const closeButtons = document.querySelectorAll('.drawer__close[onclick]');
      closeButtons.forEach((button) => {
        button.removeAttribute('onclick');
        button.addEventListener('click', function (e) {
          e.preventDefault();
          const cartDrawer = this.closest('cart-drawer');
          if (cartDrawer) {
            cartDrawer.classList.remove('active', 'animate');
            cartDrawer.style.visibility = 'hidden';
            document.body.classList.remove('overflow-hidden');
            setTimeout(() => {
              cartDrawer.style.visibility = '';
            }, 300);
          }
        });
      });
    }, 100);
  }

  // Initialize cart drawer fix when DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    initCartDrawerFix();
  });

  // Add more methods as needed for future features
})();
