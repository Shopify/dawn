import {
  fontPreset,
  fontWeightPreset,
  lineHeightPreset,
  letterSpacingPreset,
  textCasePreset,
} from '../utils/type-preset';

const options = {
  conditional: false,
};

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.text',
  tag: null,
  settings: [
    {
      type: 'text',
      id: 'text',
      label: 't:settings.text',
    },
    {
      type: 'header',
      content: 't:content.typography',
    },
    ...fontPreset(options),
    ...fontWeightPreset(options),
    ...lineHeightPreset(options),
    ...letterSpacingPreset(options),
    ...textCasePreset(options),
  ],
};
