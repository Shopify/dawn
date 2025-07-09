import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.footer_utilities',
  tag: null,
  settings: [
    { type: 'header', content: 't:content.appearance' },
    {
      type: 'range',
      id: 'divider_thickness',
      label: 't:settings.divider_thickness',
      min: 0,
      max: 5,
      step: 0.5,
      unit: 'px',
      default: 1,
    },
    ...padding({ top: 20, bottom: 20, onlyVerticalPadding: true }),
  ],
  presets: [
    {
      name: 't:names.footer_utilities',
      category: 't:categories.footer',
    },
  ],
};
