/**
 * @type {(options?: {excludeHeight?: boolean}) => import('../schema').SettingSchema[]}
 */
export const size = (options = {}) => [
  {
    type: 'header',
    content: 't:content.size',
  },
  {
    type: 'select',
    id: 'width',
    label: 't:settings.width',
    options: [
      {
        value: 'fit-content',
        label: 't:options.fit_content',
      },
      {
        value: 'fill',
        label: 't:options.fill',
      },
      {
        value: 'custom',
        label: 't:options.custom',
      },
    ],
    default: 'fill',
  },
  {
    type: 'range',
    id: 'custom_width',
    label: 't:settings.custom_width',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
    default: 100,
    visible_if: "{{ block.settings.width == 'custom' }}",
  },
  {
    type: 'select',
    id: 'width_mobile',
    label: 't:settings.width_mobile',
    options: [
      {
        value: 'fit-content',
        label: 't:options.fit_content',
      },
      {
        value: 'fill',
        label: 't:options.fill',
      },
      {
        value: 'custom',
        label: 't:options.custom',
      },
    ],
    default: 'fill',
  },
  {
    type: 'range',
    id: 'custom_width_mobile',
    label: 't:settings.custom_width',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
    default: 100,
    visible_if: "{{ block.settings.width_mobile == 'custom' }}",
  },
  ...(options?.excludeHeight
    ? []
    : /** @type {import('../schema').SettingSchema[]} */ ([
        {
          type: 'select',
          id: 'height',
          label: 't:settings.height',
          options: [
            {
              value: 'fit',
              label: 't:options.fit_content',
            },
            {
              value: 'fill',
              label: 't:options.fill',
            },
            {
              value: 'custom',
              label: 't:options.custom',
            },
          ],
          default: 'fit',
        },
        {
          type: 'range',
          id: 'custom_height',
          label: 't:settings.custom_height',
          min: 0,
          max: 100,
          step: 1,
          unit: '%',
          default: 100,
          visible_if: "{{ block.settings.height == 'custom' }}",
        },
      ])),
];
