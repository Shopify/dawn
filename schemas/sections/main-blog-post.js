import { padding } from '../utils/padding';
import { color_scheme } from 'utils/color-scheme';
/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.blog_post',
  class: 'section-wrapper',
  settings: [
    {
      type: 'select',
      id: 'content_direction',
      label: 't:settings.direction',
      options: [
        {
          value: 'column',
          label: 't:options.vertical',
        },
      ],
      default: 'column',
      visible_if: '{{ section.settings.gap < 0 }}',
    },
    {
      type: 'range',
      id: 'gap',
      label: 't:settings.gap',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 12,
    },
    ...color_scheme({ type: 'section' }),
    ...padding({ type: 'section' }),
  ],
  presets: [],
};
