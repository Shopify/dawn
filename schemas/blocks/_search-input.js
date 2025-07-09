import { color_scheme } from 'utils/color-scheme';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.search_input',
  tag: null,
  settings: [
    {
      type: 'select',
      id: 'width',
      label: 't:settings.width',
      options: [
        {
          value: 'fill',
          label: 't:options.fill',
        },
        {
          value: 'custom',
          label: 't:options.custom',
        },
      ],
      default: 'custom',
    },
    {
      type: 'range',
      id: 'custom_width',
      label: 't:settings.custom_width',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      default: 50,
      visible_if: '{{ block.settings.width == "custom" }}',
    },
    ...color_scheme({ type: 'block' }),
  ],
  presets: [],
};
