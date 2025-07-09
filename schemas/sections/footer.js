import { appearance } from '../utils/appearance';
import { layout } from '../utils/layout';
import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.footer',
  class: 'section-wrapper',
  tag: 'footer',
  blocks: [
    { type: '_divider' },
    { type: '@app' },
    { type: 'button' },
    { type: 'email-signup' },
    { type: 'follow-on-shop' },
    { type: 'footer-utilities' },
    { type: 'group' },
    { type: 'icon' },
    { type: 'image' },
    { type: 'menu' },
    { type: 'payment-icons' },
    { type: 'text' },
    { type: 'logo' },
    { type: 'jumbo-text' },
  ],
  enabled_on: {
    groups: ['footer'],
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
    {
      type: 'select',
      id: 'section_height',
      label: 't:settings.height',
      options: [
        {
          value: '',
          label: 't:options.auto',
        },
        {
          value: 'small',
          label: 't:options.small',
        },
        {
          value: 'medium',
          label: 't:options.medium',
        },
        {
          value: 'large',
          label: 't:options.large',
        },
        {
          value: 'full-screen',
          label: 't:options.full_screen',
        },
      ],
      default: '',
    },
    ...appearance('section', { excludeBorders: true, excludeBorderRadius: true }),
    ...padding({ type: 'section' }),
  ],
};
