/**
 * @type {import('../schema').Preset}
 */

export const productRecommendationsBlock = {
  name: 't:names.product_recommendations',
  category: 't:categories.product',
  settings: {
    recommendation_type: 'related',
  },
  blocks: {
    heading: {
      type: 'text',
      settings: {
        text: '<h4>You may also like</h4>',
      },
    },
    'static-product-card': {
      type: '_product-card',
      static: true,
      settings: {},
      blocks: {
        'product-card-gallery': {
          type: '_product-card-gallery',
        },
        group: {
          type: '_product-card-group',
          settings: {
            content_direction: 'column',
            gap: 4,
          },
          blocks: {
            product_title: {
              type: 'product-title',
              name: 't:names.title',
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
          block_order: ['product_title', 'price', 'swatches'],
        },
      },
      block_order: ['product-card-gallery', 'group'],
    },
  },
  block_order: ['heading'],
};
