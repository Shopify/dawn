/**
 * Request an idle callback or fallback to setTimeout
 * @returns {function} The requestIdleCallback function
 */
export const requestIdleCallback =
  typeof window.requestIdleCallback == 'function' ? window.requestIdleCallback : setTimeout;

/**
 * Check if the browser supports View Transitions API
 * @returns {boolean} True if the browser supports View Transitions API, false otherwise
 */
export function supportsViewTransitions() {
  return typeof document.startViewTransition === 'function';
}

/**
 * The current view transition
 * @type {{ current: Promise<void> | undefined }}
 */
export const viewTransition = {
  current: undefined,
};

/**
 * Functions to run when a view transition of a given type is started
 * @type {{ [key: string]: () => Promise<(() => void) | undefined> }}
 */
const viewTransitionTypes = {
  'product-grid': async () => {
    const grid = document.querySelector('.product-grid');
    const productCards = /** @type {HTMLElement[]} */ ([
      ...document.querySelectorAll('.product-grid .product-grid__item'),
    ]);

    if (!grid || !productCards.length) return;

    await new Promise((resolve) =>
      requestIdleCallback(() => {
        const cardsToAnimate = getCardsToAnimate(grid, productCards);

        productCards.forEach((card, index) => {
          if (index < cardsToAnimate) {
            card.style.setProperty('view-transition-name', `product-card-${card.dataset.productId}`);
          } else {
            card.style.setProperty('content-visibility', 'hidden');
          }
        });

        resolve(null);
      })
    );

    return () =>
      productCards.forEach((card) => {
        card.style.removeProperty('view-transition-name');
        card.style.removeProperty('content-visibility');
      });
  },
};

/**
 * Starts a view transition
 * @param {() => void} callback The callback to call when the view transition starts
 * @param {string[]} [types] The types of view transition to use
 * @returns {Promise<void>} A promise that resolves when the view transition finishes
 */
export function startViewTransition(callback, types) {
  return new Promise(async (resolve) => {
    // Check if View Transitions API is supported
    if (supportsViewTransitions() && !prefersReducedMotion()) {
      let cleanupFunctions = [];

      if (types) {
        for (const type of types) {
          if (viewTransitionTypes[type]) {
            const cleanupFunction = await viewTransitionTypes[type]();
            if (cleanupFunction) cleanupFunctions.push(cleanupFunction);
          }
        }
      }

      const transition = document.startViewTransition(callback);

      if (!viewTransition.current) {
        viewTransition.current = transition.finished;
      }

      if (types) types.forEach((type) => transition.types.add(type));

      transition.finished.then(() => {
        viewTransition.current = undefined;
        cleanupFunctions.forEach((cleanupFunction) => cleanupFunction());
        resolve();
      });

      return;
    }

    // Fallback for browsers that don't support this API yet
    callback();
    resolve();
  });
}

/**
 * @typedef {{ [key: string]: string | undefined }} Headers
 */

/**
 * @typedef {Object} FetchConfig
 * @property {string} method
 * @property {Headers} headers
 * @property {string | FormData | undefined} [body]
 */

/**
 * Creates a fetch configuration object
 * @param {string} [type] The type of response to expect
 * @param {Object} [config] The config of the request
 * @param {FetchConfig['body']} [config.body] The body of the request
 * @param {FetchConfig['headers']} [config.headers] The headers of the request
 * @returns {RequestInit} The fetch configuration object
 */
export function fetchConfig(type = 'json', config = {}) {
  /** @type {Headers} */
  const headers = { 'Content-Type': 'application/json', Accept: `application/${type}`, ...config.headers };

  if (type === 'javascript') {
    headers['X-Requested-With'] = 'XMLHttpRequest';
    delete headers['Content-Type'];
  }

  return {
    method: 'POST',
    headers: /** @type {HeadersInit} */ (headers),
    body: config.body,
  };
}

/**
 * Creates a debounced function that delays calling the provided function (fn)
 * until after wait milliseconds have elapsed since the last time
 * the debounced function was invoked. The returned function has a .cancel()
 * method to cancel any pending calls.
 *
 * @template {(...args: any[]) => any} T
 * @param {T} fn The function to debounce
 * @param {number} wait The time (in milliseconds) to wait before calling fn
 * @returns {T & { cancel(): void }} A debounced version of fn with a .cancel() method
 */
export function debounce(fn, wait) {
  /** @type {number | undefined} */
  let timeout;

  /** @param {...any} args */
  function debounced(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  }

  // Add the .cancel method:
  debounced.cancel = () => {
    clearTimeout(timeout);
  };

  return /** @type {T & { cancel(): void }} */ (debounced);
}

/**
 * Creates a throttled function that calls the provided function (fn) at most once per every wait milliseconds
 *
 * @template {(...args: any[]) => any} T
 * @param {T} fn The function to throttle
 * @param {number} delay The time (in milliseconds) to wait before calling fn
 * @returns {T & { cancel(): void }} A throttled version of fn with a .cancel() method
 */
export function throttle(fn, delay) {
  let lastCall = 0;

  /** @param {...any} args */
  function throttled(...args) {
    const now = performance.now();
    // If the time since the last call exceeds the delay, execute the callback
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  }

  throttled.cancel = () => {
    lastCall = performance.now();
  };

  return /** @type {T & { cancel(): void }} */ (throttled);
}

/**
 * A media query for reduced motion
 * @type {MediaQueryList}
 */
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

/**
 * Check if the user prefers reduced motion
 * @returns {boolean} True if the user prefers reduced motion, false otherwise
 */
export function prefersReducedMotion() {
  return reducedMotion.matches;
}

/**
 * Normalize a string
 * @param {string} str The string to normalize
 * @returns {string} The normalized string
 */
export function normalizeString(str) {
  return str
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
}

/**
 * Format a money value
 * @param {string} value The value to format
 * @returns {string} The formatted value
 */
export function formatMoney(value) {
  let valueWithNoSpaces = value.replace(' ', '');
  if (valueWithNoSpaces.indexOf(',') === -1) return valueWithNoSpaces;
  if (valueWithNoSpaces.indexOf(',') < valueWithNoSpaces.indexOf('.')) return valueWithNoSpaces.replace(',', '');
  if (valueWithNoSpaces.indexOf('.') < valueWithNoSpaces.indexOf(','))
    return valueWithNoSpaces.replace('.', '').replace(',', '.');
  if (valueWithNoSpaces.indexOf(',') !== -1) return valueWithNoSpaces.replace(',', '.');

  return valueWithNoSpaces;
}

/**
 * Check if the document is ready and call the callback when it is.
 * @param {() => void} callback The function to call when the document is ready.
 */
export function onDocumentReady(callback) {
  if (document.readyState === 'complete') {
    callback();
  } else {
    window.addEventListener('load', callback);
  }
}

/**
 * Wait for all animations to finish before calling the callback.
 * @param {Element | Element[]} elements The element(s) whose animations to wait for.
 * @param {() => void} [callback] The function to call when all animations are finished.
 * @param {Object} [options] The options to pass to `Element.getAnimations`.
 * @returns {Promise<void>} A promise that resolves when all animations are finished.
 */
export function onAnimationEnd(elements, callback, options = { subtree: true }) {
  const animations = Array.isArray(elements)
    ? elements.flatMap((element) => element.getAnimations(options))
    : elements.getAnimations(options);
  const animationPromises = animations.reduce((acc, animation) => {
    // Ignore ViewTimeline animations
    if (animation.timeline instanceof DocumentTimeline) {
      acc.push(animation.finished);
    }

    return acc;
  }, /** @type {Promise<Animation>[]} */ ([]));

  return Promise.allSettled(animationPromises).then(callback);
}

/**
 * Check if the click is outside the element.
 * @param {MouseEvent} event The mouse event.
 * @param {Element} element The element to check.
 * @returns {boolean} True if the click is outside the element, false otherwise.
 */
export function isClickedOutside(event, element) {
  if (event.target instanceof HTMLDialogElement || !(event.target instanceof Element)) {
    return !isPointWithinElement(event.clientX, event.clientY, element);
  }

  return !element.contains(event.target);
}

/**
 * Check if a point is within an element.
 * @param {number} x The x coordinate of the point.
 * @param {number} y The y coordinate of the point.
 * @param {Element} element The element to check.
 * @returns {boolean} True if the point is within the element, false otherwise.
 */
export function isPointWithinElement(x, y, element) {
  const { left, right, top, bottom } = element.getBoundingClientRect();

  return x >= left && x <= right && y >= top && y <= bottom;
}

/**
 * A media query for large screens
 * @type {MediaQueryList}
 */
export const mediaQueryLarge = matchMedia('(min-width: 750px)');

/**
 * Check if the current breakpoint is mobile
 * @returns {boolean} True if the current breakpoint is mobile, false otherwise
 */
export function isMobileBreakpoint() {
  return !mediaQueryLarge.matches;
}

/**
 * Check if the current breakpoint is desktop
 * @returns {boolean} True if the current breakpoint is desktop, false otherwise
 */
export function isDesktopBreakpoint() {
  return mediaQueryLarge.matches;
}

/**
 * Clamps a number between a minimum and maximum value.
 * @param {number} value - The input number to clamp.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} The clamped value.
 */
export function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

/**
 * Calculates the center point of an element along the specified axis.
 * @param {Element} element - The DOM element to find the center of.
 * @param {'x' | 'y'} [axis] - The axis ('x' or 'y') to get the center for. If not provided, returns both axes.
 * @template {('x' | 'y')} T
 * @param {T} [axis]
 * @returns {T extends ('x' | 'y') ? number : {x: number, y: number}} The center point along the axis or an object with x and y coordinates.
 */
export function center(element, axis) {
  const { left, width, top, height } = element.getBoundingClientRect();
  const point = {
    x: left + width / 2,
    y: top + height / 2,
  };

  if (axis) return /**  @type {any} */ (point[axis]);

  return /**  @type {any} */ (point);
}

/**
 * Calculates the start point of an element along the specified axis.
 * @param {Element} element - The DOM element to find the start of.
 * @param {'x' | 'y'} [axis] - The axis ('x' or 'y') to get the start for. If not provided, returns both axes.
 * @returns {number | {x: number, y: number}} The start point along the axis or an object with x and y coordinates.
 */
export function start(element, axis) {
  const { left, top } = element.getBoundingClientRect();
  const point = { x: left, y: top };

  if (axis) return /**  @type {any} */ (point[axis]);

  return /**  @type {any} */ (point);
}

/**
 * Finds the value in an array that is closest to a target value.
 * @param {number[]} values - An array of numbers.
 * @param {number} target - The target number to find the closest value to.
 * @returns {number} The value from the array closest to the target.
 */
export function closest(values, target) {
  return values.reduce(function (prev, curr) {
    return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev;
  });
}

/**
 * Prevents the default action of an event.
 * @param {Event} event - The event to prevent the default action of.
 */
export function preventDefault(event) {
  event.preventDefault();
}

/**
 * Get the visible elements within a root element.
 * @template {Element} T
 * @param {Element} root - The element within which elements should be visible.
 * @param {T[] | undefined} elements - The elements to check for visibility.
 * @param {number} [ratio=1] - The minimum percentage of the element that must be visible.
 * @param {'x' | 'y'} [axis] - Whether to only check along 'x' axis, 'y' axis, or both if undefined.
 * @returns {T[]} An array containing the visible elements.
 */
export function getVisibleElements(root, elements, ratio = 1, axis) {
  if (!elements?.length) return [];
  const rootRect = root.getBoundingClientRect();

  return elements.filter((element) => {
    const { width, height, top, right, left, bottom } = element.getBoundingClientRect();

    if (ratio < 1) {
      const intersectionLeft = Math.max(rootRect.left, left);
      const intersectionRight = Math.min(rootRect.right, right);
      const intersectionWidth = Math.max(0, intersectionRight - intersectionLeft);

      if (axis === 'x') {
        return width > 0 && intersectionWidth / width >= ratio;
      }

      const intersectionTop = Math.max(rootRect.top, top);
      const intersectionBottom = Math.min(rootRect.bottom, bottom);
      const intersectionHeight = Math.max(0, intersectionBottom - intersectionTop);

      if (axis === 'y') {
        return height > 0 && intersectionHeight / height >= ratio;
      }

      const intersectionArea = intersectionWidth * intersectionHeight;
      const elementArea = width * height;

      // Check that at least the specified ratio of the element is visible
      return elementArea > 0 && intersectionArea / elementArea >= ratio;
    }

    const isWithinX = left >= rootRect.left && right <= rootRect.right;
    if (axis === 'x') {
      return isWithinX;
    }

    const isWithinY = top >= rootRect.top && bottom <= rootRect.bottom;
    if (axis === 'y') {
      return isWithinY;
    }

    return isWithinX && isWithinY;
  });
}

/**
 * Determines which grid items should be animated during a transition.
 * It makes an estimation based on the zoom-out card size because it's
 * the common denominator for both transition states. I.e. transitioning either
 * from 10 to 20 cards the other way around, both need 20 cards to be animated.
 * @param {Element} grid - The grid element
 * @param {Element[]} cards - The cards to animate
 * @returns {number} - Number of cards that should be animated
 */
function getCardsToAnimate(grid, cards) {
  if (!grid || !cards || cards.length === 0) return 0;

  const itemSample = cards[0];
  if (!itemSample) return 0;

  // Calculate the visible area of the grid for the Y axis. Assume X is always fully visible:
  const gridRect = grid.getBoundingClientRect();
  const visibleArea = {
    top: Math.max(0, gridRect.top),
    bottom: Math.min(window.innerHeight, gridRect.bottom),
  };

  const visibleHeight = Math.round(visibleArea.bottom - visibleArea.top);
  if (visibleHeight <= 0) return 0;

  /** @type {import('product-card').ProductCard | null} */
  const cardSample = itemSample.querySelector('product-card');
  const gridStyle = getComputedStyle(grid);

  const galleryAspectRatio = cardSample?.refs?.cardGallery?.style.getPropertyValue('--gallery-aspect-ratio') || '';
  let aspectRatio = parseFloat(galleryAspectRatio) || 0.5;
  if (galleryAspectRatio?.includes('/')) {
    const [width = '1', height = '2'] = galleryAspectRatio.split('/');
    aspectRatio = parseInt(width, 10) / parseInt(height, 10);
  }

  const cardGap = parseInt(cardSample?.refs?.productCardLink?.style.getPropertyValue('--product-card-gap') || '') || 12;
  const gridGap = parseInt(gridStyle.getPropertyValue('--product-grid-gap')) || 12;

  // Assume only a couple of lines of text in the card details (title and price).
  // If the title wraps into more lines, we might just animate more cards, but that's fine.
  const detailsSize = ((parseInt(gridStyle.fontSize) || 16) + 2) * 2;

  const isMobile = window.innerWidth < 750;

  // Always use the zoom-out state card width
  const cardWidth = isMobile ? Math.round((gridRect.width - gridGap) / 2) : 100;
  const cardHeight = Math.round(cardWidth / aspectRatio) + cardGap + detailsSize;

  // Calculate the number of cards that fit in the visible area:
  // - The width estimation is pretty accurate, we can ignore decimals.
  // - The height estimation needs to account for peeking rows, so we round up.
  const columnsInGrid = isMobile ? 2 : Math.floor((gridRect.width + gridGap) / (cardWidth + gridGap));
  const rowsInGrid = Math.ceil((visibleHeight - gridGap) / (cardHeight + gridGap));

  return columnsInGrid * rowsInGrid;
}

/**
 * Preloads an image
 * @param {string} src - The source of the image to preload
 */
export function preloadImage(src) {
  const image = new Image();
  image.src = src;
}

export class TextComponent extends HTMLElement {
  shimmer() {
    this.setAttribute('shimmer', '');
  }
}

if (!customElements.get('text-component')) {
  customElements.define('text-component', TextComponent);
}

/**
 * Resets the shimmer attribute on all elements in the container.
 * @param {Element} [container] - The container to reset the shimmer attribute on.
 */
export function resetShimmer(container = document.body) {
  const shimmer = container.querySelectorAll('[shimmer]');
  shimmer.forEach((item) => item.removeAttribute('shimmer'));
}

/**
 * Change the meta theme color of the header.
 * @param {Element} colorSourceElement - The HTML element whose background-color will determine the new theme-color.
 */
export function changeMetaThemeColor(colorSourceElement) {
  const metaThemeColor = document.head.querySelector('meta[name="theme-color"]');
  const containerStyle = window.getComputedStyle(colorSourceElement);
  if (metaThemeColor) metaThemeColor.setAttribute('content', containerStyle.backgroundColor);
}

class Scheduler {
  /** @type {Set<() => void>} */
  #queue = new Set();
  /** @type {boolean} */
  #scheduled = false;

  /** @param {() => void} task */
  schedule = async (task) => {
    this.#queue.add(task);

    if (!this.#scheduled) {
      this.#scheduled = true;

      // Wait for any in-progress view transitions to finish
      if (viewTransition.current) await viewTransition.current;

      requestAnimationFrame(this.flush);
    }
  };

  flush = () => {
    for (const task of this.#queue) {
      task();
    }

    this.#queue.clear();
    this.#scheduled = false;
  };
}

export const scheduler = new Scheduler();

Theme.utilities = {
  ...Theme.utilities,
  scheduler: scheduler,
};
