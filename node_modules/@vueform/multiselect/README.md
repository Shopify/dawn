<div align="center">
  <a href="https://www.npmjs.com/package/@vueform/multiselect" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/dm/@vueform/multiselect?color=%2353ca2f">
  </a>

  <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/vueform/multiselect">

  <a href="https://codecov.io/gh/vueform/multiselect" target="_blank">
    <img src="https://img.shields.io/codecov/c/github/vueform/multiselect"/>
  </a>

  <a href="https://www.npmjs.com/package/@vueform/multiselect" target="_blank">
    <img alt="npm bundle size (scoped version)" src="https://img.shields.io/bundlephobia/minzip/@vueform/multiselect?color=53ca2f">
  </a>

  <a href="https://discord.gg/WhX2nG6GTQ" target="_blank">
    <img alt="Discord" src="https://img.shields.io/discord/787237947635793940">
  </a>

  <a href="https://www.npmjs.com/package/@vueform/multiselect" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/@vueform/multiselect">
  </a>

  <h1>Vue 3 Multiselect</h1>
  
  <a href="https://vueform.com?ref=github" target="_blank">
    <br>
    <img align="center" src="https://github.com/vueform/multiselect/raw/main/assets/logo.svg" width="110">
    <br>
  </a>

  <br>
  <br>

  <a href="https://www.npmjs.com/package/@vueform/multiselect" target="_blank">
    <img align="center" src="https://github.com/vueform/multiselect/raw/main/assets/screenshot-1.png">
  </a>
  <br>

</div>

## Sponsors

<div align="center"><br>
  <a href="https://vueform.com?ref=github"><img src="https://github.com/vueform/multiselect/raw/main/assets/logo-horizontal.svg" width="200"></a>
</div>

## About Vueform

<a href="https://vueform.com?ref=ghb">
  <img align="center" src="https://github.com/vueform/multiselect/raw/main/assets/vueform-banner.png" alt="Vueform" title="Vueform">
</a>

<br>
<br>

Vueform is a comprehensive form builder for Vue.js that makes form development a breeze. It standardizes and handles the entire form building process, including:
- a complete theming and templating system with **Tailwind support** (similar to @vueform libraries)
- 25+ form elements with **multi-file uploads**, date pickers and rich text editor
- element **nesting** and **repeating**
- **50+ validators** with async, dependent and custom rules
- **conditional logic** on element & form level
- breaking forms into **steps** with **form wizard**
- **dynamic** form rendering with **JSON** support
- **translating** form content and global i18n support.

Vueform [pre-release](https://vueform.com) is open for registration for the **first 100 developers** with **special discounts**.

Learn more: [https://vueform.com](https://vueform.com)

## Other libraries

* [@vueform/slider](https://github.com/vueform/slider) - Vue 3 slider component with multihandles, tooltips merging and formatting.
* [@vueform/toggle](https://github.com/vueform/toggle) - Vue 3 toggle component with labels, custom slots and styling options.

## Multiselect features

* Vue 2 & 3 support
* No dependencies
* 100% coverage
* TypeScript support
* ESM support
* Single select options
* Multiple select options
* Tags
* Option groups
* Async options
* Search & filtering
* Custom slots
* Events
* CSS vars support
* **Tailwind** & utility class support
* Fully configurable
* CSP compilant

## Sections

* [Demo](#demo)
* [Installation](#installation)
  * [Using with Vue 3](#using-with-vue-3)
  * [Using with Vue 2](#using-with-vue-2)
  * [Using with Nuxt.js](#using-with-nuxtjs)
* [Support](#support)
* [Configuration](#configuration)
  * [Basic props](#basic-props)
  * [Advanced props](#advanced-props)
* [API](#api)
* [Events](#events)
* [Slots](#slots)
* [Styling](#styling)
  * [Styling with CSS vars](#styling-with-css-vars)
  * [Styling with Tailwind CSS](#styling-with-tailwind-css)
* [Examples](#examples)
  * [Single select](#single-select)
  * [Multiselect with object options](#multiselect-with-object-options)
  * [Multiselect with disabled options](#multiselect-with-disabled-options)
  * [Multiselect with groups](#multiselect-with-groups)
  * [Tags with search, create and array of objects options](#tags-with-search-create-and-array-of-objects-options)
  * [Autocomplete with async options](#autocomplete-with-async-options)
  * [Tags with async options](#tags-with-async-options)
  * [Select with custom options slot](#select-with-custom-options-slot)
  * [Multiselect with custom label slot](#multiselect-with-custom-label-slot)
  * [Tags with custom tags slot](#tags-with-custom-tags-slot)
* [License](#license)

## Demo

Check out our <a href="https://jsfiddle.net/xf0jzoct/" target="_blank">demo</a>.

## Installation

```
npm install @vueform/multiselect
```

## Using with Vue 3

``` vue
<template>
  <div>
    <Multiselect
      v-model="value"
      :options="options"
    />
  </div>
</template>

<script>
  import Multiselect from '@vueform/multiselect'

  export default {
    components: {
      Multiselect,
    },
    data() {
      return {
        value: null,
        options: [
          'Batman',
          'Robin',
          'Joker',
        ]
      }
    }
  }
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
```

## Using with Vue 2

When using Vue 2 install [@vue/composition-api](https://github.com/vuejs/composition-api#npm) via npm/yarn first:

``` bash
npm i @vue/composition-api --save-dev
```

Then install the plugin for Vue:

``` js
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
```

After that make sure to change the imported Multiselect module to:

``` js
import Multiselect from '@vueform/multiselect/dist/multiselect.vue2.js'
```

## Using with Nuxt.js

First you need install [@nuxtjs/composition-api](https://composition-api.nuxtjs.org/getting-started/setup):

``` bash
npm i @nuxtjs/composition-api --save
```

Then you need to enable it as a module in `nuxt.config.js`:

``` js
{
  buildModules: [
    '@nuxtjs/composition-api/module'
  ]
}
```

After that make sure to change the imported module to Vue 2 version of Multiselect:

``` js
import Multiselect from '@vueform/multiselect/dist/multiselect.vue2'
```

For more information on using `@nuxtjs/composition-api` read [their documentation](https://composition-api.nuxtjs.org/).

## Support

Join our [Discord channel](https://discord.gg/WhX2nG6GTQ) or [open an issue](https://github.com/vueform/multiselect/issues).

## Configuration

### Basic props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| **mode** | `string` | `single` | Possible values: `single\|multiple\|tags`. |
| **options** | `array\|object\|function` | `[]` | List of options. Can be:<br>- an array (eg. `[1,2,3]`)<br>- an object (eg. `{a:1,b:2,c:3}`)<br>- an array of objects:<br>`[`<br>&nbsp;&nbsp;`{`<br>&nbsp;&nbsp;&nbsp;&nbsp;`[valueProp]: 1,`<br>&nbsp;&nbsp;&nbsp;&nbsp;`[label]: 'v1',`<br>&nbsp;&nbsp;&nbsp;&nbsp;`disabled:true\|false`<br>&nbsp;&nbsp;`},`<br>&nbsp;&nbsp;`//...`<br>`]`<br>- a function returning a Promise (async function) with `query` input param. The promise should return options as an **object** or as an **array of objects**.<br>When an array of objects is provided it **must** have properties that equal to `:valueProp`'s, `:trackBy`'s and `:label`'s value. |
| **groups** | `boolean` | `false` | Whether options should be groupped. Example:<br>`{`<br>&nbsp;&nbsp;`groups: true,`<br>&nbsp;&nbsp;`options: [`<br>&nbsp;&nbsp;&nbsp;&nbsp;`{`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[groupLabel]: 'Group label',`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[groupOptions]: {options},`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`disabled: true\|false,`<br>&nbsp;&nbsp;&nbsp;&nbsp;`}`<br>&nbsp;&nbsp;&nbsp;&nbsp;`//...`<Br>&nbsp;&nbsp;`]`<br>`}`<br>The `{options}` should equal to regular `options` definition. |
| **groupLabel** | `string` | `label` | The name of the property that contains the label of a group when `options` are provided in group format and `groups` is `true`. |
| **groupOptions** | `string` | `options` | The name of the property that contains the options of a group when `options` are provided in group format and `groups` is `true`. |
| **groupSelect** | `boolean` | `true` | Whether groups can be selected when using `multiple` or `tags` mode. |
| **groupHideEmpty** | `boolean` | `false` | Whether groups that have no `options` by default should be hidden. |
| **required** | `boolean` | `false` | Whether the HTML5 required attribute should be used for multiselect (using an invisible fake input). |
| **searchable** | `boolean` | `false` | Whether the options should be searchable. |
| **valueProp** | `string` | `'value'` | If you provide an array of objects as `options` this property should be used as the value of the option. |
| **trackBy** | `string` | `undefined` | The name of the property that should be searched when `searchable` is `true` and an array of objects are provided as `options`. If left `undefined` the `label` prop will be used instead. |
| **label** | `string` | `'label'` | If you provide an array of objects as `options` the value of this property will be displayed as selected option. |
| **placeholder** | `string` | `null` | The text that should be displayed before any option is selected. |
| **multipleLabel** | `function` |  | A function that returns the label to be displayed for selected options when using `multiple` mode. It receives `value` as an argument. By default it renders `1 option selected` and `[n] options selected` based on `value` length. |
| **disabled** | `boolean` | `false` | Whether the input should be disabled for the user (API can still be used programmatically). |
| **inputType** | `string` | `text` | The `type` attribute of the search input. |
| **autocomplete** | `string` | `undefined` | The `autocomplete` attribute of the search input. |
| **max** | `number` | `-1` | The maximum number of options that **can be selected** when using `multiple` or `tags` mode. If `-1` the number of options won't be limited. |
| **limit** | `number` | `-1` | The maximum number of options that **should be displayed**. If `-1` the number of options won't be limited. |
| **loading** | `boolean` | `false` | Whether a loading spinner should be shown. |
| **id** | `string` | `'multiselect'` | The `id` of the multiselect container DOM. |
| **caret** | `boolean` | `true` | Whether should display the caret symbol on the right. |
| **noOptionsText** | `string` | `'The list is empty'` | The text that should be displayed when options list is empty. |
| **noResultsText** | `string` | `'No results found'` | The text that should be displayed when there are no search results. |
| **openDirection** | `string` | `bottom` | Whether the option list should be displayed above or below the multiselect. Possible values: `top\|bottom` |
| **strict** | `boolean` | `true` | Whether should regard accents/diacritics in search. |
| **classes** | `object` | | An object of class names that gets merged with the default values. Default: `{`<br>&nbsp;&nbsp;`container: 'multiselect',`<br>&nbsp;&nbsp;`containerDisabled: 'is-disabled',`<br>&nbsp;&nbsp;`containerOpen: 'is-open',`<br>&nbsp;&nbsp;`containerOpenTop: 'is-open-top',`<br>&nbsp;&nbsp;`containerActive: 'is-active',`<br>&nbsp;&nbsp;`singleLabel: 'multiselect-single-label',`<br>&nbsp;&nbsp;`singleLabelText: 'multiselect-single-label-text',`<br>&nbsp;&nbsp;`multipleLabel: 'multiselect-multiple-label',`<br>&nbsp;&nbsp;`search: 'multiselect-search',`<br>&nbsp;&nbsp;`tags: 'multiselect-tags',`<br>&nbsp;&nbsp;`tag: 'multiselect-tag',`<br>&nbsp;&nbsp;`tagDisabled: 'is-disabled',`<br>&nbsp;&nbsp;`tagRemove: 'multiselect-tag-remove',`<br>&nbsp;&nbsp;`tagRemoveIcon: 'multiselect-tag-remove-icon',`<br>&nbsp;&nbsp;`tagsSearchWrapper: 'multiselect-tags-search-wrapper',`<br>&nbsp;&nbsp;`tagsSearch: 'multiselect-tags-search',`<br>&nbsp;&nbsp;`tagsSearchCopy: 'multiselect-tags-search-copy',`<br>&nbsp;&nbsp;`placeholder: 'multiselect-placeholder',`<br>&nbsp;&nbsp;`caret: 'multiselect-caret',`<br>&nbsp;&nbsp;`caretOpen: 'is-open',`<br>&nbsp;&nbsp;`clear: 'multiselect-clear',`<br>&nbsp;&nbsp;`clearIcon: 'multiselect-clear-icon',`<br>&nbsp;&nbsp;`spinner: 'multiselect-spinner',`<br>&nbsp;&nbsp;`dropdown: 'multiselect-dropdown',`<br>&nbsp;&nbsp;`dropdownTop: 'is-top',`<br>&nbsp;&nbsp;`dropdownHidden: 'is-hidden',`<br>&nbsp;&nbsp;`options: 'multiselect-options',`<br>&nbsp;&nbsp;`optionsTop: 'is-top',`<br>&nbsp;&nbsp;`group: 'multiselect-group',`<br>&nbsp;&nbsp;`groupLabel: 'multiselect-group-label',`<br>&nbsp;&nbsp;`groupLabelPointable: 'is-pointable',`<br>&nbsp;&nbsp;`groupLabelPointed: 'is-pointed',`<br>&nbsp;&nbsp;`groupLabelSelected: 'is-selected',`<br>&nbsp;&nbsp;`groupLabelDisabled: 'is-disabled',`<br>&nbsp;&nbsp;`groupLabelSelectedPointed: 'is-selected is-pointed',`<br>&nbsp;&nbsp;`groupLabelSelectedDisabled: 'is-selected is-disabled',`<br>&nbsp;&nbsp;`groupOptions: 'multiselect-group-options',`<br>&nbsp;&nbsp;`option: 'multiselect-option',`<br>&nbsp;&nbsp;`optionPointed: 'is-pointed',`<br>&nbsp;&nbsp;`optionSelected: 'is-selected',`<br>&nbsp;&nbsp;`optionDisabled: 'is-disabled',`<br>&nbsp;&nbsp;`optionSelectedPointed: 'is-selected is-pointed',`<br>&nbsp;&nbsp;`optionSelectedDisabled: 'is-selected is-disabled',`<br>&nbsp;&nbsp;`noOptions: 'multiselect-no-options',`<br>&nbsp;&nbsp;`noResults: 'multiselect-no-results',`<br>&nbsp;&nbsp;`fakeInput: 'multiselect-fake-input',`<br>&nbsp;&nbsp;`spacer: 'multiselect-spacer'`<br>`}` |

<a href="https://vueform.com?ref=ghb">
  <img align="center" src="https://github.com/vueform/multiselect/raw/main/assets/vueform-banner.png" alt="Vueform" title="Vueform">
</a>

### Advanced Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| **canDeselect** | `boolean` | `true` | Whether a selected option can be deselected when using `single` mode. |
| **canClear** | `boolean` | `true` | Whether option(s) can be cleared. |
| **clearOnSearch** | `boolean` | `false` | Whether the option list should be cleared when a new character is typed before loading new options list, when using async options. |
| **clearOnSelect** | `boolean` | `true` | Whether the option list should be cleared upon selecting an option when using async options. |
| **closeOnSelect** | `boolean` | `true` | Whether the option list should be hidden upon selecting an option. |
| **delay** | `number` | `-1` | The delay in milliseconds that should occur between the last typed character and refreshing an async option list. If `-1` the option list will not refresh when the search query changes. If `0` it will refresh without delay. |
| **filterResults** | `boolean` | `true` | Whether option list should be filtered by search query. This may be set to `false` if you are handling filtering manually when returning async options. |
| **minChars** | `number` | `0` | The minimum number of characters that should be typed to refresh async option list. If `0` it will refresh even when the search field becomes empty. |
| **resolveOnLoad** | `boolean` | `true` | Whether async options should be loaded initially (with an empty query). This should be `true` if you are planning to load non-object value(s) initially while using async options (to fetch matching objects for values). |
| **appendNewTag** | `boolean` | `true` | **Deprecated 2.3.0: use `appendNewOption` instead.**<br>Whether it should append new tag automatically to option list when using `tags` mode with `createTag`. If set to `false` you need to take care of appending a new tag to the provided `:options` list upon `@tag` event. |
| **createTag** | `boolean` | `false` | **Deprecated 2.3.0: use `createOption` instead.**<br>Whether it should allow creating new tags based on search query when using `tags` mode. |
| **addTagOn** | `array` | `['enter']` | **Deprecated 2.3.0: use `addOptionOn` instead.**<br>The list of keys that creates a new tag while typing in the search field when having `createTag` enabled. Possible values: `'enter'\|'space'\|'tab'\|';'\|','`. |
| **appendNewOption** | `boolean` | `true` | Whether it should append new option automatically to option list when `searchable` and `createTag` are enabled. If set to `false` you need to take care of appending a new option to the provided `:options` list upon `@option` event. |
| **createOption** | `boolean` | `false` | Whether it should allow creating new options based on search query when `searchable` is enabled. |
| **addOptionOn** | `array` | `['enter']` | The list of keys that creates a new option while typing in the search field when having `createOption` enabled. Possible values: `'enter'\|'space'\|'tab'\|';'\|','`. |
| **hideSelected** | `boolean` | `true` | Whether selected options should be excluded from the option list when using `multiple` or `tags` mode. |
| **showOptions** | `boolean` | `true` | Whether option list should be displayed. Can be used to create free-typed tags. |
| **object** | `boolean` | `false` | Whether the value should be stored as an object.<br>If **false**:<br>`value: ['js','jsx','ts']`<br>If **true**:<br> `value: [`<br>&nbsp;&nbsp;`{value:'js',label:'Javascript'},`<br>&nbsp;&nbsp;`{value:'jsx',label:'JSX'},`<br>&nbsp;&nbsp;`{value:'ts',label:'Typescript'}`<br>`]` |
| **attrs** | `object` | `{}` | HTML attributes to add to the `input` field when `search` is enabled. |
| **nativeSupport** | `boolean` | `false` | Whether hidden input fields should be appended to achieve native data handling. |

## API

| Name | Params | Description |
| --- | --- | --- |
| **open** |  | Opens the options list. |
| **close** |  | Closes the options list. |
| **select** | `option` | Selects an option based on its value. |
| **deselect** | `option` | Deselects an option based on its value. |
| **remove** | `option` | Alias for `deselect`. |
| **selectAll** |  | Selects all options if mode is `tags` or `multiple`. |
| **clear** |  | Deselects all selected options. |
| **clearSearch** |  | Clears current search query. |
| **refreshOptions** | `callback` | Refreshes async options list. |
| **setPointer** | `option` | Points an option based on its value. |


To access API use `ref` on `Multiselect` component:
``` html
<Multiselect
  v-model="value"
  :options="options"
  ref="multiselect"
/>
```

``` js
// eg:
mounted() {
  this.$refs.multiselect.open()
}
```

To programmatically open and focus the multiselect, call `focus()` on the element:

```js
mounted() {
  this.$refs.multiselect.$el.focus()
}
```


## Events

| Event | Attributes | Description |
| --- | --- | --- |
| **@change** | `value` | Emitted after the value is changed. |
| **@close** |  | Emitted after closing the option list. |
| **@deselect** | `option` | Emitted after an option is deselected or a tag is removed. |
| **@open** | | Emitted after opening the option list. |
| **@search-change** | `query` | Emitted after a character is typed. |
| **@select** | `option` | Emitted after an option or tag is selected. |
| **@tag** | `query` | **Deprecated 2.3.0: use `@option` instead**. Emitted after enter is hit when a new tag is being created. |
| **@option** | `query` | Emitted after enter is hit when a new option is being created. |
| **@clear** |  | Emitted when the options are cleared. |
| **@paste** | `Event` | Emitted when value is pasted into the search field. |

## Slots

| Slot | Attributes | Description |
| --- | --- | --- |
| **placeholder** | | Rendered as placeholder when the multiselect does not have value and `placeholder` prop is defined. |
| **afterlist** | | Rendered after the options list. |
| **beforelist** | | Rendered before the options list. |
| **multiplelabel** | `values` | Rendered when using `multiple` mode and options are selected. By default it renders the return value of `multipleLabel` function. |
| **nooptions** |  | Rendered when the options list is empty. By default renders `noOptionsText`. |
| **noresults** |  | Rendered when there are no search results. By default renders `noResultsText`. |
| **grouplabel** | `group` | Renders an option group label. |
| **option** | `option, search` | Renders an option in options list. |
| **singlelabel** | `value` | Rendered when using `single` mode and an option is selected. By default it renders the `:label` if the selected option. |
| **tag** | `option, handleTagRemove, disabled` | Renders a tag when using `tags` mode. When `disabled` the remove icon should not be displayed. The `handleTagRemove` prop should be used to trigger the removal of the tag. |
| **caret** | | Renders a small triangle on the right side of the multiselect. |
| **clear** | `clear` | Renders a remove icon if the multiselect has any value. The `clear` method should be used on `mousedown` event. |
| **spinner** | | Renders a loader icon when async options are being fetched. |

> Note: we don't use camelCase because they are [normalized back to lowercase](https://github.com/vuejs/vue/issues/9449#issuecomment-461170017) when written in DOM.

## Styling

### Styling with CSS vars

The following CSS variables can be used to customize multiselect when using `default.css`:

``` css
--ms-font-size: 1rem;
--ms-line-height: 1.375;
--ms-bg: #FFFFFF;
--ms-bg-disabled: #F3F4F6;
--ms-border-color: #D1D5DB;
--ms-border-width: 1px;
--ms-radius: 4px;
--ms-py: 0.5rem;
--ms-px: 0.875rem;
--ms-ring-width: 3px;
--ms-ring-color: #10B98130;
--ms-placeholder-color: #9CA3AF;
--ms-max-height: 10rem;

--ms-spinner-color: #10B981;
--ms-caret-color: #999999;
--ms-clear-color: #999999;
--ms-clear-color-hover: #000000;
  
--ms-tag-font-size: 0.875rem;
--ms-tag-line-height: 1.25rem;
--ms-tag-font-weight: 600;
--ms-tag-bg: #10B981;
--ms-tag-bg-disabled: #9CA3AF;
--ms-tag-color: #FFFFFF;
--ms-tag-color-disabled: #FFFFFF;
--ms-tag-radius: 4px;
--ms-tag-py: 0.125rem;
--ms-tag-px: 0.5rem;
--ms-tag-my: 0.25rem;
--ms-tag-mx: 0.25rem;

--ms-tag-remove-radius: 4px;
--ms-tag-remove-py: 0.25rem;
--ms-tag-remove-px: 0.25rem;
--ms-tag-remove-my: 0rem;
--ms-tag-remove-mx: 0.125rem;

--ms-dropdown-bg: #FFFFFF;
--ms-dropdown-border-color: #D1D5DB;
--ms-dropdown-border-width: 1px;
--ms-dropdown-radius: 4px;

--ms-group-label-py: 0.3rem;
--ms-group-label-px: 0.75rem;
--ms-group-label-line-height: 1.375;
--ms-group-label-bg: #E5E7EB;
--ms-group-label-color: #374151;
--ms-group-label-bg-pointed: #D1D5DB;
--ms-group-label-color-pointed: #374151;
--ms-group-label-bg-disabled: #F3F4F6;
--ms-group-label-color-disabled: #D1D5DB;
--ms-group-label-bg-selected: #059669;
--ms-group-label-color-selected: #FFFFFF;
--ms-group-label-bg-selected-pointed: #0c9e70;
--ms-group-label-color-selected-pointed: #FFFFFF;
--ms-group-label-bg-selected-disabled: #75cfb1;
--ms-group-label-color-selected-disabled: #D1FAE5;

--ms-option-font-size: 1rem;
--ms-option-line-height: 1.375;
--ms-option-bg-pointed: #FFFFFF;
--ms-option-color-pointed: #1F2937;
--ms-option-bg-selected: #10B981;
--ms-option-color-selected: #FFFFFF;
--ms-option-bg-disabled: #FFFFFF;
--ms-option-color-disabled: #D1D5DB;
--ms-option-bg-selected-pointed: #26C08E;
--ms-option-color-selected-pointed: #FFFFFF;
--ms-option-bg-selected-disabled: #FFFFFF;
--ms-option-color-selected-disabled: #D1FAE5;
--ms-option-py: 0.5rem;
--ms-option-px: 0.75rem;

--ms-empty-color: #4B5563;
```

Override them globally:

``` css
:root {
  --ms-tag-bg: #059669;
  --ms-tag-color: #D1FAE5;
  --ms-tag-radius: 9999px;
  --ms-tag-font-weight: 400;
}
```

Or on an instance level:

``` vue
<Multiselect
  v-model="value"
  :options="options"
  class="multiselect-green"
/>

<Multiselect
  v-model="value"
  :options="options"
  class="multiselect-blue"
/>
```

``` css
.multiselect-green {
  --ms-tag-bg: #D1FAE5;
  --ms-tag-color: #059669;
}

.multiselect-blue {
  --ms-tag-bg: #DBEAFE;
  --ms-tag-color: #2563EB;
}
```

### Styling with Tailwind CSS

To use `Multiselect` with Tailwind CSS first you need to add background images to `tailwind.config.js`:

``` js
// tailwind.config.js

const svgToDataUri = require('mini-svg-data-uri')

module.exports = {
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'multiselect-caret': `url("${svgToDataUri(
          `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>`,
        )}")`,
        'multiselect-spinner': `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="${theme('colors.green.500')}" xmlns="http://www.w3.org/2000/svg"><path d="M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z"></path></svg>`,
        )}")`,
        'multiselect-remove': `url("${svgToDataUri(
          `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>`,
        )}")`,
      })
    },
  }
}
```

Then you need to import `themes/tailwind.scss` to you main component:

``` vue
<template>
  <div id="app">
    <Multiselect ... />
  </div>
</template>

<script>
  // ...
</script>

<style lang="scss">
  @import 'path/to/node_modules/@vueform/multiselect/themes/tailwind.scss'
</style>
```

#### Using `:classes` prop

Alternatively you can define class names directly by passing them to the `Multiselect` component via `classes` property. When using this approach you don't need to import `tailwind.scss`. Here's a default styling for Tailwind CSS (the same included in `tailwind.scss`):

``` vue
<Multiselect ... :classes="{
  container: 'relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none',
  containerDisabled: 'cursor-default bg-gray-100',
  containerOpen: 'rounded-b-none',
  containerOpenTop: 'rounded-t-none',
  containerActive: 'ring ring-green-500 ring-opacity-30',
  singleLabel: 'flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border',
  singleLabelText: 'overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full',
  multipleLabel: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5',
  search: 'w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5',
  tags: 'flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2',
  tag: 'bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap',
  tagDisabled: 'pr-2 opacity-50',
  tagRemove: 'flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group',
  tagRemoveIcon: 'bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60',
  tagsSearchWrapper: 'inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full',
  tagsSearch: 'absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full',
  tagsSearchCopy: 'invisible whitespace-pre-wrap inline-block h-px',
  placeholder: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400',
  caret: 'bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none',
  caretOpen: 'rotate-180 pointer-events-auto',
  clear: 'pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80',
  clearIcon: 'bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block',
  spinner: 'bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0',
  dropdown: 'max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b',
  dropdownTop: '-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t',
  dropdownHidden: 'hidden',
  options: 'flex flex-col p-0 m-0 list-none',
  optionsTop: 'flex-col-reverse',
  group: 'p-0 m-0',
  groupLabel: 'flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal',
  groupLabelPointable: 'cursor-pointer',
  groupLabelPointed: 'bg-gray-300 text-gray-700',
  groupLabelSelected: 'bg-green-600 text-white',
  groupLabelDisabled: 'bg-gray-100 text-gray-300 cursor-not-allowed',
  groupLabelSelectedPointed: 'bg-green-600 text-white opacity-90',
  groupLabelSelectedDisabled: 'text-green-100 bg-green-600 bg-opacity-50 cursor-not-allowed',
  groupOptions: 'p-0 m-0',
  option: 'flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3',
  optionPointed: 'text-gray-800 bg-gray-100',
  optionSelected: 'text-white bg-green-500',
  optionDisabled: 'text-gray-300 cursor-not-allowed',
  optionSelectedPointed: 'text-white bg-green-500 opacity-90',
  optionSelectedDisabled: 'text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed',
  noOptions: 'py-2 px-3 text-gray-600 bg-white text-left',
  noResults: 'py-2 px-3 text-gray-600 bg-white text-left',
  fakeInput: 'bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent',
  spacer: 'h-9 py-px box-content',
}" />
```

Certain classes has different states which are merged to the base class when the state is active. For example `dropdown` will be merged with `dropdownTop` when `open-direction: 'top'` resulting in the following classes:
```absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b -translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t```

The same is true for `container`, `tag`, `options`, `groupLabel` and `option` classes.

In case you need to override the same type of utility you might use [@neojp/tailwind-important-variant](https://www.npmjs.com/package/@neojp/tailwindcss-important-variant) for eg. `bg-green-500!`.

## Examples

* [Single select](#single-select)
* [Multiselect with object options](#multiselect-with-object-options)
* [Multiselect with disabled options](#multiselect-with-disabled-options)
* [Multiselect with groups](#multiselect-with-groups)
* [Tags with search, create and array of objects options](#tags-with-search-create-and-array-of-objects-options)
* [Autocomplete with async options](#autocomplete-with-async-options)
* [Tags with async options](#tags-with-async-options)
* [Select with custom options slot](#select-with-custom-options-slot)
* [Multiselect with custom label slot](#multiselect-with-custom-label-slot)
* [Tags with custom tags slot](#tags-with-custom-tags-slot)

### Single select

``` vue
<Multiselect
  v-model="value"
  :options="['Batman', 'Robin', 'Joker']"
/>
```

<a href="https://jsfiddle.net/xf0jzoct/" target="_blank">JSFiddle - Example #1</a>

### Multiselect with object options

``` vue
<Multiselect
  v-model="value"
  mode="multiple"
  :close-on-select="false"
  :options="{
    batman: 'Batman',
    robin: 'Robin',
    joker: 'Joker'
  }"
/>
```

<a href="https://jsfiddle.net/xf0jzoct/" target="_blank">JSFiddle - Example #2</a>

### Multiselect with disabled options

``` vue
<Multiselect
  v-model="value"
  mode="multiple"
  :close-on-select="false"
  :options="[
    { value: 'batman', label: 'Batman' },
    { value: 'robin', label: 'Robin', disabled: true },
    { value: 'joker', label: 'Joker' },
  ]"
/>
```

<a href="https://jsfiddle.net/xf0jzoct/" target="_blank">JSFiddle - Example #3</a>

### Multiselect with groups

``` vue
<Multiselect
  v-model="value"
  mode="multiple"
  :close-on-select="false"
  :groups="true"
  :options="[
    {
      label: 'DC',
      options: ['Batman', 'Robin', 'Joker'],
    },
    {
      label: 'Marvel',
      options: ['Spiderman', 'Iron Man', 'Captain America'],
    },
  ]"
/>
```

<a href="https://jsfiddle.net/xf0jzoct/" target="_blank">JSFiddle - Example #4</a>

### Tags with search, create and array of objects options

``` vue
<Multiselect
  v-model="value"
  mode="tags"
  :close-on-select="false"
  :searchable="true"
  :create-option="true"
  :options="[
    { value: 'batman', label: 'Batman' },
    { value: 'robin', label: 'Robin' },
    { value: 'joker', label: 'Joker' },
  ]"
/>
```

<a href="https://jsfiddle.net/xf0jzoct/" target="_blank">JSFiddle - Example #5</a>

### Autocomplete with async options

``` vue
<Multiselect
  v-model="value"
  placeholder="Choose a programming language"
  :filter-results="false"
  :min-chars="1"
  :resolve-on-load="false"
  :delay="0"
  :searchable="true"
  :options="async function(query) {
    return await fetchLanguages(query) // check JS block in JSFiddle for implementation
  }"
/>
```

<a href="https://jsfiddle.net/xf0jzoct/" target="_blank">JSFiddle - Example #6</a>

### Tags with async options

``` vue
<Multiselect
  v-model="value"
  mode="tags"
  placeholder="Choose your stack"
  :close-on-select="false"
  :filter-results="false"
  :min-chars="1"
  :resolve-on-load="false"
  :delay="0"
  :searchable="true"
  :options="async function(query) {
    return await fetchLanguages(query) // check JS block in JSFiddle for implementation
  }"
/>
```

<a href="https://jsfiddle.net/xf0jzoct/" target="_blank">JSFiddle - Example #7</a>

### Select with custom options slot

``` vue
<Multiselect
  v-model="value"
  placeholder="Select your character"
  label="name"
  :options="[
    { value: 'captainamerica', name: 'Captain America', icon: 'https://cdn2.iconfinder.com/data/icons/avengers-filled/48/03_-_Captain_America_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png' },
    { value: 'spiderman', name: 'Spiderman', icon: 'https://cdn2.iconfinder.com/data/icons/avengers-filled/48/12_-_Spiderman_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png' },
    { value: 'ironman', name: 'Iron Man', icon: 'https://cdn2.iconfinder.com/data/icons/avengers-filled/48/02_-_IRONMAN_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png' },
  ]"
>
  <template v-slot:singlelabel="{ value }">
    <div class="multiselect-single-label">
      <img class="character-label-icon" :src="value.icon"> {{ value.name }}
    </div>
  </template>

  <template v-slot:option="{ option }">
    <img class="character-option-icon" :src="option.icon"> {{ option.name }}
  </template>
</Multiselect>

```

<a href="https://jsfiddle.net/xf0jzoct/" target="_blank">JSFiddle - Example #8</a>

### Multiselect with custom label slot

``` vue
<Multiselect
  v-model="value"
  mode="multiple"
  placeholder="Select your characters"
  :close-on-select="false"
  :options="{
    batman: 'Batman',
    robin: 'Robin',
    joker: 'Joker'
  }"
>
  <template v-slot:multiplelabel="{ values }">
    <div class="multiselect-multiple-label">
      {{ values.length }} characters selected
    </div>
  </template>
</Multiselect>

```

<a href="https://jsfiddle.net/xf0jzoct/" target="_blank">JSFiddle - Example #9</a>

### Tags with custom tags slot

``` vue
<template>
  <Multiselect
    v-model="value"
    mode="tags"
    placeholder="Select employees"
    track-by="name"
    label="name"
    :close-on-select="false"
    :search="true"
    :options="[
      { value: 'judy', name: 'Judy', image: 'https://randomuser.me/api/portraits/med/women/1.jpg' },
      { value: 'jane', name: 'Jane', image: 'https://randomuser.me/api/portraits/med/women/2.jpg' },
      { value: 'john', name: 'John', image: 'https://randomuser.me/api/portraits/med/men/1.jpg' },
      { value: 'joe', name: 'Joe', image: 'https://randomuser.me/api/portraits/med/men/2.jpg' }
    ]"
  >
      <template v-slot:tag="{ option, handleTagRemove, disabled }">
        <div class="multiselect-tag is-user">
          <img :src="option.image">
          {{ option.name }}
          <span
            v-if="!disabled"
            class="multiselect-tag-remove"
            @mousedown.prevent="handleTagRemove(option, $event)"
          >
            <span class="multiselect-tag-remove-icon"></span>
          </span>
        </div>
      </template>
  </Multiselect>
</template>

<style>
  .multiselect-tag.is-user {
    padding: 5px 8px;
    border-radius: 22px;
    background: #35495e;
    margin: 3px 3px 8px;
  }

  .multiselect-tag.is-user img {
    width: 18px;
    border-radius: 50%;
    height: 18px;
    margin-right: 8px;
    border: 2px solid #ffffffbf;
  }

  .multiselect-tag.is-user i:before {
    color: #ffffff;
    border-radius: 50%;;
  }

  .user-image {
    margin: 0 6px 0 0;
    border-radius: 50%;
    height: 22px;
  }
</style>
```

<a href="https://jsfiddle.net/xf0jzoct/" target="_blank">JSFiddle - Example #10</a>

## License

[MIT](https://github.com/vueform/multiselect/blob/main/LICENSE.md)