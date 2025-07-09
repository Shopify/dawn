import group from './group';
import { layout } from 'utils/layout';

/**
 * @type {import('../schema').Schema}
 */
export default {
  ...group,
  name: 't:names.content',
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
  settings: [...layout('block', { excludeType: true, horizontalAlignmentFlexDirectionColumn: 'center' }, { gap: 24 })],
};
