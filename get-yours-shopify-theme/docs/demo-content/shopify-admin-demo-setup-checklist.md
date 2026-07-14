# Shopify Admin Demo Setup Checklist

## A. Create Manual Collections

- [ ] Create `Featured Practical Finds` with handle `featured-practical-finds`. Use manual collection type.
- [ ] Create `New Arrivals` with handle `new-arrivals`. Use manual collection type.
- [ ] Create `Best Sellers` with handle `best-sellers`. Use manual collection type.
- [ ] Create `Home Organisation` with handle `home-organisation`. Use manual collection type.
- [ ] Create `Office & Desk Essentials` with handle `office-desk-essentials`. Use manual collection type.
- [ ] Create `Kitchen & Storage` with handle `kitchen-storage`. Use manual collection type.
- [ ] Create `Lifestyle` with handle `lifestyle`. Use manual collection type.
- [ ] Create `Travel` with handle `travel`. Use manual collection type.
- [ ] Create `Tech Accessories` with handle `tech-accessories`. Use manual collection type.

## B. Import Or Manually Create Products

- [ ] Use `shopify-products-import-no-images.csv` for the first product import.
- [ ] Do not use `shopify-products-import.csv` for the first import unless public image URLs have been added.
- [ ] Products in the no-image import are set to `Published: TRUE` and `Status: active` for preview visibility.
- [ ] Confirm prices are in ZAR after import.
- [ ] Attach matching optimised JPGs manually after import using `optimised-images/`.
- [ ] Set vendor to `Get Yours`.

## C. Assign Products To Collections

- [ ] Use `product-collection-matrix.md` for collection assignment.
- [ ] Make sure each homepage rail collection has at least four products.

## D. Assign Homepage Sections

- [ ] Assign `hero-main-image.jpg` to the main promo tile.
- [ ] Assign `hero-office-desk.jpg` to the Office & Desk promo tile.
- [ ] Decide whether to use `hero-travel-accessories-candidate.jpg` for the Travel promo tile.
- [ ] Link each category card to its matching collection.
- [ ] Assign each product rail to its matching collection.
- [ ] Add trust links only when real support/policy URLs exist.

## Safety

- [ ] Do not publish to the live theme during demo setup.
- [ ] Do not use `--publish` or `--allow-live`.
