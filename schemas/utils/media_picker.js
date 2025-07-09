/**
 * Creates a media picker setting schema
 * @param {Object} options - Setting schema overrides
 * @param {string} [options.type='block'] - Type of media picker to apply
 * @param {string} [options.index='1'] - Index of the media picker in case of multiple media pickers
 * @param {Object} [options.additionalSettings] - Additional settings to include in the media picker
 * @param {boolean} [options.additionalSettings.url=false] - Whether to include a URL setting
 * @param {boolean} [options.additionalSettings.videoLoop=false] - Whether to include a video loop setting
 * @param {boolean} [options.additionalSettings.videoAutoplay=false] - Whether to include a video autoplay setting
 * @param {string} [options.additionalSettings.condition] - Condition to check if the media picker should be visible
 * @returns {import('../schema').SettingSchema[]}
 */
export const media_picker = (options = {}) => {
  const { type = 'block', index, additionalSettings = {} } = options;
  const { url = false, videoLoop = false, videoAutoplay = false, condition = '' } = additionalSettings;

  const suffix = index ? `_${index}` : '';

  const mediaType = `${type}.settings.media_type${suffix}`;

  return /** @type {import('../schema').SettingSchema[]} */ ([
    {
      type: 'select',
      id: `media_type${suffix}`,
      label: 't:settings.type',
      options: [
        {
          value: 'image',
          label: 't:options.image',
        },
        {
          value: 'video',
          label: 't:options.video',
        },
      ],
      default: 'image',
      visible_if: condition ? `{{ ${condition} }}` : undefined,
    },
    {
      type: 'image_picker',
      id: `image${suffix}`,
      label: 't:settings.image',
      visible_if: condition ? `{{ ${condition} and ${mediaType} == 'image' }}` : `{{ ${mediaType} == 'image' }}`,
    },
    ...(url
      ? [
          {
            type: 'url',
            id: `link${suffix}`,
            label: 't:settings.link',
            visible_if: condition
              ? `{{ ${condition} and ${mediaType} == 'image'  }}`
              : `{{ ${mediaType} == 'image'  }}`,
          },
        ]
      : []),
    {
      type: 'video',
      id: `video${suffix}`,
      label: 't:settings.video',
      visible_if: condition ? `{{ ${condition} and ${mediaType} == 'video' }}` : `{{ ${mediaType} == 'video' }}`,
    },
    ...(videoLoop
      ? [
          {
            type: 'checkbox',
            id: `video_loop${suffix}`,
            label: 't:settings.loop',
            default: true,
            visible_if: condition ? `{{ ${condition} and ${mediaType} == 'video' }}` : `{{ ${mediaType} == 'video' }}`,
          },
        ]
      : []),
    ...(videoAutoplay
      ? [
          {
            type: 'checkbox',
            id: `video_autoplay${suffix}`,
            label: 't:settings.autoplay',
            default: false,
            visible_if: condition ? `{{ ${condition} and ${mediaType} == 'video' }}` : `{{ ${mediaType} == 'video' }}`,
          },
        ]
      : []),
  ]);
};
