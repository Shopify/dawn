/**
 * @type {import('../schema').Preset}
 */
export const heroLargeLogo = {
  name: 't:names.large_logo',
  category: 't:categories.banners',
  blocks: {
    text: {
      type: 'text',
      settings: {
        text: '<p>Made with care and unconditionally loved by our customers, this signature bestseller exceeds all expectations.</p>',
        max_width: 'narrow',
      },
    },
    logo: {
      type: 'logo',
      settings: {
        unit: 'percent',
        percent_width: 100,
      },
    },
  },
  block_order: ['text', 'logo'],
  settings: {
    vertical_alignment_flex_direction_column: 'space-between',
    gap: 16,
    section_height: 'medium',
    color_scheme: 'scheme-3',
    'padding-block-start': 40,
    'padding-block-end': 40,
  },
};
