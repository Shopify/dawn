import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.product_information',
  blocks: [{ type: '@app' }],
  disabled_on: {
    groups: ['header', 'footer'],
  },
  settings: [
    {
      type: 'header',
      content: 't:content.layout',
    },
    {
      type: 'select',
      id: 'content_width',
      label: 't:settings.width',
      options: [
        {
          value: 'content-center-aligned',
          label: 't:options.page',
        },
        {
          value: 'content-full-width',
          label: 't:options.full',
        },
      ],
      default: 'content-center-aligned',
    },
    {
      type: 'select',
      id: 'desktop_media_position',
      label: 't:settings.media_position',
      options: [
        { value: 'left', label: 't:options.left' },
        { value: 'right', label: 't:options.right' },
      ],
      default: 'left',
    },
    {
      type: 'checkbox',
      id: 'equal_columns',
      label: 't:settings.equal_columns',
      default: false,
    },
    {
      type: 'checkbox',
      id: 'limit_details_width',
      label: 't:settings.limit_product_details_width',
      default: false,
      visible_if: '{{ section.settings.equal_columns }}',
    },
    {
      type: 'range',
      id: 'gap',
      label: 't:settings.gap',
      min: 0,
      max: 48,
      step: 4,
      unit: 'px',
      default: 16,
    },
    {
      type: 'color_scheme',
      id: 'color_scheme',
      label: 't:settings.color_scheme',
      default: 'scheme-1',
    },
    ...padding({ type: 'section' }),
  ],
  presets: [],
};
