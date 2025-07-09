import { color_scheme } from 'utils/color-scheme';
import { padding } from 'utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.featured_product',
  disabled_on: {
    groups: ['header'],
  },
  settings: [
    {
      type: 'product',
      id: 'product',
      label: 't:settings.product',
    },
    {
      type: 'select',
      id: 'layout',
      label: 't:settings.media_position',
      options: [
        { value: 'media-left', label: 't:options.left' },
        { value: 'media-right', label: 't:options.right' },
      ],
      default: 'media-left',
    },
    ...color_scheme({ type: 'section' }),
    ...padding({ type: 'section' }),
  ],
  presets: [
    {
      name: 't:names.featured_product',
      category: 't:categories.products',
      settings: {
        color_scheme: 'scheme-3',
      },
      blocks: {
        media: {
          type: '_media-without-appearance',
          static: true,
          name: 't:names.product_media',
        },
        'featured-product': {
          type: '_featured-product',
          static: true,
          name: 't:names.product',
          blocks: {
            'featured-product-title': {
              type: 'product-title',
              name: 't:names.title',
              static: true,
              settings: {
                type_preset: 'h5',
                width: '100%',
              },
            },
            'featured-product-price': {
              type: '_featured-product-price',
              name: 't:names.price',
              static: true,
            },
            'featured-product-gallery': {
              type: '_featured-product-gallery',
              name: 't:names.image',
              static: true,
            },
            'featured-product-swatches': {
              type: 'swatches',
              name: 't:names.swatches',
              static: true,
              settings: {
                hide_padding: true,
              },
            },
          },
        },
      },
    },
  ],
};
