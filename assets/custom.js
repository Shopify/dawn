(function () {
  function filterImgVariant(data) {
    let variant = data.variant;
    if (variant.featured_image && variant.featured_image.alt) {
      document.querySelectorAll('[thumbnail-alt]').forEach(img => img.style.display = 'none');
      const currentImgAlt = variant.featured_image.alt
      const thumbnailSelector = `[thumbnail-alt='${currentImgAlt}']`
      document.querySelectorAll(thumbnailSelector).forEach(img => img.style.display = 'block');
    } else {
      document.querySelectorAll('[thumbnail-alt]').forEach(img => img.style.display = 'block');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    subscribe('variant-change', (data) => {
      filterImgVariant(data.data)
    });
  });

})();
