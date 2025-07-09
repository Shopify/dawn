import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.product_buy_buttons',
  tag: null,
  settings: [
    {
      type: 'paragraph',
      content: 't:content.resource_reference_product',
    },
    {
      type: 'checkbox',
      id: 'stacking',
      label: 't:settings.always_stack_buttons',
      default: false,
    },
    {
      type: 'checkbox',
      id: 'show_pickup_availability',
      label: 't:settings.show_pickup_availability',
      default: true,
    },
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.product_buy_buttons',
      category: 't:categories.product',
      blocks: {
        quantity: {
          type: 'quantity',
          static: true,
        },
        'add-to-cart': {
          type: 'add-to-cart',
          static: true,
          settings: {
            style_class: 'button-secondary',
          },
        },
        'accelerated-checkout': {
          type: 'accelerated-checkout',
          static: true,
        },
      },
    },
  ],
};
