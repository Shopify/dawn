import { padding } from '../utils/padding';
/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.cart_products',
  tag: null,
  settings: [
    {
      type: 'range',
      id: 'gap',
      label: 't:settings.gap',
      min: 8,
      max: 36,
      step: 4,
      unit: 'px',
      default: 24,
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
      ],
      default: 'adapt',
      label: 't:settings.aspect_ratio',
    },
    {
      type: 'checkbox',
      id: 'dividers',
      label: 't:settings.dividers',
      default: true,
    },
    {
      type: 'checkbox',
      id: 'vendor',
      label: 't:settings.vendor',
      default: false,
    },
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.cart_items',
    },
  ],
};
