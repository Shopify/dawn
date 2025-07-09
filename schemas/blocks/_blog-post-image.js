/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.image',
  blocks: [],
  settings: [
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
      id: 'border',
      label: 't:settings.border',
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
      max: 10,
      step: 0.5,
      unit: 'px',
      label: 't:settings.border_width',
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
      label: 't:settings.border_opacity',
      default: 100,
      visible_if: "{{ block.settings.border != 'none' }}",
    },
    {
      type: 'range',
      id: 'border_radius',
      label: 't:settings.corner_radius',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 0,
    },
  ],
};
