# PR-1 Production Staging Readiness Report

## Outcome

The production-relevant Stitch-to-Dawn shell is complete for private staging. PR-1 fixed the remaining P1 navigation, footer and Contact-copy gaps without redesigning the storefront. Development theme `141697089639` was updated and QA passed, but it was not published because Shopify storefront password protection is currently off. The active theme remains `Dawn` (`141692731495`) as the rollback reference.

Production classification: **E. Partially unverified due to the unmet password-protection gate.**

## Visible Changes

- Header navigation: Home; Shop dropdown/submenu; Contact.
- Shop destinations: Shop All, Home Organisation, Office & Desk Essentials, Tech Accessories, Travel and Lifestyle.
- Footer: brand and dedicated Shop menu only. Unapproved Support and Legal groups are hidden; no Search placeholder remains.
- Account: retained. Customer accounts are optional and the login route redirects to Shopify customer accounts.
- Contact: approved acknowledgement applied, plus a warning not to submit card, banking, OTP, password or other sensitive payment information.
- Announcement and reassurance copy remain aligned to free Standard shipping on orders of R770 or more.

## Shopify Configuration

- Created `get-yours-main-menu` and `get-yours-footer-shop`; existing default menus were not overwritten.
- Development-theme source assigns both new menu handles.
- Contact routing remains unresolved: native Shopify Contact delivery is configured through a different private Sender email, not `info@getyours.online`. Shopify Admin must align the sender/destination and address the visible fallback-sender warning before a controlled hosted retest. No private address is recorded here.
- Shipping profile: South Africa Standard is R100, free from R770, with a 3-5 business-day estimate; Express is R150 with a 1-2 business-day estimate. Estimated delivery dates are globally off. A dormant R310 international rate exists but its countries are not in an active market.
- Required shipping follow-up: validate supplier routes, then retain/rename/remove Standard and Express, remove unsupported exact estimates, and test carts below R770, at R770 and above R770.
- Dynamic footer payment output shows Visa, Mastercard, American Express, PayPal, Diners Club and Discover. PayPal is active; PayFast is in test mode. Admin must align customer-facing methods to the approved launch baseline after the PayPal and Payflex decisions. No payment settings changed.

## QA

- Local preview and hosted development preview passed the changed shell at 360, 400, 430, 768 and 1200px with no measured horizontal overflow.
- Desktop Shop dropdown and mobile Shop submenu expose all six approved destinations. Escape closes the desktop dropdown; mobile Escape returns from the submenu and then closes the drawer.
- Search opens and closes with Escape. Search and Cart remain present.
- Contact acknowledgement, safety warning and accessible description association render at 360/430px without overflow. The form was not submitted.
- All approved collection destinations, Contact, three representative products, search and cart returned HTTP 200; the controlled missing route returned 404.
- Footer contains only Get Yours and Shop headings. No Support/Legal Search placeholders remain.
- Hosted storefront console produced no errors or warnings in a fresh storefront-only tab. `/sf_private_access_tokens` HTTP 400 remains monitor-only because no visible feature failed.
- Theme Check passed with no errors and eight inherited Dawn warnings. The auxiliary Shopify Liquid validator could not load its bundled `@shopify/theme-check-common` dependency; no theme defect was reported by Theme Check.

## Deployment Gate

Shopify Preferences showed **Password protection: off**. Therefore development theme `141697089639` was not published and production-domain acceptance QA was not run against it as the active theme. `getyours.online` must not be treated as password-protected staging in its current state.

## Remaining Blockers

| Blocker | Owner |
| --- | --- |
| Enable and verify storefront password before separately approving private-staging publication | Merchant / Shopify Admin |
| Align Contact sender/destination to `info@getyours.online`, fix sender authentication warning and retest | Merchant / Shopify Admin / email host |
| Validate CJ SKUs, stock, supplier cost, routes, restrictions and margins | Merchant / CJ |
| Resolve the pending PayFast sandbox refund and finish held payment tests | PayFast / Merchant |
| Decide PayPal and Payflex launch presentation; keep Mobicred disabled | Merchant / PayFast/PayPal |
| Approve shipping rate names, route support and checkout threshold behaviour | Merchant / CJ / Shopify Admin |
| Confirm VAT/tax treatment | Accountant |
| Review policies and support copy | South African legal review / Merchant |
| Publish approved support/legal content before adding those footer groups | Merchant / Shopify Admin |

## Strict Confirmation

No support or legal page was published; no Contact form was submitted; no checkout, payment, order, refund, fulfilment, inventory, shipping-rate, provider, policy or CJ action occurred. The live theme was not changed. Password protection was not changed and remains off.
