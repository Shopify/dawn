# LP-1 Final Launch Runbook

No launch action is authorized by this runbook. Each step needs recorded evidence and the stated approval.

| Step | Prerequisite | Exact action | Stop/rollback condition | Evidence | Owner | Approval |
| --- | --- | --- | --- | --- | --- |
| 1. Resolve pending refund | Existing refund terminal state required | Read-only verify final status | Pending, failed, or mismatch | Shopify/PayFast sanitized status | Payments | Merchant for escalation/retry decisions |
| 2. Failed-payment test | Step 1 complete | Run one approved sandbox failure procedure | Unexpected paid order | Shopify/PayFast result | Payments | Separate approval |
| 3. Cancellation test | Step 1 complete | Run one approved provider cancellation procedure | Paid/incorrect order state | Order and provider state | Payments | Separate approval |
| 4. Mailbox test | Synthetic test plan approved | Verify customer/merchant notification delivery | Mailbox or privacy issue | Generated and received status | Support | Separate approval |
| 5. Manual fulfilment test | Payment tests complete | Verify mapping, tracking, legitimate fulfilment, shipping notification | Stock/cost/mapping issue | Tracker row | Fulfilment | Separate approval |
| 6. Merchant verification | Provider records available | Confirm legal entity and PayFast verification | Name/entity mismatch unresolved | Merchant confirmation | Merchant | Merchant |
| 7. Settlement and fees | Provider documentation | Confirm payout, fee, refund, reserve process | Working capital insufficient | Finance register | Merchant / finance | Merchant |
| 8. Working capital | Costs confirmed | Set supplier and refund reserves | Reserve below stop threshold | Signed operating policy | Merchant | Merchant |
| 9. Shipping decision | Margin model complete | Approve rates, threshold, and wording | R770 copy is aligned, but Admin-rate and checkout verification remain | Checkout tests | Merchant / finance | Merchant |
| 10. Tax/VAT | Adviser review | Confirm tax display, invoices, refunds | Uncertain treatment | Written professional advice | Merchant / adviser | Merchant |
| 11. Product approval | CJ mapping and economics | Approve initial 10-20 products | Any mapping/cost/restriction gap | Product audit | Merchant / fulfilment | Merchant |
| 12. Legal/support approval | LP-3B.3 decision package complete | Assign/approve support, returns, cancellation, shipping, payment and Contact operations; close tax and policy decisions; approve support copy | Unresolved legal/operational claim | Recorded merchant, supplier/provider and professional approvals | Merchant / legal | Merchant |
| 13. Publish pages | Step 12 complete | Publish only approved support pages | Placeholder or policy gap | Live URLs | Merchant | Separate approval |
| 14. Confirm legal policies | Step 12 complete | Approve/configure policy content and URLs | Legal or operational wording gap | Four verified policy URLs | Merchant / legal | Separate approval |
| 15. Wire menus | Pages/policies live | Apply the LP-3B-approved navigation structure | Broken/unpublished links or unsupported category | Desktop/mobile link QA | Merchant | Separate approval |
| 16. Contact readiness | Inbox confirmed | Test form with synthetic data | Recipient/acknowledgement failure | Controlled test | Support | Separate approval |
| 17. Final QA | Content/data finalized | Responsive, accessibility, links, cart, search QA | P0/P1 issue | QA report | Theme owner | Merchant |
| 18. Test gateway decision | Payment QA complete | Decide whether to remove Shopify Test Payment Gateway | Unverified live checkout | Decision record | Merchant | Merchant |
| 19. PayPal decision | PayPal process reviewed | Retain or disable after approval | Unverified provider process | Decision record | Merchant | Merchant |
| 20. PayFast live decision | All payment gates complete | Approve live mode activation | Any payment blocker | Approval record | Merchant | Separate approval |
| 21. Publish theme | All P0/P1 closed | Publish approved theme | Unresolved blocker | Theme/version record | Merchant | Separate approval |
| 22. Remove password | Theme published and smoke plan ready | Remove storefront password | Any public readiness gap | Public access check | Merchant | Separate approval |
| 23. Public smoke test | Store public | Check home, collection, product, cart, checkout handoff, policies | P0 customer issue | Smoke-test log | Theme/ops | Merchant |
| 24. First-order monitoring | Store public | Manually inspect every early order | Payment, risk, stock, or margin exception | Order tracker | Operations | Merchant |
| 25. Daily reconciliation | First orders received | Reconcile Shopify, PayFast, CJ, refunds, and reserve | Mismatch/unresolved refund | Daily reconciliation log | Operations / finance | Merchant |

## Stop Rules

Do not publish, remove the storefront password, or activate PayFast live mode while any P0 item in the LP-1 blocker register remains open. Do not place a CJ supplier order before Shopify is Paid and the manual order tracker gates pass.
