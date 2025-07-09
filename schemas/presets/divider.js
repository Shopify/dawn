/**
 * @type {import('../schema').Preset}
 */
export const divider = {
  name: 't:names.divider_section',
  category: 't:categories.layout',
  settings: {
    content_direction: 'column',
    vertical_on_mobile: true,

    horizontal_alignment: 'flex-start',
    vertical_alignment: 'center',
    horizontal_alignment_flex_direction_column: 'flex-start',
    vertical_alignment_flex_direction_column: 'center',
    gap: 12,
    section_width: 'full-width',
    section_height: '',
    color_scheme: 'scheme-1',
    background_media: 'none',
    video_position: 'cover',
    background_image_position: 'cover',
    border: 'none',
    border_width: 1,
    border_opacity: 100,
    border_radius: 0,
    'padding-block-start': 0,
    'padding-block-end': 0,
  },
  blocks: {
    divider: {
      type: '_divider',
      name: 't:names.divider',
      settings: {
        thickness: 1,
        corner_radius: 'square',
        width_percent: 100,
        'padding-block-start': 0,
        'padding-block-end': 0,
      },
    },
  },
  block_order: ['divider'],
};
