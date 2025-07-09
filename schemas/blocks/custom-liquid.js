/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.custom_liquid',
  tag: null,
  settings: [
    {
      type: 'liquid',
      id: 'custom_liquid',
      label: 't:settings.custom_liquid',
      info: 't:info.custom_liquid',
    },
  ],
  presets: [
    {
      name: 't:names.custom_liquid',
      category: 't:categories.custom',
    },
  ],
};
