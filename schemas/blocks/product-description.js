import text from './text';

/**
 * @type {import('../schema').Schema}
 */
export default {
  ...text,
  presets: [
    {
      name: 't:names.product_description',
      category: 't:categories.product',
      settings: {
        text: '{{ closest.product.description }}',
      },
    },
  ],
};
