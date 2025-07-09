import { appearance } from '../utils/appearance';
import { layout } from '../utils/layout';
import { padding } from '../utils/padding';
import { faq } from '../presets/faq';
import { heroLargeLogo } from '../presets/hero-large-logo';
import { video } from '../presets/video';
import { pullQuote } from '../presets/pull-quote';
import { contactForm } from '../presets/contact-form';
import { emailSignup } from '../presets/email-signup';
import { iconsWithText } from '../presets/icons-with-text';
import { splitShowcase } from '../presets/split-showcase';
import { imageWithText } from '../presets/image-with-text';
import { overlay } from '../utils/overlay';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.section',
  class: 'section-wrapper',
  blocks: [{ type: '@theme' }, { type: '@app' }, { type: '_divider' }],
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
        {
          value: 'custom',
          label: 't:options.custom',
        },
      ],
      default: '',
    },
    {
      type: 'range',
      id: 'section_height_custom',
      label: 't:settings.custom_height',
      min: 0,
      max: 100,
      step: 1,
      default: 50,
      unit: '%',
      visible_if: "{{ section.settings.section_height == 'custom' }}",
    },
    ...appearance('section'),
    ...overlay({ type: 'section', background_overlay: true }),
    ...padding({ type: 'section' }),
  ],
  presets: [
    {
      name: 't:names.custom_section',
    },
    faq,
    video,
    pullQuote,
    contactForm,
    emailSignup,
    iconsWithText,
    splitShowcase,
    imageWithText,
    heroLargeLogo,
  ],
};
