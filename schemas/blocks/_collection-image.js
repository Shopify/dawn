import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */

export default {
  name: 't:names.collection_image',
  tag: null,
  settings: [
    {
      type: 'collection',
      id: 'collection',
      label: 't:settings.collection',
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
          value: 'custom',
          label: 't:options.custom',
        },
      ],
      default: 'square',
      label: 't:settings.aspect_ratio',
    },
    {
      type: 'range',
      id: 'collection_image_width',
      label: 't:settings.width',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      default: 100,
      visible_if: "{{ block.settings.image_ratio == 'custom' }}",
    },
    {
      type: 'range',
      id: 'collection_image_height',
      label: 't:settings.height',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      default: 100,
      visible_if: "{{ block.settings.image_ratio == 'custom' }}",
    },
    ...padding({ max: 50 }),
  ],
  presets: [
    {
      name: 't:names.collection_image',
      settings: {
        collection: '{{ closest.collection }}',
      },
    },
  ],
};
