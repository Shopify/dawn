import { padding } from '../utils/padding';
import { typePreset } from '../utils/type-preset';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.title',
  tag: null,
  settings: [
    {
      type: 'inline_richtext',
      id: 'title',
      label: 't:settings.cart_title',
      default: 'Cart',
    },
    {
      type: 'checkbox',
      id: 'show_count',
      label: 't:settings.cart_count',
      default: true,
    },
    ...typePreset({ label: 't:settings.preset', defaultValue: '' }),
    {
      type: 'text_alignment',
      id: 'alignment',
      label: 't:settings.alignment',
      default: 'left',
    },
    ...padding({ top: 16 }),
  ],
  presets: [
    {
      name: 't:names.title',
    },
  ],
};
