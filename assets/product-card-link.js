import { onAnimationEnd } from '@theme/utilities';

// Create a new custom element for product links with images for transitions to PDP
class ProductCardLink extends HTMLElement {
  connectedCallback() {
    this.addEventListener('click', (event) => setTimeout(() => this.#handleClick(event), 0));
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.#handleClick);
  }

  get productTransitionEnabled() {
    return this.getAttribute('data-product-transition') === 'true';
  }

  get featuredMediaUrl() {
    return this.getAttribute('data-featured-media-url');
  }

  /**
   * Handles the click event for the product link
   * @param {Event} event
   */
  #handleClick = (event) => {
    // If the event has been prevented, don't do anything, another component is handling the click or if it's an input (swatches)
    if (event.defaultPrevented || event.target instanceof HTMLInputElement) return;

    const gallery = this.querySelector('[data-view-transition-to-main-product]');
    if (!this.productTransitionEnabled || !(gallery instanceof HTMLElement)) return;

    // Check on the current active image, whether it's a product card image or a resource card image
    const activeImage =
      gallery.querySelector('slideshow-slide[aria-hidden="false"] [transitionToProduct="true"]') ||
      gallery.querySelector('[transitionToProduct="true"]:last-child');

    if (activeImage instanceof HTMLImageElement) this.#setImageSrcset(activeImage);

    gallery.setAttribute('data-view-transition-type', 'product-image-transition');
    gallery.setAttribute('data-view-transition-triggered', 'true');
  };

  /**
   * Sets the srcset for the image
   * @param {HTMLImageElement} image
   */
  #setImageSrcset(image) {
    if (this.featuredMediaUrl && !image.srcset.includes(this.featuredMediaUrl)) {
      const imageFade = image.animate([{ opacity: 0.8 }, { opacity: 1 }], {
        duration: 125,
        easing: 'ease-in-out',
      });

      imageFade.onfinish = () => {
        image.srcset = this.featuredMediaUrl ?? '';
      };
    }
  }
}

if (!customElements.get('product-card-link')) {
  customElements.define('product-card-link', ProductCardLink);
}
