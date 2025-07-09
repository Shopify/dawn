import { Component } from '@theme/component';
import { closest, clamp, center, getVisibleElements } from '@theme/utilities';
import { SlideshowSelectEvent } from '@theme/events';
import { Scroller } from '@theme/scrolling';
import { cycleFocus } from '@theme/focus';

/**
 * Collection links component
 *
 * @typedef {Object} Refs
 * @property {HTMLElement} container
 * @property {HTMLElement[]} [images]
 * @property {HTMLElement[]} [links]
 * @property {import('slideshow').Slideshow} slideshow
 *
 * @extends {Component<Refs>}
 */
class CollectionLinks extends Component {
  requiredRefs = ['container'];

  /** @type {Scroller} */
  #scroll;

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener('keydown', this.#handleKeydown);
    this.addEventListener(SlideshowSelectEvent.eventName, this.#handleSlideshowSelect);

    this.#scroll = new Scroller(this.refs.container, { onScroll: this.#handleScroll });
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.#scroll.destroy();
  }

  get links() {
    return this.refs.links || [];
  }

  get currentIndex() {
    return this.links.findIndex((link) => link.getAttribute('aria-current') === 'true');
  }

  /**
   * Public method to select a collection link
   *
   * @param {number} targetIndex
   * @param {PointerEvent} [event]
   */
  select(targetIndex, event) {
    this.#updateSelectedLink(targetIndex);
    this.refs.slideshow?.select(targetIndex, undefined, { animate: false });
    if (event) this.#revealImage(event);
  }

  /**
   * Update the selected link
   *
   * @param {number} index
   */
  #updateSelectedLink(index) {
    const { links } = this;
    const selectedIndex = clamp(index, 0, links.length - 1);

    for (const [index, link] of links.entries()) {
      link.setAttribute('aria-current', Boolean(index === selectedIndex).toString());
    }
  }

  /**
   * Handle slideshow select event
   *
   * @param {SlideshowSelectEvent} event
   */
  #handleSlideshowSelect = async (event) => {
    if (!event.detail.userInitiated) return;

    const { index } = event.detail;
    if (index === this.currentIndex) return;

    const selectedLink = this.links[index];
    if (!selectedLink) return;

    this.#updateSelectedLink(index);

    this.#scroll.to(selectedLink);
  };

  /**
   * Cycle focus to the next or previous link
   *
   * @param {KeyboardEvent} event
   */
  #handleKeydown(event) {
    let modifier = 0;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        modifier = 1;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        modifier = -1;
        break;
    }

    if (!modifier) return;

    event.preventDefault();
    cycleFocus(this.links, modifier);
  }

  /**
   * Handle scroll event
   */
  #handleScroll = () => {
    const { links } = this;
    const { container } = this.refs;
    const visibleLinks = getVisibleElements(this, links, 0.1);

    if (visibleLinks.length === 0) return;
    const centers = visibleLinks.map((link) => center(link, 'x'));
    const referencePoint = center(container, 'x');
    const closestCenter = closest(centers, referencePoint);
    const closestVisibleLink = visibleLinks[centers.indexOf(closestCenter)];

    if (!closestVisibleLink) return;

    const index = links.indexOf(closestVisibleLink);

    this.select(index);
  };

  /**
   * Reveal an image
   *
   * @param {Event} event
   */
  #revealImage(event) {
    if (!(event instanceof PointerEvent)) return;
    if (event.pointerType === 'touch') return;

    const { target } = event;
    if (!(target instanceof HTMLElement)) return;

    const { images } = this.refs;
    const index = this.links.indexOf(target);
    const selectedImage = images?.[index];

    if (!selectedImage) return;

    /** @param {PointerEvent} event */
    const updateImagePosition = (event) => {
      const imageHeight = selectedImage.offsetHeight;
      const imageWidth = selectedImage.offsetWidth;
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const offset = 15;

      const wouldBeCutOff = event.clientY + imageHeight + offset > viewportHeight;
      const yPos = wouldBeCutOff ? event.clientY - imageHeight - offset : event.clientY + offset;

      const xPos = Math.min(Math.max(offset, event.clientX + offset), viewportWidth - imageWidth - offset);

      selectedImage.style.setProperty('--x', `${xPos}px`);
      selectedImage.style.setProperty('--y', `${yPos}px`);
    };

    const reset = () => {
      selectedImage.removeAttribute('reveal');
      target.removeEventListener('mousemove', updateImagePosition);
    };

    updateImagePosition(event);

    for (const image of images) {
      if (image === selectedImage) {
        image.setAttribute('reveal', '');
      } else {
        image.removeAttribute('reveal');
      }
    }

    target.addEventListener('mousemove', updateImagePosition);
    target.addEventListener('mouseleave', reset, { once: true });
  }
}

if (!customElements.get('collection-links-component')) {
  customElements.define('collection-links-component', CollectionLinks);
}
