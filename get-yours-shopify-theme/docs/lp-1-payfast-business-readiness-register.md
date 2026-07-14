# LP-1 PayFast Business Readiness Register

## Merchant Confirmation Checklist

| Topic | Status | Evidence required |
| --- | --- | --- |
| Formal PayFast verification | Merchant confirmation required | Provider dashboard status. |
| Intended legal merchant entity | Merchant confirmation required | Business/legal records. |
| Get Yours versus provider-facing business name | Merchant confirmation required | Written explanation and ownership confirmation. |
| Settlement bank account | Merchant confirmation required | Confirm privately; do not record account details here. |
| Payout workflow and timing | Merchant confirmation required | Current PayFast documentation/dashboard. |
| Fees: PayFast, cards, EFT, Zapper, Payflex | Merchant confirmation required | Current provider schedule. |
| Pending/refund workflow | Pending terminal refund state | Terminal sandbox evidence and provider process. |
| Reserves, holds, disputes, chargebacks | Merchant confirmation required | Provider documentation and owner process. |
| Merchant support route | Merchant confirmation required | Support contact and escalation procedure. |
| Evidence retention | Ready | Keep sanitized order number, timestamp, amount, status, and owner notes. |

## Dropshipping Working-Capital Model

```
Customer pays Get Yours
-> Shopify records Paid
-> PayFast may still be settling funds
-> Get Yours may need to pay CJ before bank settlement
-> CJ fulfils only after supplier payment
```

| Policy input | Merchant input |
| --- | --- |
| Minimum supplier-payment reserve | [AMOUNT] |
| Separate refund reserve | [AMOUNT] |
| Maximum daily supplier commitment | [AMOUNT] |
| Stop-selling threshold | [AMOUNT / RULE] |
| Maximum untracked supplier exposure | [AMOUNT / RULE] |

## Operating Policy Template

- Do not place a CJ order until Shopify shows Paid.
- Do not place a CJ order for high-risk, address-unresolved, or refund-disputed orders.
- Recalculate supplier landed cost and margin before supplier commitment.
- Stop selling a product when available reserve is insufficient, supplier cost removes margin, or mapping/stock is unverified.
- Reconcile Shopify order state, PayFast transaction state, and CJ supplier state daily during launch.
- Escalate any Shopify/PayFast mismatch with sanitized timestamp, amount, order number, and transaction status. Do not include provider credentials or bank data.

The existing R179 test refund remains pending. It is evidence that refund settlement handling must be understood before live activation.
