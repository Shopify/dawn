import { Component } from '@theme/component';
import { isMobileBreakpoint } from '@theme/utilities';

/**
 * @typedef {Object} ShowMoreRefs
 * @property {HTMLElement} showMoreButton - The button to toggle visibility of the items
 * @property {HTMLElement[]} showMoreItems - The hidden items to show and hide
 * @property {HTMLElement} showMoreContent - The content container to measure and animate
 */

/**
 * A custom element that manages the showing and hiding excess content items
 *
 * @extends {Component<ShowMoreRefs>}
 */

class ShowMoreComponent extends Component {
  requiredRefs = ['showMoreButton', 'showMoreItems', 'showMoreContent'];

  /**
   * @type {boolean}
   */
  #expanded = false;

  /**
   * @type {boolean}
   */
  #disableOnDesktop = false;

  /**
   * @type {number}
   */
  #collapsedHeight = 0;

  /**
   * @type {'mobile:hidden' | 'hidden'}
   */
  #disabledClass = 'hidden';

  /**
   * @type {'MOBILE' | 'DESKTOP'}
   */
  get #currentBreakpoint() {
    return isMobileBreakpoint() ? 'MOBILE' : 'DESKTOP';
  }

  /**
   * @type {Animation | undefined}
   */
  #animation;

  /**
   * @constant {number}
   */
  #animationSpeed = 300;

  connectedCallback() {
    super.connectedCallback();
    this.#updateBreakpointState();
  }

  /**
   * Updates the current breakpoint and apprpropriate disabled class
   */
  #updateBreakpointState = () => {
    this.#disableOnDesktop = this.dataset.disableOnDesktop === 'true';
    this.#disabledClass = this.#disableOnDesktop ? 'mobile:hidden' : 'hidden';
  };

  /**
   * Handles expanding the content
   * @returns {{startHeight: number, endHeight: number}}
   */
  #expand = () => {
    const { showMoreItems, showMoreContent } = this.refs;

    this.#collapsedHeight = showMoreContent.offsetHeight;
    const startHeight = this.#collapsedHeight;

    showMoreItems?.forEach((item) => item.classList.remove(this.#disabledClass));

    return {
      startHeight,
      endHeight: showMoreContent.scrollHeight,
    };
  };

  /**
   * Handles collapsing the content
   * @returns {{startHeight: number, endHeight: number}}
   */
  #collapse = () => {
    const { showMoreContent } = this.refs;
    const startHeight = showMoreContent.offsetHeight;
    const endHeight = this.#collapsedHeight;

    return { startHeight, endHeight };
  };

  /**
   * Initializes a height transition
   * @param {number} startHeight
   * @param {number} endHeight
   */
  #animateHeight = (startHeight, endHeight) => {
    const { showMoreContent } = this.refs;

    showMoreContent.style.overflow = 'hidden';
    this.#animation?.cancel();

    this.#animation = showMoreContent.animate(
      {
        height: [`${startHeight}px`, `${endHeight}px`],
      },
      {
        duration: this.#animationSpeed,
        easing: 'ease-in-out',
      }
    );

    this.#animation.onfinish = () => this.#onAnimationFinish();
  };

  /**
   * Handles the animation finish event.
   */
  #onAnimationFinish() {
    const { showMoreContent, showMoreItems } = this.refs;

    if (this.#expanded) {
      showMoreItems.forEach((item) => item.classList.add(this.#disabledClass));
    }

    showMoreContent.style.removeProperty('height');
    showMoreContent.style.overflow = '';
    this.#expanded = !this.#expanded;
  }

  /**
   * Toggles the expansion state of the content.
   *
   * @param {Event} event - The click event
   */
  toggle = (event) => {
    event.preventDefault();

    this.#updateBreakpointState();

    if (this.#currentBreakpoint === 'DESKTOP' && this.#disableOnDesktop) return;

    const { startHeight, endHeight } = !this.#expanded ? this.#expand() : this.#collapse();

    this.dataset.expanded = this.#expanded ? 'false' : 'true';
    this.refs.showMoreButton.setAttribute('aria-expanded', this.dataset.expanded);

    this.#animateHeight(startHeight, endHeight);
  };
}

if (!customElements.get('show-more-component')) {
  customElements.define('show-more-component', ShowMoreComponent);
}
