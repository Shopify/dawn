import { border } from 'utils/border';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.image',
  tag: null,
  settings: [
    {
      type: 'image_picker',
      id: 'image',
      label: 't:settings.image',
    },
    {
      type: 'url',
      id: 'link',
      label: 't:settings.link',
    },
    {
      type: 'header',
      content: 't:content.size',
    },
    {
      type: 'select',
      id: 'image_ratio',
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
      default: 'adapt',
      label: 't:settings.aspect_ratio',
    },
    {
      type: 'select',
      id: 'width',
      label: 't:settings.width_desktop',
      options: [
        {
          value: 'fit-content',
          label: 't:options.fit_content',
        },
        {
          value: 'fill',
          label: 't:options.fill',
        },
        {
          value: 'custom',
          label: 't:options.custom',
        },
      ],
      default: 'fill',
    },
    {
      type: 'range',
      id: 'custom_width',
      label: 't:settings.custom_width',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      default: 100,
      visible_if: "{{ block.settings.width == 'custom' }}",
    },
    {
      type: 'select',
      id: 'width_mobile',
      label: 't:settings.width_mobile',
      options: [
        {
          value: 'fit-content',
          label: 't:options.fit_content',
        },
        {
          value: 'fill',
          label: 't:options.fill',
        },
        {
          value: 'custom',
          label: 't:options.custom',
        },
      ],
      default: 'fill',
    },
    {
      type: 'range',
      id: 'custom_width_mobile',
      label: 't:settings.custom_width',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      default: 100,
      visible_if: "{{ block.settings.width_mobile == 'custom' }}",
    },
    {
      type: 'select',
      id: 'height',
      label: 't:settings.height',
      options: [
        {
          value: 'fit',
          label: 't:options.fit_content',
        },
        {
          value: 'fill',
          label: 't:options.fill',
        },
      ],
      default: 'fit',
      visible_if: "{{ block.settings.image_ratio == 'adapt' }}",
    },
    ...border(),
    {
      type: 'header',
      content: 't:content.padding',
    },
    {
      type: 'range',
      id: 'padding-block-start',
      label: 't:settings.top',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 0,
    },
    {
      type: 'range',
      id: 'padding-block-end',
      label: 't:settings.bottom',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 0,
    },
    {
      type: 'range',
      id: 'padding-inline-start',
      label: 't:settings.left',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 0,
    },
    {
      type: 'range',
      id: 'padding-inline-end',
      label: 't:settings.right',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 0,
    },
  ],
  presets: [{ name: 't:names.image', category: 't:categories.basic' }],
};
