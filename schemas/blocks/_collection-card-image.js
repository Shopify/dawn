import { overlay } from '../utils/overlay';
import { border } from '../utils/border';

/**
 * @type {import('../schema').Schema}
 */

export default {
  name: 't:names.collection_card_image',
  tag: null,
  settings: [
    {
      type: 'paragraph',
      content: 't:content.resource_reference_collection_card_image',
    },
    {
      type: 'select',
      id: 'image_ratio',
      label: 't:settings.aspect_ratio',
      info: 't:info.aspect_ratio_adjusted',
      options: [
        {
          value: 'adapt',
          label: 't:options.auto',
        },
        {
          value: 'portrait',
          label: 't:options.portrait',
        },
        {
          value: 'square',
          label: 't:options.square',
        },
        {
          value: 'landscape',
          label: 't:options.landscape',
        },
      ],
      default: 'portrait',
    },
    ...overlay({ type: 'block' }),
    ...border({ addHeader: true }),
  ],
};
