/**
 * @type {import('../schema').Preset}
 */
export const pullQuote = {
  name: 't:names.pull_quote',
  category: 't:categories.storytelling',
  blocks: {
    text: {
      type: 'text',
      settings: {
        text: '<p>At the heart of every product lies a unique story, driven by our passion for quality and innovation. Each item enhances your everyday life and sparks joy.</p>',
        type_preset: 'h2',
        width: '100%',
        max_width: 'narrow',
        alignment: 'center',
      },
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
  block_order: ['text', 'button'],
  settings: {
    horizontal_alignment_flex_direction_column: 'center',
    gap: 16,
    'padding-block-start': 64,
    'padding-block-end': 64,
  },
};
