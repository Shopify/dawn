import { padding } from '../utils/padding';
/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.product_inventory',
  tag: null,
  settings: [
    {
      type: 'paragraph',
      content: 't:content.resource_reference_product_inventory',
    },
    {
      type: 'range',
      id: 'inventory_threshold',
      label: 't:settings.inventory_threshold',
      min: 0,
      max: 100,
      step: 1,
      default: 10,
    },
    {
      type: 'checkbox',
      id: 'show_inventory_quantity',
      label: 't:settings.show_inventory_quantity',
      default: true,
    },
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.product_inventory',
      category: 't:categories.product',
    },
  ],
};
