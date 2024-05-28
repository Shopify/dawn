const ON_CHANGE_DEBOUNCE_TIMER = 300;

const PUB_SUB_EVENTS = {
  cartUpdate: 'cart-update',
  quantityUpdate: 'quantity-update',
  variantChangeStart: 'variant-change-start',
  variantChange: 'variant-change',
  cartError: 'cart-error',
  sectionRefreshed: 'section-refreshed',
};

const SECTION_REFRESH_RESOURCE_TYPE = {
  product: 'product',
};
