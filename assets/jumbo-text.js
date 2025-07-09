import { prefersReducedMotion } from '@theme/utilities';

/**
 * A custom element that automatically sizes text to fit its container width.
 */
class JumboText extends HTMLElement {
  connectedCallback() {
    // Initial calculation
    requestAnimationFrame(this.#handleResize);
    if (this.dataset.textEffect && this.dataset.textEffect !== 'none' && !prefersReducedMotion()) {
      this.#setIntersectionObserver();
    }
  }

  disconnectedCallback() {
    this.#resizeObserver.disconnect();
    if (this.dataset.textEffect && this.dataset.textEffect !== 'none' && !prefersReducedMotion()) {
      this.intersectionObserver?.disconnect();
    }
  }

  /**
   * Sets the intersection observer to calculate the optimal font size when the text is in view
   */
  #setIntersectionObserver() {
    // The threshold could be different based on the repetition of the animation.
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.classList.add('jumbo-text-visible');
            if (this.dataset.animationRepeat === 'false') {
              this.intersectionObserver.unobserve(entry.target);
            }
          } else {
            this.classList.remove('jumbo-text-visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    this.intersectionObserver.observe(this);
  }

  /**
   * Calculates the optimal font size to make the text fit the container width
   */
  #calculateOptimalFontSize = () => {
    // Check for empty text
    if (!this.textContent?.trim()) {
      return;
    }

    // Hide text during calculation
    this.classList.remove('ready');

    if (this.offsetWidth <= 0) return;

    // Disconnect the resize observer
    this.#resizeObserver.disconnect();

    // Start with a minimal font size
    this.style.fontSize = '1px';

    // Find the optimal font size
    const fontSize = findOptimalFontSize(this, this.offsetWidth);

    // Apply the final size
    this.style.fontSize = `${fontSize}px`;

    // Reconnect the resize observer
    this.#resizeObserver.observe(this);

    // Show the text
    this.classList.add('ready');
  };

  #handleResize = () => {
    this.#calculateOptimalFontSize();

    // Calculate distance from bottom of page, when the jumb text is close to the bottom of the page then force it
    // to use `cap text` instead of `cap alphabetic` to not cause any extra padding below the bottom of the page.
    const rect = this.getBoundingClientRect();
    const bottom = rect.bottom + window.scrollY;
    const distanceFromBottom = document.documentElement.offsetHeight - bottom;
    this.dataset.capText = (distanceFromBottom <= 100).toString();
  };

  #resizeObserver = new ResizeNotifier(this.#handleResize);
}

/**
 * Checks if text with the given font size overflows the container
 * @param {HTMLElement} element - The element to check
 * @param {number} containerWidth - The width of the container
 * @param {number} size - Font size to check
 * @returns {boolean} - True if text overflows
 */
function checkTextOverflow(element, containerWidth, size) {
  element.style.fontSize = `${size}px`;
  return element.scrollWidth > containerWidth;
}

/**
 * Find optimal font size using binary search
 * @param {HTMLElement} element - The text element
 * @param {number} containerWidth - Available width
 * @returns {number} - The optimal font size
 */
function findOptimalFontSize(element, containerWidth) {
  // Binary search parameters
  let minSize = 1;
  let maxSize = 500;
  const precision = 0.5;

  // Initial guess based on container width and text length
  const textLength = element.textContent?.length || 0;
  let fontSize = Math.min(maxSize, Math.sqrt(containerWidth) * (15 / Math.sqrt(Math.max(1, textLength))));

  // Adjust initial bounds based on first check
  if (checkTextOverflow(element, containerWidth, fontSize)) {
    maxSize = fontSize;
  } else {
    minSize = fontSize;
  }

  // Binary search implementation
  let iterations = 0;
  const MAX_ITERATIONS = 30;

  while (maxSize - minSize > precision && iterations < MAX_ITERATIONS) {
    fontSize = (minSize + maxSize) / 2;

    if (checkTextOverflow(element, containerWidth, fontSize)) {
      maxSize = fontSize;
    } else {
      minSize = fontSize;
    }

    iterations++;
  }

  // Add a small safety margin
  return minSize * 0.99;
}

// Register once
if (!customElements.get('jumbo-text')) {
  customElements.define('jumbo-text', JumboText);
}
