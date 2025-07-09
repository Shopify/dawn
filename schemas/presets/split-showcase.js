/**
 * @type {import('../schema').Preset}
 */
export const splitShowcase = {
  name: 't:names.split_showcase',
  category: 't:categories.banners',
  blocks: {
    group_1: {
      type: 'group',
      settings: {
        horizontal_alignment_flex_direction_column: 'center',
        vertical_alignment_flex_direction_column: 'space-between',
        gap: 32,
        inherit_color_scheme: false,
        color_scheme: 'scheme-5',
        background_media: 'image',
        height: 'fill',
        'padding-block-start': 40,
        'padding-block-end': 40,
        'padding-inline-start': 40,
        'padding-inline-end': 40,
      },
      blocks: {
        spacer: {
          type: 'spacer',
          settings: {
            size: 'pixel',
            pixel_size: 16,
          },
        },
        text_1: {
          type: 'text',
          settings: {
            text: '<h3>New arrivals</h3>',
            type_preset: 'h3',
            width: 'fit-content',
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
      block_order: ['spacer', 'text_1', 'button'],
    },
    group_2: {
      type: 'group',
      settings: {
        horizontal_alignment_flex_direction_column: 'center',
        vertical_alignment_flex_direction_column: 'space-between',
        gap: 32,
        inherit_color_scheme: false,
        color_scheme: 'scheme-5',
        background_media: 'image',
        height: 'fill',
        'padding-block-start': 40,
        'padding-block-end': 40,
        'padding-inline-start': 40,
        'padding-inline-end': 40,
      },
      blocks: {
        spacer: {
          type: 'spacer',
          settings: {
            size: 'pixel',
            pixel_size: 16,
          },
        },
        text_1: {
          type: 'text',
          settings: {
            text: '<h3>Bestsellers</h3>',
            type_preset: 'h3',
            width: 'fit-content',
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
      block_order: ['spacer', 'text_1', 'button'],
    },
  },
  block_order: ['group_1', 'group_2'],
  settings: {
    content_direction: 'row',
    vertical_on_mobile: true,
    gap: 0,
    section_width: 'full-width',
    section_height: 'large',
  },
};
