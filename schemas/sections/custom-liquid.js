import { padding } from 'utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.custom_liquid',
  settings: [
    {
      type: 'liquid',
      id: 'custom_liquid',
      label: 't:settings.custom_liquid',
      info: 't:info.custom_liquid',
    },
    {
      type: 'color_scheme',
      id: 'color_scheme',
      label: 't:settings.color_scheme',
      default: 'scheme-1',
    },
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
      default: 'page-width',
    },
    ...padding({ type: 'section' }),
  ],
  presets: [
    {
      name: 't:names.custom_liquid',
      category: 't:categories.layout',
    },
  ],
};
