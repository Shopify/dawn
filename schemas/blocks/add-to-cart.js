/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.add_to_cart',
  tag: null,
  settings: [
    {
      type: 'select',
      id: 'style_class',
      label: 't:settings.style',
      options: [
        {
          value: 'button',
          label: 't:options.primary',
        },
        {
          value: 'button-secondary',
          label: 't:options.secondary',
        },
      ],
      default: 'button-secondary',
    },
  ],
};
