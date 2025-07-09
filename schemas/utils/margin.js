/**
 * Creates a margin setting schema
 * @param {Object} options - Setting schema overrides
 * @param {import('../schema').ContentTranslationKey} [options.header='t:content.margin'] - Header text
 * @param {number} options.top - Top margin
 * @param {number} options.bottom - Bottom margin
 * @param {number} options.left - Left margin
 * @param {number} options.right - Right margin
 * @returns {import('../schema').SettingSchema[]} Array of setting schemas
 */

export const margin = (options = { header: 't:content.margin', top: 0, bottom: 0, left: 0, right: 0 }) => [
  {
    type: 'header',
    content: options.header ?? 't:content.margin',
  },
  {
    type: 'range',
    id: 'margin-block-start',
    label: 't:settings.top',
    min: 0,
    max: 100,
    step: 1,
    unit: 'px',
    default: options.top,
  },
  {
    type: 'range',
    id: 'margin-block-end',
    label: 't:settings.bottom',
    min: 0,
    max: 100,
    step: 1,
    unit: 'px',
    default: options.bottom,
  },
  {
    type: 'range',
    id: 'margin-inline-start',
    label: 't:settings.left',
    min: 0,
    max: 100,
    step: 1,
    unit: 'px',
    default: options.left,
  },
  {
    type: 'range',
    id: 'margin-inline-end',
    label: 't:settings.right',
    min: 0,
    max: 100,
    step: 1,
    unit: 'px',
    default: options.right,
  },
];
