import { padding } from 'utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.follow_on_shop',
  tag: null,
  settings: [
    {
      type: 'paragraph',
      content: 't:content.follow_on_shop_eligiblity',
    },
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.follow_on_shop',
      category: 't:categories.footer',
    },
  ],
};
