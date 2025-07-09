/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.product_review_stars',
  tag: null,
  settings: [
    {
      type: 'paragraph',
      content: 't:content.resource_reference_product_review',
    },
    {
      type: 'paragraph',
      content: 't:content.app_required_for_ratings',
    },
    {
      type: 'select',
      id: 'stars_style',
      label: 't:settings.style',
      options: [
        {
          value: 'outline',
          label: 't:options.outline',
        },
        {
          value: 'shaded',
          label: 't:options.shaded',
        },
        {
          value: 'single',
          label: 't:options.single',
        },
      ],
      default: 'shaded',
    },
    {
      type: 'checkbox',
      id: 'show_number',
      label: 't:settings.review_count',
      default: true,
    },
    {
      type: 'select',
      id: 'rating_color',
      label: 't:settings.color',
      options: [
        {
          value: 'foreground',
          label: 't:options.text',
        },
        {
          value: 'primary',
          label: 't:options.body',
        },
      ],
      default: 'primary',
    },
    {
      type: 'header',
      content: 't:content.typography',
    },
    {
      type: 'select',
      id: 'type_preset',
      label: 't:settings.preset',
      options: [
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
    {
      type: 'text_alignment',
      id: 'alignment',
      label: 't:settings.alignment',
      default: 'left',
    },
  ],
  presets: [
    {
      name: 't:names.product_review_stars',
      category: 't:categories.product',
    },
  ],
};
