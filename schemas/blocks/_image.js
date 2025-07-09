/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.image',
  tag: null,
  settings: [
    {
      type: 'paragraph',
      content: 't:content.resource_reference_collection_card_image',
    },
    {
      type: 'select',
      id: 'height',
      label: 't:settings.height',
      options: [
        {
          value: 'small',
          label: 't:options.small',
        },
        {
          value: 'medium',
          label: 't:options.medium',
        },
        {
          value: 'large',
          label: 't:options.large',
        },
      ],
      default: 'large',
    },
    {
      type: 'select',
      id: 'ratio',
      label: 't:settings.ratio',
      options: [
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
      default: 'portrait',
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
  ],
};
