# Legacy template migration

The six template suffixes are preserved. Existing Shopify page/collection assignments can continue to use them; this change does not create or reassign Shopify records.

| Template | Current implementation |
| --- | --- |
| `page.about-us` | Native image-with-text; legacy heading, paragraphs and Shopify image reference |
| `page.media` | Native video; original heading and YouTube video ID |
| `page.stockist` | Small Cellife directory section; three region headings and six original HTML columns, with separators between regions |
| `page.contact` | Small Cellife contact layout with native Shopify contact form markup in a snippet; original introduction and contact details |
| `collection.all-products` | Heading/product search followed by five paged collection sections in original order, using native product cards |
| `collection.export-line` | Native collection banner, Australian export notice and native collection product grid |

No legacy mixed-content, Mapbox, product-card framework or utility classes are imported. Disabled placeholder sections are omitted. The directory/contact styling is scoped and loaded only where needed. Native product cards, filtering, sorting and commerce remain unchanged. The legacy contact setting hid the phone field; the new contact form retains name, email and message, without adding a phone field.

## Export notice

The original notice is displayed when `localization.country.iso_code == 'AU'`. It no longer hides the grid. This is informational messaging only. Existing Markets, product availability, checkout and international purchasing rules are unchanged. A storefront country selection is not a purchase restriction.

## Verify in Shopify Admin / preview

- Confirm the four pages and two collections retain the expected template assignments. These templates do not create page/collection records.
- Confirm the About image exists in Files: `03_fa6d9a07-6537-48a1-9a40-282a9bec254e.jpg`.
- Confirm all five collection handles resolve: `supplements`, `respiratory-tests`, `respiratory-tests-copy`, `womens-urinary-health`, `export-line`.
- Preview the YouTube video and verify playback/thumbnail availability.
- Verify stockist and contact details are still current; the migration deliberately preserves their supplied wording and numbers.
- Submit an approved test contact message to verify store notification delivery and native spam protection.
- Preview Export Line with Australia and another storefront country. The notice appears only for Australia, while the grid remains visible. Independently verify existing market availability if export restrictions are required.

No Shopify Admin data, checkout configuration, homepage sections or unrelated templates are changed by this migration.

## All Products collection paging

Each collection displays four products per page with native numbered pagination. The small `cellife-paged-collection` section reuses the current product-card and pagination snippets. Images use a square media area, centred contain and no added image padding; cards stretch to equal heights. Its styles do not affect homepage shelves or other collection templates.

The section script fetches only the chosen section through Shopify Section Rendering, leaving other rows on their current pages. It does not change browser history. Without JavaScript (or if the endpoint fails), the native links navigate normally; Shopify may then apply its shared collection page parameter to all rows. Product and purchase logic is unchanged.

Verify paging on the Shopify preview with real collection counts, including the last page of each collection. Local tests cover the actual card/pagination Liquid, equal image/card sizing, 320/390/800/1440px widths and section-isolated paging using an intercepted section response.
