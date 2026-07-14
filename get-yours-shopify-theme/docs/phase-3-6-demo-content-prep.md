# Phase 3.6 Demo Content Prep

## Status

Phase 3.6 demo content preparation is complete.

The original prompt path pointed to Desktop, but the corrected source folder was found under Downloads. Optimised JPG copies were created under the theme documentation workspace so the Shopify development store can be populated with realistic demo products, collections and homepage images.

## Source Folder Findings

Checked:

- `/Users/thabisoradebe/Desktop/GY_Demo_Content`
- `~/Desktop/GY_Demo_Content`
- `/Users/thabisoradebe/Downloads/GY_Demo_Content`

Result:

- Desktop folder not found.
- Downloads folder found.
- Hero images found: `2`.
- Product images found: `28`.
- Total source files found: `31`, including `.DS_Store`.
- PNG image files found: `30`.
- Non-conforming source files found: `2` (`.DS_Store` and `ProductAdjustableMetalLaptopStand.png`, which is missing the `Product-` separator).
- Duplicate/unusable source images found: `0`.

No Desktop source files were modified.

## Files Created

- `docs/demo-content/original-inventory.md`
- `docs/demo-content/demo-products.csv`
- `docs/demo-content/demo-collections.csv`
- `docs/demo-content/homepage-section-assignments.md`
- `docs/demo-content/image-upload-plan.md`
- `docs/demo-content/shopify-import-notes.md`
- `docs/demo-content/optimised-images/`
- `docs/phase-3-6-demo-content-prep.md`

## Normalised Naming Convention

The planning files use lowercase kebab-case filenames:

- content type prefix retained: `hero-` or `product-`
- lowercase only
- hyphen-separated
- no spaces
- no special characters
- `.jpg` target format for optimised web output

Examples:

- `hero-main-image.jpg`
- `hero-office-desk.jpg`
- `hero-travel-accessories.jpg`
- `product-adjustable-drawer-divider-set.jpg`

## Collections Planned

Planned demo collections: `9`.

- Featured Practical Finds
- New Arrivals
- Best Sellers
- Home Organisation
- Office & Desk Essentials
- Kitchen & Storage
- Lifestyle
- Travel
- Tech Accessories

Recommendation: use manual collections for this demo phase.

## Products Planned

Planned demo products: `20`.

The product catalogue plan includes practical low-to-mid-price ecommerce items, draft status, vendor `Get Yours`, intended collection assignments, image filename placeholders, alt text, product type, tags, short descriptions and bullet highlights.

## Image Optimisation Results

Images optimised: `31`.

Optimised image output:

- Hero/candidate images: `3`.
- Product images: `28`.
- Output format: `.jpg`.
- Hero image dimensions: `1800x1350`.
- Product image dimensions: mostly `1200x1200`; `product-travel-accessories.jpg` is `1200x900`.

Observed file sizes:

- Hero images: about `352KB-543KB`.
- Product images: mostly about `99KB-300KB`.
- A few product images are slightly above the target range (`317KB`, `353KB`, `370KB`) but acceptable for demo use without obvious quality damage.

Special note:

- No dedicated travel hero source image was present. `hero-travel-accessories-candidate.jpg` was generated from `Product-TravelAccessories.png` as a temporary homepage candidate.

## Shopify Upload Limitations

- Product images should become Shopify product media.
- Hero images should be uploaded or selected through the Shopify theme editor or Shopify Files.
- Homepage product rails must remain collection-driven.
- Demo images should not be hard-coded into product rail Liquid.
- Shopify CLI theme commands should not be assumed to create products or upload product media.

No Shopify Admin API product creation was attempted.

## Automated Product Creation Recommendation

Automated product creation is not recommended until:

1. The source images are available.
2. The product/collection plan is approved.
3. Shopify Admin API credentials and scopes are confirmed.
4. The user explicitly approves an automated product creation run.

For now, use Shopify admin manual setup or a Shopify-format CSV import derived from the planning CSV.

## QA

Completed:

- Confirmed the corrected Downloads source folder was present.
- Confirmed no source files were modified.
- Created the required `docs/demo-content/` planning files.
- Created optimised JPG image copies in `docs/demo-content/optimised-images/`.
- Created `shopify-import-notes.md`.
- Created this Phase 3.6 report.
- CSV content is simple comma-separated planning data with quoted text where needed.
- Confirmed `demo-products.csv` parses with 20 rows.
- Confirmed `demo-collections.csv` parses with 9 rows.

Not completed:

- Shopify admin product or collection creation, because this phase only prepares content.

## Recommended Next Step Before Phase 4

Phase 4 should wait until demo collections/products are created in the Shopify development store if Phase 4 depends on realistic product data.

Immediate next manual/admin steps:

1. Create the nine planned collections in Shopify admin.
2. Create/import the 20 planned products as draft products.
3. Attach product images as Shopify product media using the optimised JPGs.
4. Assign the homepage sections to the matching collections/images in the theme editor.
5. Decide whether `hero-travel-accessories-candidate.jpg` is acceptable or whether a dedicated travel hero image should be supplied.

If Phase 4 is purely another theme-code phase that does not depend on product data, it can begin, but homepage visual QA will remain limited until realistic demo content exists.
