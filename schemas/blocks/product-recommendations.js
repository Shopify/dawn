import { resourceListSettings } from '../utils/resource-list';
import { productRecommendationsBlock } from '../presets/product-recommendations-block';

/**
 * @type {import('../schema').SettingSchema}
 */
const maxProductsSetting = {
  type: 'range',
  id: 'max_products',
  label: 't:settings.product_count',
  min: 2,
  max: 10,
  step: 1,
  default: 4,
};

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.product_recommendations',
  class: 'product-recommendations-wrapper',
  blocks: [{ type: '@theme' }, { type: '@app' }],
  settings: [
    {
      type: 'paragraph',
      content: 't:content.resource_reference_product_recommendations',
    },
    ...resourceListSettings({
      type: 'block',
      resource: 'product',
      additionalResourceSettings: [
        {
          type: 'select',
          id: 'recommendation_type',
          label: 't:settings.type',
          options: [
            {
              value: 'related',
              label: 't:options.related',
            },
            {
              value: 'complementary',
              label: 't:options.complementary',
            },
          ],
          default: 'related',
        },
        {
          type: 'paragraph',
          content: 't:content.complementary_products',
        },
      ],
    })
      .filter((setting) => !('id' in setting && setting.id === 'product'))
      .map((setting) => ('id' in setting && setting.id === 'max_products' ? maxProductsSetting : setting)),
  ],
  presets: [productRecommendationsBlock],
};
