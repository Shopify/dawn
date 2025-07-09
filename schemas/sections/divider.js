import { color_scheme } from '../utils/color-scheme';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.divider',
  settings: [
    ...color_scheme({ type: 'section' }),
    {
      type: 'select',
      id: 'section_width',
      label: 't:settings.width',
      options: [
        {
          value: 'page-width',
          label: 't:options.page',
        },
        {
          value: 'full-width',
          label: 't:options.full',
        },
      ],
      default: 'full-width',
    },
    {
      type: 'range',
      id: 'thickness',
      label: 't:settings.thickness',
      min: 0.5,
      max: 5,
      step: 0.5,
      unit: 'px',
      default: 1,
    },
    {
      type: 'select',
      id: 'corner_radius',
      label: 't:settings.border_radius',
      options: [
        {
          value: 'square',
          label: 't:options.square',
        },
        {
          value: 'rounded',
          label: 't:options.rounded',
        },
      ],
      default: 'square',
      visible_if:
        '{{ section.settings.thickness > 1 and section.settings.width_percent != 100 or section.settings.section_width == "page-width"}}',
    },
    {
      type: 'range',
      id: 'width_percent',
      label: 't:settings.length',
      min: 5,
      max: 100,
      step: 1,
      unit: '%',
      default: 100,
    },
    {
      type: 'select',
      id: 'alignment_horizontal',
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
      default: 'center',
      visible_if: '{{ section.settings.width_percent < 100 }}',
    },
    {
      type: 'header',
      content: 't:content.padding',
    },
    {
      type: 'range',
      id: 'padding-block-start',
      label: 't:settings.top',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 16,
    },
    {
      type: 'range',
      id: 'padding-block-end',
      label: 't:settings.bottom',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 16,
    },
  ],
  presets: [
    {
      name: 't:names.divider_section',
      category: 't:categories.layout',
    },
  ],
};
