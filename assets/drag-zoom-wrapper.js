import { clamp, preventDefault, isMobileBreakpoint } from './utilities.js';

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const DEFAULT_ZOOM = 1.5;

export class DragZoomWrapper extends HTMLElement {
  #controller = new AbortController();
  /** @type {number} */
  #scale = DEFAULT_ZOOM;
  /** @type {number} */
  #initialDistance = 0;
  /** @type {number} */
  #startScale = DEFAULT_ZOOM;
  /** @type {Point} */
  #translate = { x: 0, y: 0 };
  /** @type {Point} */
  #startPosition = { x: 0, y: 0 };
  /** @type {Point} */
  #startTranslate = { x: 0, y: 0 };
  /** @type {boolean} */
  #isDragging = false;
  /** @type {boolean} */
  #initialized = false;
  /** @type {number | null} */
  #animationFrame = null;

  get #image() {
    return this.querySelector('img');
  }

  connectedCallback() {
    if (!this.#image) return;

    this.#initResizeListener();
    if (!isMobileBreakpoint()) return;

    this.#initEventListeners();
    this.#updateTransform();
  }

  #initResizeListener() {
    this.#resizeObserver.observe(this);
  }

  #initEventListeners() {
    if (this.#initialized) return;
    this.#initialized = true;
    const { signal } = this.#controller;
    const options = { passive: false, signal };

    this.addEventListener('touchstart', this.#handleTouchStart, options);
    this.addEventListener('touchmove', this.#handleTouchMove, options);
    this.addEventListener('touchend', this.#handleTouchEnd, options);
    this.#image?.addEventListener('load', this.#updateTransform, { signal });
  }

  disconnectedCallback() {
    this.#controller.abort();
    this.#resizeObserver.disconnect();
    this.#cancelAnimationFrame();
  }

  #handleResize = () => {
    if (!this.#initialized && isMobileBreakpoint()) {
      this.#initEventListeners();
    }
    if (this.#initialized) {
      this.#requestUpdateTransform();
    }
  };

  #resizeObserver = new ResizeObserver(this.#handleResize);

  /**
   * @param {TouchEvent} event
   */
  #handleTouchStart = (event) => {
    preventDefault(event);

    if (event.touches.length === 2) {
      const [point1, point2] = Array.from(event.touches).map(touchToPoint);
      if (!point1 || !point2) return;
      this.#startZoomGesture(point1, point2);
    } else if (event.touches.length === 1) {
      const point = touchToPoint(event.touches[0]);
      if (!point) return;

      this.#startDragGesture(point);
    }
  };

  /**
   * Start a zoom gesture with two points
   * @param {Point} point1
   * @param {Point} point2
   */
  #startZoomGesture(point1, point2) {
    this.#initialDistance = getDistance(point1, point2);
    this.#startScale = this.#scale;
    this.#isDragging = false;
  }

  /**
   * Start a drag gesture with a single point
   * @param {Point} point
   */
  #startDragGesture(point) {
    this.#startPosition = { x: point.x, y: point.y };
    this.#startTranslate = { x: this.#translate.x, y: this.#translate.y };
    this.#isDragging = true;
  }

  /**
   * @param {TouchEvent} event
   */
  #handleTouchMove = (event) => {
    preventDefault(event);

    const isZooming = event.touches.length === 2;
    const isDragging = event.touches.length === 1 && this.#isDragging;

    if (isZooming) {
      this.#processZoomGesture(event);
    } else if (isDragging) {
      this.#processDragGesture(event);
    }
  };

  /**
   * Process zoom gesture from touch event
   * @param {TouchEvent} event
   */
  #processZoomGesture(event) {
    const [point1, point2] = Array.from(event.touches).map(touchToPoint);
    if (!point1 || !point2) return;

    const currentMidpoint = getMidpoint(point1, point2);
    const currentDistance = getDistance(point1, point2);
    const oldScale = this.#scale;

    // Calculate and apply new scale
    const newScale = (currentDistance / this.#initialDistance) * this.#startScale;
    this.#scale = clamp(newScale, MIN_ZOOM, MAX_ZOOM);

    // Adjust translation to keep the pinch midpoint stationary
    const containerCenter = {
      x: this.clientWidth / 2,
      y: this.clientHeight / 2,
    };

    const distanceFromCenter = {
      x: currentMidpoint.x - containerCenter.x,
      y: currentMidpoint.y - containerCenter.y,
    };

    // Calculate how the image position needs to change to keep the midpoint stationary
    // The correction factor accounts for the change in scale
    const scaleDelta = this.#scale / oldScale - 1.0;

    // Apply correction to prevent zooming on the opposite side of the midpoint
    this.#translate.x -= (distanceFromCenter.x * scaleDelta) / this.#scale;
    this.#translate.y -= (distanceFromCenter.y * scaleDelta) / this.#scale;

    this.#requestUpdateTransform();
    this.#isDragging = false;
  }

  /**
   * Process drag gesture from touch event
   * @param {TouchEvent} event
   */
  #processDragGesture(event) {
    const point = touchToPoint(event.touches[0]);
    if (!point) return;

    // Calculate new translation
    this.#translate = {
      x: this.#startTranslate.x + (point.x - this.#startPosition.x) / this.#scale,
      y: this.#startTranslate.y + (point.y - this.#startPosition.y) / this.#scale,
    };

    this.#requestUpdateTransform();
  }

  /**
   * @param {TouchEvent} event
   */
  #handleTouchEnd = (event) => {
    if (event.touches.length === 0) {
      this.#isDragging = false;
      this.#requestUpdateTransform();
    }
  };

  /**
   * Get the minimum zoom for the image
   * @returns {number | null}
   */
  #getMinZoom = () => {
    const containerWidth = this.clientWidth;
    const containerHeight = this.clientHeight;
    const imageDimensions = this.#getImageDimensions();
    if (!imageDimensions || !containerWidth || !containerHeight) return null;
    const { width: imageWidth, height: imageHeight } = imageDimensions;

    // Calculate minimum zoom to make image fit container
    // Add small buffer to avoid showing whitespace at edges
    return Math.max(containerWidth / imageWidth, containerHeight / imageHeight) + 0.001;
  };

  /**
   * Get the dimensions of the image
   * @returns {{ width: number, height: number } | null}
   */
  #getImageDimensions = () => {
    const containerRect = this.getBoundingClientRect();
    if (!this.#image) return null;
    const { naturalWidth, naturalHeight } = this.#image;
    const containerWidth = this.clientWidth;
    const containerHeight = this.clientHeight;

    if (!naturalWidth || !naturalHeight || !containerWidth || !containerHeight) return null;

    const containerAspect = containerRect.width / containerRect.height;
    const naturalAspect = naturalWidth / naturalHeight;

    let imageWidth, imageHeight;
    if (naturalAspect > containerAspect) {
      // Image is wider than container (relative to height)
      imageWidth = containerRect.width;
      imageHeight = imageWidth / naturalAspect;
    } else {
      // Image is taller than container (relative to width)
      imageHeight = containerRect.height;
      imageWidth = imageHeight * naturalAspect;
    }

    if (imageWidth === 0 || imageHeight === 0) return null;

    return { width: imageWidth, height: imageHeight };
  };

  /**
   * Constrain image translation to keep it within the viewport
   */
  #constrainTranslation() {
    const containerWidth = this.clientWidth;
    const containerHeight = this.clientHeight;
    if (!containerWidth || !containerHeight) return;

    const minZoom = this.#getMinZoom();
    if (!minZoom) return;

    this.#scale = clamp(this.#scale, minZoom, MAX_ZOOM);

    const imageDimensions = this.#getImageDimensions();
    if (!imageDimensions) return;

    const { width: imageWidth, height: imageHeight } = imageDimensions;

    const scaledWidth = imageWidth * this.#scale;
    const scaledHeight = imageHeight * this.#scale;

    // Calculate how much the image extends beyond container
    const excessWidth = Math.max(0, scaledWidth - containerWidth);
    const excessHeight = Math.max(0, scaledHeight - containerHeight);

    const maxTranslateX = excessWidth / (2 * this.#scale);
    const maxTranslateY = excessHeight / (2 * this.#scale);

    this.#translate.x = clamp(this.#translate.x, -maxTranslateX, maxTranslateX);
    this.#translate.y = clamp(this.#translate.y, -maxTranslateY, maxTranslateY);
  }

  /**
   * Request an animation frame to update the transform
   */
  #requestUpdateTransform = () => {
    if (!this.#animationFrame) {
      this.#animationFrame = requestAnimationFrame(this.#updateTransform);
    }
  };

  /**
   * Cancel any pending animation frame
   */
  #cancelAnimationFrame() {
    if (this.#animationFrame) {
      cancelAnimationFrame(this.#animationFrame);
      this.#animationFrame = null;
    }
  }

  #updateTransform = () => {
    this.#animationFrame = null;
    this.#constrainTranslation();
    this.style.setProperty('--drag-zoom-scale', this.#scale.toString());
    this.style.setProperty('--drag-zoom-translate-x', `${this.#translate.x}px`);
    this.style.setProperty('--drag-zoom-translate-y', `${this.#translate.y}px`);
  };

  destroy() {
    this.#controller.abort();
    this.#cancelAnimationFrame();
  }
}

if (!customElements.get('drag-zoom-wrapper')) {
  customElements.define('drag-zoom-wrapper', DragZoomWrapper);
}

/**
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */

/**
 * Convert a Touch object to a Point object
 * @param {Touch | undefined} touch
 * @returns {Point | undefined}
 */
function touchToPoint(touch) {
  if (!touch) return undefined;
  return { x: touch.clientX, y: touch.clientY };
}

/**
 * Calculate the distance between two points
 * @param {Point} point1 - First point
 * @param {Point} point2 - Second point
 * @returns {number} The distance between the points
 */
function getDistance(point1, point2) {
  const dx = point1.x - point2.x;
  const dy = point1.y - point2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Calculate the midpoint between two points
 * @param {Point} point1 - First point
 * @param {Point} point2 - Second point
 * @returns {Point} The midpoint
 */
function getMidpoint(point1, point2) {
  return {
    x: (point1.x + point2.x) / 2,
    y: (point1.y + point2.y) / 2,
  };
}
