/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.social_link',
  tag: null,
  settings: [
    {
      type: 'url',
      id: 'link',
      label: 't:settings.link',
    },
  ],
  presets: [
    {
      name: 't:names.social_link',
      category: 't:categories.footer',
    },
  ],
};
