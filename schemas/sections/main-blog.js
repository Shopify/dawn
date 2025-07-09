import { color_scheme } from '../utils/color-scheme';
import { padding } from '../utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.blog_posts',
  blocks: [
    { type: '@theme' },
    { type: '@app' },
    { type: 'text' },
    { type: 'icon' },
    { type: 'image' },
    { type: 'button' },
    { type: 'video' },
    { type: 'group' },
    { type: 'spacer' },
    { type: '_divider' },
  ],
  disabled_on: {
    groups: ['header'],
  },
  settings: [...color_scheme({ type: 'section' }), ...padding({ type: 'section' })],
};
