/**
 * Create a container and set full-size image as its background.
 * @param {HTMLImageElement} image - Image to magnify.
 * @returns {HTMLDivElement} New overlay container.
 */
function createOverlay(image) {
  const overlayImage = document.createElement('img');
  overlayImage.setAttribute('src', `${image.src}`);
  /** @type {HTMLDivElement} */
  overlay = document.createElement('div'); // TODO: Don't use global variable
  prepareOverlay(overlay, overlayImage);

  image.style.opacity = '50%';
  toggleLoadingSpinner(image);

  overlayImage.onload = () => {
    toggleLoadingSpinner(image);
    image.parentElement.insertBefore(overlay, image);
    image.style.opacity = '100%';
  };

  return overlay;
}

/**
 * Prepare overlay container classes and styles.
 * @param {HTMLDivElement} container - Overlay container element.
 * @param {HTMLImageElement} image - Overlay image element.
 */
function prepareOverlay(container, image) {
  container.setAttribute('class', 'image-magnify-full-size');
  container.setAttribute('aria-hidden', 'true');
  container.style.backgroundImage = `url('${image.src}')`;
  container.style.backgroundColor = 'var(--gradient-background)';
}

/**
 * Toggle the loading spinner.
 * @param {HTMLImageElement} image - Image to toggle loading spinner for.
 */
function toggleLoadingSpinner(image) {
  const loadingSpinner = image.parentElement.parentElement.querySelector(`.loading__spinner`);
  loadingSpinner.classList.toggle('hidden');
}

/**
 * Move the background image with the mouse hover position.
 * @param {HTMLImageElement} image - Image to magnify.
 * @param {MouseEvent} event - Mouse event.
 * @param {number} zoomRatio - Zoom ratio.
 */
function moveWithHover(image, event, zoomRatio) {
  // calculate mouse position
  const ratio = image.height / image.width;
  /** @type {HTMLElement} */
  const container = event.target.getBoundingClientRect();
  const xPosition = event.clientX - container.left;
  const yPosition = event.clientY - container.top;
  const xPercent = `${xPosition / (image.clientWidth / 100)}%`;
  const yPercent = `${yPosition / ((image.clientWidth * ratio) / 100)}%`;

  // determine what to show in the frame
  overlay.style.backgroundPosition = `${xPercent} ${yPercent}`;
  overlay.style.backgroundSize = `${image.width * zoomRatio}px`;
}

/**
 * Magnify image. Create overlay and move background image with mouse hover.
 * @param {HTMLImageElement} image - Image to magnify.
 * @param {number} zoomRatio - Zoom ratio.
 */
function magnify(image, zoomRatio) {
  const overlay = createOverlay(image);
  overlay.onclick = () => overlay.remove();
  overlay.onmousemove = (event) => moveWithHover(image, event, zoomRatio);
  overlay.onmouseleave = () => overlay.remove();
}

/**
 * Enable zoom on image hover.
 * For each image with class 'image-magnify-hover', add event listeners to magnify and move with hover.
 * @param {number} zoomRatio - Zoom ratio.
 */
function enableZoomOnHover(zoomRatio) {
  const images = document.querySelectorAll('.image-magnify-hover');
  images.forEach((image) => {
    image.onclick = (event) => {
      magnify(image, zoomRatio);
      moveWithHover(image, event, zoomRatio);
    };
  });
}

enableZoomOnHover(2);
