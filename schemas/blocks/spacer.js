/**
 * @type {import('../schema').Schema}
 */

export default {
  name: 't:names.spacer',
  tag: null,
  settings: [
    {
      type: 'select',
      id: 'size',
      label: 't:settings.unit',
      options: [
        {
          value: 'pixel',
          label: 't:options.pixel',
        },
        {
          value: 'percent',
          label: 't:options.percent',
        },
      ],
      default: 'percent',
    },
    {
      type: 'range',
      id: 'percent_size',
      label: 't:settings.size',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      default: 100,
      visible_if: "{{ block.settings.size == 'percent' }}",
    },
    {
      type: 'range',
      id: 'pixel_size',
      label: 't:settings.size',
      min: 0,
      max: 400,
      step: 4,
      unit: 'px',
      default: 120,
      visible_if: "{{ block.settings.size == 'pixel' }}",
    },
    {
      type: 'checkbox',
      id: 'custom_mobile_size',
      label: 't:settings.custom_mobile_size',
      default: false,
    },
    {
      type: 'header',
      content: 't:content.mobile_size',
      visible_if: '{{ block.settings.custom_mobile_size == true }}',
    },
    {
      type: 'select',
      id: 'size_mobile',
      label: 't:settings.unit',
      options: [
        {
          value: 'pixel',
          label: 't:options.pixel',
        },
        {
          value: 'percent',
          label: 't:options.percent',
        },
      ],
      default: 'percent',
      visible_if: '{{ block.settings.custom_mobile_size == true }}',
    },
    {
      type: 'range',
      id: 'percent_size_mobile',
      label: 't:settings.size',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      default: 100,
      visible_if: "{{ block.settings.size_mobile == 'percent' and block.settings.custom_mobile_size == true}}",
    },
    {
      type: 'range',
      id: 'pixel_size_mobile',
      label: 't:settings.size',
      min: 0,
      max: 400,
      step: 4,
      unit: 'px',
      default: 120,
      visible_if: "{{ block.settings.size_mobile == 'pixel' and block.settings.custom_mobile_size == true}}",
    },
  ],
  presets: [
    {
      name: 't:names.spacer',
      category: 't:categories.layout',
    },
  ],
};
