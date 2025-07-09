/**
 * Creates color scheme settings for sections or blocks
 * @param {Object} params - The configuration parameters
 * @param {'section'|'block'} params.type - The type of element (section or block)
 * @param {string} [params.defaultScheme='scheme-1'] - The default color scheme to use
 * @returns {import('../schema').SettingSchema[]}
 */
export const color_scheme = ({ type, defaultScheme = 'scheme-1' }) => [
  ...(type === 'block'
    ? [
        {
          /** @type {"checkbox"} */ type: 'checkbox',
          id: 'inherit_color_scheme',
          /** @type {import('../schema').SettingsTranslationKey} */
          label: 't:settings.inherit_color_scheme',
          default: true,
        },
      ]
    : []),
  {
    type: 'color_scheme',
    id: 'color_scheme',
    label: 't:settings.color_scheme',
    default: defaultScheme,
    ...(type === 'block'
      ? {
          visible_if: `{{ ${type}.settings.inherit_color_scheme == false }}`,
        }
      : {}),
  },
];
