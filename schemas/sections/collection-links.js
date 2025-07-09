/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.collection_links',
  disabled_on: {
    groups: ['header', 'footer'],
  },
  settings: [
    {
      type: 'collection_list',
      id: 'collection_list',
      label: 't:settings.collection_list',
    },
    {
      type: 'header',
      content: 't:content.layout',
    },
    {
      type: 'select',
      id: 'layout',
      label: 't:settings.layout',
      options: [
        {
          value: 'spotlight',
          label: 't:options.spotlight',
        },
        {
          value: 'text',
          label: 't:options.text',
        },
      ],
      default: 'spotlight',
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
      type: 'select',
      id: 'alignment',
      label: 't:settings.alignment',
      options: [
        {
          value: 'left',
          label: 't:options.left',
        },
        {
          value: 'center',
          label: 't:options.center',
        },
        {
          value: 'right',
          label: 't:options.right',
        },
      ],
      default: 'left',
    },
    {
      type: 'select',
      id: 'image_position',
      label: 't:settings.image_position',
      options: [
        {
          value: 'left',
          label: 't:options.left',
        },
        {
          value: 'right',
          label: 't:options.right',
        },
      ],
      default: 'right',
      visible_if: '{{ section.settings.layout == "spotlight" }}',
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
      default: 40,
    },
    {
      type: 'range',
      id: 'padding-block-end',
      label: 't:settings.bottom',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 40,
    },
  ],
  presets: [
    {
      name: 't:names.collection_links_spotlight',
      category: 't:categories.collections',
      blocks: {
        link: {
          type: '_collection-link',
          static: true,
          blocks: {
            title: {
              type: '_inline-collection-title',
              name: 't:names.title',
              static: true,
              settings: {
                font: 'var(--font-subheading--family)',
              },
            },
            image: {
              type: '_image',
              static: true,
              settings: {
                height: 'large',
                ratio: 'square',
              },
            },
          },
        },
      },
    },
    {
      name: 't:names.collection_links_text',
      category: 't:categories.collections',
      settings: {
        layout: 'text',
        alignment: 'center',
      },
      blocks: {
        link: {
          type: '_collection-link',
          static: true,
          blocks: {
            title: {
              type: '_inline-collection-title',
              name: 't:names.title',
              static: true,
              settings: {
                font: 'var(--font-subheading--family)',
              },
            },
            image: {
              type: '_image',
              static: true,
              settings: {
                height: 'medium',
              },
            },
          },
        },
      },
    },
  ],
};
