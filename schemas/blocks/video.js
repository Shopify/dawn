import { border } from 'utils/border';
import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.video',
  tag: null,
  settings: [
    {
      type: 'select',
      id: 'source',
      label: 't:settings.video_source',
      options: [
        {
          value: 'uploaded',
          label: 't:options.video_uploaded',
        },
        {
          value: 'url',
          label: 't:options.video_external_url',
        },
      ],
      default: 'uploaded',
    },
    {
      type: 'video',
      id: 'video',
      label: 't:settings.video',
      visible_if: "{{ block.settings.source == 'uploaded' }}",
    },
    {
      type: 'video_url',
      id: 'video_url',
      label: 't:settings.video_external_url',
      info: 't:info.video_external',
      accept: ['youtube', 'vimeo'],
      visible_if: "{{ block.settings.source == 'url' }}",
    },
    {
      type: 'checkbox',
      id: 'video_autoplay',
      label: 't:settings.video_autoplay',
      info: 't:info.video_autoplay',
      default: false,
    },
    {
      type: 'checkbox',
      id: 'video_loop',
      label: 't:settings.video_loop',
      default: true,
    },
    {
      type: 'image_picker',
      id: 'cover_image',
      label: 't:settings.cover_image',
      visible_if: "{{ block.settings.source == 'url' and block.settings.video_autoplay == false }}",
    },
    {
      type: 'text',
      id: 'alt',
      label: 't:settings.video_alt_text',
      info: 't:info.video_alt_text',
      visible_if: "{{ block.settings.source == 'url' }}",
    },
    {
      type: 'header',
      content: 't:content.size',
    },
    {
      type: 'range',
      id: 'custom_width',
      label: 't:settings.width',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      default: 100,
    },
    {
      type: 'range',
      id: 'custom_width_mobile',
      label: 't:settings.width_mobile',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      default: 100,
    },
    {
      type: 'select',
      id: 'aspect_ratio',
      label: 't:settings.aspect_ratio',
      visible_if: "{{ block.settings.source == 'url' and block.settings.cover_image == blank }}",
      options: [
        {
          value: 'auto',
          label: 't:options.auto',
        },
        {
          value: '9/16',
          label: 't:options.portrait',
        },
        {
          value: '1/1',
          label: 't:options.square',
        },
        {
          value: '16/9',
          label: 't:options.landscape',
        },
      ],
      default: 'auto',
    },
    ...border(),
    ...padding({ max: 32 }),
  ],
  presets: [{ name: 't:names.video', category: 't:categories.basic' }],
};
