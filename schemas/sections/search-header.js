import { padding } from '../utils/padding';
import { color_scheme } from 'utils/color-scheme';
/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.search',
  settings: [
    {
      type: 'select',
      id: 'alignment',
      label: 't:settings.alignment',
      options: [
        {
          value: 'flex-start',
          label: 't:options.left',
        },
        {
          value: 'center',
          label: 't:options.center',
        },
        {
          value: 'flex-end',
          label: 't:options.right',
        },
      ],
      default: 'flex-start',
    },
    ...color_scheme({ type: 'section' }),
    ...padding({ type: 'section' }),
  ],
};
