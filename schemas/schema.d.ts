import translations from '../locales/en.default.schema.json';
import { Preset as ThemeCheckPreset } from '@shopify/theme-check-common/preset';

type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;

type DotNestedKeys<T> = (
  T extends object
    ? { [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}` }[Exclude<keyof T, symbol>]
    : ''
) extends infer D
  ? Extract<D, string>
  : never;

type RawTranslations = typeof translations;
type Translations = DotNestedKeys<RawTranslations>;
type TranslationKey = `t:${Translations}`;
type NamesTranslationKey = TranslationKey & `t:names.${string}`;
type SettingsTranslationKey = TranslationKey & `t:settings.${string}`;
type OptionsTranslationKey = TranslationKey & `t:options.${string}`;
type GithubTranslationKey = TranslationKey & `t:github.${string}`;
type ContentTranslationKey = TranslationKey & `t:content.${string}`;
type CategoriesTranslationKey = TranslationKey & `t:categories.${string}`;
type InfoTranslationKey = TranslationKey & `t:info.${string}`;
type HTMLDefaultsTranslationKey = TranslationKey & `t:html_defaults.${string}`;
type TextDefaultsTranslationKey = TranslationKey & `t:text_defaults.${string}`;

// Standard attributes for all settings
interface BaseSettingSchema {
  readonly id: string;
  readonly label: SettingsTranslationKey;
  readonly info?: InfoTranslationKey;
  readonly visible_if?: string;
}

// Basic input settings
interface CheckboxSettingSchema extends BaseSettingSchema {
  readonly type: 'checkbox';
  readonly default?: boolean;
}

interface HeaderSettingSchema {
  readonly type: 'header';
  readonly info?: InfoTranslationKey;
  readonly content: ContentTranslationKey;
  readonly visible_if?: string;
}

interface ParagraphSettingSchema {
  readonly type: 'paragraph';
  readonly content: ContentTranslationKey | GithubTranslationKey;
  readonly visible_if?: string;
}

interface NumberSettingSchema extends BaseSettingSchema {
  readonly type: 'number';
  readonly default?: number;
  readonly placeholder?: TranslationKey;
}

interface RadioOption {
  readonly value: string;
  readonly label: OptionsTranslationKey;
}

interface RadioSettingSchema extends BaseSettingSchema {
  readonly type: 'radio';
  readonly options: RadioOption[];
  readonly default?: string;
}

interface RangeSettingSchema extends BaseSettingSchema {
  readonly type: 'range';
  readonly min: number;
  readonly max: number;
  readonly step?: number;
  readonly unit?: string;
  readonly default: number;
}

interface SelectOption {
  readonly value: string;
  readonly label: OptionsTranslationKey | `${number}px`;
}

interface SelectSettingSchema extends BaseSettingSchema {
  readonly type: 'select';
  readonly options: SelectOption[];
  readonly default?: string;
}

interface TextSettingSchema extends BaseSettingSchema {
  readonly type: 'text';
  readonly placeholder?: TranslationKey;
  readonly default?: HTMLDefaultsTranslationKey | TextDefaultsTranslationKey;
}

interface TextareaSettingSchema extends BaseSettingSchema {
  readonly type: 'textarea';
  readonly placeholder?: TranslationKey;
  readonly default?: HTMLDefaultsTranslationKey | TextDefaultsTranslationKey;
}

// Specialized input settings
interface ArticleSettingSchema extends BaseSettingSchema {
  readonly type: 'article';
}

interface BlogSettingSchema extends BaseSettingSchema {
  readonly type: 'blog';
}

interface CollectionSettingSchema extends BaseSettingSchema {
  readonly type: 'collection';
}

interface CollectionListSettingSchema extends BaseSettingSchema {
  readonly type: 'collection_list';
  readonly limit?: number;
}

interface ColorSettingSchema extends BaseSettingSchema {
  readonly type: 'color';
  readonly default?: string;
  readonly alpha?: boolean;
}

interface ColorBackgroundSettingSchema extends BaseSettingSchema {
  readonly type: 'color_background';
  readonly default?: string;
}

interface ColorSchemeSettingSchema extends BaseSettingSchema {
  readonly type: 'color_scheme';
  readonly default?: string;
}

interface ColorSchemeGroupSettingSchema extends BaseSettingSchema {
  readonly type: 'color_scheme_group';
}

interface FontPickerSettingSchema extends BaseSettingSchema {
  readonly type: 'font_picker';
  readonly default?: string;
}

interface HtmlSettingSchema extends BaseSettingSchema {
  readonly type: 'html';
  readonly default?: string;
}

interface ImagePickerSettingSchema extends BaseSettingSchema {
  readonly type: 'image_picker';
}

interface InlineRichtextSettingSchema extends BaseSettingSchema {
  readonly type: 'inline_richtext';
  readonly default?: string;
}

interface LinkListSettingSchema extends BaseSettingSchema {
  readonly type: 'link_list';
  readonly default?: string;
}

interface LiquidSettingSchema extends BaseSettingSchema {
  readonly type: 'liquid';
  readonly default?: string;
}

interface MetaobjectSettingSchema extends BaseSettingSchema {
  readonly type: 'metaobject';
  readonly metaobject_type?: string;
}

interface MetaobjectListSettingSchema extends BaseSettingSchema {
  readonly type: 'metaobject_list';
  readonly metaobject_type?: string;
  readonly limit?: number;
}

interface PageSettingSchema extends BaseSettingSchema {
  readonly type: 'page';
}

interface ProductSettingSchema extends BaseSettingSchema {
  readonly type: 'product';
}

interface ProductListSettingSchema extends BaseSettingSchema {
  readonly type: 'product_list';
  readonly limit?: number;
}

interface RichtextSettingSchema extends BaseSettingSchema {
  readonly type: 'richtext';
  readonly default?: string;
}

interface TextAlignmentSettingSchema extends BaseSettingSchema {
  readonly type: 'text_alignment';
  readonly default?: 'left' | 'center' | 'right';
}

interface UrlSettingSchema extends BaseSettingSchema {
  readonly type: 'url';
  readonly default?: string;
}

interface VideoSettingSchema extends BaseSettingSchema {
  readonly type: 'video';
}

interface VideoUrlSettingSchema extends BaseSettingSchema {
  readonly type: 'video_url';
  readonly accept: ('youtube' | 'vimeo')[];
  readonly placeholder?: TranslationKey;
}

// Union type for all possible settings
export type SettingSchema =
  | HeaderSettingSchema
  | ParagraphSettingSchema
  | CheckboxSettingSchema
  | NumberSettingSchema
  | RadioSettingSchema
  | RangeSettingSchema
  | SelectSettingSchema
  | TextSettingSchema
  | TextareaSettingSchema
  | ArticleSettingSchema
  | BlogSettingSchema
  | CollectionSettingSchema
  | CollectionListSettingSchema
  | ColorSettingSchema
  | ColorBackgroundSettingSchema
  | ColorSchemeSettingSchema
  | ColorSchemeGroupSettingSchema
  | FontPickerSettingSchema
  | HtmlSettingSchema
  | ImagePickerSettingSchema
  | InlineRichtextSettingSchema
  | LinkListSettingSchema
  | LiquidSettingSchema
  | MetaobjectSettingSchema
  | MetaobjectListSettingSchema
  | PageSettingSchema
  | ProductSettingSchema
  | ProductListSettingSchema
  | RichtextSettingSchema
  | TextAlignmentSettingSchema
  | UrlSettingSchema
  | VideoSettingSchema
  | VideoUrlSettingSchema;

export interface SchemaPresetBlock {
  readonly type: string;
  readonly name?: NamesTranslationKey;
  readonly static?: boolean;
  readonly id?: string;
  readonly blocks?: readonly {
    [key: string]: SchemaPresetBlock;
  };
  readonly block_order?: string[];
  readonly settings?: { [key: string]: any };
}

export interface Schema {
  readonly disabled_on?: {
    readonly groups?: readonly string[];
    readonly templates?: readonly string[];
  };
  readonly enabled_on?: {
    readonly groups?: readonly string[];
    readonly templates?: readonly string[];
  };
  readonly name: NamesTranslationKey;
  readonly class?: string | null;
  readonly tag?: string | null;
  readonly blocks?: readonly Array<{ readonly type: string }>;
  readonly max_blocks?: number;
  readonly limit?: number;
  readonly settings?: readonly SettingSchema[];
  readonly presets?: readonly Array<{
    readonly name: NamesTranslationKey;
    readonly blocks?: readonly {
      [key: string]: SchemaPresetBlock;
    };
    readonly block_order?: string[];
    readonly settings?: { [key: string]: any };
    readonly category?: CategoriesTranslationKey;
  }>;
}

export type Preset = ThemeCheckPreset.Preset & {
  readonly category?: CategoriesTranslationKey;
  readonly name: NamesTranslationKey;
};
