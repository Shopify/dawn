/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.collection',
  tag: null,
  settings: [
    {
      type: 'paragraph',
      content: 't:content.resource_reference_collection_card',
    },
    {
      type: 'checkbox',
      id: 'show_count',
      label: 't:settings.show_count',
      default: true,
    },
  ],
};
