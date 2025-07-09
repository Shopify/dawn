/**
 * Creates a padding setting schema
 * @param {Object} options - Setting schema overrides
 * @param {string} [options.type='block'] - Type of padding to apply
 * @param {import ('../schema').ContentTranslationKey} [options.header='t:content.padding'] - Header text
 * @param {number} [options.top=0] - Top padding
 * @param {number} [options.bottom=0] - Bottom padding
 * @param {number} [options.left=0] - Left padding
 * @param {number} [options.right=0] - Right padding
 * @param {number} [options.max=100] - Maximum padding value
 * @param {boolean} [options.onlyVerticalPadding=false] - Only show vertical padding settings
 * @returns {import('../schema').SettingSchema[]} Array of setting schemas
 */
export const padding = (options = {}) => {
  const {
    type = 'block',
    header = 't:content.padding',
    top = 0,
    bottom = 0,
    left = 0,
    right = 0,
    max = 100,
    onlyVerticalPadding = false,
  } = options;
  // Determine if this is for a section
  const isSection = type === 'section';

  // Start with the header
  /** @type {import('../schema').SettingSchema[]} */
  const settings = [
    {
      type: 'header',
      content: header,
    },
    ...verticalPadding(options),
  ];

  // Only add left/right padding settings if this is NOT for a section or if onlyVerticalPadding is false
  if (!(isSection || onlyVerticalPadding)) {
    settings.push(...horizontalPadding(options));
  }

  return settings;
};

/**
 * Creates a horizontal padding setting schema
 * @param {Object} options - Setting schema overrides
 * @param {number} [options.left=0] - Left padding
 * @param {number} [options.right=0] - Right padding
 * @param {number} [options.max=100] - Maximum padding value
 * @param {boolean} [options.noHeader=false] - Setting doesn't need a header and doesn't need to repeat "padding" text
 * @returns {import('../schema').SettingSchema[]} Array of setting schemas
 */
export const horizontalPadding = (options = {}) => {
  const { left = 0, right = 0, max = 100 } = options;

  return [
    {
      type: 'range',
      id: 'padding-inline-start',
      label: options.noHeader ? 't:settings.left_padding' : 't:settings.left',
      min: 0,
      max: max,
      step: 1,
      unit: 'px',
      default: left,
    },
    {
      type: 'range',
      id: 'padding-inline-end',
      label: options.noHeader ? 't:settings.right_padding' : 't:settings.right',
      min: 0,
      max: max,
      step: 1,
      unit: 'px',
      default: right,
    },
  ];
};

/**
 * Creates a vertical padding setting schema
 * @param {Object} options - Setting schema overrides
 * @param {number} [options.top=0] - Top padding
 * @param {number} [options.bottom=0] - Bottom padding
 * @param {number} [options.max=100] - Maximum padding value
 * @param {boolean} [options.noHeader=true] - Setting has a header and doesn't need to repeat "padding" text
 * @returns {import('../schema').SettingSchema[]} Array of setting schemas
 */
export const verticalPadding = (options = {}) => {
  const { top = 0, bottom = 0, max = 100 } = options;

  return [
    {
      type: 'range',
      id: 'padding-block-start',
      label: options.noHeader ? 't:settings.top_padding' : 't:settings.top',
      min: 0,
      max: max,
      step: 1,
      unit: 'px',
      default: top,
    },
    {
      type: 'range',
      id: 'padding-block-end',
      label: options.noHeader ? 't:settings.bottom_padding' : 't:settings.bottom',
      min: 0,
      max: max,
      step: 1,
      unit: 'px',
      default: bottom,
    },
  ];
};
