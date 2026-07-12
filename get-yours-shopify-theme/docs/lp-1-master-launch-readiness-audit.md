# LP-1 Master Launch Readiness Audit

## Baseline

This is a documentation-only launch preparation audit. Shopify, PayFast, CJ, products, menus, pages, policies, theme source, and the pending refund were not changed.

| Area | Classification | Evidence and next gate |
| --- | --- | --- |
| Storefront | Homepage preview passed; full journey QA outcome recorded | LP-QA-1 completed browser-only homepage, collection, product, search and cart checks through the hosted development preview. LP-3A aligned development-theme copy to R770; P1 preview routing, navigation, payment and shipping retesting remain. |
| Products | Pending merchant decision | Shopify currently has 20 Active Get Yours products with one variant, SKU, inventory, price, and featured media each; supplier economics and restrictions remain unverified. |
| Payments | Blocked | PayFast is in test mode. Successful test payment passed; existing sandbox refund is pending. |
| Refunds | Deferred until refund terminal state | #1002 has one pending R179 PayFast refund; do not retry. |
| Fulfilment | Configured; end-to-end test pending | Automatic fulfilment was disabled; paid orders can remain unfulfilled. Manual fulfilment test is paused pending the terminal result of the existing refund. |
| CJ operations | Pending merchant decision | No SKU mapping, supplier stock, costs, or working-capital reserve is confirmed. |
| Shipping | Partially corrected | Development-theme copy is aligned to R770 and passed a hosted-preview retest. Shopify Admin rate wording, checkout estimates and unpublished support-page copy still require controlled updates and verification. |
| Tax/VAT | Pending professional confirmation | Test order displayed R10.30 included VAT/tax; treatment is not approved. |
| Customer support | Copy aligned; unpublished | LP-3B.1 aligned repository support drafts to R770, route-dependent delivery wording and provider-neutral payment language. Inbox, owner and controlled mailbox tests remain unconfirmed. |
| Legal content | Pending professional confirmation | Policy copy and operational rules need South African legal review. |
| Menus | Planned; not yet authorized | LP-3B verified the current menus are incomplete and documented a separate LP-3C mutation plan. Support pages remain unpublished and menus unwired. |
| Contact | Published form; not operationally ready | Contact form renders without mobile overflow, but recipient, owner, acknowledgement, privacy wording and controlled form delivery are unverified. |
| Notifications | Pending merchant decision | Order confirmation event exists; refund and merchant-mail delivery are unverified. |
| Domain | Deferred until live-launch approval | Public domain is known; password removal, redirects, sender domain, and public smoke test remain gated. |
| Theme | Preview operational; final issues pending correction | Hosted development preview is operational. Theme Check has 8 inherited Dawn warnings and no errors; fix or formally accept the LP-QA-1 P0/P1 issues before final acceptance. |
| Launch monitoring | Pending merchant decision | First-order monitoring and reconciliation procedures are defined in the runbook. |

## Current Observed Store Facts

- South Africa is the active market; dormant international R310 shipping configuration is not market-enabled.
- Standard is R100; Express is R150; configured free Standard threshold is R770.
- The development-theme announcement is set to `FREE STANDARD SHIPPING ON ORDERS OF R770 OR MORE`. The configured Standard rate is R100 and becomes free from R770; Shopify Admin rate wording and estimates are unchanged.
- LP-3A confirmed the R770 wording in the hosted development preview at 360, 400, 430, 768 and 1200px, plus the product and cart surfaces. Controlled checkout verification remains outstanding.
- PayFast is active in test mode. PayPal was already active separately and requires a later launch decision.
- Order #1002 is a test order, Paid and Unfulfilled. Its single R179 PayFast refund remains pending and is a launch blocker.
- Six support pages exist in Shopify Admin as unpublished drafts: Help, Customer Service, Shipping Information, Returns & Refunds, Payment Information, and FAQ.
- On 2026-07-13, the development theme preview returned HTTP 200 and the homepage had no measured horizontal overflow at 360, 400, 430, 768 or 1200px. The planned navigation and footer menus remain unwired.
- An auxiliary `GET /sf_private_access_tokens` returned HTTP 400 during local preview without a visible storefront defect. This is monitoring-only unless related behaviour fails.

## Evidence Limitations

Merchant confirmation required for supplier economics, support operations, delivery capability, payment settlement, legal entity, and commercial decisions. Professional confirmation required for tax/VAT and legal-policy content. No item in this audit is marked ready without supporting evidence.

## LP-1 Outcome

The store is not ready for public launch. Work can proceed on templates, content review, product shortlist preparation, and technical inspection while the refund remains pending. Payment failure, customer cancellation, refund replacement, and manual fulfilment/tracking tests remain paused until the refund has a terminal state.
