import { padding } from '../utils/padding';
import { typePreset } from '../utils/type-preset';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.email_signup',
  tag: null,
  settings: [
    {
      type: 'paragraph',
      content: 't:content.email_signups_create_customer_profiles',
    },
    {
      type: 'select',
      id: 'width',
      label: 't:settings.width',
      options: [
        {
          value: 'fill',
          label: 't:options.fill',
        },
        {
          value: 'custom',
          label: 't:options.custom',
        },
      ],
      default: 'fill',
    },
    {
      type: 'range',
      id: 'custom_width',
      label: 't:settings.custom_width',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      default: 100,
      visible_if: '{{ block.settings.width == "custom" }}',
    },
    {
      type: 'checkbox',
      id: 'inherit_color_scheme',
      label: 't:settings.inherit_color_scheme',
      default: true,
    },
    {
      type: 'color_scheme',
      id: 'color_scheme',
      label: 't:settings.color_scheme',
      default: 'primary',
      visible_if: '{{ block.settings.inherit_color_scheme == false }}',
    },
    {
      type: 'header',
      content: 't:content.input',
    },
    {
      type: 'select',
      id: 'border_style',
      label: 't:settings.border',
      options: [
        { value: 'all', label: 't:options.all' },
        { value: 'underline', label: 't:options.underline' },
        { value: 'none', label: 't:options.none' },
      ],
      default: 'all',
    },
    {
      type: 'range',
      id: 'border_width',
      label: 't:settings.border_width',
      min: 0,
      max: 4,
      step: 0.5,
      unit: 'px',
      default: 1,
      visible_if: '{{ block.settings.border_style != "none" }}',
    },
    {
      type: 'range',
      id: 'border_radius',
      label: 't:settings.border_radius',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 100,
      visible_if: '{{ block.settings.border_style != "underline" }}',
    },
    ...typePreset({
      id: 'input_type_preset',
      label: 't:settings.type_preset',
      defaultValue: 'paragraph',
      hideTypePresetHeader: true,
    }),
    {
      type: 'header',
      content: 't:content.submit_button',
    },
    {
      type: 'select',
      id: 'style_class',
      label: 't:settings.style',
      options: [
        {
          value: 'button',
          label: 't:options.primary',
        },
        {
          value: 'button-secondary',
          label: 't:options.secondary',
        },
        {
          value: 'button-unstyled',
          label: 't:options.link',
        },
      ],
      default: 'button',
    },
    {
      type: 'select',
      id: 'display_type',
      label: 't:settings.display',
      options: [
        { value: 'text', label: 't:options.text' },
        { value: 'arrow', label: 't:options.arrow' },
      ],
      default: 'text',
    },
    {
      type: 'text',
      id: 'label',
      label: 't:settings.label',
      default: 't:text_defaults.sign_up',
      visible_if: '{{ block.settings.display_type == "text" }}',
    },
    {
      type: 'checkbox',
      id: 'integrated_button',
      label: 't:settings.integrated_button',
      default: false,
      visible_if: '{{ block.settings.border_style != "underline" }}',
    },
    ...typePreset({
      id: 'button_type_preset',
      label: 't:settings.type_preset',
      defaultValue: 'paragraph',
      visible_if: '{{ block.settings.display_type == "text" }}',
      hideTypePresetHeader: true,
    }),
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.email_signup',
      category: 't:categories.forms',
    },
  ],
};
