import { default as sectionSchema } from './section';

// Omit disabled_on from section schema
const { disabled_on: _, ...schema } = sectionSchema;

/**
 * @type {import('../schema').Schema}
 */
export default {
  ...schema,
  presets: [
    {
      name: 't:names.custom_section',
    },
  ],
};
