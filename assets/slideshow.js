import { Component } from '@theme/component';
import {
  center,
  closest,
  clamp,
  getVisibleElements,
  mediaQueryLarge,
  prefersReducedMotion,
  preventDefault,
  viewTransition,
  scheduler,
} from '@theme/utilities';
import { Scroller, scrollIntoView } from '@theme/scrolling';
import { SlideshowSelectEvent } from '@theme/events';

// The threshold for determining visibility of slides.
const SLIDE_VISIBLITY_THRESHOLD = 0.7;

/**
 * Slideshow custom element that allows sliding between content.
 *
 * @typedef {Object} Refs
 * @property {HTMLElement} scroller
 * @property {HTMLElement} slideshowContainer
 * @property {HTMLElement[]} [slides]
 * @property {HTMLElement} [current]
 * @property {HTMLElement[]} [thumbnails]
 * @property {HTMLElement[]} [dots]
 * @property {HTMLButtonElement} [previous]
 * @property {HTMLButtonElement} [next]
 *
 * @extends {Component<Refs>}
 */
export class Slideshow extends Component {
  static get observedAttributes() {
    return ['initial-slide'];
  }

  /**
   * @param {string} name
   * @param {string} oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    // Collection page filtering will Morph slideshow galleries in place, updating
    // the slideshow[initial-slide] and slideshow-slide[hidden] attributes.
    // We need to re-select() the slide after the morph is complete, but not before
    // slideshow-slide elements have their [hidden] attribute updated.
    if (name === 'initial-slide' && oldValue !== newValue) {
      queueMicrotask(() => {
        // Only select if the component is connected and initialized
        if (!this.isConnected || !this.#scroll || !this.refs.slides) return;
        const index = parseInt(newValue, 10) || 0;
        const slide_id = this.refs.slides[index]?.getAttribute('slide-id');
        if (slide_id) {
          this.select({ id: slide_id }, undefined, { animate: false });
        }
      });
    }
  }

  requiredRefs = ['scroller'];

  async connectedCallback() {
    super.connectedCallback();

    // Wait for any in-progress view transitions to finish
    if (viewTransition.current) {
      await viewTransition.current;
      // It's possible that the slideshow was disconnected before the view transition finished
      if (!this.isConnected) return;
    }

    const { scroller } = this.refs;
    this.#scroll = new Scroller(scroller, {
      onScroll: this.#handleScroll,
      onScrollStart: this.#onTransitionInit,
      onScrollEnd: this.#onTransitionEnd,
    });

    scroller.addEventListener('mousedown', this.#handleMouseDown);

    this.addEventListener('mouseenter', this.suspend);
    this.addEventListener('mouseleave', this.resume);
    this.addEventListener('pointerenter', this.#handlePointerEnter);
    document.addEventListener('visibilitychange', this.#handleVisibilityChange);

    this.#updateControlsVisibility();

    this.disabled = this.isNested || this.disabled;

    this.resume();

    this.current = this.initialSlideIndex;

    // Batch reads and writes to the DOM
    scheduler.schedule(() => {
      let visibleSlidesAmount = 0;
      const initialSlideId = this.initialSlide?.getAttribute('slide-id');
      if (this.initialSlideIndex !== 0 && initialSlideId) {
        this.select({ id: initialSlideId }, undefined, { animate: false });
        visibleSlidesAmount = 1;
      } else {
        visibleSlidesAmount = this.#updateVisibleSlides();
        if (visibleSlidesAmount === 0) {
          this.select(0, undefined, { animate: false });
          visibleSlidesAmount = 1;
        }
      }

      this.#resizeObserver = new ResizeObserver(async () => {
        if (viewTransition.current) await viewTransition.current;

        if (visibleSlidesAmount > 1) {
          this.#updateVisibleSlides();
        }

        if (this.hasAttribute('auto-hide-controls')) {
          this.#updateControlsVisibility();
        }
      });

      this.#resizeObserver.observe(this.refs.slideshowContainer);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    const { scroller } = this.refs;

    scroller.removeEventListener('mousedown', this.#handleMouseDown);
    this.removeEventListener('mouseenter', this.suspend);
    this.removeEventListener('mouseleave', this.resume);
    this.removeEventListener('pointerenter', this.#handlePointerEnter);
    document.removeEventListener('visibilitychange', this.#handleVisibilityChange);
    this.#scroll?.destroy();

    if (this.#resizeObserver) {
      this.#resizeObserver.disconnect();
    }
  }

  /** Indicates whether the slideshow is nested inside another slideshow. */
  get isNested() {
    return this.parentElement?.closest('slideshow-component') !== null;
  }

  get initialSlide() {
    return this.refs.slides?.[this.initialSlideIndex];
  }

  /**
   * Selects a slide based on the input index.
   * @param {number|string|{id: string}} input - The index or id of the slide to select.
   * @param {Event} [event] - The event that triggered the selection.
   * @param {Object} [options] - The options for the selection.
   * @param {boolean} [options.animate=true] - Whether to animate the selection.
   */
  async select(input, event, options = {}) {
    if (this.#disabled || !this.refs.slides?.length) return;

    for (const slide of this.refs.slides) {
      if (slide.hasAttribute('reveal')) {
        slide.removeAttribute('reveal');
        slide.setAttribute('aria-hidden', 'true');
      }
    }

    // Figure out the raw desired index (could be -1 if user is on first slide and clicks prev)
    let requestedIndex = (() => {
      if (typeof input === 'number') return input;
      if (typeof input === 'string') return parseInt(input, 10);
      if ('id' in input) {
        const requestedSlide = this.refs.slides.find((slide) => slide.getAttribute('slide-id') == input.id);

        if (!requestedSlide || !this.slides) return;

        // Force the slide to be revealed if it is hidden
        if (requestedSlide.hasAttribute('hidden')) {
          requestedSlide.setAttribute('reveal', '');
          requestedSlide.setAttribute('aria-hidden', 'false');
        }

        return this.slides.indexOf(requestedSlide);
      }
    })();

    // Guard if invalid
    if (requestedIndex === undefined || isNaN(requestedIndex)) return;

    const { slides } = this;

    if (!slides?.length) return;
    if (!this.infinite) requestedIndex = clamp(requestedIndex, 0, slides.length - 1);

    event?.preventDefault();

    const { current } = this;
    const { animate = true } = options;
    const lastIndex = slides.length - 1;

    // Decide the actual target index (clamp for infinite loop)
    let index = requestedIndex;
    if (requestedIndex < 0) index = lastIndex;
    else if (requestedIndex > lastIndex) index = 0;

    const isAdjacentSlide = Math.abs(index - current) <= 1 && requestedIndex >= 0 && requestedIndex <= lastIndex;
    const { visibleSlides } = this;
    const instant = prefersReducedMotion() || !animate;

    // If jump is more than 1 or we looped, do the placeholder + reorder trick
    if (!instant && !isAdjacentSlide && visibleSlides.length === 1) {
      this.#disabled = true;
      await this.#scroll.finished; // ensure we're not mid-scroll

      const targetSlide = slides[index];
      const currentSlide = slides[current];
      if (!targetSlide || !currentSlide) return;

      // Create a placeholder in the original DOM position of targetSlide
      const placeholder = document.createElement('slideshow-slide');
      targetSlide.before(placeholder);

      // Decide whether targetSlide goes before or after currentSlide
      // so that we scroll a short distance in the correct direction
      if (requestedIndex < current) {
        currentSlide.before(targetSlide);
      } else {
        currentSlide.after(targetSlide);
      }

      if (current === 0) this.#scroll.to(currentSlide, { instant: true });

      // Once that scroll finishes, restore the DOM
      queueMicrotask(async () => {
        await this.#scroll.finished;
        this.#disabled = false;

        // Restore the slide back to its original position. This triggers a scroll event.
        placeholder.replaceWith(targetSlide);

        // Instantly scroll to the target slide as its position will have changed
        this.#scroll.to(targetSlide, { instant: true });
      });
    }

    const slide = slides[index];
    if (!slide) return;

    const previousIndex = this.current;

    slide.setAttribute('aria-hidden', 'false');
    this.#scroll.to(slide, { instant });
    this.current = this.slides?.indexOf(slide) || 0;

    this.#centerSelectedThumbnail(index, instant ? 'instant' : 'smooth');

    this.dispatchEvent(
      new SlideshowSelectEvent({
        index,
        previousIndex,
        userInitiated: event != null,
        trigger: 'select',
        slide,
        id: slide.getAttribute('slide-id'),
      })
    );
  }

  /**
   * Advances to the next slide.
   * @param {Event} [event] - The event that triggered the next slide.
   * @param {Object} [options] - The options for the next slide.
   * @param {boolean} [options.animate=true] - Whether to animate the next slide.
   */
  next(event, options) {
    event?.preventDefault();
    this.select(this.nextIndex, event, options);
  }

  /**
   * Goes back to the previous slide.
   * @param {Event} [event] - The event that triggered the previous slide.
   * @param {Object} [options] - The options for the previous slide.
   * @param {boolean} [options.animate=true] - Whether to animate the previous slide.
   */
  previous(event, options) {
    event?.preventDefault();
    this.select(this.previousIndex, event, options);
  }

  /**
   * Starts automatic slide playback.
   * @param {number} [interval] - The time interval in seconds between slides.
   */
  play(interval = this.autoplayInterval) {
    if (this.#interval) return;

    this.paused = false;

    this.#interval = setInterval(() => {
      if (this.matches(':hover') || document.hidden) return;

      this.next();
    }, interval);
  }

  /**
   * Pauses automatic slide playback.
   */
  pause() {
    this.paused = true;
    this.suspend();
  }

  get paused() {
    return this.hasAttribute('paused');
  }

  set paused(value) {
    if (value) {
      this.setAttribute('paused', '');
    } else {
      this.removeAttribute('paused');
    }
  }

  /**
   * Suspends automatic slide playback.
   */
  suspend() {
    clearInterval(this.#interval);
    this.#interval = undefined;
  }

  /**
   * Resumes automatic slide playback if autoplay is enabled.
   */
  resume() {
    if (!this.autoplay || this.paused) return;

    this.pause();
    this.play();
  }

  get autoplay() {
    return Boolean(this.autoplayInterval);
  }

  get autoplayInterval() {
    const interval = this.getAttribute('autoplay');
    const value = parseInt(`${interval}`, 10);

    if (Number.isNaN(value)) return undefined;

    return value * 1000;
  }

  /**
   * The current slide index.
   * @type {number}
   */
  #current = 0;

  get current() {
    return this.#current;
  }

  /**
   * Sets the current slide index and update the DOM
   * @type {number}
   */
  set current(value) {
    const { current, thumbnails, dots, slides, previous, next } = this.refs;

    this.#current = value;

    if (current) current.textContent = `${value + 1}`;

    for (const controls of [thumbnails, dots]) {
      controls?.forEach((el, i) => el.setAttribute('aria-selected', `${i === value}`));
    }

    if (previous) previous.disabled = Boolean(!this.infinite && value === 0);
    if (next) next.disabled = Boolean(!this.infinite && slides && this.nextIndex >= slides.length);
  }

  get infinite() {
    return this.getAttribute('infinite') != null;
  }

  get visibleSlides() {
    return getVisibleElements(this.refs.scroller, this.slides, SLIDE_VISIBLITY_THRESHOLD, 'x');
  }

  get previousIndex() {
    const { current, visibleSlides } = this;
    const modifier = visibleSlides.length > 1 ? visibleSlides.length : 1;

    return current - modifier;
  }

  get nextIndex() {
    const { current, visibleSlides } = this;
    const modifier = visibleSlides.length > 1 ? visibleSlides.length : 1;

    return current + modifier;
  }

  get atStart() {
    const { current, slides } = this;

    return slides?.length ? current === 0 : false;
  }

  get atEnd() {
    const { current, slides } = this;

    return slides?.length ? current === slides.length - 1 : false;
  }

  /**
   * Sets the disabled attribute.
   * @param {boolean} value - The value to set the disabled attribute to.
   */
  set disabled(value) {
    this.setAttribute('disabled', String(value));
  }
  /**
   * Whether the slideshow is disabled.
   * @type {boolean}
   */
  get disabled() {
    return (
      this.getAttribute('disabled') === 'true' || (this.hasAttribute('mobile-disabled') && !mediaQueryLarge.matches)
    );
  }

  /**
   * Indicates whether the slideshow is temporarily disabled (e.g., during infinite loop transition).
   * @type {boolean}
   */
  #disabled = false;

  /**
   * The interval ID for automatic playback.
   * @type {number|undefined}
   */
  #interval = undefined;

  /**
   * The Scroller instance that manages scrolling.
   * @type {Scroller}
   */
  #scroll;

  /**
   * The ResizeObserver instance for monitoring scroller size changes
   * @type {ResizeObserver}
   */
  #resizeObserver;

  /**
   * Callback invoked on user initiated scroll to sync the current slide index
   * and emit a slide change event if the index has changed.
   */
  #handleScroll = () => {
    const previousIndex = this.#current;
    const index = this.#sync();

    if (index === previousIndex) return;

    const slide = this.slides?.[index];
    if (!slide) return;

    this.dispatchEvent(
      new SlideshowSelectEvent({
        index,
        previousIndex,
        userInitiated: true,
        trigger: 'scroll',
        slide,
        id: slide.getAttribute('slide-id'),
      })
    );
  };

  #onTransitionInit = () => {
    this.setAttribute('transitioning', '');
  };

  #onTransitionEnd = () => {
    this.#updateVisibleSlides();
    this.removeAttribute('transitioning');
  };

  /**
   * Synchronizes the scroll position and updates the current slide index.
   * @returns {number} The index of the current slide.
   */
  #sync = () => {
    const { slides } = this;
    if (!slides) return (this.current = 0);

    const visibleSlides = this.visibleSlides;

    if (!visibleSlides.length) return this.current;

    const { axis } = this.#scroll;
    const { scroller } = this.refs;
    const centers = visibleSlides.map((slide) => center(slide, axis));
    const referencePoint = visibleSlides.length > 1 ? scroller.getBoundingClientRect()[axis] : center(scroller, axis);
    const closestCenter = closest(centers, referencePoint);
    const closestVisibleSlide = visibleSlides[centers.indexOf(closestCenter)];

    if (!closestVisibleSlide) return (this.current = 0);

    const index = slides.indexOf(closestVisibleSlide);

    return (this.current = index);
  };

  #dragging = false;

  /**
   * Handles the 'mousedown' event to start dragging slides.
   * @param {MouseEvent} event - The mousedown event.
   */
  #handleMouseDown = (event) => {
    const { slides } = this;

    if (!slides || slides.length <= 1) return;
    if (!(event.target instanceof Element)) return;
    if (this.disabled || this.#dragging) return;

    // Check if the event target is within a 3D model interactive element
    // This prevents the slideshow from capturing drag events when interacting with 3D models
    if (event.target.closest('model-viewer')) {
      return;
    }

    event.preventDefault();
    // Store initial position but don't start handling yet
    const { axis } = this.#scroll;
    const startPosition = event[axis];

    const controller = new AbortController();
    const { signal } = controller;
    const startTime = performance.now();
    let previous = startPosition;
    let velocity = 0;
    let moved = false;
    let distanceTravelled = 0;

    this.#dragging = true;

    /**
     * Handles the 'pointermove' event to update the scroll position.
     * @param {PointerEvent} event - The pointermove event.
     */
    const onPointerMove = (event) => {
      const current = event[axis];
      const initialDelta = startPosition - current;

      if (!initialDelta) return;

      if (!moved) {
        moved = true;
        this.setPointerCapture(event.pointerId);

        // Prevent clicks once the user starts dragging
        document.addEventListener('click', preventDefault, { once: true, signal });

        const movingRight = initialDelta < 0;
        const movingLeft = initialDelta > 0;

        // Check if the current slideshow should handle this drag
        const closestSlideshow = this.parentElement?.closest('slideshow-component');
        const isNested = closestSlideshow instanceof Slideshow && closestSlideshow !== this;
        const cannotMoveInDirection = (movingRight && this.atStart) || (movingLeft && this.atEnd);

        // Abort and let the parent slideshow handle the drag if we're moving in a direction where nested slideshow can't move
        if (isNested && cannotMoveInDirection) {
          controller.abort();
          return;
        }

        this.pause();
        this.setAttribute('dragging', '');
      }

      // Stop the event from bubbling up to parent slideshow components
      event.stopImmediatePropagation();

      const delta = previous - current;
      const timeDelta = performance.now() - startTime;
      velocity = Math.round((delta / timeDelta) * 1000);
      previous = current;
      distanceTravelled += Math.abs(delta);

      this.#scroll.by(delta, { instant: true });
    };

    /**
     * Handles the 'pointerup' event to stop dragging slides.
     * @param {PointerEvent} event - The pointerup event.
     */
    const onPointerUp = async (event) => {
      controller.abort();
      const { current, slides } = this;
      const { scroller } = this.refs;

      this.#dragging = false;

      if (!slides?.length || !scroller) return;

      const direction = Math.sign(velocity);
      const next = this.#sync();

      const modifier = current !== next || Math.abs(velocity) < 10 || distanceTravelled < 10 ? 0 : direction;
      const newIndex = clamp(next + modifier, 0, slides.length - 1);

      const newSlide = slides[newIndex];
      const currentIndex = this.current;

      if (!newSlide) throw new Error(`Slide not found at index ${newIndex}`);

      this.#scroll.to(newSlide);

      this.removeAttribute('dragging');
      this.releasePointerCapture(event.pointerId);

      this.#centerSelectedThumbnail(newIndex);

      this.dispatchEvent(
        new SlideshowSelectEvent({
          index: newIndex,
          previousIndex: currentIndex,
          userInitiated: true,
          trigger: 'drag',
          slide: newSlide,
          id: newSlide.getAttribute('slide-id'),
        })
      );

      this.current = newIndex;

      await this.#scroll.finished;

      // It's possible that the user started dragging again before the scroll finished
      if (this.#dragging) return;

      this.#scroll.snap = true;
      this.resume();
    };

    this.#scroll.snap = false;

    document.addEventListener('pointermove', onPointerMove, { signal });
    document.addEventListener('pointerup', onPointerUp, { signal });
    /**
     * pointerDown calls onPointerUp to fix an issue where the first tap-and-drag
     * on the zoom dialog is captured by the pointerMove/pointerUp listeners,
     * sometimes causing the slideshow to change slides unexpectedly
     */
    document.addEventListener('pointerdown', onPointerUp, { signal });
    document.addEventListener('pointercancel', onPointerUp, { signal });
    document.addEventListener('pointercapturelost', onPointerUp, { signal });
  };

  #handlePointerEnter = () => {
    this.setAttribute('actioned', '');
  };

  get slides() {
    return this.refs.slides?.filter((slide) => !slide.hasAttribute('hidden') || slide.hasAttribute('reveal'));
  }

  /**
   * The initial slide index.
   * @type {number}
   */
  get initialSlideIndex() {
    const initialSlide = this.getAttribute('initial-slide');
    if (initialSlide == null) return 0;

    return parseInt(initialSlide, 10);
  }

  /**
   * Pause the slideshow when the page is hidden.
   */
  #handleVisibilityChange = () => (document.hidden ? this.pause() : this.resume());

  #updateControlsVisibility() {
    if (!this.hasAttribute('auto-hide-controls')) return;

    const { scroller, slideshowControls } = this.refs;

    if (!(slideshowControls instanceof HTMLElement)) return;

    slideshowControls.hidden = scroller.scrollWidth <= scroller.offsetWidth;
  }

  /**
   * Centers the selected thumbnail in the thumbnails container
   * @param {number} index - The index of the selected thumbnail
   * @param {ScrollBehavior} [behavior] - The scroll behavior.
   */
  #centerSelectedThumbnail(index, behavior = 'smooth') {
    const selectedThumbnail = this.refs.thumbnails?.[index];
    if (!selectedThumbnail) return;

    const { thumbnailsContainer } = this.refs;
    if (!thumbnailsContainer || !(thumbnailsContainer instanceof HTMLElement)) return;

    const { slideshowControls } = this.refs;
    if (!slideshowControls || !(slideshowControls instanceof HTMLElement)) return;

    scrollIntoView(selectedThumbnail, {
      ancestor: thumbnailsContainer,
      behavior,
      block: 'center',
      inline: 'center',
    });
  }

  #updateVisibleSlides() {
    const { slides } = this;
    if (!slides || !slides.length) return 0;

    const visibleSlides = this.visibleSlides;

    // Batch writes to the DOM
    scheduler.schedule(() => {
      // Update aria-hidden based on visibility
      slides.forEach((slide) => {
        const isVisible = visibleSlides.includes(slide);
        slide.setAttribute('aria-hidden', `${!isVisible}`);
      });
    });

    return visibleSlides.length;
  }
}

if (!customElements.get('slideshow-component')) {
  customElements.define('slideshow-component', Slideshow);
}
