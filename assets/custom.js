document.addEventListener('DOMContentLoaded', function () {
  const productForm = document.querySelector('product-form').querySelector('form[action="/cart/add"]');
  if (!productForm) return;
  console.log(productForm);

  const upsells = document.querySelectorAll('upsell-item');

  upsells.forEach((upsell, index) => {
    const checkbox = upsell.querySelector('.upsell-checkbox');
    const variantId = upsell.dataset.variantId;

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        // Create hidden inputs
        const idInput = document.createElement('input');
        idInput.type = 'hidden';
        idInput.name = `items[${index + 1}][id]`;
        idInput.value = variantId;
        idInput.classList.add('upsell-hidden-id');

        const qtyInput = document.createElement('input');
        qtyInput.type = 'hidden';
        qtyInput.name = `items[${index + 1}][quantity]`;
        qtyInput.value = 1;
        qtyInput.classList.add('upsell-hidden-qty');

        upsell.appendChild(idInput);
        upsell.appendChild(qtyInput);
        productForm.appendChild(idInput.cloneNode(true));
        productForm.appendChild(qtyInput.cloneNode(true));

        // Convert main product’s input if needed
        const mainIdInput = productForm.querySelector('input[name="id"]');
        if (mainIdInput) {
          mainIdInput.name = 'items[0][id]';
        }
        const mainQty = document.createElement('input');
        mainQty.type = 'hidden';
        mainQty.name = 'items[0][quantity]';
        mainQty.value = document.querySelector('.quantity__input').value;
        mainQty.classList.add('product-hidden-qty');
        productForm.appendChild(mainQty.cloneNode(true));
      } else {
        // Remove hidden inputs
        document.querySelectorAll('.upsell-hidden-id, .upsell-hidden-qty').forEach((el) => el.remove());

        // If no upsells checked, restore original
        document.querySelector('.product-hidden-qty').remove();
        const stillChecked = document.querySelectorAll('.upsell-checkbox:checked').length;
        if (!stillChecked) {
          const mainIdInput = productForm.querySelector('input[name="items[0][id]"]');
          if (mainIdInput) {
            mainIdInput.name = 'id';
          }
        }
      }
    });
  });

  // Keep main variant in sync
  const mainVariantInput = productForm.querySelector('input[name="items[][id]"], input[name="id"]');
  document.addEventListener('change', (e) => {
    if (e.target.matches("select[name='id']")) {
      mainVariantInput.value = e.target.value;
    }
  });
});
