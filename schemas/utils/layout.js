/**
 * @type {(type: 'section'|'block', options?: {excludeType?: boolean, horizontalAlignmentFlexDirectionColumn?: 'flex-start' | 'center' | 'flex-end'}, defaults?: {gap?: number}) => import('../schema').SettingSchema[]}
 */
export const layout = (type, options = {}, defaults = {}) => [
  {
    type: 'header',
    content: 't:content.layout',
  },
  ...(options?.excludeType
    ? []
    : /** @type {import('../schema').SettingSchema[]} */ ([
        {
          type: /** @type {"select"} */ ('select'),
          id: 'content_direction',
          label: 't:settings.direction',
          options: [
            { value: 'column', label: 't:options.vertical' },
            { value: 'row', label: 't:options.horizontal' },
          ],
          default: 'column',
        },
        {
          type: /** @type {"checkbox"} */ ('checkbox'),
          id: 'vertical_on_mobile',
          label: 't:settings.vertical_on_mobile',
          default: true,
          visible_if: `{{ ${type}.settings.content_direction == 'row' }}`,
        },
        {
          type: /** @type {"select"} */ ('select'),
          id: 'horizontal_alignment',
          label: 't:settings.alignment',
          options: [
            { value: 'flex-start', label: 't:options.left' },
            { value: 'center', label: 't:options.center' },
            { value: 'flex-end', label: 't:options.right' },
            { value: 'space-between', label: 't:options.space_between' },
          ].filter(nonNullable),
          default: 'flex-start',
          visible_if: `{{ ${type}.settings.content_direction == 'row' }}`,
        },
        {
          type: /** @type {"select"} */ ('select'),
          id: 'vertical_alignment',
          label: 't:settings.position',
          options: [
            { value: 'flex-start', label: 't:options.top' },
            { value: 'center', label: 't:options.center' },
            { value: 'flex-end', label: 't:options.bottom' },
          ],
          default: 'center',
          visible_if: `{{ ${type}.settings.content_direction == 'row' }}`,
        },
        {
          type: /** @type {"checkbox"} */ ('checkbox'),
          id: 'align_baseline',
          label: 't:settings.align_baseline',
          default: false,
          visible_if: `{{ ${type}.settings.vertical_alignment == 'flex-end' }}`,
        },
      ])),
  {
    type: 'select',
    id: 'horizontal_alignment_flex_direction_column',
    label: 't:settings.alignment',
    options: [
      { value: 'flex-start', label: 't:options.left' },
      { value: 'center', label: 't:options.center' },
      { value: 'flex-end', label: 't:options.right' },
    ],
    default: options?.horizontalAlignmentFlexDirectionColumn ?? 'flex-start',
    visible_if: options?.excludeType ? undefined : `{{ ${type}.settings.content_direction != 'row' }}`,
  },
  {
    type: 'select',
    id: 'vertical_alignment_flex_direction_column',
    label: 't:settings.position',
    options: /** @type {import('../schema').SelectOption[]} */ ([
      { value: 'flex-start', label: 't:options.top' },
      { value: 'center', label: 't:options.center' },
      { value: 'flex-end', label: 't:options.bottom' },
      { value: 'space-between', label: 't:options.space_between' },
    ]).filter(nonNullable),
    default: 'center',
    visible_if: options?.excludeType ? undefined : `{{ ${type}.settings.content_direction == 'column' }}`,
  },
  {
    type: 'range',
    id: 'gap',
    label: 't:settings.gap',
    min: 0,
    max: 100,
    step: 1,
    unit: 'px',
    default: defaults?.gap ?? 12,
  },
];

/**
 * @template T
 * @param {T} value
 * @returns {value is NonNullable<T>}
 */
export function nonNullable(value) {
  return value != null;
}
