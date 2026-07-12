# LP-1 Launch Blocker Register

| ID | Area | Blocker | Severity | Evidence | Required decision/action | Owner | Dependency | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LP1-01 | Refunds | R179 sandbox refund is pending | P0 | One pending PayFast Refund for #1002 | Wait for terminal state; do not retry | Payments owner | PayFast | Deferred until refund terminal state |
| LP1-02 | Payments | PayFast verification, legal entity, fees, settlement and refund process unconfirmed | P0 | Merchant evidence absent | Confirm privately with provider records | Merchant | LP1-01 | Pending merchant decision |
| LP1-03a | Development-theme shipping copy | Former R500 promise | Resolved in development source | LP-3A occurrence audit | R770 wording applied to announcement, product reassurance and cart reassurance | Theme owner | Development-theme preview retest | Retest required |
| LP1-03b | Shopify Admin shipping wording | Standard/Express rate names and estimates remain Admin-controlled | P1 | Standard R100, Express R150 and estimates observed in Phase 12 | Approve or replace customer-facing rate wording after route validation | Merchant / fulfilment | CJ route verification | Pending merchant decision |
| LP1-03c | Unpublished support pages | Conditional or historic R500 wording may remain in draft support content | P1 | Phase 10/11 drafts | Align approved page copy before publication | Merchant / content owner | LP1-03b | Drafted but unpublished |
| LP1-03d | Delivery timing | Exact checkout estimates are not operationally verified | P1 | No CJ service evidence | Retain neutral theme wording; approve evidence-based timing only after supplier-route review | Merchant / fulfilment | CJ route verification | Pending merchant decision |
| LP1-03e | Checkout verification | Post-change checkout behaviour has not been rerun | P1 | LP-3A source changes only | Verify R770 threshold, rates and displayed wording in a separately approved controlled test | Merchant / QA owner | LP1-03b | Pending approval |
| LP1-05 | Tax/VAT | Tax treatment not confirmed | P0 | Test order showed included VAT/tax only | Obtain accountant/tax-practitioner advice | Merchant / adviser | Business records | Pending professional confirmation |
| LP1-06 | Support | Support inbox, merchant notification, hours, response process unverified | P1 | Drafts only | Confirm and controlled-test channels | Support owner | Mailbox approval | Pending merchant decision |
| LP1-07 | CJ operations | SKU mapping, stock, cost, route, and reserve unverified | P0 | No completed mapping/register | Complete mapping and margin verification | Fulfilment owner | Supplier access | Pending merchant decision |
| LP1-08 | Payments QA | Failed-payment and cancellation tests paused | P1 | Pending refund safeguard | Resume only after LP1-01 terminal state | Payments owner | LP1-01 | Deferred until refund terminal state |
| LP1-09 | Fulfilment QA | Manual fulfilment/tracking test paused | P1 | Correct setting exists but workflow untested | Run controlled test later | Fulfilment owner | LP1-01 | Deferred until refund terminal state |
| LP1-10 | Legal | Policy and support content need approval/review | P0 | Draft pages and policy gaps | Merchant approval and South African legal review | Merchant / legal | Operations decisions | Pending professional confirmation |
| LP1-11 | Pages/menus | Pages unpublished; menus unwired; Contact unchanged | P1 | Phase 11F Option B | Publish/wire only after content approval | Merchant | LP1-10 | Drafted but unpublished |
| LP1-12 | Products | Initial catalogue is demo/draft data; costs and supplier facts unverified | P0 | Local demo catalogue rows are Draft | Approve verified launch shortlist | Merchant / fulfilment | LP1-07 | Pending merchant decision |
| LP1-13 | Launch controls | Test gateway, PayPal, PayFast live mode, password removal and theme publication undecided | P0 | Launch settings not approved | Decide after final tests | Merchant | All P0/P1 | Deferred until live-launch approval |
| LP1-14 | Domain/monitoring | Public smoke test and first-order monitoring not prepared | P1 | No approved runbook execution | Approve runbook and owners | Merchant / operations | LP1-13 | Deferred until live-launch approval |

## Prioritized Action Order

1. Wait for the existing refund to become terminal. At 24 hours pending, prepare sanitized PayFast support evidence; do not submit without approval.
2. Complete supplier mapping, landed-cost model, and a 10-20 product launch shortlist.
3. Retest R770 theme copy, resolve Shopify Admin rate wording and align unpublished support-page copy before any customer-facing content is published.
4. Obtain tax/VAT and legal-policy confirmation.
5. Confirm support channels and controlled mailbox test plan.

Deferred tests are paused, not failed, until the refund reaches a terminal state.
