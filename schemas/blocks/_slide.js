import { color_scheme } from 'utils/color-scheme';
import { layout } from '../utils/layout';
import { padding } from '../utils/padding';
import { media_picker } from '../utils/media_picker';
import { overlay } from 'utils/overlay';
/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.slide',
  tag: null,
  blocks: [{ type: '@theme' }, { type: '@app' }],
  settings: [
    ...media_picker({ index: '1', type: 'block' }),
    ...layout('block'),
    {
      type: 'header',
      content: 't:content.appearance',
    },
    ...color_scheme({ type: 'block' }),
    ...overlay({ type: 'block' }),
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.slide',
      ..._slidePreset(),
    },
  ],
};

/**
 * @param {object} [options]
 * @param {string} [options.heading]
 * @param {string} [options.text]
 * @param {string} [options.button]
 * @param {string} [options.buttonLink]
 * @returns {Omit<import('../schema').SchemaPresetBlock, 'type'>}
 */
export function _slidePreset({
  heading = '<h2>New arrivals</h2>',
  text = "<p>Introducing our latest products, made especially for the season. Shop your favorites before they're gone!</p>",
  button = 'Shop now',
  buttonLink = 'shopify://collections/all',
} = {}) {
  return {
    settings: {
      horizontal_alignment_flex_direction_column: 'center',
    },
    blocks: {
      group: {
        type: 'group',
        settings: {
          horizontal_alignment_flex_direction_column: 'center',
          width: 'custom',
          custom_width: 50,
          width_mobile: 'custom',
          inherit_color_scheme: false,
          color_scheme: 'scheme-6',
          custom_width_mobile: 85,
          'padding-inline-start': 48,
          'padding-inline-end': 48,
          'padding-block-start': 48,
          'padding-block-end': 48,
        },
        blocks: {
          heading: {
            type: 'text',
            settings: {
              text: heading,
            },
          },
          text: {
            type: 'text',
            settings: {
              text,
              'padding-block-end': 20,
            },
          },
          button: {
            type: 'button',
            settings: {
              label: button,
              link: buttonLink,
            },
          },
        },
        block_order: ['heading', 'text', 'button'],
      },
    },
    block_order: ['group'],
  };
}
