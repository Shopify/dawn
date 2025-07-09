import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.payment_icons',
  tag: null,
  settings: [
    {
      type: 'select',
      id: 'horizontal_alignment',
      label: 't:settings.alignment',
      options: [
        { value: 'flex-start', label: 't:options.left' },
        { value: 'center', label: 't:options.center' },
        { value: 'flex-end', label: 't:options.right' },
        { value: 'space-between', label: 't:options.space_between' },
      ],
      default: 'flex-start',
    },
    {
      type: 'range',
      id: 'gap',
      label: 't:settings.gap',
      min: 0,
      max: 100,
      step: 1,
      unit: 'px',
      default: 10,
    },
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.payment_icons',
      category: 't:categories.footer',
    },
  ],
};
