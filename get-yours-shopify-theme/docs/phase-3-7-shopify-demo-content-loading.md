# Phase 3.7 Shopify Demo Content Loading

## Status

Phase 3.7 content-loading preparation is complete.

This phase did not create Shopify products, did not upload media and did not modify theme Liquid, JSON templates, product templates, collection templates, cart logic, search templates or the frozen static prototype.

## Why Placeholders Are Still Visible

The homepage sections are already collection-driven, but the Shopify development store still needs real Shopify content:

- Products must exist in Shopify Admin.
- Product images must be attached as Shopify product media.
- Manual collections must be created and populated.
- Homepage product rail sections must be assigned to those collections in the theme editor.
- Hero images must be selected through the theme editor or Shopify Files.

The optimised images in `docs/demo-content/optimised-images/` are local files. Shopify storefront sections cannot display them until they are uploaded to Shopify through Admin product media, Shopify Files or theme editor image settings.

## Files Created

- `docs/demo-content/shopify-products-import.csv`
- `docs/demo-content/shopify-admin-demo-setup-checklist.md`
- `docs/demo-content/product-collection-matrix.md`
- `docs/demo-content/image-upload-map.md`
- `docs/demo-content/scripts/prepare-demo-content-summary.py`

## Products Planned

Products validated: `20`.

All planned products have:

- unique handles
- matching optimised image filenames
- vendor `Get Yours`
- draft status in the planning CSV
- ZAR pricing
- product type
- tags
- collection assignments
- short descriptions
- bullet highlights
- image alt text

## Collections Planned

Collections validated: `9`.

Planned manual collections:

- Featured Practical Finds
- New Arrivals
- Best Sellers
- Home Organisation
- Office & Desk Essentials
- Kitchen & Storage
- Lifestyle
- Travel
- Tech Accessories

All planned collections have handles.

## Shopify Import CSV

`shopify-products-import.csv` was created using Shopify-style product import columns, including:

- `Handle`
- `Title`
- `Body (HTML)`
- `Vendor`
- `Product Category`
- `Type`
- `Tags`
- `Published`
- `Option1 Name`
- `Option1 Value`
- `Variant SKU`
- `Variant Inventory Qty`
- `Variant Inventory Tracker`
- `Variant Inventory Policy`
- `Variant Fulfillment Service`
- `Variant Price`
- `Variant Compare At Price`
- `Variant Requires Shipping`
- `Variant Taxable`
- `Image Src`
- `Image Position`
- `Image Alt Text`
- `Status`

`Image Src` is intentionally blank because local file paths are not public Shopify-importable image URLs. Attach optimised images manually as product media after import, or use a later approved Admin API/media workflow.

## Image Upload Requirements

Images validated:

- Optimised JPG files available: `31`.
- Product image references matched: `20 / 20`.
- Hero image references matched: `3 / 3`.

Upload strategy:

- Product images: upload as Shopify product media.
- Hero images: upload/select through the Shopify theme editor or Shopify Files.
- Extra unassigned images: keep as optional product media candidates for future products.

Do not hard-code demo images into Liquid.

## Import And Manual Setup Recommendation

Recommended approach for this phase:

1. Create the nine manual collections in Shopify Admin.
2. Import `shopify-products-import.csv` or create products manually.
3. Keep products as draft until the preview needs them visible; switch to active only when required.
4. Attach optimised images manually as product media.
5. Assign products to collections using `product-collection-matrix.md`.
6. Assign homepage images and collection sections in the theme editor using `homepage-section-assignments.md`.

## Automated Product Creation

Automated product creation was not attempted.

Before considering automation, confirm:

- Shopify Admin API credentials are available.
- Required scopes are available.
- Exact products, images and collections to create are approved.
- Products should be draft or active.
- Media upload behavior is understood and reversible.

Automated creation can be considered later, but it should be a separate approved task.

## QA Results

Completed:

- Parsed `demo-products.csv`: `20` rows.
- Parsed `demo-collections.csv`: `9` rows.
- Parsed `shopify-products-import.csv`: `20` rows.
- Confirmed product image references match optimised files.
- Confirmed hero image references match optimised files.
- Confirmed product handles are unique.
- Confirmed collection handles are unique.
- Ran `scripts/prepare-demo-content-summary.py`.

## Phase 4 Recommendation

Phase 4 should wait if the next work depends on realistic storefront rendering of product cards, product media or collection rails.

If Phase 4 is code-only and does not depend on real Shopify content, it can begin, but homepage preview QA will continue to show placeholders until Shopify Admin content is created and assigned.

