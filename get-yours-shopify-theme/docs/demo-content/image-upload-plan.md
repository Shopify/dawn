# Image Upload Plan

## Current Status

The corrected source folder `/Users/thabisoradebe/Downloads/GY_Demo_Content` was found and optimised JPG copies were created in:

```text
get-yours-shopify-theme/docs/demo-content/optimised-images/
```

Source files in Downloads were not modified.

## Normalised Naming Convention

Use lowercase kebab-case names:

- lowercase only
- hyphen-separated
- no spaces
- no special characters
- preserve product meaning
- keep the content type prefix

Examples:

- `hero-main-image.jpg`
- `hero-office-desk.jpg`
- `hero-travel-accessories-candidate.jpg`
- `product-adjustable-drawer-divider-set.jpg`
- `product-modular-fridge-storage-bins.jpg`
- `product-under-shelf-wire-storage-basket.jpg`

## Available Optimised Hero Images

- `hero-main-image.jpg`
- `hero-office-desk.jpg`
- `hero-travel-accessories-candidate.jpg`

Note: a dedicated `HeroTravel...` source image was not found. The travel candidate was generated from `Product-TravelAccessories.png`.

## Optimisation Targets

Hero images:

- Landscape crop or preserve landscape composition.
- Max width: `1800px`.
- Format: `.jpg`.
- Quality: around `75-82`.
- Target size: roughly `250KB-600KB` where possible.

Product images:

- Square crop or preserve square format if already square.
- Max width/height: `1200px`.
- Format: `.jpg`.
- Quality: around `75-82`.
- Target size: roughly `100KB-300KB` where possible.

## Shopify Upload Strategy

Product images:

- Upload as Shopify product media.
- Attach each product image to the matching Shopify product.
- Use descriptive alt text from `demo-products.csv`.
- Do not add product demo images to Liquid sections or theme assets for product card rendering.

Hero images:

- Upload through the Shopify theme editor image picker, or upload to Shopify Files and select them in the homepage section settings.
- Assign images to `gy-promo-grid-hero` settings:
  - `hero-main-image.jpg`
  - `hero-office-desk.jpg`
  - `hero-travel-accessories-candidate.jpg`

Homepage product rails:

- Keep rails collection-driven.
- Assign each `gy-featured-collection` instance to a Shopify collection.
- Do not hard-code demo images into `gy-featured-collection.liquid`.

## Automation Position

Do not attempt automated Shopify product or media creation without explicit approval.

Shopify CLI theme workflows can preview and push themes, but should not be assumed to create products or upload product images by itself. Product/catalogue creation should use Shopify Admin UI, Shopify CSV import, or a deliberately approved Admin API workflow.
