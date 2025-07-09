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
      type: 'select',
      id: 'menu_style',
      label: 't:settings.style',
      options: [
        { value: 'text', label: 't:options.text_only' },
        { value: 'collection_images', label: 't:options.collection_images' },
        { value: 'featured_products', label: 't:options.featured_products' },
        { value: 'featured_collections', label: 't:options.featured_collections' },
      ],
      default: 'collection_images',
    },
    {
      type: 'select',
      id: 'featured_products_aspect_ratio',
      label: 't:settings.image_ratio',
      options: [
        {
          value: 'adapt',
          label: 't:options.auto',
        },
        {
          value: '4 / 5',
          label: 't:options.portrait',
        },
        {
          value: '1 / 1',
          label: 't:options.square',
        },
      ],
      default: '4 / 5',
      visible_if: "{{ block.settings.menu_style == 'featured_products' }}",
    },
    {
      type: 'select',
      id: 'featured_collections_aspect_ratio',
      label: 't:settings.image_ratio',
      options: [
        {
          value: 'adapt',
          label: 't:options.auto',
        },
        {
          value: '16 / 9',
          label: 't:options.landscape',
        },
        {
          value: '1 / 1',
          label: 't:options.square',
        },
      ],
      default: '16 / 9',
      visible_if: "{{ block.settings.menu_style == 'featured_collections' }}",
    },
    {
      type: 'range',
      id: 'image_border_radius',
      label: 't:settings.image_border_radius',
      min: 0,
      max: 32,
      step: 1,
      unit: 'px',
      default: 0,
      visible_if: "{{ block.settings.menu_style != 'text' }}",
    },
    {
      type: 'select',
      id: 'product_title_case',
      label: 't:settings.product_title_case',
      options: [
        {
          value: 'default',
          label: 't:options.default',
        },
        {
          value: 'uppercase',
          label: 't:options.uppercase',
        },
      ],
      default: 'default',
      visible_if: "{{ block.settings.menu_style == 'featured_products' }}",
    },
    {
      type: 'select',
      id: 'collection_title_case',
      label: 't:settings.collection_title_case',
      options: [
        {
          value: 'default',
          label: 't:options.default',
        },
        {
          value: 'uppercase',
          label: 't:options.uppercase',
        },
      ],
      default: 'default',
      visible_if:
        "{{ block.settings.menu_style == 'featured_collections' or block.settings.menu_style == 'collection_images' }}",
    },
    {
      type: 'color_scheme',
      id: 'color_scheme',
      label: 't:settings.color_scheme',
      default: 'primary',
    },
    {
      type: 'select',
      id: 'menu_font_style',
      label: 't:settings.text_hierarchy',
      options: [
        { value: 'regular', label: 't:options.classic' },
        { value: 'inverse', label: 't:options.inverse' },
        { value: 'inverse_large', label: 't:options.inverse_large' },
      ],
      default: 'inverse',
    },
    {
      type: 'header',
      content: 't:content.typography_primary',
    },
    {
      type: 'select',
      id: 'type_font_primary_link',
      label: 't:settings.font',
      options: [
        {
          value: 'body',
          label: 't:options.body',
        },
        {
          value: 'subheading',
          label: 't:options.subheading',
        },
        {
          value: 'heading',
          label: 't:options.heading',
        },
        {
          value: 'accent',
          label: 't:options.accent',
        },
      ],
      default: 'heading',
    },
    {
      type: 'select',
      id: 'type_font_primary_size',
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
        {
          value: '1.25rem',
          label: '20px',
        },
        {
          value: '1.5rem',
          label: '24px',
        },
        {
          value: '2rem',
          label: '32px',
        },
        {
          value: '2.5rem',
          label: '40px',
        },
        {
          value: '3rem',
          label: '48px',
        },
        {
          value: '3.5rem',
          label: '56px',
        },
        {
          value: '4.5rem',
          label: '72px',
        },
        {
          value: '5.5rem',
          label: '88px',
        },
        {
          value: '7.5rem',
          label: '120px',
        },
        {
          value: '9.5rem',
          label: '152px',
        },
        {
          value: '11.5rem',
          label: '184px',
        },
      ],
      default: '1rem',
    },
    {
      type: 'select',
      id: 'type_case_primary_link',
      label: 't:settings.text_case',
      options: [
        {
          value: 'none',
          label: 't:options.default',
        },
        {
          value: 'uppercase',
          label: 't:options.uppercase',
        },
      ],
      default: 'none',
    },
    {
      type: 'header',
      content: 't:content.typography_secondary',
    },
    {
      type: 'select',
      id: 'type_font_secondary_link',
      label: 't:settings.font',
      options: [
        {
          value: 'body',
          label: 't:options.body',
        },
        {
          value: 'subheading',
          label: 't:options.subheading',
        },
        {
          value: 'heading',
          label: 't:options.heading',
        },
        {
          value: 'accent',
          label: 't:options.accent',
        },
      ],
      default: 'subheading',
    },
    {
      type: 'select',
      id: 'type_case_secondary_link',
      label: 't:settings.text_case',
      options: [
        {
          value: 'none',
          label: 't:options.default',
        },
        {
          value: 'uppercase',
          label: 't:options.uppercase',
        },
      ],
      default: 'none',
    },
    {
      type: 'header',
      content: 't:content.typography_tertiary',
    },
    {
      type: 'select',
      id: 'type_font_tertiary_link',
      label: 't:settings.font',
      options: [
        {
          value: 'body',
          label: 't:options.body',
        },
        {
          value: 'subheading',
          label: 't:options.subheading',
        },
        {
          value: 'heading',
          label: 't:options.heading',
        },
        {
          value: 'accent',
          label: 't:options.accent',
        },
      ],
      default: 'body',
    },
    {
      type: 'select',
      id: 'type_case_tertiary_link',
      label: 't:settings.text_case',
      options: [
        {
          value: 'none',
          label: 't:options.default',
        },
        {
          value: 'uppercase',
          label: 't:options.uppercase',
        },
      ],
      default: 'none',
    },
    {
      type: 'header',
      content: 't:content.mobile_layout',
    },
    {
      type: 'checkbox',
      id: 'navigation_bar',
      label: 't:settings.navigation_bar',
    },
    {
      type: 'color_scheme',
      id: 'color_scheme_navigation_bar',
      label: 't:settings.navigation_bar_color_scheme',
      default: 'primary',
      visible_if: '{{ block.settings.navigation_bar }}',
    },
    {
      type: 'checkbox',
      id: 'drawer_accordion',
      label: 't:settings.accordion',
      default: false,
    },
    {
      type: 'checkbox',
      id: 'drawer_accordion_expand_first',
      label: 't:settings.expand_first_group',
      default: false,
      visible_if: '{{ block.settings.drawer_accordion == true }}',
    },
    {
      type: 'checkbox',
      id: 'drawer_dividers',
      label: 't:settings.dividers',
      default: false,
    },
  ],
};
