import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.page',
  settings: [
    {
      type: 'page',
      id: 'page',
      label: 't:settings.page',
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
    {
      type: 'header',
      content: 't:content.appearance',
    },
    {
      type: 'checkbox',
      id: 'background',
      label: 't:settings.background',
      default: false,
    },
    {
      type: 'color',
      id: 'background_color',
      label: 't:settings.background_color',
      default: '#00000026',
      visible_if: '{{ block.settings.background }}',
    },
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.page',
      category: 't:categories.basic',
    },
  ],
};
