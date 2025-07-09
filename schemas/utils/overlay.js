/**
 * Creates an overlay setting schema
 * @param {Object} options - Setting schema overrides
 * @param {string} [options.type='block'] - Type of overlay to apply
 * @param {boolean} [options.background_overlay=false] - Whether label should mention background or media overlay
 * @returns {import('../schema').SettingSchema[]}
 */
export const overlay = (options = {}) => {
  const { type = 'block', background_overlay = false } = options;

  return [
    {
      type: 'checkbox',
      id: 'toggle_overlay',
      label: background_overlay ? 't:settings.background_overlay' : 't:settings.media_overlay',
    },
    {
      type: 'color',
      id: 'overlay_color',
      label: 't:settings.overlay_color',
      alpha: true,
      default: '#00000026',
      visible_if: `{{ ${type}.settings.toggle_overlay }}`,
    },
    {
      type: 'select',
      id: 'overlay_style',
      label: 't:settings.overlay_style',
      options: [
        {
          value: 'solid',
          label: 't:options.solid',
        },
        {
          value: 'gradient',
          label: 't:options.gradient',
        },
      ],
      default: 'solid',
      visible_if: `{{ ${type}.settings.toggle_overlay }}`,
    },
    {
      type: 'select',
      id: 'gradient_direction',
      label: 't:settings.gradient_direction',
      options: [
        {
          value: 'to top',
          label: 't:options.up',
        },
        {
          value: 'to bottom',
          label: 't:options.down',
        },
      ],
      default: 'to top',
      visible_if: `{{ ${type}.settings.toggle_overlay and ${type}.settings.overlay_style == 'gradient' }}`,
    },
  ];
};
