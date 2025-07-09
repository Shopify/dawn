import { appearance } from 'utils/appearance';
import { media_picker } from 'utils/media_picker';
import { padding } from 'utils/padding';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.media',
  tag: null,
  settings: [
    ...media_picker({ additionalSettings: { url: true, videoAutoplay: true, videoLoop: true } }),
    ...appearance('block', { excludeBackground: true, excludeBorders: true }),
    ...padding(),
  ],
  presets: [
    {
      name: 't:names.media',
    },
  ],
};
