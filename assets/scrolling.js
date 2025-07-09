import { debounce, throttle, prefersReducedMotion } from '@theme/utilities';

/**
 * Timeout duration (in milliseconds) after which scroll is considered to have ended.
 * @constant {number}
 */
const SCROLL_END_TIMEOUT = 50;

/**
 * Class representing a Scroller that handles smooth scrolling and detects scroll end events.
 *
 * @class
 */
export class Scroller {
  /**
   * The element to apply scrolling to.
   * @type {HTMLElement}
   */
  element;

  /**
   * Promise that resolves when scrolling ends.
   * @type {Promise<void>|undefined}
   */
  #promise = undefined;

  /**
   * Function to resolve the scroll end promise.
   * @type {Function|undefined}
   */
  #resolve = undefined;

  /**
   * Callback function to call while user is scrolling, throttled every 50ms.
   * @type {() => void}
   */
  #throttledCallback;

  /**
   * Callback function invoked after user scroll ends.
   * @type {() => void}
   */
  #endCallback;

  /**
   * Callback function invoked when scrolling starts, regardless of whether it was triggered by a user event.
   * @type {(() => void) | undefined}
   */
  #onScrollInit;

  /**
   * Callback function invoked when scrolling ends, regardless of whether it was triggered by a user event.
   * @type {(() => void) | undefined}
   */
  #onScrollEnd;

  /**
   * Whether the scroll was triggered by a user event.
   * @type {boolean}
   */
  #userEvent = true;

  /**
   * Whether the next scroll event should be ignored.
   * @type {boolean}
   */
  #ignore = false;

  /**
   * Whether the element is currently scrolling.
   * @type {boolean}
   */
  #isScrolling = false;

  /**
   * Creates a Scroller instance.
   *
   * @param {HTMLElement} element - The element to apply scrolling to.
   * @param {Object} options - The options for the scroller.
   * @param {() => void} options.onScroll - Function to call while scrolling and after scrolling ends.
   * @param {() => void} [options.onScrollStart] - Function to call when scrolling starts.
   * @param {() => void} [options.onScrollEnd] - Function to call after scrolling ends.
   */
  constructor(element, options) {
    this.#throttledCallback = throttle(options.onScroll, SCROLL_END_TIMEOUT);
    this.#endCallback = options.onScroll;

    this.#onScrollInit = options.onScrollStart;
    this.#onScrollEnd = options.onScrollEnd;

    this.element = element;
    this.element.addEventListener('scroll', this.#handleScroll);
  }

  /**
   * Scrolls to a specific position or element.
   * @param {number | HTMLElement} input - The position in pixels or an element to scroll to.
   * @param {Object} [options] - Options for the scroll.
   * @param {boolean} [options.instant] - Whether to scroll instantly.
   */
  async to(input, options) {
    let value;

    if (input instanceof HTMLElement) {
      const paddingStart = calculatePaddingStart(this.element, this.axis);
      value = input[`offset${this.#edge}`] - paddingStart;
    } else {
      value = input;
    }

    const currentPosition = this.element[`scroll${this.#edge}`];
    const willChange = currentPosition !== value;

    if (willChange) {
      this.#scroll({ ...options, method: 'scrollTo', value });
    } else if (this.#isScrolling) {
      // If the scroll has started but then it's released in the same original position,
      // the scroll event will not fire, so we need to manually trigger the scroll end.
      this.#handleScrollEnd(false);
    }
  }

  /**
   * Scrolls by a certain number of pixels.
   * @param {number} value - The number of pixels to scroll by.
   * @param {Object} [options] - Options for the scroll.
   * @param {boolean} [options.instant] - Whether to scroll instantly.
   */
  by(value, options) {
    this.#scroll({ ...options, method: 'scrollBy', value });
  }

  /**
   * Scrolls the element.
   * @param {Object} options - The options for the scroll.
   * @param {'scrollTo' | 'scrollBy'} options.method - The method to use to scroll.
   * @param {number} options.value - The value to scroll to.
   * @param {boolean} [options.instant] - Whether to scroll instantly.
   */
  #scroll(options) {
    const { method, value, instant = prefersReducedMotion() } = options;

    this.#reset();
    this.#ignore = instant;
    this.#userEvent = false;

    // Check if we need to scroll at all
    const currentPosition = this.element[`scroll${this.#edge}`];
    const targetPosition = method === 'scrollBy' ? currentPosition + value : value;
    const scrollDistance = Math.abs(targetPosition - currentPosition);

    // If the distance is negligible, don't scroll and resolve immediately
    if (scrollDistance < 1) {
      return Promise.resolve();
    }

    if (!instant) this.#setup();

    this.element[method]({
      [this.#edge.toLowerCase()]: value,
      behavior: instant ? 'instant' : 'smooth',
    });
  }

  /**
   * Gets the scrolling axis ('x' or 'y') based on the element's dimensions.
   * @type {'x' | 'y'}
   * @readonly
   */
  get axis() {
    return getScrollAxis(this.element);
  }

  /**
   * Promise that resolves when scrolling ends.
   * @type {Promise<void>}
   * @readonly
   */
  get finished() {
    return this.#promise ?? Promise.resolve();
  }

  /**
   * Gets the scroll edge property ('Left' or 'Top') based on the axis.
   * @returns {'Left' | 'Top'}
   */
  get #edge() {
    return this.axis === 'x' ? 'Left' : 'Top';
  }

  /**
   * Sets up the scroll end promise if not already set.
   */
  #setup() {
    if (this.#promise) {
      return;
    }

    this.#promise = new Promise((resolve) => (this.#resolve = resolve));
  }

  #reset = () => {
    this.#handleScrollEnd.cancel();
    this.#resolve?.();

    this.#promise = undefined;
    this.#resolve = undefined;
    this.#userEvent = true;
    this.#ignore = false;
  };

  /**
   * Event handler for the 'scroll' event.
   */
  #handleScroll = () => {
    if (!this.#isScrolling) {
      this.#onScrollInit?.();
      this.#isScrolling = true;
    }

    if (this.#ignore) {
      this.#reset();
      this.#handleScrollEnd(false);
      return;
    }

    const userEvent = this.#userEvent;

    this.#setup();
    if (userEvent) this.#throttledCallback();
    this.#handleScrollEnd(userEvent);
  };

  /**
   * Handler called when scrolling has ended.
   */
  #handleScrollEnd = debounce(
    /**
     * @param {boolean} userEvent
     */
    (userEvent) => {
      this.#resolve?.();
      if (userEvent) this.#endCallback();
      this.#reset();

      if (this.#isScrolling) {
        this.#onScrollEnd?.();
        this.#isScrolling = false;
      }
    },
    SCROLL_END_TIMEOUT
  );

  /**
   * Sets the scroll snap behavior of the element.
   * @param {boolean} value - Whether to enable scroll snap.
   */
  set snap(value) {
    // Changing the snap behavior will trigger a scroll event, which we should ignore
    this.#ignore = true;
    this.element.style.setProperty('scroll-snap-type', value ? `${this.axis} mandatory` : 'none');
  }

  /**
   * Destroys the Scroller instance.
   */
  destroy() {
    this.element.removeEventListener('scroll', this.#handleScroll);
  }
}

/**
 * Gets the scroll axis ('x' or 'y') based on the element's dimensions.
 * @param {HTMLElement} el - The element to get the scroll axis of.
 * @returns {'x' | 'y'}
 */
function getScrollAxis(el) {
  if (el.scrollHeight > el.clientHeight && el.scrollWidth === el.clientWidth) {
    return 'y';
  }

  if (el.scrollWidth > el.clientWidth && el.scrollHeight === el.clientHeight) {
    return 'x';
  }

  return el.scrollWidth > el.scrollHeight ? 'x' : 'y';
}

/**
 * Calculates the padding-start around an element to update the scroll offset.
 * @param {HTMLElement} element - The element to calculate the padding-start of.
 * @param {'x' | 'y'} axis - The axis to calculate the padding-start of.
 * @returns {number} The padding-start in pixels.
 */
function calculatePaddingStart(element, axis) {
  const computedStyle = getComputedStyle(element);
  const value = axis === 'x' ? computedStyle.paddingInlineStart : computedStyle.paddingBlockStart;

  return parseFloat(value);
}

/**
 * Scrolls an element into view.
 * @param {Element} element - The element to scroll into view.
 * @param {Object} options - The options for the scroll.
 * @param {ScrollBehavior} [options.behavior='smooth'] - The behavior of the scroll.
 * @param {'start' | 'center' | 'end'} [options.block='start'] - The block alignment of the element.
 * @param {'start' | 'center' | 'end'} [options.inline='start'] - The inline alignment of the element.
 * @param {Element} [options.ancestor] - The ancestor element to scroll into view.
 */
export function scrollIntoView(element, { ancestor, behavior = 'smooth', block = 'start', inline = 'start' } = {}) {
  if (!ancestor) {
    return element.scrollIntoView({ behavior, block, inline });
  }

  const elemRect = element.getBoundingClientRect();
  const ancestorRect = ancestor.getBoundingClientRect();

  /**
   * Calculates the scroll offset for an element.
   * @param {'start' | 'center' | 'end'} alignment - The alignment of the element.
   * @param {number} ancestorStart - The start of the ancestor element.
   * @param {number} ancestorLength - The length of the ancestor element.
   * @param {number} elemStart - The start of the element.
   * @param {number} elemLength - The length of the element.
   * @param {number} currentScroll - The current scroll position.
   * @returns {number} The scroll offset.
   */
  const calculateScrollOffset = (alignment, ancestorStart, ancestorLength, elemStart, elemLength, currentScroll) => {
    switch (alignment) {
      case 'start':
        return currentScroll + elemStart - ancestorStart;
      case 'center':
        return currentScroll + elemStart - ancestorStart - ancestorLength / 2 + elemLength / 2;
      case 'end':
        return currentScroll + elemStart - ancestorStart - ancestorLength + elemLength;
      default:
        return currentScroll;
    }
  };

  const scrollTop =
    ancestor.scrollHeight > ancestor.clientHeight
      ? calculateScrollOffset(
          block,
          ancestorRect.top,
          ancestor.clientHeight,
          elemRect.top,
          elemRect.height,
          ancestor.scrollTop
        )
      : ancestor.scrollTop;

  const scrollLeft =
    ancestor.scrollWidth > ancestor.clientWidth
      ? calculateScrollOffset(
          inline,
          ancestorRect.left,
          ancestor.clientWidth,
          elemRect.left,
          elemRect.width,
          ancestor.scrollLeft
        )
      : ancestor.scrollLeft;

  ancestor.scrollTo({ top: scrollTop, left: scrollLeft, behavior });
}

class ScrollHint extends HTMLElement {
  connectedCallback() {
    this.addEventListener('scroll', this.#update);
    this.#resizeObserver.observe(this);
  }

  disconnectedCallback() {
    this.removeEventListener('scroll', this.#update);
    this.#resizeObserver.disconnect();
  }

  #update = () => {
    const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = this;
    const scrollDirection = scrollWidth > clientWidth ? 'horizontal' : 'vertical';
    const scrollPercentage =
      scrollDirection === 'vertical'
        ? scrollTop / (scrollHeight - clientHeight)
        : scrollLeft / (scrollWidth - clientWidth);

    this.style.maskImage = Number.isNaN(scrollPercentage)
      ? ''
      : `linear-gradient(
        to ${scrollDirection === 'vertical' ? 'bottom' : 'right'},
        transparent ${scrollPercentage > 0 ? 1 : 0}%,
        black ${scrollPercentage < 0.1 ? scrollPercentage * 100 : 10}%,
        black ${scrollPercentage > 0.9 ? scrollPercentage * 100 : 90}%,
        transparent 100%
      )`;
  };

  #resizeObserver = new ResizeObserver(this.#update);
}

if (!customElements.get('scroll-hint')) {
  customElements.define('scroll-hint', ScrollHint);
}
