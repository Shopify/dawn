# LP-1 Shipping Economics Decision Model

## Observed Shipping State

| Item | Observed state | Launch status |
| --- | --- | --- |
| Standard | R100; displayed 3-5 business days | Rate exists; delivery promise unverified. |
| Express | R150; displayed 1-2 business days | Rate exists; delivery promise unverified. |
| Free Standard | Free from R770 | Does not match announcement. |
| Announcement | Free Standard over R500 | Launch blocker until aligned. |
| Market | South Africa active | Appropriate for initial scope. |
| International | R310 configuration exists, not market-enabled | Keep dormant or remove only under separate approval. |

## Representative Basket Model

Use one row per product or representative basket. All input fields require merchant or supplier confirmation.

| Input | Amount / assumption | Owner |
| --- | --- | --- |
| Shopify selling price | [MERCHANT INPUT] | Merchandising |
| CJ product cost | [SUPPLIER INPUT] | Fulfilment |
| CJ shipping charge | [SUPPLIER INPUT] | Fulfilment |
| Currency conversion assumption | [MERCHANT INPUT] | Finance |
| Currency fluctuation buffer | [MERCHANT INPUT] | Finance |
| PayFast fee | [MERCHANT INPUT] | Finance |
| Shopify transaction fee | [MERCHANT INPUT] | Finance |
| Packaging/handling | [MERCHANT INPUT] | Operations |
| Refund/return reserve | [MERCHANT INPUT] | Finance |
| Failed-delivery reserve | [MERCHANT INPUT] | Operations |
| Support allowance | [MERCHANT INPUT] | Support |
| Promotion allowance | [MERCHANT INPUT] | Merchandising |
| Desired contribution margin | [MERCHANT INPUT] | Merchant |

```
Supplier landed cost = CJ product cost + CJ shipping charge + conversion buffer
Other variable costs = PayFast fee + Shopify fee + handling + refund reserve + failed-delivery reserve + support allowance + promotion allowance
Contribution before free shipping = selling price - supplier landed cost - other variable costs
Contribution after merchant-funded shipping = contribution before free shipping - merchant-funded shipping amount
```

Do not approve a free-shipping threshold until contribution after merchant-funded shipping is positive at the representative product mix and intended average order value.

## Decision Routes

| Route | Benefit | Risk and dependency | Required changes after approval | Required test |
| --- | --- | --- | --- | --- |
| A. Honour R500 | Matches current announcement; clear customer proposition. | Requires margin proof across baskets and CJ routes. | Configure free Standard from R500; retain aligned copy. | SA checkout below/above R500 across provinces. |
| B. Retain R770 | Matches current checkout configuration. | Current announcement becomes misleading. | Update announcement and all affected content later. | Checkout and content-link QA. |
| C. Transparent flat rates | Lowest margin ambiguity while early economics are unknown. | Removes promotional incentive; requires clear customer wording. | Remove free-shipping claim; retain approved flat rates. | Checkout and support-content QA. |

## Delivery-Promise Gate

The displayed 3-5 and 1-2 business-day estimates are not supported by confirmed CJ service-level evidence. Merchant confirmation required for each selected CJ route, cut-off, destination coverage, dispatch process, and exception handling. Until then, remove the estimates or replace them with broader non-guaranteed wording after approval.

Recommendation: choose Route C unless Route A is proved sustainable through the completed model. The final threshold and delivery wording remain merchant decisions.
