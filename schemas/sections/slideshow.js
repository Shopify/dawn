import { _slidePreset } from 'blocks/_slide';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.slideshow',
  class: 'container-background-image',
  blocks: [{ type: '_slide' }],
  disabled_on: {
    groups: ['header', 'footer'],
  },
  settings: [
    {
      type: 'select',
      id: 'icons_style',
      label: 't:settings.navigation',
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
        {
          value: 'none',
          label: 't:options.none',
        },
      ],
      default: 'arrows_large',
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
      ],
      default: 'dots',
    },
    {
      type: 'color_scheme',
      id: 'color_scheme',
      label: 't:settings.color_scheme',
      default: 'primary',
    },
    {
      type: 'checkbox',
      id: 'autoplay',
      label: 't:settings.auto_rotate_slides',
      default: false,
    },
    {
      type: 'range',
      id: 'autoplay_speed',
      label: 't:settings.speed',
      min: 3,
      max: 7,
      step: 1,
      unit: 's',
      default: 4,
      visible_if: '{{ section.settings.autoplay }}',
    },
    {
      type: 'header',
      content: 't:content.size',
    },
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
      default: 'full-width',
    },
    {
      type: 'select',
      id: 'slide_height',
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
      ],
      default: 'medium',
      label: 't:settings.height',
    },
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
  ],
  presets: [
    {
      name: 't:names.slideshow',
      category: 't:categories.storytelling',
      blocks: {
        slide_1: {
          type: '_slide',
          ..._slidePreset({
            heading: '<h2>New arrivals</h2>',
            text: "<p>Introducing our latest products, made especially for the season. Shop your favorites before they're gone!</p>",
            button: 'Shop now',
            buttonLink: 'shopify://collections/all',
          }),
        },
        slide_2: {
          type: '_slide',
          ..._slidePreset({
            heading: '<h2>Bestsellers</h2>',
            text: '<p>Discover the bestsellers that have captured the hearts of our customers with their perfect blend of functionality and style.</p>',
            button: 'Shop now',
            buttonLink: 'shopify://collections/all',
          }),
        },
      },
      block_order: ['slide_1', 'slide_2'],
    },
  ],
};
