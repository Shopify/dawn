import { customFontSizePreset, textCasePreset } from 'utils/type-preset';

/**
 * @type {import('../schema').Schema}
 */
export default {
  name: 't:names.policy_list',
  tag: null,
  settings: [
    {
      type: 'paragraph',
      content: 't:content.manage_policies',
    },
    ...customFontSizePreset({
      conditional: false,
      default: '0.75rem',
      allowedSizes: ['0.625rem', '0.75rem', '0.875rem', '1rem', '1.125rem'],
    }),
    ...textCasePreset({ conditional: false }),
  ],
};
