import { customTextPreset, typePreset } from 'utils/type-preset';
import { padding } from '../utils/padding';

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
    {
      type: 'checkbox',
      id: 'show_installments',
      label: 't:settings.installments',
      default: false,
    },
    {
      type: 'checkbox',
      id: 'show_tax_info',
      label: 't:settings.show_tax_info',
      default: false,
    },
    ...typePreset({
      custom: true,
    }),
    {
      type: 'select',
      id: 'width',
      label: 't:settings.width',
      options: [
        {
          value: 'fit-content',
          label: 't:options.fit_content',
        },
        {
          value: '100%',
          label: 't:options.fill',
        },
      ],
      default: '100%',
    },
    {
      type: 'text_alignment',
      id: 'alignment',
      label: 't:settings.alignment',
      default: 'left',
      visible_if: "{{ block.settings.width != 'fit-content' }}",
    },
    ...customTextPreset({ hideWrap: true }),
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.product_price',
      category: 't:categories.product',
    },
  ],
};
