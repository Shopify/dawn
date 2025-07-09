/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.summary',
  tag: null,
  settings: [
    {
      type: 'checkbox',
      id: 'extend_summary',
      label: 't:settings.extend_summary',
      default: true,
    },
    {
      type: 'checkbox',
      id: 'inherit_color_scheme',
      label: 't:settings.inherit_color_scheme',
      default: false,
    },
    {
      type: 'color_scheme',
      id: 'color_scheme',
      label: 't:settings.color_scheme',
      default: 'scheme-3',
      visible_if: '{{ block.settings.inherit_color_scheme == false }}',
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
      max: 100,
      step: 1,
      unit: 'px',
      default: 0,
    },
  ],
  presets: [
    {
      name: 't:names.summary',
    },
  ],
};
