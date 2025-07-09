import { padding } from '../utils/padding';
import { typePreset, customTextPreset } from '../utils/type-preset';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.heading',
  tag: null,
  settings: [
    ...typePreset({
      label: 't:settings.preset',
      rte: true,
      custom: true,
      defaultValue: 'rte',
      hideTypePresetHeader: true,
    }),
    ...customTextPreset(),
    {
      type: 'richtext',
      id: 'text',
      label: 't:settings.text',
      default: 't:html_defaults.share_information_about_your',
      visible_if: `{{ block.settings.read_only != true }}`,
    },
    {
      type: 'checkbox',
      id: 'read_only',
      label: 't:settings.read_only',
      visible_if: '{{ false }}',
      default: false,
    },
    {
      type: 'text_alignment',
      id: 'alignment',
      label: 't:settings.alignment',
      default: 'left',
      visible_if: '{{ block.settings.show_alignment != false }}',
    },
    {
      type: 'checkbox',
      id: 'show_alignment',
      label: 't:settings.show_alignment',
      default: true,
      visible_if: '{{ false }}',
    },
    ...padding(),
  ],
};
