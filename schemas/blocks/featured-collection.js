/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.featured_collection',
  tag: null,
  blocks: [{ type: '@theme' }, { type: '@app' }],
  settings: [
    {
      type: 'collection',
      id: 'collection',
      label: 't:settings.collection',
    },
  ],
  presets: [],
};
