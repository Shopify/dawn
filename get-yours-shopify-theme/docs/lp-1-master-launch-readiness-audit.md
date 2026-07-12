# LP-1 Master Launch Readiness Audit

## Baseline

This is a documentation-only launch preparation audit. Shopify, PayFast, CJ, products, menus, pages, policies, theme source, and the pending refund were not changed.

| Area | Classification | Evidence and next gate |
| --- | --- | --- |
| Storefront | Ready with launch follow-ups | Dawn shell and custom homepage sections render successfully on the local development preview; final authenticated collection/product/cart/search and accessibility QA remains required. |
| Products | Pending merchant decision | Shopify currently has 20 Active Get Yours products with one variant, SKU, inventory, price, and featured media each; supplier economics and restrictions remain unverified. |
| Payments | Blocked | PayFast is in test mode. Successful test payment passed; existing sandbox refund is pending. |
| Refunds | Deferred until refund terminal state | #1002 has one pending R179 PayFast refund; do not retry. |
| Fulfilment | Ready | Automatic fulfilment was disabled; paid orders can remain unfulfilled. Manual fulfilment test is paused. |
| CJ operations | Pending merchant decision | No SKU mapping, supplier stock, costs, or working-capital reserve is confirmed. |
| Shipping | Blocked | Standard is R100 and free from R770, while the announcement promises R500. Delivery estimates are unverified. |
| Tax/VAT | Pending professional confirmation | Test order displayed R10.30 included VAT/tax; treatment is not approved. |
| Customer support | Drafted but unpublished | Six support pages exist as unpublished drafts; inbox, owner, and mailbox tests are unconfirmed. |
| Legal content | Pending professional confirmation | Policy copy and operational rules need South African legal review. |
| Menus | Drafted but unpublished | Main and footer plan exists; support pages remain unpublished and menus unwired. |
| Contact | Pending merchant decision | Existing Contact page is unchanged; recipient and response process are unverified. |
| Notifications | Pending merchant decision | Order confirmation event exists; refund and merchant-mail delivery are unverified. |
| Domain | Deferred until live-launch approval | Public domain is known; password removal, redirects, sender domain, and public smoke test remain gated. |
| Theme | Ready | Theme source is unchanged in LP-1; final responsive and accessibility QA remains required. |
| Launch monitoring | Pending merchant decision | First-order monitoring and reconciliation procedures are defined in the runbook. |

## Current Observed Store Facts

- South Africa is the active market; dormant international R310 shipping configuration is not market-enabled.
- Standard is R100; Express is R150; configured free Standard threshold is R770.
- The theme announcement says `FREE STANDARD SHIPPING ON ORDERS OVER R500`.
- PayFast is active in test mode. PayPal was already active separately and requires a later launch decision.
- Order #1002 is a test order, Paid and Unfulfilled. Its single R179 PayFast refund remains pending and is a launch blocker.
- Six support pages exist in Shopify Admin as unpublished drafts: Help, Customer Service, Shipping Information, Returns & Refunds, Payment Information, and FAQ.
- On 2026-07-13, the development theme preview returned HTTP 200 and the homepage had no measured horizontal overflow at 360, 400, 430, 768 or 1200px. The planned navigation and footer menus remain unwired.
- An auxiliary `GET /sf_private_access_tokens` returned HTTP 400 during local preview without a visible storefront defect. This is monitoring-only unless related behaviour fails.

## Evidence Limitations

Merchant confirmation required for supplier economics, support operations, delivery capability, payment settlement, legal entity, and commercial decisions. Professional confirmation required for tax/VAT and legal-policy content. No item in this audit is marked ready without supporting evidence.

## LP-1 Outcome

The store is not ready for public launch. Work can proceed on templates, content review, product shortlist preparation, and technical inspection while the refund remains pending. Payment failure, customer cancellation, refund replacement, and manual fulfilment/tracking tests remain paused until the refund has a terminal state.
