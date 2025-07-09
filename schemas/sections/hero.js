import { layout } from 'utils/layout';
import { media_picker } from 'utils/media_picker';
import { overlay } from 'utils/overlay';
import { padding } from 'utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.hero',
  tag: 'section',
  class: 'hero-wrapper section-wrapper',
  blocks: [
    {
      type: '@theme',
    },
    {
      type: 'text',
    },
    {
      type: 'button',
    },
    {
      type: 'logo',
    },
    {
      type: 'jumbo-text',
    },
    {
      type: 'spacer',
    },
    {
      type: 'group',
    },
    {
      type: '_marquee',
    },
  ],
  disabled_on: {
    groups: ['header'],
  },
  settings: [
    {
      type: 'header',
      content: 't:content.media',
    },
    ...media_picker({ index: '1', type: 'section' }),
    {
      type: 'header',
      content: 't:content.media_2',
    },
    ...media_picker({
      index: '2',
      type: 'section',
    }),
    {
      type: 'header',
      content: 't:content.section_link',
    },
    {
      type: 'url',
      id: 'link',
      label: 't:settings.link',
    },
    {
      type: 'checkbox',
      id: 'open_in_new_tab',
      label: 't:settings.open_new_tab',
      default: false,
    },
    ...layout('section'),
    {
      type: 'select',
      id: 'section_width',
      label: 't:settings.width',
      options: [
        {
          value: 'page-width',
          label: 't:options.page',
        },
        {
          value: 'full-width',
          label: 't:options.full',
        },
      ],
      default: 'page-width',
    },
    {
      type: 'select',
      id: 'section_height',
      label: 't:settings.height',
      options: [
        {
          value: 'auto',
          label: 't:options.auto',
        },
        {
          value: 'small',
          label: 't:options.small',
        },
        {
          value: 'medium',
          label: 't:options.medium',
        },
        {
          value: 'large',
          label: 't:options.large',
        },
        {
          value: 'full-screen',
          label: 't:options.full_screen',
        },
        {
          value: 'custom',
          label: 't:options.custom',
        },
      ],
      default: 'medium',
    },
    {
      type: 'range',
      id: 'section_height_custom',
      label: 't:settings.custom_height',
      min: 0,
      max: 100,
      step: 1,
      default: 50,
      unit: '%',
      visible_if: "{{ section.settings.section_height == 'custom' }}",
    },
    {
      type: 'header',
      content: 't:content.appearance',
    },
    {
      type: 'color_scheme',
      id: 'color_scheme',
      label: 't:settings.color_scheme',
      default: 'scheme-1',
    },
    ...overlay({ type: 'section' }),
    {
      type: 'checkbox',
      id: 'blurred_reflection',
      label: 't:settings.blurred_reflection',
      default: false,
      info: 't:info.applies_on_image_only',
    },
    {
      type: 'range',
      id: 'reflection_opacity',
      label: 't:settings.reflection_opacity',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      default: 75,
      visible_if: '{{ section.settings.blurred_reflection }}',
    },
    ...padding({ type: 'section' }),
  ],
  presets: [
    {
      name: 't:names.hero',
      category: 't:categories.banners',
      blocks: {
        text_1: {
          type: 'text',
          settings: {
            text: '<h1>New arrivals</h1>',
            type_preset: 'h1',
            max_width: 'narrow',
          },
        },
        text_2: {
          type: 'text',
          settings: {
            text: '<p>Made with care and unconditionally loved by our customers.</p>',
            max_width: 'narrow',
            'padding-block-end': 32,
          },
        },
        button: {
          type: 'button',
          name: 't:names.button',
          settings: {
            label: 'Shop Now',
            link: 'shopify://collections/all',
          },
        },
      },
      block_order: ['text_1', 'text_2', 'button'],
      settings: {
        horizontal_alignment_flex_direction_column: 'center',
        gap: 16,
        section_height: 'large',
        color_scheme: 'scheme-5',
        'padding-block-start': 40,
        'padding-block-end': 40,
        toggle_overlay: true,
        overlay_style: 'gradient',
      },
    },
    {
      name: 't:names.hero_marquee',
      category: 't:categories.banners',
      blocks: {
        spacer: {
          type: 'spacer',
          settings: {
            size: 'pixel',
            pixel_size: 24,
          },
        },
        marquee: {
          type: '_marquee',
          blocks: {
            text: {
              type: 'text',
              settings: {
                text: '<p>Explore our latest products.</p>',
                type_preset: 'h1',
              },
            },
          },
          block_order: ['text'],
        },
        button: {
          type: 'button',
          settings: {
            label: 'Shop Now',
            link: 'shopify://collections/all',
          },
        },
      },
      block_order: ['spacer', 'marquee', 'button'],
      settings: {
        horizontal_alignment_flex_direction_column: 'center',
        vertical_alignment_flex_direction_column: 'space-between',
        gap: 32,
        section_height: 'large',
        color_scheme: 'scheme-5',
        'padding-block-start': 0,
        'padding-block-end': 40,
        toggle_overlay: true,
        overlay_style: 'gradient',
      },
    },
  ],
};
