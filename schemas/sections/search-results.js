import { color_scheme } from 'utils/color-scheme';
import { horizontalPadding, verticalPadding } from 'utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.search_results',
  settings: [
    {
      type: 'paragraph',
      content: 't:content.edit_empty_state_collection_in_theme_settings',
    },
    {
      type: 'select',
      id: 'layout_type',
      label: 't:settings.type',
      options: [
        {
          value: 'grid',
          label: 't:options.grid',
        },
        {
          value: 'organic',
          label: 't:options.editorial',
        },
      ],
      default: 'grid',
    },
    {
      type: 'select',
      id: 'product_card_size',
      label: 't:settings.card_size',
      options: [
        {
          value: 'small',
          label: 't:options.small',
        },
        {
          value: 'medium',
          label: 't:options.medium',
        },
        {
          value: 'large',
          label: 't:options.large',
        },
        {
          value: 'extra-large',
          label: 't:options.extra_large',
        },
      ],
      default: 'medium',
      visible_if: "{{ section.settings.layout_type == 'grid' }}",
    },
    {
      type: 'select',
      id: 'mobile_product_card_size',
      label: 't:settings.mobile_card_size',
      options: [
        {
          value: 'small',
          label: 't:options.small',
        },
        {
          value: 'large',
          label: 't:options.large',
        },
      ],
      default: 'small',
    },
    {
      type: 'header',
      content: 't:content.layout',
    },
    {
      type: 'select',
      id: 'product_grid_width',
      label: 't:settings.width',
      options: [
        {
          value: 'centered',
          label: 't:options.page',
        },
        {
          value: 'full-width',
          label: 't:options.full',
        },
      ],
      default: 'centered',
    },
    {
      type: 'checkbox',
      id: 'full_width_on_mobile',
      label: 't:settings.full_width_on_mobile',
      default: true,
      visible_if: "{{ section.settings.product_grid_width != 'full-width' }}",
    },
    {
      type: 'range',
      id: 'columns_gap_horizontal',
      label: 't:settings.horizontal_gap',
      min: 0,
      max: 50,
      step: 1,
      unit: 'px',
      default: 16,
    },
    {
      type: 'range',
      id: 'columns_gap_vertical',
      label: 't:settings.vertical_gap',
      min: 0,
      max: 50,
      step: 1,
      unit: 'px',
      default: 16,
    },
    ...horizontalPadding({ noHeader: true }),
    {
      type: 'header',
      content: 't:content.section_layout',
    },
    ...color_scheme({ type: 'section' }),
    ...verticalPadding({ top: 8, bottom: 8, noHeader: true }),
  ],
  presets: [],
};
