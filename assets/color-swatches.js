// Wait for the document to load
document.addEventListener('DOMContentLoaded', function () {
    // Find all color option dropdowns or inputs
    const colorOptions = document.querySelectorAll('.single-option-selector[data-option="Color scheme"]');

    // Loop through each color option
    colorOptions.forEach(function (colorOption) {
        const productForm = colorOption.closest('form[action*="/cart/add"]');
        const colorSwatchesContainer = document.createElement('div');
        colorSwatchesContainer.classList.add('color-swatches');

        // Get the available color variants
        const variants = JSON.parse(productForm.querySelector('[type="application/json"]').innerHTML);
        const colorVariants = variants.filter(variant => variant.available);

        // Create color swatches
        colorVariants.forEach(function (variant) {
            const swatch = document.createElement('span');
            swatch.classList.add('color-swatch');
            const colors = variant.option1.split('/');
            swatch.style.setProperty('--color1', colors[0]);
            swatch.style.setProperty('--color2', colors[1] || colors[0]);
            swatch.dataset.variantId = variant.id;
            swatch.addEventListener('click', function () {
                // Update the selected variant
                const selectedVariantId = this.dataset.variantId;
                productForm.querySelector('input[name="id"]').value = selectedVariantId;

                // Remove active class from previously active swatch
                const activeSwatches = colorSwatchesContainer.querySelectorAll('.color-swatch.active');
                activeSwatches.forEach(function (activeSwatch) {
                    activeSwatch.classList.remove('active');
                });

                // Add active class to the clicked swatch
                this.classList.add('active');
            });

            colorSwatchesContainer.appendChild(swatch);
        });

        // Add event listener to update swatches when variant changes
        productForm.addEventListener('variant_change', function (event) {
            const selectedVariantId = event.detail.variant.id;
            const activeSwatches = colorSwatchesContainer.querySelectorAll('.color-swatch.active');
            activeSwatches.forEach(function (activeSwatch) {
                activeSwatch.classList.remove('active');
            });

            const selectedSwatch = colorSwatchesContainer.querySelector(`.color-swatch[data-variant-id="${selectedVariantId}"]`);
            if (selectedSwatch) {
                selectedSwatch.classList.add('active');
            }
        });

        // Replace the color option with the swatches container
        const optionContainer = colorOption.closest('.selector-wrapper');
        optionContainer.parentNode.insertBefore(colorSwatchesContainer, optionContainer);
        optionContainer.style.display = 'none';
    });
});