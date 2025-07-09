import { padding } from 'utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.contact_form',
  tag: null,
  settings: [
    {
      type: 'select',
      id: 'width',
      label: 't:settings.width_desktop',
      options: [
        {
          value: 'fit-content',
          label: 't:options.fit_content',
        },
        {
          value: 'custom',
          label: 't:options.custom',
        },
      ],
      default: 'fit-content',
    },
    {
      type: 'range',
      id: 'custom_width',
      label: 't:settings.width',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      default: 100,
      visible_if: "{{ block.settings.width == 'custom' }}",
    },
    {
      type: 'select',
      id: 'width_mobile',
      label: 't:settings.width_mobile',
      options: [
        {
          value: 'fit-content',
          label: 't:options.fit_content',
        },
        {
          value: 'custom',
          label: 't:options.custom',
        },
      ],
      default: 'fit-content',
    },
    {
      type: 'range',
      id: 'custom_width_mobile',
      label: 't:settings.width',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      default: 100,
      visible_if: "{{ block.settings.width_mobile == 'custom' }}",
    },
    {
      type: 'checkbox',
      id: 'inherit_color_scheme',
      label: 't:settings.inherit_color_scheme',
      default: true,
    },
    {
      type: 'color_scheme',
      id: 'color_scheme',
      label: 't:settings.color_scheme',
      default: 'scheme-1',
      visible_if: '{{ block.settings.inherit_color_scheme == false }}',
    },
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.contact_form',
      category: 't:categories.forms',
    },
  ],
};
