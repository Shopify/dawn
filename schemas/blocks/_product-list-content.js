import group from './group';
import { layout } from 'utils/layout';
import { appearance } from 'utils/appearance';
import { padding } from 'utils/padding';
import { size } from '../utils/size';

/**
 * @type {import('../schema').Schema}
 */
export default {
  ...group,
  name: 't:names.header',
  settings: [...layout('block'), ...size(), ...appearance('block'), ...padding()],
  blocks: [
    { type: '@theme' },
    { type: '@app' },
    { type: 'text' },
    { type: 'button' },
    { type: 'spacer' },
    { type: '_divider' },
    { type: '_product-list-text' },
    { type: '_product-list-button' },
  ],
};
