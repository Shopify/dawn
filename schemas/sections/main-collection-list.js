/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.collection_list',
  class: 'ui-test-collection-list',
  blocks: [
    {
      type: '@theme',
    },
    {
      type: '@app',
    },
    { type: 'text' },
    { type: 'icon' },
    { type: 'image' },
    { type: 'button' },
    { type: 'video' },
    { type: 'group' },
    { type: 'spacer' },
    {
      type: '_divider',
    },
  ],
  disabled_on: {
    groups: ['header', 'footer'],
  },
  settings: [
    {
      type: 'header',
      content: 't:content.cards_layout',
    },
    {
      type: 'select',
      id: 'layout_type',
      label: 't:settings.layout_type',
      options: [
        { value: 'grid', label: 't:options.grid' },
        { value: 'carousel', label: 't:options.carousel' },
        { value: 'bento', label: 't:options.bento' },
        { value: 'editorial', label: 't:options.editorial' },
      ],
      default: 'grid',
    },
    {
      type: 'checkbox',
      id: 'carousel_on_mobile',
      label: 't:settings.carousel_on_mobile',
      default: false,
      visible_if: "{{ section.settings.layout_type != 'carousel' }}",
    },
    {
      type: 'range',
      id: 'columns',
      label: 't:settings.columns',
      min: 1,
      max: 8,
      step: 1,
      default: 4,
      visible_if: "{{ section.settings.layout_type == 'grid' or section.settings.layout_type == 'carousel' }}",
    },
    {
      type: 'select',
      id: 'mobile_columns',
      label: 't:settings.mobile_columns',
      options: [
        { value: '1', label: 't:options.one_number' },
        { value: '2', label: 't:options.two_number' },
      ],
      default: '2',
      visible_if: "{{ section.settings.layout_type == 'grid' and section.settings.carousel_on_mobile == false }}",
    },
    {
      type: 'range',
      id: 'columns_gap',
      label: 't:settings.horizontal_gap',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 8,
      visible_if: "{{ section.settings.layout_type == 'grid' or section.settings.layout_type == 'carousel' }}",
    },
    {
      type: 'range',
      id: 'bento_gap',
      label: 't:settings.gap',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 8,
      visible_if: "{{ section.settings.layout_type == 'bento' }}",
    },
    {
      type: 'range',
      id: 'rows_gap',
      label: 't:settings.vertical_gap',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 8,
      visible_if: "{{ section.settings.layout_type == 'grid'}}",
    },
    {
      type: 'range',
      id: 'max_collections',
      label: 't:settings.collection_count',
      min: 1,
      max: 16,
      step: 1,
      default: 4,
      visible_if: "{{ section.settings.layout_type == 'editorial' }}",
    },
    {
      type: 'header',
      content: 't:content.carousel_navigation',
      visible_if: "{{ section.settings.layout_type == 'carousel' or section.settings.carousel_on_mobile == true }}",
    },
    {
      type: 'select',
      id: 'icons_style',
      label: 't:settings.icon',
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
          label: 't:options.arrows_large',
        },
        {
          value: 'chevron_large',
          label: 't:options.chevron_large',
        },
        {
          value: 'none',
          label: 't:options.none',
        },
      ],
      default: 'arrow',
      visible_if: "{{ section.settings.layout_type == 'carousel' or section.settings.carousel_on_mobile == true }}",
    },
    {
      type: 'select',
      id: 'icons_shape',
      label: 't:settings.icon_background',
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
      default: 'none',
      visible_if:
        "{{ section.settings.icons_style != 'none' and section.settings.layout_type == 'carousel' or section.settings.carousel_on_mobile == true }}",
    },
    {
      type: 'header',
      content: 't:content.section_layout',
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
      default: 'page-width',
    },
    {
      type: 'range',
      id: 'gap',
      label: 't:settings.gap',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 12,
    },
    {
      type: 'color_scheme',
      id: 'color_scheme',
      label: 't:settings.color_scheme',
      default: 'scheme-1',
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
};
