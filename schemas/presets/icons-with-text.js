/**
 * @type {import('../schema').Preset}
 */

const iconGroup = ({
  icon = 'eye',
  heading = 'Heading',
  text = 'Share information about your brand with your customers.',
}) => ({
  type: 'group',
  settings: {
    content_direction: 'column',
    vertical_on_mobile: true,
    horizontal_alignment: 'flex-start',
    vertical_alignment: 'center',
    horizontal_alignment_flex_direction_column: 'center',
    vertical_alignment_flex_direction_column: 'center',
    gap: 16,
    height: 'fit',
    inherit_color_scheme: true,
  },
  blocks: {
    icon: {
      type: 'icon',
      settings: {
        icon: icon,
        width: 32,
        link: '',
      },
    },
    group: {
      type: 'group',
      settings: {
        gap: 4,
      },
      blocks: {
        heading: {
          type: 'text',
          settings: {
            text: `<h2>${heading}</h2>`,
            type_preset: 'h3',
            font: 'var(--font-body--family)',
            font_size: '',
            line_height: 'normal',
            letter_spacing: 'normal',
            case: 'none',
            wrap: 'pretty',
            width: '100%',
            max_width: 'normal',
            alignment: 'center',
            'padding-block-start': 0,
            'padding-block-end': 0,
          },
        },
        text: {
          type: 'text',
          settings: {
            text: `<p>${text}</p>`,
            type_preset: 'rte',
            font: 'var(--font-body--family)',
            font_size: '',
            line_height: 'normal',
            letter_spacing: 'normal',
            case: 'none',
            wrap: 'pretty',
            width: '100%',
            max_width: 'normal',
            alignment: 'center',
            'padding-block-start': 0,
            'padding-block-end': 0,
          },
        },
      },
      block_order: ['heading', 'text'],
    },
  },
  block_order: ['icon', 'group'],
});

export const iconsWithText = {
  name: 't:names.icons_with_text',
  category: 't:categories.storytelling',
  blocks: {
    group_1: iconGroup({
      icon: 'eye',
      heading: 'Intentional design',
      text: 'Everything we do starts with why',
    }),
    group_2: iconGroup({
      icon: 'heart',
      heading: 'Made with care',
      text: 'We believe in building better',
    }),
    group_3: iconGroup({
      icon: 'silhouette',
      heading: 'A team with a goal',
      text: 'Real people making great products',
    }),
  },
  block_order: ['group_1', 'group_2', 'group_3'],
  settings: {
    content_direction: 'row',
    vertical_on_mobile: true,
    gap: 16,
    section_width: 'page-width',
    'padding-block-start': 48,
    'padding-block-end': 48,
  },
};
