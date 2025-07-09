/**
 * Creates a type preset setting schema
 * @param {Object} options - Setting schema overrides
 * @param {string} [options.id="type_preset"] - The ID of the setting
 * @param {import('../schema').SettingsTranslationKey} [options.label="t:settings.preset"] - The label for the setting
 * @param {boolean} [options.custom=false] - Whether dropdown includes a custom option
 * @param {boolean} [options.rte=false] - Whether dropdown includes a rich text option as the first option instead of default
 * @param {string} [options.defaultValue=""] - The default value for the setting
 * @param {string|null} [options.visible_if=null] - Liquid visibility expression
 * @param {boolean} [options.hideTypePresetHeader=false] - Whether to hide the type preset title
 * @returns {import('../schema').SettingSchema[]} Array of setting schemas
 */
export const typePreset = (
  options = {
    id: 'type_preset',
    label: 't:settings.preset',
    custom: false,
    rte: false,
    defaultValue: '',
    visible_if: null,
    hideTypePresetHeader: false,
  }
) => [
  ...(options.hideTypePresetHeader
    ? []
    : [
        /** @type {import('../schema').SettingSchema} */ ({
          type: 'header',
          content: 't:content.typography',
        }),
      ]),
  {
    type: 'select',
    id: options.id ?? 'type_preset',
    label: options.label ?? 't:settings.preset',
    options: [
      {
        value: options.rte ? 'rte' : '',
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
      .../** @type {import('../schema').SelectOption[]} */ (
        options.custom
          ? [
              {
                value: 'custom',
                label: 't:options.custom',
              },
            ]
          : []
      ),
    ],
    default: options.defaultValue,
    info: 't:info.edit_presets_in_theme_settings',
    ...(options.visible_if
      ? {
          visible_if: options.visible_if,
        }
      : {}),
  },
];

/**
 * @param {Object} options - Setting schema overrides
 * @param {boolean} [options.conditional=true] - Whether the setting is conditional on the type preset
 * @returns {import('../schema').SettingSchema[]}
 */
export const fontPreset = (options = { conditional: true }) => [
  {
    type: 'select',
    id: 'font',
    label: 't:settings.font',
    options: [
      {
        value: 'var(--font-body--family)',
        label: 't:options.body',
      },
      {
        value: 'var(--font-subheading--family)',
        label: 't:options.subheading',
      },
      {
        value: 'var(--font-heading--family)',
        label: 't:options.heading',
      },
      {
        value: 'var(--font-accent--family)',
        label: 't:options.accent',
      },
    ],
    default: 'var(--font-body--family)',
    visible_if: options.conditional ? "{{ block.settings.type_preset == 'custom' }}" : undefined,
  },
];

/**
 * @param {Object} options - Setting schema overrides
 * @param {boolean} [options.conditional=true] - Whether the setting is conditional on the type preset
 * @returns {import('../schema').SettingSchema[]}
 */
export const fontSizePreset = (options = { conditional: true }) => [
  {
    type: 'select',
    id: 'font_size',
    label: 't:settings.size',
    options: [
      {
        value: '',
        label: 't:options.default',
      },
      {
        value: 'var(--font-size--paragraph)',
        label: 't:options.paragraph',
      },
      {
        value: 'var(--font-size--h1)',
        label: 't:options.h1',
      },
      {
        value: 'var(--font-size--h2)',
        label: 't:options.h2',
      },
      {
        value: 'var(--font-size--h3)',
        label: 't:options.h3',
      },
      {
        value: 'var(--font-size--h4)',
        label: 't:options.h4',
      },
      {
        value: 'var(--font-size--h5)',
        label: 't:options.h5',
      },
      {
        value: 'var(--font-size--h6)',
        label: 't:options.h6',
      },
    ],
    default: '',
    visible_if: options.conditional ? "{{ block.settings.type_preset == 'custom' }}" : undefined,
  },
];

/**
 * @param {Object} options - Setting schema overrides
 * @param {boolean} [options.conditional=true] - Whether the setting is conditional on the type preset
 * @param {string} [options.default="1rem"] - The default value for the setting
 * @param {string[]} [options.allowedSizes] - The allowed sizes for the setting
 * @returns {import('../schema').SettingSchema[]}
 */
export const customFontSizePreset = ({ conditional = true, default: defaultValue = '1rem', allowedSizes } = {}) => [
  {
    type: 'select',
    id: 'font_size',
    label: 't:settings.size',
    options: /** @type {import('../schema').SelectOption[]} */ (
      [
        {
          value: '',
          label: 't:options.default',
        },
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
      ].filter((option) => (allowedSizes ? allowedSizes.includes(option.value) : true))
    ),
    default: defaultValue,
    visible_if: conditional ? "{{ block.settings.type_preset == 'custom' }}" : undefined,
  },
];

/**
 * @param {Object} options - Setting schema overrides
 * @param {boolean} [options.conditional=true] - Whether the setting is conditional on the type preset
 * @returns {import('../schema').SettingSchema[]}
 */
export const fontWeightPreset = (options = { conditional: true }) => [
  {
    type: 'select',
    id: 'weight',
    label: 't:settings.weight',
    options: [
      {
        value: '',
        label: 't:options.default',
      },
      {
        value: '100',
        label: 't:options.thin',
      },
      {
        value: '300',
        label: 't:options.light',
      },
      {
        value: '400',
        label: 't:options.regular',
      },
      {
        value: '500',
        label: 't:options.medium',
      },
      {
        value: '600',
        label: 't:options.semibold',
      },
      {
        value: '700',
        label: 't:options.bold',
      },
      {
        value: '900',
        label: 't:options.black',
      },
    ],
    default: '',
    visible_if: options.conditional ? "{{ block.settings.type_preset == 'custom' }}" : undefined,
  },
];

/**
 * @param {Object} options - Setting schema overrides
 * @param {boolean} [options.conditional=true] - Whether the setting is conditional on the type preset
 * @returns {import('../schema').SettingSchema[]}
 */
export const colorPreset = (options = { conditional: true }) => [
  {
    type: 'select',
    id: 'color',
    label: 't:settings.color',
    options: [
      {
        value: 'var(--color-foreground)',
        label: 't:options.text',
      },
      {
        value: 'var(--color-foreground-heading)',
        label: 't:options.heading',
      },
      {
        value: 'var(--color-primary)',
        label: 't:options.link',
      },
    ],
    default: 'var(--color-foreground)',
    visible_if: options.conditional ? "{{ block.settings.type_preset != 'rte' }}" : undefined,
  },
];

/**
 * @param {Object} options - Setting schema overrides
 * @param {boolean} [options.conditional=true] - Whether the setting is conditional on the type preset
 * @returns {import('../schema').SettingSchema[]}
 */
export const lineHeightPreset = (options = { conditional: true }) => [
  {
    type: 'select',
    id: 'line_height',
    label: 't:settings.line_height',
    options: [
      {
        value: 'tight',
        label: 't:options.tight',
      },
      {
        value: 'normal',
        label: 't:options.normal',
      },
      {
        value: 'loose',
        label: 't:options.loose',
      },
    ],
    default: 'normal',
    visible_if: options.conditional ? "{{ block.settings.type_preset == 'custom' }}" : undefined,
  },
];

/**
 * @param {Object} options - Setting schema overrides
 * @param {boolean} [options.conditional=true] - Whether the setting is conditional on the type preset
 * @returns {import('../schema').SettingSchema[]}
 */
export const letterSpacingPreset = (options = { conditional: true }) => [
  {
    type: 'select',
    id: 'letter_spacing',
    label: 't:settings.letter_spacing',
    options: [
      {
        value: 'tight',
        label: 't:options.tight',
      },
      {
        value: 'normal',
        label: 't:options.normal',
      },
      {
        value: 'loose',
        label: 't:options.loose',
      },
    ],
    default: 'normal',
    visible_if: options.conditional ? "{{ block.settings.type_preset == 'custom' }}" : undefined,
  },
];

/**
 * @param {Object} options - Setting schema overrides
 * @param {boolean} [options.conditional=true] - Whether the setting is conditional on the type preset
 * @returns {import('../schema').SettingSchema[]}
 */
export const textCasePreset = (options = { conditional: true }) => [
  {
    type: 'select',
    id: 'case',
    label: 't:settings.case',
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
    visible_if: options.conditional ? "{{ block.settings.type_preset == 'custom' }}" : undefined,
  },
];

/**
 * @param {Object} options - Setting schema overrides
 * @param {boolean} [options.conditional=true] - Whether the setting is conditional on the type preset
 * @returns {import('../schema').SettingSchema[]}
 */
export const textWrapPreset = (options = { conditional: true }) => [
  {
    type: 'select',
    id: 'wrap',
    label: 't:settings.wrap',
    options: [
      {
        value: 'pretty',
        label: 't:options.pretty',
      },
      {
        value: 'balance',
        label: 't:options.balance',
      },
      {
        value: 'nowrap',
        label: 't:options.none',
      },
    ],
    visible_if: options.conditional ? "{{ block.settings.type_preset == 'custom' }}" : undefined,
  },
];

/**
 * @param {Object} options - Setting schema overrides
 * @param {('fit-content'|'100%')} [options.defaultWidth="fit-content"] - The default width for the setting
 * @param {('narrow'|'normal'|'none')} [options.defaultMaxWidth="normal"] - The default max width for the setting
 * @param {boolean} [options.hideMaxWidth=false] - Whether to hide the max width setting
 * @returns {import('../schema').SettingSchema[]}
 */
export const widthPreset = (
  options = { defaultWidth: 'fit-content', defaultMaxWidth: 'normal', hideMaxWidth: false }
) => [
  {
    type: 'select',
    id: 'width',
    label: 't:settings.width',
    options: [
      {
        value: 'fit-content',
        label: 't:options.fit',
      },
      {
        value: '100%',
        label: 't:options.fill',
      },
    ],
    default: options.defaultWidth || 'fit-content',
  },
  ...(options.hideMaxWidth
    ? []
    : [
        /** @type {import('../schema').SettingSchema} */ ({
          type: 'select',
          id: 'max_width',
          label: 't:settings.max_width',
          options: [
            {
              value: 'narrow',
              label: 't:options.narrow',
            },
            {
              value: 'normal',
              label: 't:options.normal',
            },
            {
              value: 'none',
              label: 't:options.none',
            },
          ],
          default: options.defaultMaxWidth || 'normal',
        }),
      ]),
];

/**
 * @param {Object} options - Setting schema overrides
 * @param {boolean} [options.conditional=true] - Whether the setting is conditional on the width setting
 * @param {('left'|'center'|'right')} [options.default="left"] - The default alignment for the setting
 * @returns {import('../schema').SettingSchema[]}
 */
export const alignmentPreset = ({ conditional = true, default: defaultValue = 'left' } = {}) => [
  {
    type: 'text_alignment',
    id: 'alignment',
    label: 't:settings.alignment',
    default: defaultValue,
    visible_if: conditional ? "{{ block.settings.width == '100%' }}" : undefined,
  },
];

/**
 * @returns {import('../schema').SettingSchema[]}
 * @param {Object} options - Setting schema overrides
 * @param {('fit-content'|'100%')} [options.defaultWidth="fit-content"] - The default width for the setting
 * @param {('narrow'|'normal'|'none')} [options.defaultMaxWidth="normal"] - The default max width for the setting
 * @param {boolean} [options.hideMaxWidth=false] - Whether to hide the max width setting
 */
export const textLayoutPreset = (
  options = { defaultWidth: 'fit-content', defaultMaxWidth: 'normal', hideMaxWidth: false }
) => [
  {
    type: 'header',
    content: 't:content.layout',
  },
  ...widthPreset(options),
  ...alignmentPreset(),
];

/**
 * Creates a custom text preset schema
 * @returns {import('../schema').SettingSchema[]} Array of setting schemas
 * @param {Object} options - Setting schema overrides
 * @param {boolean} [options.hideWrap=false] - Whether to hide the wrap setting
 */
export const customTextPreset = (options = { hideWrap: false }) => [
  ...fontPreset(),
  ...customFontSizePreset(),
  ...lineHeightPreset(),
  ...letterSpacingPreset(),
  ...textCasePreset(),
  ...(options.hideWrap ? [] : textWrapPreset()),
  ...colorPreset(),
];
