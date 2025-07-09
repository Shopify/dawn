import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.product_image',
  tag: null,
  settings: [
    {
      type: 'product',
      id: 'product',
      label: 't:settings.product',
    },
    {
      type: 'select',
      id: 'image_ratio',
      options: [
        {
          value: 'adapt',
          label: 't:options.auto',
        },
        {
          value: 'portrait',
          label: 't:options.portrait',
        },
        {
          value: 'square',
          label: 't:options.square',
        },
        {
          value: 'landscape',
          label: 't:options.landscape',
        },
      ],
      default: 'adapt',
      label: 't:settings.aspect_ratio',
    },
    {
      type: 'header',
      content: 't:content.borders',
    },
    {
      type: 'select',
      id: 'border',
      label: 't:settings.style',
      options: [
        {
          value: 'none',
          label: 't:options.none',
        },
        {
          value: 'solid',
          label: 't:options.solid',
        },
      ],
      default: 'none',
    },
    {
      type: 'range',
      id: 'border_width',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      label: 't:settings.thickness',
      default: 1,
      visible_if: "{{ block.settings.border != 'none' }}",
    },
    {
      type: 'range',
      id: 'border_opacity',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      label: 't:settings.opacity',
      default: 100,
      visible_if: "{{ block.settings.border != 'none' }}",
    },
    {
      type: 'range',
      id: 'border_radius',
      label: 't:settings.border_radius',
      min: 0,
      max: 32,
      step: 1,
      unit: 'px',
      default: 0,
    },
    ...padding({ max: 50 }),
  ],
  presets: [
    {
      name: 't:names.product_card_media',
      category: 't:categories.product',
      settings: {
        product: '{{ closest.product }}',
      },
    },
  ],
};
