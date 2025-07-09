import { typePreset } from '../utils/type-preset';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.product_price',
  tag: null,
  settings: [
    {
      type: 'paragraph',
      content: 't:content.resource_reference_product_price',
    },
    {
      type: 'paragraph',
      content: 't:content.edit_price_in_theme_settings',
    },
    {
      type: 'checkbox',
      id: 'show_sale_price_first',
      label: 't:settings.show_sale_price_first',
      default: true,
    },
    ...typePreset({ label: 't:settings.type_preset', hideTypePresetHeader: true }),
  ],
};
