# LP-1 Manual CJ Fulfilment SOP

## Preconditions

Proceed only when Shopify shows Paid, the fraud/risk review is acceptable, address and SKU are complete, supplier mapping and stock are confirmed, and the recalculated contribution margin is approved.

## Workflow

1. Receive Shopify order.
2. Confirm financial status and fraud/risk status.
3. Validate customer address and contact details.
4. Validate Shopify product, SKU, and variant.
5. Confirm CJ product/variant mapping and stock.
6. Confirm current CJ product cost, shipping route, shipping cost, and restrictions.
7. Recalculate margin and obtain approval where required.
8. Place the CJ order manually only after all gates pass.
9. Record the CJ order reference, selected route, costs, and supplier state.
10. Monitor supplier progress and delivery exceptions.
11. Add tracking only when it is valid.
12. Add tracking to Shopify and perform legitimate fulfilment.
13. Allow Shopify to send the shipping confirmation.
14. Reconcile final supplier cost, refund exposure, and margin.

## Stop Conditions

- Unpaid order, unresolved high risk, invalid address, or customer cancellation before supplier commitment.
- CJ stock unavailable, variant mismatch, unsupported destination, restricted shipping item, or suspected IP issue.
- Supplier product/shipping cost removes approved margin.
- Loose lithium battery, aerosol/liquid, oversized/fragile item, or return restriction without an approved operational path.

## Manual Order Tracker

| Shopify order | Payment verified | Fraud reviewed | Address reviewed | SKU matched | CJ stock | Cost confirmed | Margin approved | CJ reference | Supplier status | Tracking received | Tracking added | Shopify fulfilled | Shipping confirmation | Delivered | Exception | Refund | Reconciled |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [INPUT] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [INPUT] | [INPUT] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [INPUT] | [INPUT] | [Y/N] |

No CJ supplier order was created in LP-1.
