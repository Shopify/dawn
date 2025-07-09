/**
 * @type {import('../schema').Preset}
 */
export const emailSignup = {
  name: 't:names.email_signup',
  category: 't:categories.forms',
  settings: {
    horizontal_alignment_flex_direction_column: 'center',
    gap: 16,
    color_scheme: 'scheme-2',
    'padding-block-start': 40,
    'padding-block-end': 40,
  },
  blocks: {
    text_1: {
      type: 'text',
      name: 't:names.heading',
      settings: {
        text: '<h2>Subscribe to our emails</h2>',
        width: '100%',
        alignment: 'center',
      },
    },
    text_2: {
      type: 'text',
      settings: {
        text: '<p>Be the first to know about new collections and special offers. </p>',
        type_preset: 'paragraph',
        width: '100%',
        alignment: 'center',
      },
    },
    email_signup: {
      type: 'email-signup',
      settings: {
        width: 'custom',
        custom_width: 50,
        style_class: 'button-unstyled',
        display_type: 'arrow',
        label: 'Sign Up',
        integrated_button: true,
      },
    },
  },
  block_order: ['text_1', 'text_2', 'email_signup'],
};
