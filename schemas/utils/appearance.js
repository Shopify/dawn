import { color_scheme } from './color-scheme';
/**
 * @type {(type: 'section'|'block', options?: {excludeBackground?: boolean, excludeBorders?: boolean, excludeBorderRadius?: boolean}) => import('../schema').SettingSchema[]}
 */

export const appearance = (type, options = {}) => [
  {
    type: 'header',
    content: 't:content.appearance',
  },
  ...color_scheme({ type }),
  ...(options?.excludeBackground
    ? []
    : /** @type {import('../schema').SettingSchema[]} */ ([
        {
          type: 'select',
          id: 'background_media',
          label: 't:settings.background_media',
          options: [
            {
              value: 'none',
              label: 't:options.none',
            },
            {
              value: 'image',
              label: 't:options.image',
            },
            {
              value: 'video',
              label: 't:options.video',
            },
          ],
          default: 'none',
        },
        {
          type: /** @type {"video"} */ ('video'),
          id: 'video',
          label: 't:settings.video',
          visible_if: `{{ ${type}.settings.background_media == 'video' }}`,
        },
        {
          type: /** @type {"select"} */ ('select'),
          id: 'video_position',
          label: 't:settings.video_position',
          options: [
            {
              value: 'cover',
              label: 't:options.cover',
            },
            {
              value: 'contain',
              label: 't:options.contain',
            },
          ],
          default: 'cover',
          visible_if: `{{ ${type}.settings.background_media == 'video' }}`,
        },
        {
          type: /** @type {"image_picker"} */ ('image_picker'),
          id: 'background_image',
          label: 't:settings.image',
          visible_if: `{{ ${type}.settings.background_media == 'image' }}`,
        },
        {
          type: /** @type {"select"} */ ('select'),
          id: 'background_image_position',
          label: 't:settings.image_position',
          options: [
            {
              value: 'cover',
              label: 't:options.cover',
            },
            {
              value: 'fit',
              label: 't:options.fit',
            },
          ],
          default: 'cover',
          visible_if: `{{ ${type}.settings.background_media == 'image' }}`,
        },
      ])),
  ...(options?.excludeBorders
    ? []
    : /** @type {import('../schema').SettingSchema[]} */ ([
        {
          type: /** @type {"select"} */ ('select'),
          id: 'border',
          label: 't:settings.borders',
          options: [
            {
              value: 'none',
              label: 't:options.none',
            },
            {
              value: 'solid',
              label: 't:options.solid',
            },
          ],
          default: 'none',
        },
        {
          type: /** @type {"range"} */ ('range'),
          id: 'border_width',
          min: 0,
          max: 10,
          step: 0.5,
          unit: 'px',
          label: 't:settings.border_width',
          default: 1,
          visible_if: `{{ ${type}.settings.border != 'none' }}`,
        },
        {
          type: /** @type {"range"} */ ('range'),
          id: 'border_opacity',
          min: 0,
          max: 100,
          step: 1,
          unit: '%',
          label: 't:settings.border_opacity',
          default: 100,
          visible_if: `{{ ${type}.settings.border != 'none' }}`,
        },
      ])),
  ...(options.excludeBorderRadius
    ? []
    : /** @type {import('../schema').SettingSchema[]} */ ([
        {
          type: 'range',
          id: 'border_radius',
          label: 't:settings.border_radius',
          min: 0,
          max: 100,
          step: 1,
          unit: 'px',
          default: 0,
        },
      ])),
];
