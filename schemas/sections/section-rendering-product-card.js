/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.product_card_rendering',
  disabled_on: {
    groups: ['header', 'footer'],
  },
  settings: [
    {
      type: 'product',
      id: 'product',
      label: 't:settings.product',
    },
  ],
};
