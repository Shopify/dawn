import { resourceListSettings } from '../utils/resource-list';
import { productRecommendationsSection } from '../presets/product-recommendations-section';
/**
 * @type {import('../schema').Schema}
 */

/**
 * @type {import('../schema').SettingSchema}
 */
const maxProductsSetting = {
  type: 'range',
  id: 'max_products',
  label: 't:settings.product_count',
  min: 3,
  max: 10,
  step: 1,
  default: 4,
};

/**
 * @type {import('../schema').SettingSchema[]}
 */
const productRecommendationsSettings = [
  ...resourceListSettings({
    type: 'section',
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
  }).map((setting) => ('id' in setting && setting.id === 'max_products' ? maxProductsSetting : setting)),
];

export default {
  name: 't:names.product_recommendations',
  disabled_on: {
    groups: ['header', 'footer'],
  },
  blocks: [
    {
      type: '@theme',
    },
    {
      type: '@app',
    },
    { type: 'text' },
    { type: 'icon' },
    { type: 'image' },
    { type: 'button' },
    { type: 'video' },
    { type: 'group' },
    { type: 'spacer' },
    { type: '_divider' },
  ],
  settings: [...productRecommendationsSettings],
  presets: [productRecommendationsSection],
};
