import { padding } from 'utils/padding';
import { typePreset } from 'utils/type-preset';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.popup_link',
  blocks: [{ type: '@theme' }, { type: '@app' }],
  tag: null,
  settings: [
    {
      type: 'header',
      content: 't:content.popup',
    },
    {
      type: 'select',
      id: 'behavior',
      label: 't:settings.behavior',
      options: [
        {
          value: 'default',
          label: 't:options.default',
        },
        {
          value: 'drawer',
          label: 't:options.drawer',
        },
      ],
      default: 'default',
    },
    {
      type: 'header',
      content: 't:content.link',
    },
    {
      type: 'text',
      id: 'heading',
      label: 't:settings.text',
      default: 't:text_defaults.popup_link',
    },
    ...typePreset({ label: 't:settings.preset', defaultValue: '', hideTypePresetHeader: true }),
    ...padding({ header: 't:content.link_padding', top: 0, bottom: 0, left: 0, right: 0 }),
  ],
  presets: [
    {
      name: 't:names.popup_link',
      category: 't:categories.links',
      settings: {
        heading: 'Learn more',
      },
      blocks: {
        text_pexwUk: {
          type: 'text',
          settings: {
            text: '<h2>What is the return policy?</h2>',
            alignment: 'left',
            'padding-block-end': 16,
          },
        },
        text_g7mEh7: {
          type: 'text',
          settings: {
            text: '<p>Our goal is for every customer to be totally satisfied with their purchase. If this isn’t the case, let us know and we’ll do our best to work with you to make it right.</p>',
            alignment: 'left',
          },
        },
      },
      block_order: ['text_pexwUk', 'text_g7mEh7'],
    },
  ],
};
