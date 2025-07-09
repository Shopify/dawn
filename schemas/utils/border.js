/**
 * @param {Object} options
 * @param {import('../schema').SettingsTranslationKey} [options.label='t:settings.style'] - The label for the border setting
 * @param {import('../schema').SettingsTranslationKey} [options.thicknessLabel='t:settings.thickness'] - The label for the border thickness setting
 * @param {import('../schema').SettingsTranslationKey} [options.opacityLabel='t:settings.opacity'] - The label for the border opacity setting
 * @param {boolean} [options.addHeader=true] - Whether to add a header for the border settings
 * @returns {import('../schema').SettingSchema[]}
 */
export const border = (
  options = {
    label: 't:settings.style',
    thicknessLabel: 't:settings.thickness',
    opacityLabel: 't:settings.opacity',
    addHeader: true,
  }
) => [
  ...(options.addHeader
    ? [
        {
          type: /** @type {"header"} */ ('header'),
          /** @type {import('../schema').ContentTranslationKey} */
          content: 't:content.borders',
        },
      ]
    : []),
  {
    type: 'select',
    id: 'border',
    label: options.label ?? 't:settings.style',
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
    label: options.thicknessLabel ?? 't:settings.thickness',
    default: 1,
    visible_if: "{{ block.settings.border != 'none' }}",
  },
  {
    type: 'range',
    id: 'border_opacity',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
    label: options.opacityLabel ?? 't:settings.opacity',
    default: 100,
    visible_if: "{{ block.settings.border != 'none' }}",
  },
  {
    type: 'range',
    id: 'border_radius',
    label: 't:settings.border_radius',
    min: 0,
    max: 100,
    step: 1,
    unit: 'px',
    default: 0,
  },
];
