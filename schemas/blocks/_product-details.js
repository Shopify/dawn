import { appearance } from '../utils/appearance';
import { padding } from '../utils/padding';
import { size } from '../utils/size';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.details',
  blocks: [
    { type: '@theme' },
    { type: '@app' },
    { type: 'text' },
    { type: 'icon' },
    { type: 'image' },
    { type: 'button' },
    { type: 'video' },
    { type: 'group' },
    { type: 'spacer' },
    { type: 'accordion' },
    { type: 'product-recommendations' },
    { type: 'price' },
    { type: 'variant-picker' },
    { type: 'buy-buttons' },
    { type: 'product-description' },
    { type: 'review' },
    { type: 'accelerated-checkout' },
    { type: '_divider' },
    { type: 'product-inventory' },
  ],
  tag: null,
  settings: [
    ...size({ excludeHeight: true }),
    {
      type: 'select',
      id: 'height',
      label: 't:settings.height',
      options: [
        { value: 'fit', label: 't:options.fit_content' },
        { value: 'fill', label: 't:options.fill' },
      ],
      default: 'fit',
    },
    {
      type: 'header',
      content: 't:content.layout',
    },
    {
      type: 'select',
      id: 'details_position',
      label: 't:settings.position',
      options: [
        { value: 'flex-start', label: 't:options.top' },
        { value: 'center', label: 't:options.center' },
        { value: 'flex-end', label: 't:options.bottom' },
      ],
      default: 'flex-start',
      visible_if: '{{ block.settings.height == "fill" }}',
    },
    {
      type: 'range',
      id: 'gap',
      label: 't:settings.gap',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 12,
    },
    {
      type: 'checkbox',
      id: 'sticky_details_desktop',
      label: 't:settings.make_details_sticky_desktop',
      default: false,
    },
    ...appearance('block'),
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.details',
      settings: {
        width: 'custom',
        custom_width: 100,
        'padding-block-start': 0,
        'padding-block-end': 0,
        'padding-inline-start': 0,
        'padding-inline-end': 0,
        gap: 12,
        inherit_color_scheme: true,
        color_scheme: '',
        video_position: 'cover',
        background_image_position: 'cover',
        border: 'none',
        border_width: 1,
        border_opacity: 100,
      },
      blocks: {
        text_TMtYp8: {
          type: 'text',
          settings: {
            text: '<p>Home → Shirts</p>',
            alignment: 'left',
            'padding-block-start': 16,
            'padding-inline-end': 0,
            'padding-block-end': 0,
            'padding-inline-start': 0,
          },
        },
        heading_m7KmQQ: {
          type: 'text',
          settings: {
            text: '<h1>{{ closest.product.title }}</h1>',
            type_preset: 'h2',
            alignment: 'left',
          },
        },
        text_GMQR8L: {
          type: 'text',
          settings: {
            text: '<p>★★★★★ 368 Reviews</p>',
            alignment: 'left',
          },
        },
        price_a7krng: {
          type: 'price',
          settings: {
            show_tax_info: true,
            type_preset: 'h4',
            alignment: 'left',
          },
        },
        variant_picker_R3rGDr: {
          type: 'variant-picker',
          settings: {
            variant_style: 'pills',
            'padding-block-start': 0,
            'padding-block-end': 8,
            'padding-inline-start': 0,
            'padding-inline-end': 0,
          },
        },
        buy_buttons_eYQEYi: {
          type: 'buy-buttons',
          settings: {
            'padding-block-start': 0,
            'padding-block-end': 0,
            'padding-inline-start': 0,
            'padding-inline-end': 0,
          },
          blocks: {
            'add-to-cart': {
              type: 'add-to-cart',
              static: true,
              settings: {
                style_class: 'button-secondary',
              },
            },
            'accelerated-checkout': {
              type: 'accelerated-checkout',
              static: true,
            },
          },
          block_order: [],
        },
        group_Q4eVWb: {
          type: 'group',
          settings: {
            width: 'custom',
            custom_width: 100,
            'padding-block-start': 8,
            'padding-block-end': 4,
            'padding-inline-start': 0,
            'padding-inline-end': 0,
            content_direction: 'column',
            horizontal_alignment: 'flex-start',
            vertical_alignment: 'center',
            horizontal_alignment_flex_direction_column: 'flex-start',
            vertical_alignment_flex_direction_column: 'center',
            gap: 8,
            inherit_color_scheme: true,
            color_scheme: '',
            video_position: 'cover',
            background_image_position: 'cover',
            border: 'none',
            border_width: 1,
            border_opacity: 100,
          },
          blocks: {
            group_Hrq6NU: {
              type: 'group',
              settings: {
                width: 'custom',
                custom_width: 100,
                'padding-block-start': 0,
                'padding-block-end': 0,
                'padding-inline-start': 0,
                'padding-inline-end': 0,
                content_direction: 'row',
                horizontal_alignment: 'flex-start',
                vertical_alignment: 'center',
                horizontal_alignment_flex_direction_column: 'flex-start',
                vertical_alignment_flex_direction_column: 'center',
                gap: 12,
                inherit_color_scheme: true,
                color_scheme: '',
                video_position: 'cover',
                background_image_position: 'cover',
                border: 'none',
                border_width: 1,
                border_opacity: 100,
              },
              blocks: {
                icon_bBpnME: {
                  type: 'icon',
                  settings: {
                    icon: 'truck',
                    width: 16,
                  },
                },
                text_83R7CQ: {
                  type: 'text',
                  settings: {
                    text: '<p>Free shipping over $50</p>',
                    alignment: 'left',
                    'padding-block-start': 0,
                    'padding-block-end': 0,
                    'padding-inline-start': 0,
                    'padding-inline-end': 0,
                  },
                },
              },
              block_order: ['icon_bBpnME', 'text_83R7CQ'],
            },
            group_WbpVdV: {
              type: 'group',
              settings: {
                width: 'custom',
                custom_width: 100,
                'padding-block-start': 0,
                'padding-block-end': 0,
                'padding-inline-start': 0,
                'padding-inline-end': 0,
                content_direction: 'row',
                horizontal_alignment: 'flex-start',
                vertical_alignment: 'center',
                horizontal_alignment_flex_direction_column: 'flex-start',
                vertical_alignment_flex_direction_column: 'center',
                gap: 12,
                inherit_color_scheme: true,
                color_scheme: '',
                video_position: 'cover',
                background_image_position: 'cover',
                border: 'none',
                border_width: 1,
                border_opacity: 100,
              },
              blocks: {
                icon_FVd3C4: {
                  type: 'icon',
                  settings: {
                    icon: 'return',
                    width: 16,
                  },
                },
                text_EmGGUV: {
                  type: 'text',
                  settings: {
                    text: '<p>Free 30-day returns</p>',
                    alignment: 'left',
                    'padding-block-start': 0,
                    'padding-block-end': 0,
                    'padding-inline-start': 0,
                    'padding-inline-end': 0,
                  },
                },
              },
              block_order: ['icon_FVd3C4', 'text_EmGGUV'],
            },
          },
          block_order: ['group_Hrq6NU', 'group_WbpVdV'],
        },
        accordion: {
          type: 'accordion',
          settings: {},
          blocks: {
            'accordion-row-1': {
              type: '_accordion-row',
              settings: {
                heading: 'Materials',
              },
              blocks: {
                text: {
                  type: 'text',
                },
              },
              block_order: ['text'],
            },
            'accordion-row-2': {
              type: '_accordion-row',
              settings: {
                heading: 'Care instructions',
              },
              blocks: {
                text: {
                  type: 'text',
                },
              },
              block_order: ['text'],
            },
            'accordion-row-3': {
              type: '_accordion-row',
              settings: {
                heading: 'Fit',
              },
              blocks: {
                text: {
                  type: 'text',
                },
              },
              block_order: ['text'],
            },
          },
          block_order: ['accordion-row-1', 'accordion-row-2', 'accordion-row-3'],
        },
        complementary_products: {
          type: 'product-recommendations',
          settings: {
            recommendation_type: 'complementary',
          },
          blocks: {
            'recommendations-header': {
              type: 'text',
              settings: {
                text: '<h3>Styled with</h3>',
                type_preset: 'h5',
              },
            },
          },
          block_order: ['recommendations-header'],
        },
      },
      block_order: [
        'text_TMtYp8',
        'heading_m7KmQQ',
        'text_GMQR8L',
        'price_a7krng',
        'variant_picker_R3rGDr',
        'buy_buttons_eYQEYi',
        'group_Q4eVWb',
        'accordion',
        'complementary_products',
      ],
    },
  ],
};
