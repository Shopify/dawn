/**
 * Creates standard resource list settings for sections or blocks
 * Resources (products, articles, pages, etc) are displayed in a grid or carousel
 * @param {Object} options - Setting schema overrides
 * @param {'section'|'block'} options.type - The type of element (section or block)
 * @param {'product'|'collection'} options.resource - The contextual resource
 * @param {import('../schema').SettingSchema[]} options.additionalResourceSettings - Additional settings to add to the resource list
 * @returns {import('../schema').SettingSchema[]}
 */

export const resourceListSettings = (
  options = {
    type: 'section',
    resource: 'collection',
    additionalResourceSettings: [],
  }
) => {
  // Set contextual resource settings
  /** @type {import('../schema').SettingSchema[]} */
  const resourceSetting = [
    ...(options.resource === 'collection'
      ? /** @type {import('../schema').SettingSchema[]} */ ([
          {
            type: 'collection',
            id: 'collection',
            label: 't:settings.collection',
          },
        ])
      : []),
    ...(options.resource === 'product'
      ? /** @type {import('../schema').SettingSchema[]} */ ([
          {
            type: 'product',
            id: 'product',
            label: 't:settings.product',
          },
        ])
      : []),
    ...options.additionalResourceSettings,
  ];

  /** @type {import('../schema').SettingSchema[]} */
  const layoutSettings = [
    ...(options.type === 'section'
      ? /** @type {import('../schema').SettingSchema[]} */ ([
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
        ])
      : []),
    ...(options.type === 'block'
      ? /** @type {import('../schema').SettingSchema[]} */ ([
          {
            type: 'header',
            content: 't:content.layout',
          },
        ])
      : []),
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
  ];
  return [
    ...resourceSetting,
    {
      type: 'header',
      content: 't:content.cards_layout',
    },
    {
      type: 'select',
      id: 'layout_type',
      label: 't:settings.layout_style',
      options: [
        { value: 'grid', label: 't:options.grid' },
        { value: 'carousel', label: 't:options.carousel' },
      ],
      default: 'grid',
    },
    {
      type: 'checkbox',
      id: 'carousel_on_mobile',
      label: 't:settings.carousel_on_mobile',
      ...(options.type === 'section' ? { default: false } : { default: true }),
      ...(options.type === 'section'
        ? { visible_if: "{{ section.settings.layout_type == 'grid' }}" }
        : { visible_if: "{{ block.settings.layout_type == 'grid' }}" }),
    },
    {
      type: 'range',
      id: 'max_products',
      label: 't:settings.product_count',
      min: 1,
      max: 8,
      step: 1,
      default: 4,
    },
    ...(options.type === 'section'
      ? /** @type {import('../schema').SettingSchema[]} */ ([
          {
            type: 'range',
            id: 'columns',
            label: 't:settings.columns',
            min: 1,
            max: 8,
            step: 1,
            default: 4,
          },
        ])
      : []),
    ...(options.type === 'section'
      ? /** @type {import('../schema').SettingSchema[]} */ ([
          {
            type: 'select',
            id: 'mobile_columns',
            label: 't:settings.mobile_columns',
            options: [
              { value: '1', label: 't:options.one_number' },
              { value: '2', label: 't:options.two_number' },
            ],
            default: '2',
            ...(options.type === 'section'
              ? {
                  visible_if:
                    "{{ section.settings.layout_type == 'grid' and section.settings.carousel_on_mobile == false }}",
                }
              : {
                  visible_if:
                    "{{ block.settings.layout_type == 'grid' and block.settings.carousel_on_mobile == false }}",
                }),
          },
        ])
      : []),
    {
      type: 'range',
      id: 'columns_gap',
      label: 't:settings.horizontal_gap',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 16,
      ...(options.type === 'section'
        ? { visible_if: "{{ section.settings.layout_type == 'grid' or section.settings.layout_type == 'carousel' }}" }
        : { visible_if: "{{ block.settings.layout_type == 'grid' or block.settings.layout_type == 'carousel' }}" }),
    },
    {
      type: 'range',
      id: 'rows_gap',
      label: 't:settings.vertical_gap',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 16,
      ...(options.type === 'section'
        ? { visible_if: "{{ section.settings.layout_type == 'grid' }}" }
        : { visible_if: "{{ block.settings.layout_type == 'grid' }}" }),
    },
    {
      type: 'header',
      content: 't:content.carousel_navigation',
      ...(options.type === 'section'
        ? {
            visible_if:
              "{{ section.settings.layout_type == 'carousel' or section.settings.carousel_on_mobile == true }}",
          }
        : {
            visible_if: "{{ block.settings.layout_type == 'carousel' or block.settings.carousel_on_mobile == true }}",
          }),
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
      ...(options.type === 'section'
        ? {
            visible_if:
              "{{ section.settings.layout_type == 'carousel' or section.settings.carousel_on_mobile == true }}",
          }
        : {
            visible_if: "{{ block.settings.layout_type == 'carousel' or block.settings.carousel_on_mobile == true }}",
          }),
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
      ...(options.type === 'section'
        ? {
            visible_if:
              "{{ section.settings.icons_style != 'none' and section.settings.layout_type == 'carousel' or section.settings.carousel_on_mobile == true }}",
          }
        : {
            visible_if:
              "{{ block.settings.icons_style != 'none' and block.settings.layout_type == 'carousel' or block.settings.carousel_on_mobile == true }}",
          }),
    },

    ...layoutSettings,
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
  ];
};
