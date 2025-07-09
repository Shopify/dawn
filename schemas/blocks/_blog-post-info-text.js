import { padding } from '../utils/padding';
import { typePreset } from '../utils/type-preset';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.details',
  settings: [
    {
      type: 'checkbox',
      id: 'show_date',
      label: 't:settings.show_date',
      default: true,
    },
    {
      type: 'checkbox',
      id: 'show_author',
      label: 't:settings.show_author',
      default: true,
    },
    ...typePreset({ label: 't:settings.preset', defaultValue: '' }),
    {
      type: 'text_alignment',
      id: 'alignment',
      label: 't:settings.alignment',
      visible_if: '{{ block.settings.show_alignment != false }}',
    },
    {
      type: 'checkbox',
      id: 'show_alignment',
      label: 't:settings.show_alignment',
      default: true,
      visible_if: '{{ false }}',
    },
    ...padding({ type: 'section', top: 24 }),
  ],
  presets: [
    {
      name: 't:names.details',
    },
  ],
};
