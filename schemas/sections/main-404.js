import { color_scheme } from '../utils/color-scheme';
import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.404',
  class: 'section-wrapper',
  blocks: [{ type: '@theme' }, { type: '@app' }, { type: '_divider' }],
  settings: [
    {
      type: /** @type {"select"} */ ('select'),
      id: 'content_direction',
      label: 't:settings.direction',
      options: [{ value: 'column', label: 't:options.vertical' }],
      default: 'column',
      // Need a fake value here to pass theme check
      visible_if: `{{ section.settings.horizontal_alignment_flex_direction_column == 'fake-value' }}`,
    },
    {
      type: 'header',
      content: 't:content.layout',
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
    {
      type: 'select',
      id: 'horizontal_alignment_flex_direction_column',
      label: 't:settings.alignment',
      options: [
        {
          value: 'flex-start',
          label: 't:options.left',
        },
        {
          value: 'center',
          label: 't:options.center',
        },
        {
          value: 'flex-end',
          label: 't:options.right',
        },
      ],
      default: 'center',
    },
    {
      type: 'select',
      id: 'vertical_alignment_flex_direction_column',
      label: 't:settings.position',
      options: [
        {
          value: 'flex-start',
          label: 't:options.top',
        },
        {
          value: 'center',
          label: 't:options.center',
        },
        {
          value: 'flex-end',
          label: 't:options.bottom',
        },
      ],
      default: 'center',
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
};
