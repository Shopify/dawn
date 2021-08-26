**Why are these changes introduced?**

Fixes #492

The goal of this PR is to place the pre-selected default variant at any position. Since variant.selected is not changeable via source code, I decided to design the graphical representation dynamically instead. 


**What approach did you take?**
Ich habe dem variant_picker um ein Optionsfeld erweitert und im main-product.liquid das Anlegen der HTML Elemente angepasst. 

**Demo links**

- [Store](https://your-custom-puzzle.com)
- [Editor](https://shopwerk-7.myshopify.com/admin)

**Checklist**
- [x] Followed [theme code principles](https://github.com/Shopify/dawn/blob/main/.github/CONTRIBUTING.md#theme-code-principles)
- [x] Linted with [Theme Check](https://github.com/Shopify/theme-check)
- [x] Tested on [mobile](https://shopify.dev/themes/store/requirements#mobile-browser-requirements)
- [x] Tested on [multiple browsers](https://shopify.dev/themes/store/requirements#desktop-browser-requirements)
- [x] Tested for [accessibility](https://shopify.dev/themes/best-practices/accessibility)
