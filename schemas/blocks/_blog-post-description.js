import { padding } from '../utils/padding';
import { typePreset, customTextPreset } from '../utils/type-preset';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.description',
  tag: null,
  settings: [
    ...typePreset({
      label: 't:settings.preset',
      rte: true,
      custom: true,
      defaultValue: 'rte',
    }),
    ...customTextPreset(),
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
      visible_if: "{{ block.settings.type_preset != 'rte' }}",
    },
    ...padding({ top: 16, bottom: 0 }),
  ],
  presets: [
    {
      name: 't:names.description',
    },
  ],
};
