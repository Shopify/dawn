import { padding } from '../utils/padding';
import { textLayoutPreset, typePreset, customTextPreset } from '../utils/type-preset';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.collection_title',
  tag: null,
  settings: [
    {
      type: 'paragraph',
      content: 't:content.resource_reference_collection_title',
    },
    ...textLayoutPreset(),
    ...typePreset({ label: 't:settings.preset', rte: true, custom: true, defaultValue: 'rte' }),
    ...customTextPreset(),
    {
      type: 'header',
      content: 't:content.appearance',
    },
    {
      type: 'checkbox',
      id: 'background',
      label: 't:settings.background',
      default: false,
    },
    {
      type: 'color',
      id: 'background_color',
      label: 't:settings.background_color',
      alpha: true,
      default: '#00000026',
      visible_if: '{{ block.settings.background }}',
    },
    {
      type: 'range',
      id: 'corner_radius',
      label: 't:settings.corner_radius',
      default: 0,
      min: 0,
      max: 50,
      step: 1,
      visible_if: '{{ block.settings.background }}',
    },
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.collection_title',
      category: 't:categories.collection',
    },
  ],
};
