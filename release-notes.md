Dawn 13.0.0 adds support for color swatches, improvements to the country selector, and tweaks and fixes to other sections. It also includes a breaking change to Color Schemes; see the Changed notes below for details.
### Added
- The Variant Picker now supports color swatches! This depends on the [Product Taxonomy](help.shopify.com/manual/products/details/product-category) feature, which is rolling out gradually over the coming weeks.
- We reworked the country selector, which now includes search, a new “popular countries” section, and a generally improved look and feel especially on smaller screens.
### Changed
- **Important**: If you use Color Schemes, they will reset to their default values due to an internal change to the feature.
- If you are using the Search & Discovery app, you can now change how dynamic facet lists treat filters with no product matches.
### Fixes and improvements
- We added a default font for input fields, they now inherit the body font instead of falling back to a system default font.
- We fixed an issue when adding cart notes that would prevent them from showing during checkout.
- We fixed an accessibility bug where filter colors were displaying incorrectly in high contrast mode.
- We updated the Multicolumn Section to provide a slider on tablet-sized screens, like it does on phone-sized screens.
- We fixed a bug where the Localization Selector was slightly obscured when using Sticky Header and scrolling while the selector was open.
- We fixed a bug that prevented the Product Grid Section from using the correct Image Shape in its Product Cards.
- We subtly increased the font size for inline quantity errors on product pages to make them more readable.
