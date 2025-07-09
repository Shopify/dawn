import { appearance } from 'utils/appearance';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.collection_card',
  blocks: [{ type: 'text' }, { type: 'spacer' }, { type: 'button' }, { type: 'group' }, { type: 'collection-title' }],
  tag: null,
  settings: [
    {
      type: 'collection',
      id: 'collection',
      label: 't:settings.collection',
    },
    {
      type: 'header',
      content: 't:content.text',
    },
    {
      type: 'select',
      id: 'placement',
      label: 't:settings.placement',
      options: [
        {
          value: 'on_image',
          label: 't:options.on_image',
        },
        {
          value: 'below_image',
          label: 't:options.below_image',
        },
      ],
    },
    {
      type: 'select',
      id: 'horizontal_alignment',
      label: 't:settings.alignment',
      options: [
        {
          value: 'flex-start',
          label: 't:options.left',
        },
        {
          value: 'center',
          label: 't:options.center',
        },
        {
          value: 'flex-end',
          label: 't:options.right',
        },
      ],
      default: 'flex-start',
    },
    {
      type: 'select',
      id: 'vertical_alignment',
      label: 't:settings.position',
      options: [
        {
          value: 'flex-start',
          label: 't:options.top',
        },
        {
          value: 'center',
          label: 't:options.center',
        },
        {
          value: 'flex-end',
          label: 't:options.bottom',
        },
      ],
      default: 'center',
      visible_if: '{{ block.settings.placement == "on_image" }}',
    },
    {
      type: 'range',
      id: 'collection_card_gap',
      label: 't:settings.vertical_gap',
      min: 0,
      max: 50,
      step: 1,
      unit: 'px',
      default: 8,
    },
    ...appearance('block', { excludeBackground: true }),
  ],
  presets: [
    {
      name: 't:names.collection_card',
      category: 't:categories.collection',
      settings: {
        collection: '',
        placement: 'below_image',
      },
      blocks: {
        'collection-card-image': {
          type: '_collection-card-image',
          static: true,
        },
        'collection-title': {
          type: 'collection-title',
          settings: {
            type_preset: 'h4',
          },
        },
      },
      block_order: ['collection-title'],
    },
  ],
};
