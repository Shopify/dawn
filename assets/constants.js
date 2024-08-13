/** Default debounce time. */
const ON_CHANGE_DEBOUNCE_TIMER = 300;

/**
 * Publish/subscribe events enum.
 * @typedef {Object} PUB_SUB_EVENTS
 * @property {string} cartUpdate - Cart update event.
 * @property {string} quantityUpdate - Quantity update event.
 * @property {string} optionValueSelectionChange - Option value selection change event.
 * @property {string} variantChange - Variant change event.
 * @property {string} cartError - Cart error event.
 */

/** @type {PUB_SUB_EVENTS} */
const PUB_SUB_EVENTS = {
  cartUpdate: 'cart-update',
  quantityUpdate: 'quantity-update',
  optionValueSelectionChange: 'option-value-selection-change',
  variantChange: 'variant-change',
  cartError: 'cart-error',
};
