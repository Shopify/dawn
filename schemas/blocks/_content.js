import { appearance } from 'utils/appearance';
import group from './group';
import { layout } from 'utils/layout';
import { padding } from 'utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  ...group,
  name: 't:names.content',
  settings: [
    ...layout('block', { excludeType: true, horizontalAlignmentFlexDirectionColumn: 'center' }, { gap: 24 }),
    ...appearance('block', { excludeBackground: true, excludeBorders: true }),
    ...padding(),
  ],
};
