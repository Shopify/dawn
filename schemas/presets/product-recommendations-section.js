/**
 * @type {import('../schema').Preset}
 */

export const productRecommendationsSection = {
  name: 't:names.product_recommendations',
  category: 't:categories.products',
  settings: {
    product: '{{ closest.product }}',
    recommendation_type: 'related',
    layout_type: 'grid',
    carousel_on_mobile: false,
    max_products: 4,
    columns: 4,
    mobile_columns: '2',
    columns_gap: 12,
    rows_gap: 36,
    icons_style: 'arrow',
    icons_shape: 'none',
    section_width: 'page-width',
    gap: 28,
    color_scheme: 'scheme-1',
    'padding-block-start': 48,
    'padding-block-end': 48,
  },
  blocks: {
    header: {
      type: 'text',
      name: 't:names.header',
      settings: {
        text: '<h3>Related products</h3>',
      },
    },
    'static-product-card': {
      type: '_product-card',
      name: 't:names.product_card',
      static: true,
      settings: {},
      blocks: {
        'card-gallery': {
          type: '_product-card-gallery',
          name: 't:names.product_card_media',
        },
        group: {
          type: '_product-card-group',
          settings: {
            content_direction: 'column',
            gap: 4,
          },
          blocks: {
            text: {
              type: 'product-title',
              settings: {
                type_preset: 'h5',
              },
            },
            price: {
              type: 'price',
              settings: {
                show_tax_info: false,
              },
            },
            swatches: {
              type: 'swatches',
            },
          },
          block_order: ['text', 'price', 'swatches'],
        },
      },
      block_order: ['card-gallery', 'group'],
    },
  },
  block_order: ['header'],
};
