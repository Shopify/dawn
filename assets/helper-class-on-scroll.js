/**
 * Helper function to toggle a class on an element when another element goes out of view.
 *
 * Usage:
 * 1. Add `data-observer-watch` to the element you want to track (the one going out of view).
 * 2. Add `data-observer-toggle` to the element where the class should be toggled.
 * 3. Set `data-observer-class="your-class"` on the toggle element to specify the class name.
 *
 * The function automatically stops running inside the Shopify Theme Editor (`Shopify.designMode`).
 */

document.addEventListener('DOMContentLoaded', function () {
  if (Shopify.designMode) {
    return;
  }
  function helperToggleClassOnScroll(targetElement, toggleElement, className) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            toggleElement.classList.add(className);
          } else {
            toggleElement.classList.remove(className);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(targetElement);
  }

  const trackedElement = document.querySelector('[data-observer-watch]');
  const toggledElement = document.querySelector('[data-observer-toggle]');

  if (trackedElement && toggledElement) {
    const toggleClass = toggledElement.getAttribute('data-observer-class') || '';
    helperToggleClassOnScroll(trackedElement, toggledElement, toggleClass);
  }
});
