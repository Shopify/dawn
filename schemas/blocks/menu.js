import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.menu',
  tag: null,
  settings: [
    {
      type: 'link_list',
      id: 'menu',
      label: 't:settings.menu',
      default: 'main-menu',
    },
    {
      type: 'text',
      id: 'heading',
      label: 't:settings.heading',
    },
    {
      type: 'header',
      content: 't:content.appearance',
    },
    {
      type: 'range',
      id: 'menu_spacing',
      label: 't:settings.vertical_gap',
      min: 0,
      max: 50,
      step: 1,
      unit: 'px',
      default: 12,
    },
    {
      type: 'checkbox',
      id: 'show_as_accordion',
      label: 't:settings.show_as_accordion',
      default: false,
    },
    {
      type: 'select',
      id: 'accordion_icon',
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
      visible_if: '{{ block.settings.show_as_accordion == true }}',
    },
    {
      type: 'checkbox',
      id: 'accordion_dividers',
      label: 't:settings.dividers',
      default: false,
      visible_if: '{{ block.settings.show_as_accordion == true }}',
    },
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
      content: 't:content.typography',
    },
    {
      type: 'select',
      id: 'heading_preset',
      label: 't:settings.heading_preset',
      options: [
        {
          value: '',
          label: 't:options.default',
        },
        {
          value: 'paragraph',
          label: 't:options.paragraph',
        },
        {
          value: 'h1',
          label: 't:options.h1',
        },
        {
          value: 'h2',
          label: 't:options.h2',
        },
        {
          value: 'h3',
          label: 't:options.h3',
        },
        {
          value: 'h4',
          label: 't:options.h4',
        },
        {
          value: 'h5',
          label: 't:options.h5',
        },
        {
          value: 'h6',
          label: 't:options.h6',
        },
      ],
      default: 'h3',
    },
    {
      type: 'select',
      id: 'link_preset',
      label: 't:settings.link_preset',
      options: [
        {
          value: '',
          label: 't:options.default',
        },
        {
          value: 'paragraph',
          label: 't:options.paragraph',
        },
        {
          value: 'h1',
          label: 't:options.h1',
        },
        {
          value: 'h2',
          label: 't:options.h2',
        },
        {
          value: 'h3',
          label: 't:options.h3',
        },
        {
          value: 'h4',
          label: 't:options.h4',
        },
        {
          value: 'h5',
          label: 't:options.h5',
        },
        {
          value: 'h6',
          label: 't:options.h6',
        },
      ],
      default: 'paragraph',
    },
    ...padding(),
  ],
  presets: [{ name: 't:names.menu', category: 't:categories.links' }],
};
