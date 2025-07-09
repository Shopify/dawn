import { appearance } from '../utils/appearance';
import { layout } from '../utils/layout';
import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */

export default {
  name: 't:names.section',
  class: 'section-wrapper',
  blocks: [
    {
      type: '@theme',
    },
    {
      type: '@app',
    },
    {
      type: '_divider',
    },
  ],
  disabled_on: {
    groups: ['header'],
  },
  settings: [
    ...layout('section'),
    {
      type: 'header',
      content: 't:content.size',
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
    ...appearance('section'),
    ...padding({ type: 'section' }),
  ],
};
