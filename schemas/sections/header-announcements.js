import { padding } from 'utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.announcement_bar',
  blocks: [{ type: '_announcement' }],
  enabled_on: {
    groups: ['header'],
  },
  settings: [
    {
      type: 'range',
      id: 'speed',
      label: 't:settings.speed',
      min: 2,
      max: 10,
      default: 5,
      unit: 'sec',
    },
    {
      type: 'header',
      content: 't:content.appearance',
    },
    {
      type: 'select',
      id: 'section_width',
      label: 't:settings.section_width',
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
      default: 'scheme-4',
      label: 't:settings.color_scheme',
    },
    {
      type: 'range',
      id: 'divider_width',
      label: 't:settings.divider_thickness',
      min: 0,
      max: 5,
      step: 0.5,
      unit: 'px',
      default: 0,
    },
    ...padding({
      type: 'section',
      top: 15,
      bottom: 15,
    }),
  ],
  presets: [
    {
      name: 't:names.announcement_bar',
      blocks: {
        announcement_1: {
          type: '_announcement',
        },
      },
      block_order: ['announcement_1'],
    },
  ],
};
