/**
 * @type {import('../schema').Preset}
 */
export const imageWithText = {
  name: 't:names.image_with_text',
  category: 't:categories.storytelling',
  settings: {
    content_direction: 'row',
    gap: 32,
    'padding-block-start': 40,
    'padding-block-end': 40,
  },
  blocks: {
    image: {
      type: 'image',
      settings: {
        image: '',
        image_ratio: 'square',
      },
    },
    group: {
      type: 'group',
      settings: {
        horizontal_alignment_flex_direction_column: 'flex-start',
        width: 'custom',
      },
      blocks: {
        heading: {
          type: 'text',
          name: 't:names.heading',
          settings: {
            text: '<h2>Our signature product.</h2>',
            type_preset: 'h3',
          },
        },
        text: {
          type: 'text',
          settings: {
            text: '<p>Made with care and unconditionally loved by our customers, this signature bestseller exceeds all expectations.</p>',
            max_width: 'narrow',
          },
        },
        button: {
          type: 'button',
          settings: {
            label: 'Shop now',
            link: 'shopify://collections/all',
          },
        },
      },
      block_order: ['heading', 'text', 'button'],
    },
  },
  block_order: ['image', 'group'],
};
