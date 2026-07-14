(function () {
  // Keeps the cart disclosure hover tooltip within the viewport.
  // On hover we measure the tooltip and set a `--cart-disclosure-tooltip-shift`
  // custom property that nudges it back into view;
  // the arrow is counter-shifted in CSS so it keeps pointing at the icon.
  const VIEWPORT_MARGIN = 16;

  function positionTooltip(button) {
    const tooltip = button.querySelector('.cart-item__disclosure-tooltip');
    if (!tooltip) return;

    // Reset before measuring so we read the natural, centered position.
    tooltip.style.setProperty('--cart-disclosure-tooltip-shift', '0px');

    const rect = tooltip.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    let shift = 0;

    if (rect.right > viewportWidth - VIEWPORT_MARGIN) {
      shift = viewportWidth - VIEWPORT_MARGIN - rect.right;
    } else if (rect.left < VIEWPORT_MARGIN) {
      shift = VIEWPORT_MARGIN - rect.left;
    }

    tooltip.style.setProperty('--cart-disclosure-tooltip-shift', `${Math.round(shift)}px`);
  }

  function onPointerOver(event) {
    const button = event.target.closest?.('.cart-item__disclosure');
    if (!button || button.dataset.tooltipPositioned === 'true') return;

    button.dataset.tooltipPositioned = 'true';
    positionTooltip(button);
  }

  function onPointerOut(event) {
    const button = event.target.closest?.('.cart-item__disclosure');
    if (button && !button.contains(event.relatedTarget)) {
      delete button.dataset.tooltipPositioned;
    }
  }

  document.addEventListener('pointerover', onPointerOver);
  document.addEventListener('pointerout', onPointerOut);
})();
