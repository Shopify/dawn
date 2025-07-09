/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.blog_post',
  settings: [
    {
      type: 'text_alignment',
      id: 'alignment',
      label: 't:settings.alignment',
      default: 'left',
    },
  ],
};
