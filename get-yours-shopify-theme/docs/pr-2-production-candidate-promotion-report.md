# PR-2 Production Candidate Promotion Report

## Outcome

**Published for password-protected private staging.** Theme `141877674087`, `Get Yours — Production Candidate`, was promoted to MAIN after the required local and remote pre-publication checks passed.

The storefront remains password protected. This is not a public launch.

## Pre-Publication Evidence

| Check | Result | Evidence |
| --- | --- | --- |
| Branch | Passed | `shopify-dawn-conversion` |
| Whitespace integrity | Passed | `git diff --check` passed before publication |
| Theme Check | Passed with inherited warnings | 174 files inspected; 8 existing Dawn warnings; no errors |
| Candidate target | Passed | `141877674087`, `Get Yours — Production Candidate`, role `unpublished` |
| Existing MAIN | Passed | `141692731495`, `Dawn`, role `live` |
| CLI development theme | Passed | `141697089639`, role `development` |
| Processing state | Passed | Theme listing contained only `live`, `unpublished` and `development` roles; no processing or failed theme was reported |
| Storefront password protection | Passed | Shopify Admin/API state was independently confirmed enabled. The earlier browser result was invalid because it reused an existing authorized storefront session. |

## Canonical Source Review

The canonical local theme contains the completed production-surface configuration requested for promotion:

- homepage sections and configured Get Yours imagery;
- `R770` free-standard-shipping wording in the announcement bar and product reassurance;
- header assignment to `get-yours-main-menu` and footer assignment to `get-yours-footer-shop`;
- Shop submenu labels for Shop All, Home Organisation, Office & Desk Essentials, Tech Accessories, Travel and Lifestyle;
- Contact navigation, acknowledgement copy and a warning against submitting sensitive payment information;
- product, collection, search and cart JSON templates.

The candidate previously received the complete canonical local-repository push. Its remote metadata matched the requested identity before publication.

## Publication Result

Shopify CLI published exactly `141877674087`. It reported:

`The theme 'Get Yours — Production Candidate' (#141877674087) is now live.`

No theme pull was run. The development theme was not published. The former MAIN theme was not edited, deleted or overwritten; Shopify retained it as the unpublished rollback theme.

## Final Theme Roles

| Theme ID | Theme | Final Role |
| --- | --- | --- |
| `141877674087` | Get Yours — Production Candidate | MAIN / live private staging |
| `141692731495` | Dawn | Unpublished rollback theme |
| `141697089639` | Development (2d9b02-Thabisos-MacBook-Pro) | CLI development |

The post-publication theme listing reported no processing or failed theme.

## Password Protection And Production Domain

- Shopify Admin/API verification: storefront password protection is enabled.
- During the authorized browser session, `https://getyours.online/` rendered the new Get Yours storefront.
- After reloading for responsive checks, the same browser session was returned to `https://getyours.online/password`. This confirms the password boundary remains active; it also ended the automation session's storefront access.
- No password, credential or password-protection setting was requested, recorded or changed.

## Focused Production QA

| Area | Result | Notes |
| --- | --- | --- |
| Homepage rendering | Passed in existing authorized session | Get Yours header, completed promo grid imagery, category grid, product rails and trust section rendered. |
| Announcement | Passed | `FREE STANDARD SHIPPING ON ORDERS OF R770 OR MORE` rendered. |
| Desktop navigation | Passed | Home, Shop dropdown trigger and Contact rendered. |
| Shop destinations | Passed in rendered navigation/footer | Shop All, Home Organisation, Office & Desk Essentials, Tech Accessories, Travel and Lifestyle rendered with intended destinations. |
| Footer Shop links | Passed | Dedicated Shop group rendered; Support and Legal placeholder groups were absent. |
| Account link | Passed | Shopify customer-account login link rendered. |
| Contact copy | Not rechecked after publication | Requires an authorized merchant session because the browser returned to the password page before the route review. |
| Collections, representative products, search and cart | Not completed | Password boundary returned during responsive-reload sequence. No cart mutation was made; an existing one-item cart was observed but left unchanged. |
| 360px, 430px, 768px and 1200px | Blocked | Viewport checks began, then the password boundary ended the authorized storefront session. No measured horizontal overflow was observed on the returned password page. |
| Console and network | Not completed | Deferred to a fresh password-authorized merchant-session QA pass. |

## Remaining Launch Blockers

- Complete the remaining password-authorized production QA: Contact copy, three product routes, collection routes, search, cart lifecycle, responsive layouts, keyboard/Escape behaviour and console/network review.
- Align native Shopify Contact notification routing with the approved public and receiving mailbox, then complete a controlled hosted Contact submission.
- Validate CJ SKU mapping, supplier cost, shipping routes, restrictions and contribution margins.
- Resolve the pending PayFast sandbox refund and complete the held payment tests.
- Confirm shipping-route support, rate names and checkout threshold behaviour.
- Confirm VAT/tax treatment and complete South African legal/policy review.
- Publish approved support and legal pages only after their separate operational and legal gates pass.

## Rollback And Source Of Truth

- Rollback theme: `141692731495` (Dawn), now unpublished and retained unchanged.
- Development theme: `141697089639`, unchanged.
- Git repository remains the source of truth. Do not use `shopify theme pull` in this workflow.

Permanent workflow:

`Git repository -> CLI Development theme -> Unpublished Production Candidate -> Password-protected MAIN theme`

## Naming Follow-Up

The current remote names remain unchanged. A later explicit approval may rename the themes to:

- `141877674087` to `Get Yours — Production`;
- `141692731495` to `Dawn — Legacy Backup — Do Not Edit`;
- `141697089639` to `Get Yours — CLI Development`.

## Strict No-Change Confirmation

The only Shopify mutation was publication of exactly `141877674087` as MAIN. No password setting, payment, shipping, product, collection, inventory, page, policy, order, refund, fulfilment, CJ, domain, customer-data or development-theme configuration was changed. No checkout, Contact submission, order, payment or refund was created. No cart item was added, changed or removed.
