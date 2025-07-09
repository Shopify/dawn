import {
  fontPreset,
  fontWeightPreset,
  lineHeightPreset,
  letterSpacingPreset,
  textCasePreset,
} from '../utils/type-preset';

const options = { conditional: false };

/** * @type {import('../schema').Schema} */ export default {
  name: 't:names.collection_title',
  tag: null,
  settings: [
    { type: 'paragraph', content: 't:content.resource_reference_collection_title' },
    { type: 'header', content: 't:content.typography' },
    ...fontPreset(options),
    ...fontWeightPreset(options),
    ...lineHeightPreset(options),
    ...letterSpacingPreset(options),
    ...textCasePreset(options),
  ],
};
