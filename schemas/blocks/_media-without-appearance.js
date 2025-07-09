import { media_picker } from 'utils/media_picker';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.media',
  tag: null,
  settings: [
    ...media_picker({ additionalSettings: { url: true, videoAutoplay: true, videoLoop: true } }),
    {
      type: /** @type {"select"} */ ('select'),
      id: 'image_position',
      label: 't:settings.image_position',
      options: [
        {
          value: 'cover',
          label: 't:options.cover',
        },
        {
          value: 'contain ',
          label: 't:options.contain',
        },
      ],
      default: 'cover',
      visible_if: `{{ block.settings.media_type == 'image' }}`,
    },
    {
      type: /** @type {"select"} */ ('select'),
      id: 'video_position',
      label: 't:settings.video_position',
      options: [
        {
          value: 'cover',
          label: 't:options.cover',
        },
        {
          value: 'contain',
          label: 't:options.contain',
        },
      ],
      default: 'cover',
      visible_if: `{{ block.settings.media_type == 'video' }}`,
    },
  ],
  presets: [
    {
      name: 't:names.media',
    },
  ],
};
