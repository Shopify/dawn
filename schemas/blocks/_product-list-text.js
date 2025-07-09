import text from './text';

/**
 * @type {import('../schema').Schema}
 */
export default {
  ...text,
  name: 't:names.collection_title',
  presets: [
    {
      name: 't:names.collection_title',
      category: 't:categories.collection',
      settings: {
        text: '<h3>{{ closest.collection.title }}</h3>',
      },
    },
  ],
};
