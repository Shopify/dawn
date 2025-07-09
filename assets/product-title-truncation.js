import { Component } from '@theme/component';

/** @typedef {typeof globalThis} Window */

/**
 * A component that handles title truncation with responsive behavior
 *
 * @typedef {Object} Refs
 * @property {HTMLElement} [text] - The text element to truncate (optional)
 *
 * @extends {Component<Refs>}
 */
class ProductTitle extends Component {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.#initializeTruncation();
  }

  /**
   * Initialize the title truncation
   */
  #initializeTruncation() {
    if ('ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver(() => {
        this.#calculateTruncation();
      });

      this.resizeObserver.observe(this);
      this.#calculateTruncation();
    } else {
      /** @type {Window} */
      (window).addEventListener('resize', this.#handleResize.bind(this));
      this.#calculateTruncation();
    }
  }

  /**
   * Calculate truncation for the title
   */
  #calculateTruncation() {
    /** @type {HTMLElement} */
    const textElement = this.refs.text || this.querySelector('.title-text') || this;
    if (!textElement.textContent) return;

    const containerHeight = this.clientHeight;

    const computedStyle = window.getComputedStyle(this);
    const lineHeight = parseFloat(computedStyle.lineHeight);
    const paddingTop = parseFloat(computedStyle.paddingTop);
    const paddingBottom = parseFloat(computedStyle.paddingBottom);

    const availableHeight = containerHeight - paddingTop - paddingBottom;
    const maxLines = Math.max(1, Math.floor(availableHeight / lineHeight));

    textElement.style.display = '-webkit-box';
    textElement.style.webkitBoxOrient = 'vertical';
    textElement.style.overflow = 'hidden';
    textElement.style.textOverflow = 'ellipsis';
    textElement.style.webkitLineClamp = String(maxLines);
  }

  /**
   * Handle window resize events
   */
  #handleResize() {
    this.#calculateTruncation();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    window.removeEventListener('resize', this.#handleResize);
  }
}

if (!customElements.get('product-title')) {
  customElements.define('product-title', ProductTitle);
}

export default ProductTitle;
