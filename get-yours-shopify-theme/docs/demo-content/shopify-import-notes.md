# Shopify Import Notes

## Recommended Approach

Use manual Shopify admin setup or Shopify CSV import for this demo content phase. Do not run automated product creation until explicitly approved.

## Create Collections Manually

1. In Shopify admin, open `Products > Collections`.
2. Create the collections listed in `demo-collections.csv`.
3. Use manual collections for this demo phase.
4. Use the provided handles and descriptions where practical.
5. Add collection images later if suitable category images are available.

## Create Products Manually

1. In Shopify admin, open `Products`.
2. Create each product from `demo-products.csv`.
3. Set vendor to `Get Yours`.
4. Set status to `Draft`.
5. Add price in ZAR.
6. Add compare-at price only where included.
7. Add tags and product type from the CSV.
8. Use the short description and bullet highlights as starter content.

## Attach Product Images

1. Optimise source images once `GY_Demo_Content` is available.
2. Upload the normalised image for each matching product.
3. Set the image alt text from `demo-products.csv`.
4. Keep images as product media, not hard-coded theme assets.

## Assign Products To Collections

1. Open each product in Shopify admin.
2. Add it to the manual collections listed in the `assigned_collections` column.
3. Confirm that homepage rail collections contain at least four products each.

## Assign Homepage Sections

1. Open the development theme editor.
2. Assign the hero images to `Get Yours promo grid hero`.
3. Assign category grid blocks to the matching collections.
4. Assign each product rail to its matching collection:
   - Featured Practical Finds
   - New Arrivals
   - Best Sellers
   - Home Organisation
   - Office & Desk Essentials
5. Save the development theme only. Do not publish to the live theme.

## CSV Import Option

The current `demo-products.csv` is a planning CSV, not a native Shopify product import CSV. If Shopify CSV import is preferred, create a Shopify-format import file from this plan after images are available.

