/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.header',
  tag: 'header',
  class: 'header-section',
  settings: [
    {
      type: 'header',
      content: 't:content.logo',
    },
    {
      type: 'select',
      id: 'logo_position',
      label: 't:settings.position',
      options: [
        { value: 'left', label: 't:options.left' },
        { value: 'center', label: 't:options.center' },
        { value: 'right', label: 't:options.right' },
      ],
      default: 'center',
    },
    {
      type: 'header',
      content: 't:content.menu',
    },
    {
      type: 'select',
      id: 'menu_position',
      label: 't:settings.position',
      options: [
        { value: 'left', label: 't:options.left' },
        { value: 'center', label: 't:options.center' },
        { value: 'right', label: 't:options.right' },
      ],
      default: 'left',
    },
    {
      type: 'select',
      id: 'menu_row',
      label: 't:settings.row',
      options: [
        { value: 'top', label: 't:options.top' },
        { value: 'bottom', label: 't:options.bottom' },
      ],
      default: 'top',
    },
    {
      type: 'header',
      content: 't:content.customer_account',
    },
    {
      type: 'paragraph',
      content: 't:content.manage_customer_accounts',
    },
    {
      type: 'header',
      content: 't:content.search',
    },
    {
      type: 'checkbox',
      id: 'show_search',
      label: 't:settings.search_icon',
      default: true,
    },
    {
      type: 'select',
      id: 'search_position',
      label: 't:settings.search_position',
      options: [
        { value: 'left', label: 't:options.left' },
        { value: 'right', label: 't:options.right' },
      ],
      default: 'right',
      visible_if: '{{ section.settings.show_search }}',
    },
    {
      type: 'select',
      id: 'search_row',
      label: 't:settings.search_row',
      options: [
        { value: 'top', label: 't:options.top' },
        { value: 'bottom', label: 't:options.bottom' },
      ],
      default: 'top',
      visible_if: '{{ section.settings.show_search }}',
    },
    {
      type: 'header',
      content: 't:content.localization',
    },
    {
      type: 'checkbox',
      id: 'show_country',
      label: 't:settings.country_region',
      info: 't:info.manage_countries_regions',
      default: true,
    },
    {
      type: 'checkbox',
      id: 'country_selector_style',
      label: 't:settings.flag',
      default: true,
      visible_if: '{{ section.settings.show_country }}',
    },
    {
      type: 'checkbox',
      id: 'show_language',
      label: 't:settings.language_selector',
      info: 't:info.manage_languages',
      default: true,
    },
    {
      type: 'select',
      id: 'localization_font',
      label: 't:settings.font',
      options: [
        { value: 'heading', label: 't:options.heading' },
        { value: 'subheading', label: 't:options.subheading' },
        { value: 'body', label: 't:options.body' },
        { value: 'accent', label: 't:options.accent' },
      ],
      default: 'heading',
      visible_if: '{{ section.settings.show_country or section.settings.show_language }}',
    },
    {
      type: 'select',
      id: 'localization_font_size',
      label: 't:settings.size',
      options: [
        {
          value: '0.625rem',
          label: '10px',
        },
        {
          value: '0.75rem',
          label: '12px',
        },
        {
          value: '0.875rem',
          label: '14px',
        },
        {
          value: '1rem',
          label: '16px',
        },
        {
          value: '1.125rem',
          label: '18px',
        },
      ],
      default: '1rem',
    },
    {
      type: 'select',
      id: 'localization_position',
      label: 't:settings.position',
      options: [
        { value: 'left', label: 't:options.left' },
        { value: 'right', label: 't:options.right' },
      ],
      default: 'right',
      visible_if: '{{ section.settings.show_country or section.settings.show_language }}',
    },
    {
      type: 'select',
      id: 'localization_row',
      label: 't:settings.row',
      options: [
        { value: 'top', label: 't:options.top' },
        { value: 'bottom', label: 't:options.bottom' },
      ],
      default: 'top',
      visible_if: '{{ section.settings.show_country or section.settings.show_language }}',
    },
    {
      type: 'header',
      content: 't:content.appearance',
    },
    {
      type: 'select',
      id: 'section_width',
      label: 't:settings.width',
      options: [
        { value: 'page-width', label: 't:options.page' },
        { value: 'full-width', label: 't:options.full' },
      ],
    },
    {
      type: 'select',
      id: 'section_height',
      label: 't:settings.height',
      options: [
        { value: 'compact', label: 't:options.compact' },
        { value: 'standard', label: 't:options.standard' },
      ],
      default: 'standard',
    },
    {
      type: 'select',
      id: 'enable_sticky_header',
      label: 't:settings.sticky_header',
      options: [
        { value: 'always', label: 't:options.always' },
        { value: 'scroll-up', label: 't:options.on_scroll_up' },
        { value: 'never', label: 't:options.never' },
      ],
      default: 'always',
    },
    {
      type: 'range',
      id: 'divider_width',
      label: 't:settings.divider_thickness',
      min: 0,
      max: 5,
      step: 0.5,
      unit: 'px',
      default: 0,
      visible_if:
        "{{ section.settings.menu_row == 'bottom' or section.settings.localization_row == 'bottom' or section.settings.search_row == 'bottom' }}",
    },
    {
      type: 'select',
      id: 'divider_size',
      label: 't:settings.divider_width',
      options: [
        { value: 'page-width', label: 't:options.page' },
        { value: 'full-width', label: 't:options.full' },
      ],
      visible_if:
        "{{ section.settings.divider_width > 0 and section.settings.menu_row == 'bottom' or section.settings.localization_row == 'bottom' or section.settings.search_row == 'bottom' }}",
    },
    {
      type: 'range',
      id: 'border_width',
      label: 't:settings.border_width',
      min: 0,
      max: 5,
      step: 0.5,
      unit: 'px',
      default: 0,
    },
    {
      type: 'header',
      content: 't:content.colors',
    },
    {
      type: 'color_scheme',
      id: 'color_scheme_top',
      label: 't:settings.default',
      default: 'primary',
    },
    {
      type: 'color_scheme',
      id: 'color_scheme_bottom',
      label: 't:settings.bottom_row',
      default: 'primary',
      visible_if:
        "{{ section.settings.menu_row == 'bottom' or section.settings.localization_row == 'bottom' or section.settings.search_row == 'bottom' }}",
    },
    {
      type: 'color_scheme',
      id: 'color_scheme_transparent',
      label: 't:settings.inverse',
      default: 'primary',
      visible_if:
        '{{ section.settings.enable_transparent_header_home or section.settings.enable_transparent_header_product or section.settings.enable_transparent_header_collection }}',
    },
    {
      type: 'header',
      content: 't:content.home_page',
    },
    {
      type: 'checkbox',
      id: 'enable_transparent_header_home',
      label: 't:settings.transparent_background',
      default: false,
    },
    {
      type: 'select',
      id: 'home_color_scheme',
      label: 't:settings.color_scheme',
      options: [
        { value: 'default', label: 't:options.default' },
        { value: 'inverse', label: 't:options.inverse' },
      ],
      default: 'default',
      visible_if: '{{ section.settings.enable_transparent_header_home }}',
    },
    {
      type: 'header',
      content: 't:content.product_page',
    },
    {
      type: 'checkbox',
      id: 'enable_transparent_header_product',
      label: 't:settings.transparent_background',
      default: false,
    },
    {
      type: 'select',
      id: 'product_color_scheme',
      label: 't:settings.color_scheme',
      options: [
        { value: 'default', label: 't:options.default' },
        { value: 'inverse', label: 't:options.inverse' },
      ],
      default: 'default',
      visible_if: '{{ section.settings.enable_transparent_header_product }}',
    },
    {
      type: 'header',
      content: 't:content.collection_page',
    },
    {
      type: 'checkbox',
      id: 'enable_transparent_header_collection',
      label: 't:settings.transparent_background',
      default: false,
    },
    {
      type: 'select',
      id: 'collection_color_scheme',
      label: 't:settings.color_scheme',
      options: [
        { value: 'default', label: 't:options.default' },
        { value: 'inverse', label: 't:options.inverse' },
      ],
      default: 'default',
      visible_if: '{{ section.settings.enable_transparent_header_collection }}',
    },
  ],
  presets: [],
};
