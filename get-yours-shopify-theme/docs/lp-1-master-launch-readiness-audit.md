# LP-1 Master Launch Readiness Audit

## Baseline

This audit now includes the completed PR-1 private-staging implementation. PR-1 created isolated launch menus and updated only the development-theme navigation, footer and Contact copy. It did not publish the theme, pages or policies or alter payments, shipping, orders, refunds, fulfilment or CJ.

| Area | Classification | Evidence and next gate |
| --- | --- | --- |
| Storefront | Development preview passes; publication blocked | PR-1 verified the final header, Shop hierarchy, footer and Contact copy locally and through the hosted development preview at five widths. Publication was withheld because password protection is off. |
| Products | Pending merchant decision | Shopify currently has 20 Active Get Yours products with one variant, SKU, inventory, price, and featured media each; supplier economics and restrictions remain unverified. |
| Payments | Blocked | PayFast is in test mode. Successful test payment passed; existing sandbox refund is pending. |
| Refunds | Deferred until refund terminal state | #1002 has one pending R179 PayFast refund; do not retry. |
| Fulfilment | Configured; end-to-end test pending | Automatic fulfilment was disabled; paid orders can remain unfulfilled. Manual fulfilment test is paused pending the terminal result of the existing refund. |
| CJ operations | Pending merchant decision | No SKU mapping, supplier stock, costs, or working-capital reserve is confirmed. |
| Shipping | Partially corrected | Development-theme and support-page copy are aligned to R770. Shopify Admin rate wording and checkout behaviour still require controlled verification before publication. |
| Tax/VAT | Pending professional confirmation | Test order displayed R10.30 included VAT/tax; treatment is not approved. |
| Customer support | Partial operational approval; unpublished | LP-3B.4 approves the public/recipient mailbox, Store Owner escalation model, hours, cadence and selected customer-safety rules. Shopify Contact-form delivery, controlled mailbox test and professional gates remain open. |
| Legal content | Pending professional confirmation | LP-3B.2/3B.3 separate legal/tax questions from recommended operations; policy copy and operational rules still need South African legal review. |
| Menus | Launch Shop menus implemented in development | PR-1 created isolated Main and Footer Shop menus and assigned them to development theme `141697089639`. Unapproved Support and Legal groups are hidden; support pages remain unpublished. |
| Contact | Copy corrected; routing misaligned | PR-1 applied the approved acknowledgement and sensitive-information warning. Shopify still routes the native form to a different private Sender email rather than `info@getyours.online`; destination/sender alignment, delivery retest and privacy review remain open. |
| Notifications | Pending merchant decision | Order confirmation event exists; refund and merchant-mail delivery are unverified. |
| Domain | Password-protected staging blocked | Shopify Preferences showed password protection off. The development theme cannot be published under the approved private-staging authorization until protection is enabled and verified. |
| Theme | Development candidate ready; not published | Theme `141697089639` contains the PR-1 changes and passed hosted/local changed-component QA. Theme Check has 8 inherited warnings and no errors. Active rollback theme remains Dawn `141692731495`. |
| Launch monitoring | Pending merchant decision | First-order monitoring and reconciliation procedures are defined in the runbook. |

## Current Observed Store Facts

- South Africa is the active market; dormant international R310 shipping configuration is not market-enabled.
- Standard is R100; Express is R150; configured free Standard threshold is R770.
- The development-theme announcement is set to `FREE STANDARD SHIPPING ON ORDERS OF R770 OR MORE`. The configured Standard rate is R100 and becomes free from R770; Shopify Admin rate wording and estimates are unchanged.
- LP-3A confirmed the R770 wording in the hosted development preview at 360, 400, 430, 768 and 1200px, plus the product and cart surfaces. Controlled checkout verification remains outstanding.
- PayFast is active in test mode. PayPal was already active separately and requires a later launch decision.
- Order #1002 is a test order, Paid and Unfulfilled. Its single R179 PayFast refund remains pending and is a launch blocker.
- Six support pages exist in Shopify Admin as unpublished drafts: Help, Customer Service, Shipping Information, Returns & Refunds, Payment Information, and FAQ.
- On 2026-07-13, PR-1 assigned the approved launch menus to development theme `141697089639`; the hosted and local previews had no measured horizontal overflow at 360, 400, 430, 768 or 1200px.
- Password protection was off, so theme `141697089639` was not published. Active theme Dawn `141692731495` remains unchanged.
- An auxiliary `GET /sf_private_access_tokens` returned HTTP 400 during local preview without a visible storefront defect. This is monitoring-only unless related behaviour fails.

## Evidence Limitations

Merchant confirmation required for supplier economics, support operations, delivery capability, payment settlement, legal entity, and commercial decisions. Professional confirmation required for tax/VAT and legal-policy content. No item in this audit is marked ready without supporting evidence.

## LP-1 Outcome

The store is not ready for public launch. Work can proceed on templates, content review, product shortlist preparation, and technical inspection while the refund remains pending. Payment failure, customer cancellation, refund replacement, and manual fulfilment/tracking tests remain paused until the refund has a terminal state.
