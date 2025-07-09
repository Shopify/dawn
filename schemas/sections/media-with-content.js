import { color_scheme } from 'utils/color-scheme';
import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.media_with_text',
  disabled_on: {
    groups: ['header'],
  },
  settings: [
    {
      type: 'select',
      id: 'media_position',
      label: 't:settings.media_position',
      options: [
        { value: 'left', label: 't:options.left' },
        { value: 'right', label: 't:options.right' },
      ],
      default: 'left',
    },
    {
      type: 'select',
      id: 'media_width',
      label: 't:settings.media_width',
      options: [
        {
          value: 'narrow',
          label: 't:options.narrow',
        },
        {
          value: 'medium',
          label: 't:options.medium',
        },
        {
          value: 'wide',
          label: 't:options.wide',
        },
      ],
      default: 'wide',
    },
    {
      type: 'select',
      id: 'media_height',
      label: 't:settings.media_height',
      options: [
        {
          value: 'auto',
          label: 't:options.auto',
        },
        {
          value: '50svh',
          label: 't:options.small',
        },
        {
          value: '60svh',
          label: 't:options.medium',
        },
        {
          value: '80svh',
          label: 't:options.large',
        },
        {
          value: '100svh',
          label: 't:options.full_screen',
        },
      ],
      default: '80svh',
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
      default: 'full-width',
    },
    {
      type: 'checkbox',
      id: 'extend_media',
      label: 't:settings.extend_media_to_screen_edge',
      default: true,
      visible_if: "{{ section.settings.section_width == 'page-width' }}",
    },
    ...color_scheme({ type: 'section', defaultScheme: 'scheme-3' }),
    ...padding({ type: 'section' }),
  ],
  presets: [
    {
      name: 't:names.editorial',
      category: 't:categories.storytelling',
      settings: {
        media_width: 'medium',
        media_height: '60svh',
        color_scheme: 'scheme-4',
      },
      blocks: {
        media: {
          type: '_media-without-appearance',
          static: true,
        },
        content: {
          type: '_content-without-appearance',
          static: true,
          settings: {
            horizontal_alignment_flex_direction_column: 'flex-start',
            vertical_alignment_flex_direction_column: 'space-between',
          },
          blocks: {
            caption: {
              type: 'text',
              name: 't:names.caption',
              settings: {
                text: '<p>Bestseller</p>',
                type_preset: 'h6',
              },
            },
            group: {
              type: 'group',
              settings: {
                height: 'fit',
              },
              blocks: {
                heading: {
                  type: 'text',
                  name: 't:names.heading',
                  settings: {
                    text: '<h2>Our signature product</h2>',
                    type_preset: 'h3',
                  },
                },
                text: {
                  type: 'text',
                  settings: {
                    text: '<p>Made with care and unconditionally loved by our customers, this signature bestseller exceeds all expectations.</p>',
                    max_width: 'narrow',
                    type_preset: 'rte',
                  },
                },
              },
              block_order: ['heading', 'text'],
            },
            button: {
              type: 'button',
              settings: {
                label: 'Shop now',
                link: 'shopify://collections/all',
                style_class: 'link',
              },
            },
          },
          block_order: ['caption', 'group', 'button'],
        },
      },
    },
    {
      name: 't:names.editorial_jumbo_text',
      category: 't:categories.storytelling',
      settings: {
        media_position: 'right',
        media_width: 'medium',
        media_height: '60svh',
        color_scheme: 'scheme-3',
      },
      blocks: {
        media: {
          type: '_media-without-appearance',
          static: true,
        },
        content: {
          type: '_content-without-appearance',
          static: true,
          settings: {
            horizontal_alignment_flex_direction_column: 'flex-start',
            vertical_alignment_flex_direction_column: 'flex-end',
          },
          blocks: {
            caption: {
              type: 'jumbo-text',
              name: 't:names.jumbo_text',
              settings: {
                text: 'Up\nThe\nAnte',
                font: 'heading',
                alignment: 'right',
                line_height: '0.8',
                letter_spacing: '-0.03em',
                case: 'uppercase',
              },
            },
          },
          block_order: ['caption'],
        },
      },
    },
  ],
};
