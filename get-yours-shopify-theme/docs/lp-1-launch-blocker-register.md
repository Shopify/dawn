# LP-1 Launch Blocker Register

| ID | Area | Blocker | Severity | Evidence | Required decision/action | Owner | Dependency | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LP1-01 | Refunds | R179 sandbox refund is pending | P0 | One pending PayFast Refund for #1002 | Wait for terminal state; do not retry | Payments owner | PayFast | Deferred until refund terminal state |
| LP1-02 | Payments | PayFast verification, legal entity, fees, settlement and refund process unconfirmed | P0 | Merchant evidence absent | Confirm privately with provider records | Merchant | LP1-01 | Pending merchant decision |
| LP1-03a | Development-theme shipping copy | Former R500 promise | P0 — resolved | LP-3A occurrence audit and hosted-preview retest | R770 wording applied to announcement, product reassurance and cart reassurance | Theme owner | None | Resolved and preview-verified |
| LP1-03b | Shopify Admin shipping wording | Standard/Express rate names and estimates remain Admin-controlled | P1 | Standard R100, Express R150 and estimates observed in Phase 12 | Approve or replace customer-facing rate wording after route validation | Merchant / fulfilment | CJ route verification | Pending merchant decision |
| LP1-03c | Unpublished support pages | Draft copy is aligned to R770 and LP-3B.4 records selected merchant procedures, but recipient, supplier/provider, technical, tax and legal publication gates remain | P1 | LP-3B.1/3B.2/3B.3/3B.4 decision package | Close remaining page-specific supplier, provider, technical, tax and legal gates before publication | Merchant / content owner | LP1-03b, LP1-05, LP1-06, LP1-10 | Drafted but unpublished |
| LP1-03d | Delivery timing | Exact checkout estimates are not operationally verified | P1 | No CJ service evidence | Retain neutral theme wording; approve evidence-based timing only after supplier-route review | Merchant / fulfilment | CJ route verification | Pending merchant decision |
| LP1-03e | Checkout verification | Post-change checkout behaviour has not been rerun | P1 | LP-3A source changes only | Verify R770 threshold, rates and displayed wording in a separately approved controlled test | Merchant / QA owner | LP1-03b | Pending approval |
| LP1-05 | Tax/VAT | Tax treatment not confirmed | P0 | Test order showed included VAT/tax only | Obtain accountant/tax-practitioner advice | Merchant / adviser | Business records | Pending professional confirmation |
| LP1-06 | Support | Public support mailbox is active, but Shopify's native Contact destination is a different private Sender email | P1 | LP-3B.5C read-only Admin/API inspection | Decide whether to align Shopify Sender email/native Contact destination to `info@getyours.online`; separately approve any change and hosted retest | Store Owner | Sender/destination decision | Pending merchant decision |
| LP1-07 | CJ operations | SKU mapping, stock, cost, route, and reserve unverified | P0 | No completed mapping/register | Complete mapping and margin verification | Fulfilment owner | Supplier access | Pending merchant decision |
| LP1-08 | Payments QA | Failed-payment and cancellation tests paused | P1 | Pending refund safeguard | Resume only after LP1-01 terminal state | Payments owner | LP1-01 | Deferred until refund terminal state |
| LP1-09 | Fulfilment QA | Manual fulfilment/tracking test paused | P1 | Correct setting exists but workflow untested | Run controlled test later | Fulfilment owner | LP1-01 | Deferred until refund terminal state |
| LP1-10 | Legal | Policies and support content need approval/review | P0 | LP-3B.2 tax/legal dependency register and LP-3B.3 review briefs | Merchant approval, accountant/tax-practitioner confirmation and South African legal review | Merchant / legal | Operations decisions | Pending professional confirmation |
| LP1-11 | Pages/menus | Development header and Footer Shop are wired; support pages remain unpublished and Support/Legal groups remain intentionally hidden | P1 | PR-1 created isolated launch menus and removed Search placeholders from the development footer | Approve/publish support and legal content before creating and assigning those footer groups | Merchant | LP1-10, LP1-03b/c/d | Shop navigation resolved; content menus deferred |
| LP1-12 | Products | Twenty active products exist, but CJ mapping, supplier cost, shipping route, restrictions and contribution margin remain unverified | P0 | Shopify catalogue inspection confirmed 20 active products with SKUs, prices, inventory and media | Complete LP-2 supplier mapping and approve the initial launch shortlist | Merchant / fulfilment | LP1-07 | Pending merchant decision |
| LP1-13 | Launch controls | Storefront password protection is off; test gateway, PayPal, PayFast live mode and public launch remain unresolved | P0 | PR-1 Shopify Preferences inspection and payment review | Enable and verify password protection before separately approving development-theme publication; resolve payment gates before public launch | Merchant | All P0/P1 | Private-staging publication blocked |
| LP1-14 | Domain/monitoring | Public smoke testing and first-order monitoring are documented but not authorized or executed | P1 | LP-1 Final Launch Runbook steps 23–25 | Assign owners and execute after public-launch approval | Merchant / operations | LP1-13 | Deferred until live-launch approval |
| LP1-15 | Contact operations | Native form and corrected success/safety copy pass; destination still differs from the approved public mailbox and the sender fallback warning remains | P1 | LP-3B.5B/5C and PR-1 preview evidence | Align destination/sender, complete hosted delivery retest and privacy/legal review | Store Owner | LP1-06, legal review | Theme copy resolved; routing pending |

## Prioritized Action Order

1. Wait for the existing refund to become terminal. At 24 hours pending, prepare sanitized PayFast support evidence; do not submit without approval.
2. Complete supplier mapping, landed-cost model, and a 10-20 product launch shortlist.
3. Verify the R770 checkout threshold and Shopify Admin rate wording, then close the support-page operational and legal gates before any customer-facing content is published.
4. Obtain tax/VAT and legal-policy confirmation.
5. Enable and verify storefront password protection before any private-staging theme publication.
6. Align the Shopify Contact sender/destination and rerun one controlled hosted delivery test.

Deferred tests are paused, not failed, until the refund reaches a terminal state.
