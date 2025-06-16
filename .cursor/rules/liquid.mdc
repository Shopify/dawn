---
description: Liquid development rules for Shopify themes
globs:
alwaysApply: true
---

<liquid-development>
  <liquid-rules>
    valid_filters = [
      
        // array
        { name: "compact", usage: "array | compact" },
        { name: "concat", usage: "array | concat: array" },
        { name: "find", usage: "array | find: string, string" },
        { name: "find_index", usage: "array | find_index: string, string" },
        { name: "first", usage: "array | first" },
        { name: "has", usage: "array | has: string, string" },
        { name: "join", usage: "array | join" },
        { name: "last", usage: "array | last" },
        { name: "map", usage: "array | map: string" },
        { name: "reject", usage: "array | reject: string, string" },
        { name: "reverse", usage: "array | reverse" },
        { name: "size", usage: "variable | size" },
        { name: "sort", usage: "array | sort" },
        { name: "sort_natural", usage: "array | sort_natural" },
        { name: "sum", usage: "array | sum" },
        { name: "uniq", usage: "array | uniq" },
        { name: "where", usage: "array | where: string, string" },
        
        // cart
        { name: "item_count_for_variant", usage: "cart | item_count_for_variant: {variant_id}" },
        { name: "line_items_for", usage: "cart | line_items_for: object" },
        
        // collection
        { name: "link_to_type", usage: "string | link_to_type" },
        { name: "link_to_vendor", usage: "string | link_to_vendor" },
        { name: "sort_by", usage: "string | sort_by: string" },
        { name: "url_for_type", usage: "string | url_for_type" },
        { name: "url_for_vendor", usage: "string | url_for_vendor" },
        { name: "within", usage: "string | within: collection" },
        { name: "highlight_active_tag", usage: "string | highlight_active_tag" },
        
        // color
        { name: "brightness_difference", usage: "string | brightness_difference: string" },
        { name: "color_brightness", usage: "string | color_brightness" },
        { name: "color_contrast", usage: "string | color_contrast: string" },
        { name: "color_darken", usage: "string | color_darken: number" },
        { name: "color_desaturate", usage: "string | color_desaturate: number" },
        { name: "color_difference", usage: "string | color_difference: string" },
        { name: "color_extract", usage: "string | color_extract: string" },
        { name: "color_lighten", usage: "string | color_lighten: number" },
        { name: "color_mix", usage: "string | color_mix: string, number" },
        { name: "color_modify", usage: "string | color_modify: string, number" },
        { name: "color_saturate", usage: "string | color_saturate: number" },
        { name: "color_to_hex", usage: "string | color_to_hex" },
        { name: "color_to_hsl", usage: "string | color_to_hsl" },
        { name: "color_to_oklch", usage: "string | color_to_oklch" },
        { name: "color_to_rgb", usage: "string | color_to_rgb" },
        { name: "hex_to_rgba", usage: "string | hex_to_rgba" },
        
        // customer
        { name: "customer_login_link", usage: "string | customer_login_link" },
        { name: "customer_logout_link", usage: "string | customer_logout_link" },
        { name: "customer_register_link", usage: "string | customer_register_link" },
        { name: "avatar", usage: "customer | avatar" },
        { name: "login_button", usage: "shop | login_button" },
        
        // date
        { name: "date", usage: "date | date: string" },
        
        // default
        { name: "default_errors", usage: "string | default_errors" },
        { name: "default", usage: "variable | default: variable" },
        { name: "default_pagination", usage: "paginate | default_pagination" },
        
        // font
        { name: "font_face", usage: "font | font_face" },
        { name: "font_modify", usage: "font | font_modify: string, string" },
        { name: "font_url", usage: "font | font_url" },
        
        // format
        { name: "date", usage: "string | date: string" },
        { name: "json", usage: "variable | json" },
        { name: "structured_data", usage: "variable | structured_data" },
        { name: "unit_price_with_measurement", usage: "number | unit_price_with_measurement: unit_price_measurement" },
        { name: "weight_with_unit", usage: "number | weight_with_unit" },
        
        // hosted_file
        { name: "asset_img_url", usage: "string | asset_img_url" },
        { name: "asset_url", usage: "string | asset_url" },
        { name: "file_img_url", usage: "string | file_img_url" },
        { name: "file_url", usage: "string | file_url" },
        { name: "global_asset_url", usage: "string | global_asset_url" },
        { name: "shopify_asset_url", usage: "string | shopify_asset_url" },
        
        // html
        { name: "class_list", usage: "settings.layout | class_list" },
        { name: "time_tag", usage: "string | time_tag: string" },
        { name: "inline_asset_content", usage: "asset_name | inline_asset_content" },
        { name: "highlight", usage: "string | highlight: string" },
        { name: "link_to", usage: "string | link_to: string" },
        { name: "placeholder_svg_tag", usage: "string | placeholder_svg_tag" },
        { name: "preload_tag", usage: "string | preload_tag: as: string" },
        { name: "script_tag", usage: "string | script_tag" },
        { name: "stylesheet_tag", usage: "string | stylesheet_tag" },
        
        // localization
        { name: "currency_selector", usage: "form | currency_selector" },
        { name: "translate", usage: "string | t" },
        { name: "format_address", usage: "address | format_address" },
        
        // math
        { name: "abs", usage: "number | abs" },
        { name: "at_least", usage: "number | at_least" },
        { name: "at_most", usage: "number | at_most" },
        { name: "ceil", usage: "number | ceil" },
        { name: "divided_by", usage: "number | divided_by: number" },
        { name: "floor", usage: "number | floor" },
        { name: "minus", usage: "number | minus: number" },
        { name: "modulo", usage: "number | modulo: number" },
        { name: "plus", usage: "number | plus: number" },
        { name: "round", usage: "number | round" },
        { name: "times", usage: "number | times: number" },
        
        // media
        { name: "external_video_tag", usage: "variable | external_video_tag" },
        { name: "external_video_url", usage: "media | external_video_url: attribute: string" },
        { name: "image_tag", usage: "string | image_tag" },
        { name: "media_tag", usage: "media | media_tag" },
        { name: "model_viewer_tag", usage: "media | model_viewer_tag" },
        { name: "video_tag", usage: "media | video_tag" },
        { name: "article_img_url", usage: "variable | article_img_url" },
        { name: "collection_img_url", usage: "variable | collection_img_url" },
        { name: "image_url", usage: "variable | image_url: width: number, height: number" },
        { name: "img_tag", usage: "string | img_tag" },
        { name: "img_url", usage: "variable | img_url" },
        { name: "product_img_url", usage: "variable | product_img_url" },
        
        // metafield
        { name: "metafield_tag", usage: "metafield | metafield_tag" },
        { name: "metafield_text", usage: "metafield | metafield_text" },
        
        // money
        { name: "money", usage: "number | money" },
        { name: "money_with_currency", usage: "number | money_with_currency" },
        { name: "money_without_currency", usage: "number | money_without_currency" },
        { name: "money_without_trailing_zeros", usage: "number | money_without_trailing_zeros" },
        
        // payment
        { name: "payment_button", usage: "form | payment_button" },
        { name: "payment_terms", usage: "form | payment_terms" },
        { name: "payment_type_img_url", usage: "string | payment_type_img_url" },
        { name: "payment_type_svg_tag", usage: "string | payment_type_svg_tag" },
        
        // string
        { name: "hmac_sha1", usage: "string | hmac_sha1: string" },
        { name: "hmac_sha256", usage: "string | hmac_sha256: string" },
        { name: "md5", usage: "string | md5" },
        { name: "sha1", usage: "string | sha1: string" },
        { name: "sha256", usage: "string | sha256: string" },
        { name: "append", usage: "string | append: string" },
        { name: "base64_decode", usage: "string | base64_decode" },
        { name: "base64_encode", usage: "string | base64_encode" },
        { name: "base64_url_safe_decode", usage: "string | base64_url_safe_decode" },
        { name: "base64_url_safe_encode", usage: "string | base64_url_safe_encode" },
        { name: "capitalize", usage: "string | capitalize" },
        { name: "downcase", usage: "string | downcase" },
        { name: "escape", usage: "string | escape" },
        { name: "escape_once", usage: "string | escape_once" },
        { name: "lstrip", usage: "string | lstrip" },
        { name: "newline_to_br", usage: "string | newline_to_br" },
        { name: "prepend", usage: "string | prepend: string" },
        { name: "remove", usage: "string | remove: string" },
        { name: "remove_first", usage: "string | remove_first: string" },
        { name: "remove_last", usage: "string | remove_last: string" },
        { name: "replace", usage: "string | replace: string, string" },
        { name: "replace_first", usage: "string | replace_first: string, string" },
        { name: "replace_last", usage: "string | replace_last: string, string" },
        { name: "rstrip", usage: "string | rstrip" },
        { name: "slice", usage: "string | slice" },
        { name: "split", usage: "string | split: string" },
        { name: "strip", usage: "string | strip" },
        { name: "strip_html", usage: "string | strip_html" },
        { name: "strip_newlines", usage: "string | strip_newlines" },
        { name: "truncate", usage: "string | truncate: number" },
        { name: "truncatewords", usage: "string | truncatewords: number" },
        { name: "upcase", usage: "string | upcase" },
        { name: "url_decode", usage: "string | url_decode" },
        { name: "url_encode", usage: "string | url_encode" },
        { name: "camelize", usage: "string | camelize" },
        { name: "handleize", usage: "string | handleize" },
        { name: "url_escape", usage: "string | url_escape" },
        { name: "url_param_escape", usage: "string | url_param_escape" },
        { name: "pluralize", usage: "number | pluralize: string, string" },
        
        // tag
        { name: "link_to_add_tag", usage: "string | link_to_add_tag" },
        { name: "link_to_remove_tag", usage: "string | link_to_remove_tag" },
        { name: "link_to_tag", usage: "string | link_to_tag" },
        
    ]
    
    valid_tags = [
        "content_for",
        "form",
        "layout",
        "assign",
        "break",
        "capture",
        "case",
        "comment",
        "continue",
        "cycle",
        "decrement",
        "doc",
        "echo",
        "for",
        "if",
        "include",
        "increment",
        "raw",
        "render",
        "tablerow",
        "unless",
        "paginate",
        "javascript",
        "section",
        "stylesheet",
        "sections",
        "style",
        "else",
        "else",
        "liquid",
    ]
    
    valid_objects = [
        "collections",
        "pages",
        "all_products",
        "articles",
        "blogs",
        "cart",
        "closest",
        "content_for_header",
        "customer",
        "images",
        "linklists",
        "localization",
        "metaobjects",
        "request",
        "routes",
        "shop",
        "theme",
        "settings",
        "template",
        "additional_checkout_buttons",
        "all_country_option_tags",
        "canonical_url",
        "content_for_additional_checkout_buttons",
        "content_for_index",
        "content_for_layout",
        "country_option_tags",
        "current_page",
        "handle",
        "page_description",
        "page_image",
        "page_title",
        "powered_by_link",
        "scripts",
    ]
    
    validation_rules = {
      syntax: {
        - Use {% liquid %} for multiline code
        - Use {% # comments %} for inline comments
        - Never invent new filters, tags, or objects
        - Follow proper tag closing order
        - Use proper object dot notation
        - Respect object scope and availability
      },
    
      theme_structure: {
        - Place files in appropriate directories
        - Follow naming conventions
        - Respect template hierarchy
        - Maintain proper section/block structure
        - Use appropriate schema settings
      }
    }
    
    ∀ liquid_code ∈ theme:
      validate_syntax(liquid_code) ∧
      validate_filters(liquid_code.filters ∈ valid_filters) ∧
      validate_tags(liquid_code.tags ∈ valid_tags) ∧
      validate_objects(liquid_code.objects ∈ valid_objects) ∧
      validate_structure(liquid_code.location ∈ theme_structure)
    
  </liquid-rules>
  <theme-architecture>
    folder_structure = {
      sections: theme_sections(),
      blocks: theme_blocks(),
      layout: theme_layout(),
      snippets: theme_snippets(),
      config: theme_config(),
      assets: theme_assets(),
      locales: theme_locales(),
      templates: theme_templates(),
      templates/customers: theme_templates/customers(),
      templates/metaobject: theme_templates/metaobject()
    }
    theme_sections = {
      - Liquid files that define customizable sections of a page
      - They include blocks and settings defined via a schema, allowing merchants to modify them in the theme editor
      - Should occupy the full width of the page container and be self-contained layout units
      - Can be added to any JSON template and reordered via the theme editor
      - Must include a {% schema %} tag to define settings and presets
      - Examples: hero banners, product grids, testimonials, featured collections
    }
    theme_blocks = {
      - Configurable elements within sections that can be added, removed, or reordered
      - They are defined with a schema tag for merchant customization in the theme editor
      - Allow merchants to build dynamic content without code changes
      - Each block has a type and can contain settings for text, images, groups, links, etc.
      - Limited to specific block types defined in the section's schema
      - Blocks can be nested within other blocks to create hierarchical content structures
      - Examples: individual testimonials, slides in a carousel, feature items
    }
    theme_layout = {
      - Defines the structure for repeated content such as headers and footers, wrapping other template files
      - It's the frame that holds the page together, but it's not the content
      - Contains the HTML document structure (head, body tags)
      - Includes global elements like navigation, cart drawer, and footer
      - Typically includes global CSS/JS assets and meta tags or render a snippet that do that
    }
    theme_snippets = {
      - Reusable code fragments included in templates, sections, and layouts via the render tag
      - Ideal for logic that needs to be reused but not directly edited in the theme editor
      - Can accept parameters when rendered for dynamic behavior
      - Perfect for repetitive UI components like product cards, buttons, or form elements
      - Help maintain DRY (Don't Repeat Yourself) principles in theme development
      - Examples: product-card.liquid, icon.liquid, price.liquid
    }
    theme_config = {
      - Holds settings data and schema for theme customization options, accessible through the Admin theme editor
      - Stores global theme context like typography, colors, spacing, and branding
      - Contains theme-wide settings that affect multiple pages (global variables)
      - Includes presets for different theme variations or demo content
      - Settings are accessible via settings object in all Liquid files
      - Examples: brand colors, font choices, layout options, feature toggles
    }
    theme_assets = {
      - Contains static files such as CSS, JavaScript, and images referenced via asset_url filter
      - Includes compiled stylesheets, JavaScript bundles, and media files
      - Can be organized in subdirectories for better file management
      - Supports asset optimization and minification for performance
      - Images should be optimized and include responsive variants when possible
      - Examples: theme.css, theme.js, logo.png, icon sprites
    }
    theme_locales = {
      - Stores translation files for localizing theme editor and storefront content
      - Organized by language code (en.default.json, fr.json, etc.)
      - Contains translations for static text, labels, and theme editor strings
      - Enables multi-language support and proper internationalization
      - Accessed via translation filters like {{ 'key' | t }} in Liquid
      - Should cover all user-facing text for complete localization
    }
    theme_templates = {
      - JSON files that specify which sections appear on each page type (e.g., product, collection, blog)
      - They are wrapped by layout files for consistent header/footer content
      - Templates can be Liquid files as well, but JSON is preferred as best practice for flexibility
      - Define the page structure and section ordering for different page types
      - Allow merchants to customize page layouts without code changes
      - Support alternate templates for A/B testing or different page variants
    }
    theme_templates/customers = {
      - Templates for customer-related pages such as login, register, account overview, and order history
      - Handle customer authentication flows and account management interfaces
      - Include forms for login, registration, password reset, and profile updates
      - Must follow Shopify's customer data handling and security requirements
      - Examples: login.json, register.liquid, account.json, order.liquid
    }
    theme_templates/metaobject = {
      - Templates for rendering custom content types defined as metaobjects in Shopify Admin
      - Enable custom content structures beyond standard product/collection/page types
      - Allow merchants to create structured content like team members, locations, or custom landing pages
      - Must handle dynamic field rendering based on metaobject definition
      - Examples: team-member.json, location.liquid, custom-page.json
    }
    ∀ file ∈ theme:
      validate(file.location) ∈ folder_structure;
    
  </theme-architecture>
  <ux-principles>
    <translations>
      - Keep every piece of text in the theme translated.
      - Update the locale files with sensible keys and text.
      - Just add english text, not other languages, as we have translators on staff who handle other languages
    </translations>
    <settings>
      <general_guidance>
        Keep it simple, clear, and non-repetitive.
    
        - The setting type can provide context that the setting label doesn't need to provide. Example: "Number of columns" can simply be "Columns" if the input indicates that it's a number value.
        - Assume all settings to be device-agnostic, with graceful scaling between breakpoints. Only mention mobile or desktop if there is a unique setting required.
        - Use common shorthand where it makes sense. Example: Max/Min to mean Maximum and Minimum. Caveat: ensure these values are translated/localized correctly
        - Help text: Minimize use as much as possible. If really required, make it short and remove punctuation unless it's more than 1 sentence (but it shouldn't be!)
      </general_guidance>
    
      <information_architecture>
        <ordering>
          The order of theme settings greatly impacts the merchant's ability to understand and configure the section/block.
    
          - List settings to reflect the order of elements they control in the preview. Top to bottom, left to right, background to foreground.
          - List resource pickers first, if they're needed, followed by customization settings. Focus on what the merchant needs to take action on in order for the section/block to function. Example: a featured collection block needs the merchant to choose a collection before deciding the number of products per row.
          - List settings in order of visual impact, example: Number of products per row should come before the product card settings.
        </ordering>
    
        <groupings>
          Consider grouping settings under a heading if there are more than 1 related setting. List ungrouped settings at the top of the section/block.
    
          Common groupings:
    
          - Layout
          - Typography
          - Colors
          - Padding
        </groupings>
    
        <naming>
          Remove word duplication in the heading and nested labels. When a word appears in a heading (e.g. "Color"), it should not be repeated in nested setting labels or help text. The hierarchy of information provides sufficient context.
        </naming>
    
        <conditional>
          Use conditional settings when it:
    
          - simplifies decision-making for merchants via progressive disclosure
          - avoids duplication of settings
          - avoids visual clutter and reduces cognitive load
    
          Conditional settings should appear in the information architecture wherever they're most relevant. That might be directly below the trigger setting, or it could be a whole separate group of settings that are surfaced elsewhere where it makes sense for the merchant.
    
          Tradeoffs and considerations of conditional settings:
    
          - They hide functionality/options that help merchants decide how style their website, so be judicious in what concepts you tie together. For example, don't make a Product card's "Swatch display" setting conditional on a "Quick buy" setting. They are both related to variant selection, but they serve different purposes.
          - Limit conditions to 2 levels deep to avoid complex logic (up for discussion!)
          - Even when not shown, a conditional setting's value is evaluated in the Liquid code. Code defensively, never assume a theme setting's value is nil.
        </conditional>
    
        <input_type>
          **Checkbox**: Treat checkbox as an on/off switch. Avoid using verb-based labels, example: use "Language selector" and not "Enable language selector". The presence of the verb may inadvertently suggest the direction to toggle to enable or disable it.
    
          **Select**: Keep select option labels as short as possible so they can be dynamically displayed as segmented controls
        </input_type>
      </information_architecture>
    </settings>
    
    <server_side_rendering>
      Storefronts are to be rendered server-side with Liquid as a first principle. As opposed to client-side JavaScript.
    
      When using JavaScript to render part of the page, fetch the new HTML from the server wherever possible.
      <optimistic_ui>
        This is the exception to the rule of server-side rendering
    
        "Optimistic UI" is the idea that we can update part of the UI before the server response is received in the name of **perceived performance**.
    
        <criteria>
          Key factors to consider when deciding whether to use optimistic UI:
    
          1. You are updating a **small** portion of the UI on the client (with JavaScript) before the server response is received.
          2. The API request has a high degree of certainty of being successful.
    
          Examples of appropriate use cases:
    
          When filtering a collection page, we can update the a list of applied filters client-side as a Buyer chooses them, i.e. "Color: Red" or "Size: Medium". However, we do not know how many products will be returned that match the filters, so we can't update the product grid or a count of products.
    
          When a Buyer attempts to add an item to their cart, we can update the cart item count client-side. Assuming our product form's "add to cart" button is already checking the item's availability, we can have a reasonably high degree of certainty that the item will be added to the cart (API request is successful). However, we do not know what the new cart total will be, nor do we know what the line items will look like, so we can't update those in a cart drawer without waiting for the server response.
        </criteria>
      </optimistic_ui>
    </server_side_rendering>
  </ux-principles>
  <html>
    <structure>
      - Use semantic HTML
      - Prefer `<details>` and `<summary>` over JS for show/hide
      - Use `CamelCase` for IDs. Append `-{{ block.id }}` or `-{{ section.id }}`
    </structure>
    
    <accessibility>
      - Make interactive elements focusable with `tabindex="0"`
      - Only use `tabindex="0"` - avoid hijacking tab flow
    </accessibility>
    
  </html>
  <css>
    <specificity>
      - Never use IDs as selectors for styles
      - Avoid element selectors
      - Avoid !important (comment why if absolutely necessary)
      - Use 0 1 0 specificity (single .class selector)
      - Maximum 0 4 0 specificity for parent/child relationships
      - Keep selectors simple and readable
      - Use pseudo selectors sparingly (:has, :where, :nth-child, et )
    </specificity>
    
    <variables>
      - Use CSS variables to reduce redundancy
      - Hardcode values as variables first (e.g. --touch-target-size: 45px)
      - Never hardcode colors, use color schemes
      - Scope variables to components unless global
      - Global variables go in :root (in may live in a file like snippets/theme-styles-variables.liquid)
      - Scoped variables can reference global variables
    </variables>
    
    <scoping>
      - Use {% stylesheet %} tags in sections, blocks, and snippets
      - Reset CSS variables inline with style attributes for settings
      - Avoid {% style %} tags with block/section ID selectors
      - Use variables to reduce redundancy
    </scoping>
    
    <bem>
      - Block: component name
      - Element: block__element
      - Modifier: block--modifier, block__element--modifier
      - Use dashes to separate words
    </bem>
    
    <media-queries>
      - Mobile first (min-width queries)
      - Use screen for all media queries
    </media-queries>
    
    <nesting>
      - No & operator
      - Never nest beyond first level
      - Exceptions: media queries, parent-child with multiple states
      - Keep nesting simple
    </nesting>
    
  </css>
  <javascript>
    <general_principles>
      - Use zero external dependencies
      - Use native browser features over JS ("popover", "details")
      - Never use "var"
      - Use "const" over "let" - avoid mutation
      - Use "for (const thing of things)" over "things.forEach()"
      - Add new lines before blocks with "{" and "}"
    </general_principles>
    
    <file_structure>
      - Group scripts by feature area
      - Co-locate related classes (e.g. "collection.js" contains all collection page classes)
    </file_structure>
    
    <modules>
      - Use the module pattern to avoid global scope pollution
    
      <privacy_and_instance_methods>
        - Keep public APIs minimal
        - Prefix private methods with "#"
        - Don't use instance methods for functions that don't need the class instance
    
        ```
        class MyClass {
          constructor() {
            this.cache = new Map();
          }
    
          // Public method for external use
          myPublicMethod() {
            this.#myPrivateMethod();
          }
    
          // Private method requiring instance access
          #myPrivateMethod() {
            this.cache.set('key', 'value');
          }
        }
    
        // Module-scoped utility - no instance access needed
        const someUtilityFunction = (num1, num2) => num1 + num2;
        ```
      </privacy_and_instance_methods>
    </modules>
    
    <asynchronous_code>
      - Use "async/await" syntax
      - Use "await" over chaining ".then()"
    </asynchronous_code>
    
    <events>
      - Use events for custom element communication to avoid explicit dependencies
    </events>
    
    <web_components>
      - Initialize JS components as custom elements for seamless DOM updates
      - Use shadow DOM and slots
    </web_components>
    
    <early_returns>
      - Use early returns over nested conditionals
    
      <optional_chaining>
        Multiple optional chains require early returns. Single chains are acceptable.
    
        ```
        // Multiple chains - use early return
        const button = this.querySelector('ref="button"');
        if (!button) return;
        button.enable();
        button.textContent = 'Add to cart';
    
        // Single chain is fine
        const button = this.querySelector('ref="button"');
        button?.enable();
        ```
      </optional_chaining>
    </early_returns>
    
    <simplification>
      <ternaries>
        Use ternaries for simple if/else blocks:
        `simpleCondition ? this.doAThing() : this.doAnotherThing();`
      </ternaries>
    
      <one_liners>
        Write simple conditional returns on one line:
        `if (simpleCondition) return;`
      </one_liners>
    
      <returning_boolean>
        Return boolean comparisons directly:
        `return simpleCondition;`
      </returning_boolean>
    </simplification>
  </javascript>
</liquid-development>
