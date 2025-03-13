/**
 * Variant Selection Listener
 * - Listens for changes in variant selection and dispatches a `variant:change` event.
 * - Ensures compatibility with AJAX updates by attaching to `document`.
 * - Optimized to prevent unnecessary event listeners and redundant DOM queries.
 * - Implements error handling for missing or invalid variant data.
 */

document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('variant-selects')) return;

  document.addEventListener('change', () => {
    try {
      const selectedVariantData = document.querySelector('[data-selected-variant]');
      if (!selectedVariantData) return;

      const variantJSON = JSON.parse(selectedVariantData.innerText);
      if (!variantJSON?.id) return;

      document.dispatchEvent(
        new CustomEvent('variant:change', {
          detail: {
            id: variantJSON.id,
            available: variantJSON.available,
            name: variantJSON.title,
            price: variantJSON.price,
            image: variantJSON.featured_image?.src ? variantJSON.featured_image.src : '',
          },
        })
      );
    } catch (error) {
      console.error(`[ERROR] Variant selection failed: ${error.message}`);
    }
  });
});
