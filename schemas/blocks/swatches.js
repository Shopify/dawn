import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.swatches',
  tag: null,
  settings: [
    {
      type: 'paragraph',
      content: 't:content.resource_reference_product_swatches',
    },
    {
      type: 'select',
      id: 'product_swatches_alignment',
      label: 't:settings.alignment',
      options: [
        {
          value: 'flex-start',
          label: 't:options.left',
        },
        {
          value: 'center',
          label: 't:options.center',
        },
        {
          value: 'flex-end',
          label: 't:options.right',
        },
      ],
      default: 'flex-start',
    },
    {
      type: 'select',
      id: 'product_swatches_alignment_mobile',
      label: 't:settings.alignment_mobile',
      options: [
        {
          value: 'flex-start',
          label: 't:options.left',
        },
        {
          value: 'center',
          label: 't:options.center',
        },
        {
          value: 'flex-end',
          label: 't:options.right',
        },
      ],
      default: 'flex-start',
    },
    {
      type: 'header',
      content: 't:content.padding',
      visible_if: '{{ block.settings.hide_padding == false }}',
    },
    {
      type: 'checkbox',
      id: 'hide_padding',
      label: 't:settings.hide_padding',
      default: false,
      visible_if: '{{ false }}',
    },
    {
      type: 'range',
      id: 'product_swatches_padding_top',
      label: 't:settings.top',
      min: 0,
      max: 50,
      step: 1,
      unit: 'px',
      default: 4,
      visible_if: '{{ block.settings.hide_padding == false }}',
    },
    {
      type: 'range',
      id: 'product_swatches_padding_bottom',
      label: 't:settings.bottom',
      min: 0,
      max: 50,
      step: 1,
      unit: 'px',
      default: 0,
      visible_if: '{{ block.settings.hide_padding == false }}',
    },
    {
      type: 'range',
      id: 'product_swatches_padding_left',
      label: 't:settings.left',
      min: 0,
      max: 50,
      step: 1,
      unit: 'px',
      default: 0,
      visible_if: '{{ block.settings.hide_padding == false }}',
    },
    {
      type: 'range',
      id: 'product_swatches_padding_right',
      label: 't:settings.right',
      min: 0,
      max: 50,
      step: 1,
      unit: 'px',
      default: 0,
      visible_if: '{{ block.settings.hide_padding == false }}',
    },
  ],
  presets: [
    {
      name: 't:names.swatches',
      category: 't:categories.product',
    },
  ],
};
