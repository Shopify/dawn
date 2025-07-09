import {
  fontPreset,
  customFontSizePreset,
  fontWeightPreset,
  letterSpacingPreset,
  textCasePreset,
} from 'utils/type-preset';

const typeOptions = /** @type {const} */ ({
  conditional: false,
});

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.announcement',
  tag: null,
  settings: [
    {
      type: 'inline_richtext',
      id: 'text',
      label: 't:settings.text',
      default: 't:text_defaults.shop_our_latest_arrivals',
    },
    {
      type: 'url',
      id: 'link',
      label: 't:settings.link',
    },
    {
      type: 'header',
      content: 't:content.typography',
    },
    ...fontPreset(typeOptions),
    ...customFontSizePreset({ conditional: false }),
    ...fontWeightPreset(typeOptions),
    ...letterSpacingPreset(typeOptions),
    ...textCasePreset(typeOptions),
  ],
  presets: [
    {
      name: 't:names.announcement',
    },
  ],
};
