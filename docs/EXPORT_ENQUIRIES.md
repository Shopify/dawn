# Export enquiry cart

## Architecture and scope

Shopify will reject a zero-stock, inventory-tracked variant with inventory policy
`deny` at `/cart/add`. Theme JavaScript cannot override that server rule. This
implementation keeps export selections in a separate browser enquiry basket and
shows it on `/cart`, alongside the existing Shopify cart. No inventory quantities,
`continue selling` flags, Markets, checkout or shipping settings are changed.

Identification is shared in `cellife-is-export-product.liquid` and is independent
of inventory. A product is export-only when **any** of these is true:

- It belongs to the existing `export-line` collection.
- It has the exact product tag `export-only`.
- Its boolean metafield `cellife.export_only` is true.

Theme references confirm the existing `export-line` collection. Live catalogue/API
inspection was blocked by network access; no consistent existing tag or metafield
could be independently verified. The latter two are supported explicit markers,
not claims that they already exist. Verify collection membership for every
restricted product, especially automated collections that exclude zero stock.

A customer on an export product page selects any published variant and quantity
regardless of its stock, then adds it to the enquiry cart. These selections are
never posted to `/cart/add` and cannot become payment line items through this UI.
Product cards and quiz result purchase links direct export products to that
chooser; native product purchase buttons and accelerated checkout are not rendered
for them. Regular product purchase forms remain native.

Product/variant IDs, handles and quantities are stored in localStorage under
`cellife-export-enquiry:v1`. Personal/contact fields are never stored there.
Storage is browser-specific, not an account-synced Shopify cart. JavaScript and
browser storage are required; without them a direct Contact link remains available.
The basket accepts up to 50 distinct variants, quantities 1–999 per variant.

`product.cellife-export-data.liquid` is a technical alternate view requested with
`?view=cellife-export-data`. **Do not assign it as a product's normal template.**
It returns only public catalogue metadata and the classification flag. Product
classification and variant existence are checked again before submission, without
checking sale availability. Failed or missing metadata keeps selections and blocks
submission; it never silently discards an item or falls back to payment.

## Mixed carts and old native carts

With export selections present, the header cart link and standard cart checkout
controls lead to the enquiry form. Cart accelerated buttons are hidden. Export
requests are sent separately; regular items remain untouched in Shopify's cart
and can use normal checkout after the export request is submitted or removed.
Regular product accelerated checkout remains native and can purchase regular
products only; it does not include the separate enquiry selections.

If a legacy Shopify cart already contains an export product, Liquid removes its
payment checkout controls even without JavaScript. An explicit **Move export
products to enquiry cart** action saves the relevant variants/quantities locally
before removing only their line keys through `/cart/update.js`. A journal in the
same atomic storage value makes failed-update retries idempotent. No regular line
is removed or changed. If storage fails, nothing is removed from Shopify.

## Contact delivery and confirmation

The form uses Shopify's native `{% form 'contact' %}` endpoint and contact
notification infrastructure and Shopify's default contact-form success redirect.
An explicit `return_to` override is intentionally omitted so the native success
state is retained. The preliminary asynchronous preparation submit is stopped
in capture phase; only the completed payload reaches Shopify's normal submit
handlers. It preserves the
native submit lifecycle for Shopify spam protection/challenges. It collects name,
email, optional company, destination country and optional additional information.
Destination choices use `all_country_option_tags`, independent of configured
shipping zones; choosing Australia is disabled and checked again at submission.

Shopify sends contact submissions to the store's **Sender email** configured under
Settings → Notifications. The customer's entered email is the reply/contact
address, not an automatic receipt destination. This theme does not send a separate
customer acknowledgement email.

The request body automatically includes product/variant names and IDs, SKU,
barcode, quantity, vendor, product type and product URL. Pricing/shipping are
confirmed by staff; no payable total, payment session, draft order, order or
marketing subscription is created. Submitted client fields are enquiry details,
not trusted pricing or binding stock reservations.

The confirmation renders only from Shopify's `form.posted_successfully?`, not
from an arbitrary client-side fetch success. A sessionStorage product/quantity
snapshot is reconciled after confirmation, so a changed basket in another tab
keeps any quantities added since submission. Failed submissions retain the basket.
If reconciliation storage is blocked, keep the basket rather than lose items.

## Required Shopify Admin verification / limitations

**This is not a checkout validation app. Theme code cannot enforce a server-side
purchase prohibition against direct `/checkout` links, cart permalinks, Storefront
API requests, other themes, Shop/POS or other sales channels.**

1. Keep existing inventory tracking, zero quantities and `deny` policy until a
   backend restriction is verified. Zero stock is not used for identification,
   but is still the existing server-side purchase block. Do not enable continue
   selling merely to make this enquiry UI work; it is not needed.
2. Before any future stock increase or continue-selling change, put the export
   products in a dedicated shipping profile with **no domestic/Australian rates**,
   check there are no local pickup/delivery or app-carrier exceptions, and verify
   an Australian checkout is blocked. Shopify Markets product publishing/catalogue
   controls or a cart/checkout validation app may also be appropriate depending
   on the plan. Theme edits cannot configure or guarantee these controls.
   If *all* export products must always be enquiry-only on every channel, enforce
   that through backend validation/channel availability, not theme interception.
3. Keep export products published and accessible on the Online Store where
   enquiry browsing is needed. Products unpublished or unavailable in a visitor's
   market may return 404 to the alternate view and cannot be browsed via a theme.
   Verify the collection lists out-of-stock products and no automatic stock filter
   or app removes them. Do not exclude AU storefront visibility blindly if AU
   visitors need to request export quotes to an overseas destination.
4. Verify the contact notification recipient, spam settings and delivery with one
   approved live test enquiry. Local tests do **not** send real emails. Shopify's
   success flag confirms form acceptance; mailbox delivery is not independently
   verified here. Check captcha/challenge return to `/cart` in the live theme.
5. Test a real multi-variant export product at zero stock, a second export item,
   a normal item, a mixed cart, AU destination refusal, country/currency switching,
   mobile cart drawer, and final enquiry email content. Confirm regular checkout
   is still available after submission. No real order/payment was created in tests.

## Validation

`tests/export-enquiry/browser.cjs` renders the actual Liquid against a local fake
Shopify endpoint and tests product, tag and metafield classification; zero stock;
multiple variants/products; edits/persistence; regular native purchase/checkout;
mixed-cart routing and retention; explicit legacy migration/retry; blocked storage;
stale/missing metadata; contact rejection/confirmation; no-JS protection; responsive
320/390/1440px widths; and axe checks on the enquiry form. It records fake POSTs
and asserts export flows never call cart-add or payment endpoints. Existing quiz
and paged product card tests cover the shared purchase UI regressions.
