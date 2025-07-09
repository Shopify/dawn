import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.product_media',
  tag: null,
  settings: [
    {
      type: 'select',
      id: 'media_presentation',
      label: 't:settings.type',
      options: [
        {
          value: 'grid',
          label: 't:options.grid',
        },
        {
          value: 'carousel',
          label: 't:options.carousel',
        },
      ],
      default: 'grid',
      info: 't:info.carousel_layout_on_mobile',
    },
    {
      type: 'header',
      content: 't:content.grid',
      visible_if: "{{ block.settings.media_presentation == 'grid' }}",
    },
    {
      type: 'select',
      id: 'media_columns',
      label: 't:settings.columns',
      options: [
        {
          value: 'one',
          label: 't:options.one_number',
        },
        {
          value: 'two',
          label: 't:options.two_number',
        },
      ],
      default: 'one',
      visible_if: "{{ block.settings.media_presentation == 'grid' }}",
    },
    {
      type: 'range',
      id: 'image_gap',
      label: 't:settings.gap',
      min: 0,
      max: 100,
      unit: 'px',
      step: 1,
      default: 0,
      visible_if: "{{ block.settings.media_presentation == 'grid' }}",
    },
    {
      type: 'checkbox',
      id: 'large_first_image',
      label: 't:settings.full_width_first_image',
      default: false,
      visible_if: "{{ block.settings.media_presentation == 'grid' and block.settings.media_columns == 'two' }}",
    },
    {
      type: 'header',
      content: 't:content.carousel',
    },
    {
      type: 'select',
      id: 'icons_style',
      label: 't:settings.icons',
      options: [
        {
          value: 'arrow',
          label: 't:options.arrows',
        },
        {
          value: 'chevron',
          label: 't:options.chevrons',
        },
        {
          value: 'arrows_large',
          label: 't:options.large_arrows',
        },
        {
          value: 'chevron_large',
          label: 't:options.large_chevrons',
        },
      ],
      default: 'arrow',
      visible_if: "{{ block.settings.media_presentation == 'carousel' }}",
    },
    {
      type: 'select',
      id: 'slideshow_controls_style',
      label: 't:settings.pagination',
      options: [
        {
          value: 'dots',
          label: 't:options.dots',
        },
        {
          value: 'counter',
          label: 't:options.counter',
        },
        {
          value: 'thumbnails',
          label: 't:options.thumbnails',
        },
      ],
      visible_if: "{{ block.settings.media_presentation == 'carousel' }}",
    },
    {
      type: 'select',
      id: 'slideshow_mobile_controls_style',
      label: 't:settings.mobile_pagination',
      options: [
        {
          value: 'dots',
          label: 't:options.dots',
        },
        {
          value: 'counter',
          label: 't:options.counter',
        },
        {
          value: 'hint',
          label: 't:options.hint',
        },
      ],
    },
    {
      type: 'header',
      content: 't:content.thumbnails',
      visible_if:
        "{{ block.settings.media_presentation == 'carousel' and block.settings.slideshow_controls_style == 'thumbnails' }}",
    },
    {
      type: 'select',
      id: 'thumbnail_position',
      label: 't:settings.position',
      options: [
        {
          value: 'left',
          label: 't:options.left',
        },
        {
          value: 'bottom',
          label: 't:options.bottom',
        },
        {
          value: 'right',
          label: 't:options.right',
        },
      ],
      default: 'bottom',
      visible_if:
        "{{ block.settings.media_presentation == 'carousel' and block.settings.slideshow_controls_style == 'thumbnails' }}",
    },
    {
      type: 'range',
      id: 'thumbnail_width',
      label: 't:settings.width',
      min: 44,
      max: 72,
      step: 1,
      unit: 'px',
      default: 64,
      visible_if:
        "{{ block.settings.media_presentation == 'carousel' and block.settings.slideshow_controls_style == 'thumbnails' }}",
    },
    {
      type: 'header',
      content: 't:content.media',
    },
    {
      type: 'select',
      id: 'aspect_ratio',
      label: 't:settings.aspect_ratio',
      options: [
        {
          value: 'adapt',
          label: 't:options.auto',
        },
        {
          value: '1/1.25',
          label: 't:options.portrait',
        },
        {
          value: '1',
          label: 't:options.square',
        },
        {
          value: '2/1',
          label: 't:options.landscape',
        },
      ],
      default: 'adapt',
    },
    {
      type: 'range',
      id: 'media_radius',
      label: 't:settings.border_radius',
      min: 0,
      max: 32,
      step: 1,
      unit: 'px',
      default: 4,
    },
    {
      type: 'checkbox',
      id: 'extend_media',
      label: 't:settings.extend_media_to_screen_edge',
      default: true,
      visible_if: "{{ section.settings.content_width == 'content-center-aligned' }}",
    },
    {
      type: 'checkbox',
      id: 'constrain_to_viewport',
      label: 't:settings.limit_media_to_screen_height',
      default: false,
    },
    {
      type: 'checkbox',
      id: 'zoom',
      label: 't:settings.enable_zoom',
      default: true,
    },
    {
      type: 'checkbox',
      id: 'video_loop',
      label: 't:settings.enable_video_looping',
      default: false,
    },
    {
      type: 'checkbox',
      id: 'hide_variants',
      default: false,
      label: 't:settings.hide_unselected_variant_media',
    },
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.product_media',
    },
  ],
};
