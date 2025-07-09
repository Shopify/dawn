/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.cart',
  disabled_on: {
    groups: ['header', 'footer'],
  },
  blocks: [
    { type: '@theme' },
    { type: '@app' },
    { type: 'text' },
    { type: 'icon' },
    { type: 'image' },
    { type: 'button' },
    { type: 'video' },
    { type: 'group' },
    { type: 'spacer' },
  ],
  settings: [
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
    {
      type: 'color_scheme',
      id: 'color_scheme',
      label: 't:settings.color_scheme',
      default: 'scheme-1',
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
      default: 0,
    },
    {
      type: 'range',
      id: 'padding-block-end',
      label: 't:settings.bottom',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 0,
    },
  ],
};
