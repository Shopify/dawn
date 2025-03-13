/**
 * Sticky Add-to-Cart with AJAX functionality for Shopify.
 * - Listens for variant changes.
 * - Updates the Sticky Add-to-Cart Bar dynamically.
 * - Uses AJAX to add items to the cart and update the Cart Drawer.
 * - Ensures quantity resets when adding via either the sticky or main Add-to-Cart button.
 */

document.addEventListener('DOMContentLoaded', () => {
  const stickyBar = document.getElementById('sticky-add-to-cart-bar');
  const stickyForm = stickyBar.querySelector('.sticky-add-to-cart-bar__form');
  const stickyAddToCartButton = stickyBar.querySelector('.sticky-add-to-cart-bar__button');
  const stickyAddToCartButtonLoadingSpinner = stickyAddToCartButton.querySelector('.loading__spinner');
  const mainForm = document.querySelector('.product-form');
  const quantityInput = stickyBar?.querySelector('.quantity__input');
  const defaultProductImage = stickyBar
    .querySelector('.sticky-add-to-cart-bar__image')
    .getAttribute('data-default-image');
  const variantInput = stickyBar.querySelector("input[name='id']");
  const stickyVariantImage = stickyBar.querySelector('.sticky-add-to-cart-bar__image');
  const priceValueElement = stickyBar.querySelector('.sticky-add-to-cart-bar__price-value');
  const stickyVariantName = stickyBar.querySelector('.sticky-add-to-cart-bar__variant-name');
  const headerElement = document.querySelector('[id$=header]');
  const cartDrawer = document.querySelector('cart-drawer');

  if (!stickyBar || !stickyForm || !mainForm) return;

  document.addEventListener('variant:change', (event) => {
    if (!event.detail || !event.detail.id) return;
    updateStickyAddToCart(event.detail);
  });

  function updateStickyAddToCart(variant) {
    if (variantInput) variantInput.value = variant.id;
    if (stickyVariantImage) {
      stickyVariantImage.src = variant.image && variant.image !== '' ? variant.image : defaultProductImage;
    }
    if (priceValueElement) {
      priceValueElement.textContent = new Intl.NumberFormat('cs-CZ', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(variant.price / 100);
    }
    if (stickyVariantName) stickyVariantName.textContent = variant.name;
    if (stickyAddToCartButton) stickyAddToCartButton.disabled = !variant.available;
  }

  mainForm.addEventListener('submit', () => resetStickyQuantityInput());

  stickyForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    stickyAddToCartButton.classList.add('loading');
    stickyAddToCartButton.setAttribute('aria-disabled', 'true');
    stickyAddToCartButtonLoadingSpinner.classList.remove('hidden');

    try {
      const response = await fetch(`/cart/add.js?sections=${Object.keys(getSectionsToUpdate()).join(',')}`, {
        method: 'POST',
        body: getFormData(),
      });

      if (!response.ok) throw new Error('Failed to add item');

      const parsedState = await response.json();
      updateCartDrawer(parsedState);
      resetStickyQuantityInput();
    } catch (error) {
      console.error('[ERROR] Failed to add item to cart:', error);
    } finally {
      stickyAddToCartButton.classList.remove('loading');
      stickyAddToCartButton.setAttribute('aria-disabled', 'false');
      stickyAddToCartButtonLoadingSpinner.classList.add('hidden');
    }
  });

  function getFormData() {
    const formData = new FormData();
    formData.append('id', variantInput.value);
    formData.append('quantity', quantityInput?.value || 1);

    return formData;
  }

  function getSectionsToUpdate() {
    const headerSectionID = headerElement.id.replace('shopify-section-', '');

    return {
      'cart-drawer': 'cart-drawer',
      [headerSectionID]: headerSectionID,
    };
  }

  function updateCartDrawer(parsedState) {
    if (!cartDrawer) return;

    cartDrawer.classList.remove('is-empty');

    if (parsedState.sections && parsedState.sections['cart-drawer']) {
      cartDrawer.renderContents(parsedState);
    }
  }

  function resetStickyQuantityInput() {
    if (quantityInput) quantityInput.value = 1;
  }
});
