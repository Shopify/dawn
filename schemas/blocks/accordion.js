import { padding } from '../utils/padding';
import { typePreset } from '../utils/type-preset';
/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.accordion',
  tag: null,
  class: 'accordion',
  blocks: [{ type: '_accordion-row' }],
  settings: [
    {
      type: 'select',
      id: 'icon',
      label: 't:settings.icon',
      options: [
        {
          value: 'caret',
          label: 't:options.caret',
        },
        {
          value: 'plus',
          label: 't:options.plus',
        },
      ],
      default: 'caret',
    },
    {
      type: 'checkbox',
      id: 'dividers',
      label: 't:settings.dividers',
      default: true,
    },
    ...typePreset({ label: 't:settings.heading_preset', defaultValue: 'h6', hideTypePresetHeader: true }),
    {
      type: 'checkbox',
      id: 'inherit_color_scheme',
      label: 't:settings.inherit_color_scheme',
      default: true,
    },
    {
      type: 'color_scheme',
      id: 'color_scheme',
      label: 't:settings.color_scheme',
      default: 'scheme-1',
      visible_if: '{{ block.settings.inherit_color_scheme == false }}',
    },
    {
      type: 'header',
      content: 't:content.borders',
    },
    {
      type: 'select',
      id: 'border',
      label: 't:settings.style',
      options: [
        {
          value: 'none',
          label: 't:options.none',
        },
        {
          value: 'solid',
          label: 't:options.solid',
        },
      ],
      default: 'none',
    },
    {
      type: 'range',
      id: 'border_width',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      label: 't:settings.thickness',
      default: 1,
      visible_if: '{{ block.settings.border != "none" }}',
    },
    {
      type: 'range',
      id: 'border_opacity',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      label: 't:settings.opacity',
      default: 100,
      visible_if: '{{ block.settings.border != "none" }}',
    },
    {
      type: 'range',
      id: 'border_radius',
      label: 't:settings.border_radius',
      min: 0,
      max: 100,
      step: 1,
      default: 0,
    },
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.accordion',
      category: 't:categories.layout',
      blocks: {
        'row-1': {
          type: '_accordion-row',
          settings: {
            open_by_default: true,
            heading: 'Return policy',
          },
          blocks: {
            'text-1': {
              type: 'text',
              settings: {
                text: "<p>Our goal is for every customer to be totally satisfied with their purchase. If this isn't the case, let us know and we'll do our best to work with you to make it right.</p>",
                width: '100%',
              },
            },
          },
          block_order: ['text-1'],
        },
        'row-2': {
          type: '_accordion-row',
          settings: {
            heading: 'Shipping',
          },
          blocks: {
            'text-1': {
              type: 'text',
              settings: {
                text: '<p>We will work quickly to ship your order as soon as possible. Once your order has shipped, you will receive an email with further information. Delivery times vary depending on your location.</p>',
                width: '100%',
              },
            },
          },
          block_order: ['text-1'],
        },
        'row-3': {
          type: '_accordion-row',
          settings: {
            heading: 'Manufacturing',
          },
          blocks: {
            'text-1': {
              type: 'text',
              settings: {
                text: '<p>Our products are manufactured both locally and globally. We carefully select our manufacturing partners to ensure our products are high quality and a fair value.</p>',
                width: '100%',
              },
            },
          },
          block_order: ['text-1'],
        },
      },
      block_order: ['row-1', 'row-2', 'row-3'],
    },
  ],
};
