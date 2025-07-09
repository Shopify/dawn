import { appearance } from '../utils/appearance';
import { layout } from '../utils/layout';
import { padding } from '../utils/padding';
import { size } from '../utils/size';
import { overlay } from '../utils/overlay';
/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.group',
  tag: null,
  blocks: [{ type: '@theme' }, { type: '@app' }, { type: '_divider' }],
  settings: [
    {
      type: 'url',
      id: 'link',
      label: 't:settings.link',
    },
    {
      type: 'checkbox',
      id: 'open_in_new_tab',
      label: 't:settings.open_new_tab',
      default: false,
    },
    ...layout('block'),
    ...size(),
    ...appearance('block'),
    ...overlay({ type: 'block', background_overlay: true }),
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.group',
      category: 't:categories.layout',
    },
  ],
};
