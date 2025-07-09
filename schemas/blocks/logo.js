import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.logo',
  tag: null,
  settings: [
    {
      type: 'checkbox',
      label: 't:settings.use_inverse_logo',
      id: 'inverse',
      default: false,
      visible_if: '{{ settings.logo_inverse }}',
    },
    {
      type: 'select',
      id: 'font',
      label: 't:settings.font',
      options: [
        {
          value: 'body',
          label: 't:options.body',
        },
        {
          value: 'subheading',
          label: 't:options.subheading',
        },
        {
          value: 'heading',
          label: 't:options.heading',
        },
        {
          value: 'accent',
          label: 't:options.accent',
        },
      ],
      default: 'heading',
      visible_if: '{{ settings.logo == blank and settings.logo_inverse == blank or block.settings.inverse == false }}',
    },
    {
      type: 'paragraph',
      content: 't:content.edit_logo_in_theme_settings',
    },
    {
      type: 'header',
      content: 't:content.size',
    },
    {
      type: 'select',
      id: 'unit',
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
      id: 'percent_width',
      label: 't:settings.width',
      min: 10,
      max: 100,
      step: 1,
      unit: '%',
      default: 100,
      visible_if: "{{ block.settings.unit == 'percent' }}",
    },
    {
      type: 'range',
      id: 'pixel_height',
      label: 't:settings.height',
      min: 16,
      max: 320,
      step: 8,
      unit: 'px',
      default: 48,
      visible_if: "{{ block.settings.unit == 'pixel' }}",
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
      id: 'unit_mobile',
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
      id: 'percent_width_mobile',
      label: 't:settings.width',
      min: 10,
      max: 100,
      step: 1,
      unit: '%',
      default: 100,
      visible_if: "{{ block.settings.unit_mobile == 'percent' and block.settings.custom_mobile_size == true}}",
    },
    {
      type: 'range',
      id: 'pixel_height_mobile',
      label: 't:settings.height',
      min: 16,
      max: 160,
      step: 8,
      unit: 'px',
      default: 120,
      visible_if: "{{ block.settings.unit_mobile == 'pixel' and block.settings.custom_mobile_size == true}}",
    },
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.logo',
      category: 't:categories.basic',
      settings: {
        unit: 'pixel',
        pixel_height: 48,
      },
    },
  ],
};
