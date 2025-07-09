import { color_scheme } from '../utils/color-scheme';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.marquee',
  tag: null,
  blocks: [{ type: 'text' }, { type: 'icon' }, { type: '_divider' }],
  settings: [
    {
      type: 'select',
      id: 'movement_direction',
      label: 't:settings.motion_direction',
      options: [
        { value: 'reverse', label: 't:options.forward' },
        { value: 'normal', label: 't:options.reverse' },
      ],
      default: 'normal',
    },
    ...color_scheme({ type: 'block' }),
    {
      type: 'checkbox',
      id: 'transparent_background',
      label: 't:settings.transparent_background',
      default: true,
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
      default: 24,
    },
    {
      type: 'range',
      id: 'padding-block-end',
      label: 't:settings.bottom',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 24,
    },
    {
      type: 'range',
      id: 'gap_between_elements',
      label: 't:settings.gap',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 24,
    },
  ],
  presets: [
    {
      name: 't:names.marquee',
      category: 't:categories.decorative',
      blocks: {
        text: {
          type: 'text',
          settings: {
            text: '<p>We make things that work better and last longer.</p>',
            type_preset: 'custom',
            font: 'var(--font-body--family)',
            font_size: 'var(--font-size--h2)',
            line_height: 'tight',
            letter_spacing: 'tight',
            case: 'none',
            wrap: 'nowrap',
            width: 'fit-content',
          },
        },
      },
      block_order: ['text'],
    },
  ],
};
