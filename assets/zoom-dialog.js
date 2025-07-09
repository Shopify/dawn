import { Component } from '@theme/component';
import {
  supportsViewTransitions,
  startViewTransition,
  onAnimationEnd,
  prefersReducedMotion,
  debounce,
  preloadImage,
} from '@theme/utilities';
import { scrollIntoView } from '@theme/scrolling';
import { ZoomMediaSelectedEvent } from '@theme/events';
import { DialogCloseEvent } from '@theme/dialog';
/**
 * A custom element that renders a zoom dialog.
 *
 * @typedef {object} Refs
 * @property {HTMLDialogElement} dialog - The dialog element.
 * @property {HTMLElement[]} media - The media elements.
 * @property {HTMLElement} thumbnails - The thumbnails elements.
 *
 * @extends Component<Refs>
 */
export class ZoomDialog extends Component {
  requiredRefs = ['dialog', 'media', 'thumbnails'];

  #highResImagesLoaded = /** @type {Set<string>} */ (new Set());

  connectedCallback() {
    super.connectedCallback();
    this.refs.dialog.addEventListener('scroll', this.handleScroll);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.refs.dialog.removeEventListener('scroll', this.handleScroll);
  }

  /**
   * Opens the zoom dialog.
   *
   * @param {number} index - The index of the media to zoom.
   * @param {PointerEvent} event - The pointer event.
   */
  async open(index, event) {
    event.preventDefault();

    const { dialog, media, thumbnails } = this.refs;
    const targetImage = media[index];
    const targetThumbnail = thumbnails.children[index];

    const open = () => {
      dialog.showModal();

      for (const target of [targetThumbnail, targetImage]) {
        target?.scrollIntoView({ behavior: 'instant' });
      }
    };

    /** @type {HTMLElement | null} */
    const sourceImage = event.target instanceof Element ? event.target.closest('li,slideshow-slide') : null;

    if (!supportsViewTransitions || !sourceImage || !targetImage) return open();

    const transitionName = `gallery-item`;
    sourceImage.style.setProperty('view-transition-name', transitionName);

    await startViewTransition(() => {
      open();
      sourceImage.style.removeProperty('view-transition-name');
      targetImage.style.setProperty('view-transition-name', transitionName);
    });

    targetImage.style.removeProperty('view-transition-name');

    this.selectThumbnail(index, { behavior: 'instant' });
  }

  /**
   * Loads a high-resolution image for a specific media container
   * @param {HTMLElement} mediaContainer - The media container element
   */
  #loadHighResolutionImage(mediaContainer) {
    if (!mediaContainer.classList.contains('product-media-container--image')) return false;

    const image = mediaContainer.querySelector('img.product-media__image');
    if (!image || !(image instanceof HTMLImageElement)) return false;

    const highResolutionUrl = image.getAttribute('data_max_resolution');
    if (!highResolutionUrl || this.#highResImagesLoaded.has(highResolutionUrl)) return false;

    preloadImage(highResolutionUrl);

    const newImage = new Image();
    newImage.className = image.className;
    newImage.alt = image.alt;
    newImage.setAttribute('data_max_resolution', highResolutionUrl);

    // When the high-resolution image loads, replace the existing image
    newImage.onload = () => {
      image.replaceWith(newImage);
      this.#highResImagesLoaded.add(highResolutionUrl);
    };

    newImage.src = highResolutionUrl;
  }

  /**
   * Handles the scroll event of the dialog, which is used to update the active thumbnail when the corresponding image is visible in the main view.
   * @param {Event} event - The scroll event.
   */
  handleScroll = debounce(async () => {
    const { media, thumbnails } = this.refs;

    const mostVisibleElement = await getMostVisibleElement(media);
    const activeIndex = media.indexOf(mostVisibleElement);
    const targetThumbnail = thumbnails.children[activeIndex];

    if (!targetThumbnail || !(targetThumbnail instanceof HTMLElement)) return;

    Array.from(thumbnails.querySelectorAll('button')).forEach((button, i) => {
      button.setAttribute('aria-selected', `${i === activeIndex}`);
    });

    this.#loadHighResolutionImage(mostVisibleElement);
    this.dispatchEvent(new ZoomMediaSelectedEvent(activeIndex));
  }, 50);

  /**
   * Closes the zoom dialog.
   */
  async close() {
    const { dialog, media } = this.refs;

    if (!supportsViewTransitions) return this.closeDialog();

    // Find the most visible image using IntersectionObserver
    const mostVisibleElement = await getMostVisibleElement(media);

    // Get the index and set up transition
    const activeIndex = media.indexOf(mostVisibleElement);
    const transitionName = `gallery-item`;

    const mediaGallery = /** @type {import('./media-gallery').MediaGallery | undefined} */ (
      this.closest('media-gallery')
    );

    const slideshowActive = mediaGallery?.presentation === 'carousel';

    const slide = slideshowActive ? mediaGallery.slideshow?.slides?.[activeIndex] : mediaGallery?.media?.[activeIndex];

    if (!slide) return this.closeDialog();

    dialog.classList.add('dialog--closed');

    await onAnimationEnd(this.refs.thumbnails);

    mostVisibleElement.style.setProperty('view-transition-name', transitionName);

    await startViewTransition(() => {
      mostVisibleElement.style.removeProperty('view-transition-name');
      slide.style.setProperty('view-transition-name', transitionName);
      this.closeDialog();
    });

    slide.style.removeProperty('view-transition-name');
    dialog.classList.remove('dialog--closed');
  }

  closeDialog() {
    const { dialog } = this.refs;
    dialog.close();
    window.dispatchEvent(new DialogCloseEvent());
  }

  /**
   * Closes the dialog when the user presses the escape key.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   */
  handleKeyDown(event) {
    if (event.key !== 'Escape') return;

    event.preventDefault();
    this.close();
  }

  /**
   * Handles the click event of a thumbnail.
   * @param {number} index - The index of the thumbnail to select.
   */
  async handleThumbnailClick(index) {
    const behavior = prefersReducedMotion() ? 'instant' : 'smooth';
    this.selectThumbnail(index, { behavior });
  }

  /**
   * Handles the pointer enter event of a thumbnail.
   * @param {number} index - The index of the thumbnail to load the high-resolution image for.
   */
  async handleThumbnailPointerEnter(index) {
    const { media } = this.refs;
    if (!media[index]) return;

    this.#loadHighResolutionImage(media[index]);
  }

  /**
   * Handles the selection of a thumbnail.
   * @param {number} index - The index of the thumbnail to select.
   * @param {Object} options - The options for the selection.
   * @param {ScrollBehavior} options.behavior - The behavior of the scroll.
   */
  async selectThumbnail(index, options = { behavior: 'smooth' }) {
    if (!this.refs.thumbnails || !this.refs.thumbnails.children.length) return;

    // Guard if invalid
    if (isNaN(index) || index < 0 || index >= this.refs.thumbnails.children.length) return;

    const { media, thumbnails } = this.refs;
    const targetThumbnail = thumbnails.children[index];

    if (!targetThumbnail || !(targetThumbnail instanceof HTMLElement)) return;

    Array.from(thumbnails.querySelectorAll('button')).forEach((button, i) => {
      button.setAttribute('aria-selected', `${i === index}`);
    });

    scrollIntoView(targetThumbnail, {
      ancestor: thumbnails,
      behavior: options.behavior,
      block: 'center',
      inline: 'center',
    });

    const targetImage = media[index];

    if (targetImage) {
      targetImage.scrollIntoView({
        behavior: options.behavior,
      });

      this.#loadHighResolutionImage(targetImage);
    }
    this.dispatchEvent(new ZoomMediaSelectedEvent(index));
  }
}

if (!customElements.get('zoom-dialog')) {
  customElements.define('zoom-dialog', ZoomDialog);
}

/**
 * Get the most visible element from a list of elements.
 * @param {HTMLElement[]} elements - The elements to get the most visible element from.
 * @returns {Promise<HTMLElement>} A promise that resolves to the most visible element.
 */
function getMostVisibleElement(elements) {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce((prev, current) =>
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );
        observer.disconnect();
        resolve(/** @type {HTMLElement} */ (mostVisible.target));
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
      }
    );

    for (const element of elements) {
      observer.observe(element);
    }
  });
}
