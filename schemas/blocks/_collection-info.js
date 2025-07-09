import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.collection_info',
  tag: null,
  blocks: [{ type: '@theme' }, { type: '@app' }],
  settings: [
    {
      type: 'select',
      id: 'placement',
      label: 't:settings.placement',
      options: [
        {
          label: 't:options.above_carousel',
          value: 'above-carousel',
        },
        {
          label: 't:options.next_to_carousel',
          value: 'next-to-carousel',
        },
      ],
    },
    {
      type: 'color_scheme',
      id: 'color_scheme',
      label: 't:settings.color_scheme',
    },
    {
      type: 'header',
      content: 't:content.arrows',
    },
    {
      type: 'select',
      id: 'navigation',
      label: 't:settings.navigation',
      options: [
        {
          label: 't:options.above_carousel',
          value: 'above-carousel',
        },
        {
          label: 't:options.inside_carousel',
          value: 'inside-carousel',
        },
      ],
      visible_if: "{{ block.settings.placement == 'above-carousel' }}",
    },
    {
      type: 'select',
      id: 'icons_style',
      label: 't:settings.icons',
      options: [
        {
          value: 'arrows',
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
    },
    {
      type: 'select',
      id: 'background_style',
      label: 't:settings.background',
      options: [
        {
          value: 'none',
          label: 't:options.none',
        },
        {
          value: 'circle',
          label: 't:options.circle',
        },
        {
          value: 'square',
          label: 't:options.square',
        },
      ],
    },
    ...padding(),
  ],
  presets: [{ name: 't:names.collection_info' }],
};
