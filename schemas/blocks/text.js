import { padding } from '../utils/padding';
import { textLayoutPreset, typePreset, customTextPreset } from '../utils/type-preset';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.text',
  tag: null,
  settings: [
    {
      type: 'richtext',
      id: 'text',
      label: 't:settings.text',
      default: 't:html_defaults.share_information_about_your',
    },
    ...textLayoutPreset(),
    ...typePreset({ label: 't:settings.preset', rte: true, custom: true, defaultValue: 'rte' }),
    ...customTextPreset(),
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
      alpha: true,
      default: '#00000026',
      visible_if: '{{ block.settings.background }}',
    },
    {
      type: 'range',
      id: 'corner_radius',
      label: 't:settings.corner_radius',
      default: 0,
      min: 0,
      max: 50,
      step: 1,
      visible_if: '{{ block.settings.background }}',
    },
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.text',
      category: 't:categories.basic',
      settings: {
        text: '<p>We make things that work better and last longer. Our products solve real problems with clean design and honest materials.</p>',
      },
    },
    {
      name: 't:names.heading',
      category: 't:categories.basic',
      settings: {
        text: '<h2>New arrivals</h2>',
      },
    },
  ],
};
