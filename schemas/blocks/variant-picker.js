import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.product_variant_picker',
  tag: null,
  settings: [
    {
      type: 'paragraph',
      content: 't:content.resource_reference_product_variant_picker',
    },
    {
      type: 'paragraph',
      content: 't:content.edit_variants_in_theme_settings',
    },
    {
      type: 'select',
      id: 'variant_style',
      label: 't:settings.style',
      options: [
        {
          value: 'dropdowns',
          label: 't:options.dropdowns',
        },
        {
          value: 'buttons',
          label: 't:options.buttons',
        },
      ],
      default: 'buttons',
    },
    {
      type: 'checkbox',
      id: 'show_swatches',
      label: 't:settings.swatches',
      default: true,
    },
    {
      type: 'text_alignment',
      id: 'alignment',
      label: 't:settings.alignment',
      default: 'left',
    },
    ...padding({ bottom: 8 }),
  ],
  presets: [
    {
      name: 't:names.product_variant_picker',
      category: 't:categories.product',
    },
  ],
};
