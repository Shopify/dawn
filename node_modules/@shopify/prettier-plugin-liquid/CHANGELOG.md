
1.0.6 / 2023-01-18
==================

  * Maintain at most 1 newline between tag attributes ([#159](https://github.com/shopify/prettier-plugin-liquid/issues/159))

1.0.5 / 2023-01-10
==================

  * Allow for nested HTML raw tags ([#157](https://github.com/shopify/prettier-plugin-liquid/issues/157))

1.0.4 / 2023-01-10
==================

  * Fix `{% paginate %}` parsing error ([#155](https://github.com/shopify/prettier-plugin-liquid/issues/155))

1.0.3 / 2023-01-04
==================

## Features

 * Add support for sections tag

1.0.2 / 2022-12-13
==================

## Fixes

  * Emit declaration files

1.0.1 / 2022-12-13
==================

## Fixes

  * Fix trailing whitespace after opening raw tag breaking formatting ([#145](https://github.com/shopify/prettier-plugin-liquid/issues/145))
  * Add typings for standalone.js

1.0.0 / 2022-12-09
==================

:tada: The Liquid prettier plugin is now officially ready for production!

Astute devs might have noticed that it is also enabled inside [Shopify's Online Store Code Editor](https://shopify.dev/themes/tools/code-editor#formatting-theme-code).

## Features

  * Stability :)
  * No major changes
  * Compatible with `v0.4`

## Fixes

  * Add support for `<!-- white-space: normal -->` comment ([#142](https://github.com/shopify/prettier-plugin-liquid/issues/142))
  * Fix parsing error messages ([#143](https://github.com/shopify/prettier-plugin-liquid/issues/143))

1.0.0-rc.3 / 2022-12-07
=======================

## Fixes

  * Top level unclosed tags should throw errors ([#140](https://github.com/shopify/prettier-plugin-liquid/issues/140))
  * Change README production notice to production-ready :)

1.0.0-rc.2 / 2022-12-06
=======================

## Fixes

  * Maintain at most 1 newline between Liquid branches ([#137](https://github.com/shopify/prettier-plugin-liquid/issues/137))
  * Parse smart quotes as dumb quotes to prevent formatted copy pasting errors ([#130](https://github.com/shopify/prettier-plugin-liquid/issues/130))
  * Add support for compound Liquid + HTML element names ([#128](https://github.com/shopify/prettier-plugin-liquid/issues/128))
    * e.g. `<h{{ header_number}}></h{{ header_number }}>`

1.0.0-rc.1 / 2022-12-02
=======================

## Fixes

  * Fix parsing of LiquidDrop in HTML attribute names (`<a data-popup--{{ id }}="...">`) ([#101](https://github.com/shopify/prettier-plugin-liquid/issues/101))
  * Fix parsing of unquoted LiquidDrop HTML attributes (`<a id={{ id }}--omg>`) ([#101](https://github.com/shopify/prettier-plugin-liquid/issues/101))
  * Fix parsing of tags with missing space between whitespace stripping and tag name (`{% else-%}`) ([#126](https://github.com/shopify/prettier-plugin-liquid/issues/126))

1.0.0-rc.0 / 2022-11-29
=======================

## Features

  * It's supposed to be stable now :)
  * Add support for `prettier-ignore-attributes` ([#125](https://github.com/shopify/prettier-plugin-liquid/issues/125))

## Fixes

  * Fix secondary templating parsing issue ([#125](https://github.com/shopify/prettier-plugin-liquid/issues/125))

0.4.3 / 2022-11-25
==================

  * Fix IE conditional comments formatting ([#122](https://github.com/shopify/prettier-plugin-liquid/issues/122))

0.4.2 / 2022-11-24
==================

  * Fix the formatting of HTML tags with one attribute that is multiline ([#121](https://github.com/shopify/prettier-plugin-liquid/issues/121))

0.4.1 / 2022-11-22
==================

  * Fix support of legacy HTML doctypes. ([#96](https://github.com/shopify/prettier-plugin-liquid/issues/96), [#102](https://github.com/shopify/prettier-plugin-liquid/issues/102))
  * Fix unnecessary whitespace stripping on liquid html attribute break ([#102](https://github.com/shopify/prettier-plugin-liquid/issues/102))
  * Fix indentation sensitivity of `{% capture %}` tag. ([#114](https://github.com/shopify/prettier-plugin-liquid/issues/114))
  * Fix `useTabs` bugs ([#89](https://github.com/shopify/prettier-plugin-liquid/issues/89), [#114](https://github.com/shopify/prettier-plugin-liquid/issues/114))
  * Add missing support for `{% stylesheet %}` tag ([#117](https://github.com/shopify/prettier-plugin-liquid/issues/117))
  * Add missing support for nested comments ([#108](https://github.com/shopify/prettier-plugin-liquid/issues/108))

0.4.0 / 2022-09-09
==================

## Features

  * Add support for the `{% liquid %}` tag ([#94](https://github.com/shopify/prettier-plugin-liquid/issues/94))
  * Add support for embedded languages ([#88](https://github.com/shopify/prettier-plugin-liquid/issues/88))
    * Use prettier's JavaScript formatter inside `<script>` and `{% javascript %}` tags
    * Use prettier's CSS formatter inside `<style>` and `{% style %}` tags
    * Use prettier's JSON formatter inside `<script type="anything/that-ends-in-json">` and `{% schema %}` tags
    * Use prettier's Markdown formatter inside `<script type="text/markdown">`
    * Add a new configuration: `embeddedSingleQuote` to control the `singleQuote` property of embedded languages
      * When `true` (default), will prefer single quotes inside embedded JS & CSS

## Fixes

  * Fix grammar precedence (>=, <=) for operators in conditionals ([#98](https://github.com/shopify/prettier-plugin-liquid/issues/98))

0.3.1 / 2022-08-31
==================

  * Fixup printing of failed-to-parse Liquid ([#95](https://github.com/shopify/prettier-plugin-liquid/issues/95))

0.3.0 / 2022-08-26
==================

## Features

  * Add [online playground](https://shopify.github.io/prettier-plugin-liquid/) ([#86](https://github.com/shopify/prettier-plugin-liquid/issues/86))
  * Add support for `{% # prettier-ignore %}` ([#85](https://github.com/shopify/prettier-plugin-liquid/issues/85))
  * Add support for the `assign` tag ([#54](https://github.com/shopify/prettier-plugin-liquid/issues/54))
  * Add support for the `echo` liquid tag ([#54](https://github.com/shopify/prettier-plugin-liquid/issues/54))
  * Add support for the `section` tag ([#73](https://github.com/shopify/prettier-plugin-liquid/issues/73))
  * Add support for the `if`, `elsif` and `unless` tags ([#77](https://github.com/shopify/prettier-plugin-liquid/issues/77))
  * Add support for the `render` and `include` tags ([#56](https://github.com/shopify/prettier-plugin-liquid/issues/56))
  * Add support for the `form` tag ([#75](https://github.com/shopify/prettier-plugin-liquid/issues/75))
  * Add support for the `capture` open tag parsing ([#84](https://github.com/shopify/prettier-plugin-liquid/issues/84))
  * Add support for the `case` and `when` tag ([#78](https://github.com/shopify/prettier-plugin-liquid/issues/78))
  * Add support for the `cycle` tag ([#81](https://github.com/shopify/prettier-plugin-liquid/issues/81))
  * Add support for the `for` tag ([#79](https://github.com/shopify/prettier-plugin-liquid/issues/79))
  * Add support for the `increment` and `decrement` tags ([#82](https://github.com/shopify/prettier-plugin-liquid/issues/82))
  * Add support for the `layout` tag ([#80](https://github.com/shopify/prettier-plugin-liquid/issues/80))
  * Add support for the `paginate` tag ([#76](https://github.com/shopify/prettier-plugin-liquid/issues/76))
  * Add support for the `tablerow` tag ([#79](https://github.com/shopify/prettier-plugin-liquid/issues/79))
  * Prefer `null` over `nil`
  * Strip markup from tags that don't take arguments

0.2.1 / 2022-08-10
==================

  * Add partial support for Liquid inside YAML frontmatter ([#71](https://github.com/Shopify/prettier-plugin-liquid/issues/71))

0.2.0 / 2022-08-08
==================

## Features

  * Adds pretty-printing of Liquid objects and filters ([#41](https://github.com/Shopify/prettier-plugin-liquid/pull/41) and [#46](https://github.com/Shopify/prettier-plugin-liquid/pull/46))
  * Adds the `liquidSingleQuote` configuration option
    * Prefer single quotes inside Liquid strings
    * `true` by default

## Fixes

  * Add YAML frontmatter support ([#29](https://github.com/Shopify/prettier-plugin-liquid/issues/29))
  * Fix custom-element parsing ([#37](https://github.com/Shopify/prettier-plugin-liquid/issues/37)) (Thank you @qw-in!)

0.1.4 / 2022-06-02
==================

  * Add support for Liquid inline comments (`{% # hello world %}`) [#28](https://github.com/Shopify/prettier-plugin-liquid/pull/28)
  * Fix support of attribute names to be spec-compliant (e.g. AlpineJS attributes) [#27](https://github.com/Shopify/prettier-plugin-liquid/pull/27)

0.1.3 / 2022-05-31
==================

  * Micro refactor of node.isLeadingWhitespaceSensitive && !node.hasLeadingWhitespace
  * Add gif to README

0.1.2 / 2022-05-30
==================

  * Public access
  * Fixup reindent bug

0.1.1 / 2022-05-30
==================

  * theme-check compatible defaults

0.1.0 / 2022-05-27
==================

  * Initial release
