# LP-3B Navigation, Support Content And Contact Readiness

## Executive Summary

LP-3B is a read-only navigation and content readiness review. No Shopify menu, page, policy, collection, product, theme setting, payment, order, refund, fulfilment or CJ state changed.

The current storefront navigation is insufficient for launch: `Catalog` should become `Shop`; the footer Support and Legal columns both point to Search; and the six intended support pages remain unpublished. The safe path is to approve content and policies first, then run a separately approved LP-3C Admin mutation phase.

## Current Navigation

| Menu | Current label | Current destination | Working | Correct target | Action required |
| --- | --- | --- | --- | --- | --- |
| Main menu | Home | `/` | Yes | Yes | Retain. |
| Main menu | Catalog | `/collections/all` | Yes | Destination is correct; label is not approved for launch. | Rename to `Shop`; make it the Shop parent or direct Shop All link. |
| Main menu | Contact | `/pages/contact` | Yes | Yes, but Contact is not operationally ready. | Retain only after Contact readiness is approved; otherwise keep as a controlled draft decision. |
| Footer Shop | Home / Catalog / Contact | `main-menu` | Yes | No. This duplicates header navigation rather than shop categories. | Assign a dedicated approved Footer Shop menu in LP-3C. |
| Footer Support | Search | `/search` | Yes | No. Search is not a support destination. | Replace only after approved support pages are published. |
| Footer Legal | Search | `/search` | Yes | No. Search is not a legal destination. | Replace only after policies are reviewed and available. |
| Footer policy bar | Privacy policy | Shopify dynamic policy URL | Observed | Partial. Only Privacy was observed in the preview. | Preserve dynamic policy rendering; do not add policy placeholders. |
| Social | None | N/A | N/A | Yes. | Keep hidden until real profiles are approved. |
| Payment presentation | Shopify dynamic payment types | N/A | Rendered | Pending provider decision. | Do not hard-code payment links or icons. |

The header uses the same `main-menu` for desktop and mobile. The footer currently assigns `main-menu` to Shop and the same `footer` menu to both Support and Legal, which explains the duplicated/misassigned links.

## Approved Header Architecture

The desired information architecture is appropriate, but two proposed grouping collections do not exist yet. Do not wire `Tech & Office` or `Travel & Lifestyle` as single destinations until their collection scope is approved and created.

### LP-3C Launch-Safe Header Proposal

| Label | Intended URL | Current handle/state | Readiness | Required approval |
| --- | --- | --- | --- | --- |
| Home | `/` | N/A | Ready | None beyond LP-3C menu approval. |
| Shop | `/collections/all` | `all` | Ready as parent destination | LP-3C menu approval. |
| Shop All | `/collections/all` | `all`, 20 products observed in QA | Ready | LP-3C menu approval. |
| Home Organisation | `/collections/home-organisation` | `home-organisation`, 8 products | Ready subject to supplier launch approval | LP-3C menu approval. |
| Office & Desk Essentials | `/collections/office-desk-essentials` | 6 products | Ready subject to supplier launch approval | LP-3C menu approval. |
| Tech Accessories | `/collections/tech-accessories` | 5 products | Ready subject to supplier launch approval | LP-3C menu approval. |
| Travel | `/collections/travel` | 4 products | Limited but usable, subject to supplier launch approval | LP-3C menu approval. |
| Lifestyle | `/collections/lifestyle` | 5 products | Limited but usable, subject to supplier launch approval | LP-3C menu approval. |
| Help | `/pages/help` | Page exists but is unpublished | Not ready for customer-visible navigation | Publish page after content approval, then separate menu approval. |
| Contact | `/pages/contact` | Published page/form observed | Ready after contact-operations approval | Contact owner and controlled form-test approval. |

`Best Sellers`, `New Arrivals`, and Deals are excluded from launch navigation. Sales data does not validate Best Sellers, New Arrivals needs ongoing merchandising ownership, and Deals needs verified promotional pricing.

### Header Controls

| Control | Current state | Classification | Required action |
| --- | --- | --- | --- |
| Search | Dawn search and predictive search passed LP-QA-1 | Launch Ready | Retest after final menu work. |
| Account | Log in link redirects to customer-account flow on the primary domain | Ready after testing | Confirm customer account choice and end-to-end account journey before launch. |
| Wishlist | Not observed in the current header | Not implemented | Do not add or imply wishlist functionality. |
| Cart | Cart flow passed, but preview state updates route to primary domain and checkout is still gated | Ready after testing | Retest final cart/checkout handoff after launch settings are approved. |

## Approved Mobile Architecture

```text
Home
Shop
  Shop All
  Home Organisation
  Office & Desk Essentials
  Tech Accessories
  Travel
  Lifestyle
Help
Contact
```

LP-3C verification must confirm expanded/collapsed state, keyboard operation, visible focus, Escape close, focus return to the menu button, touch-target size, unique destinations and no horizontal overflow. The unapproved group labels `Tech & Office` and `Travel & Lifestyle` remain out of the mobile menu until supporting collections exist.

## Approved Footer Shop Menu

| Label | URL | Handle | Product count | Readiness | Dependency |
| --- | --- | --- | --- | --- | --- |
| Shop All | `/collections/all` | `all` | 20 observed in QA | Ready | LP-3C menu approval. |
| Home Organisation | `/collections/home-organisation` | `home-organisation` | 8 | Ready subject to product approval | Supplier mapping and launch shortlist. |
| Office & Desk Essentials | `/collections/office-desk-essentials` | `office-desk-essentials` | 6 | Ready subject to product approval | Supplier mapping and launch shortlist. |
| Tech Accessories | `/collections/tech-accessories` | `tech-accessories` | 5 | Ready subject to product approval | Supplier mapping and launch shortlist. |
| Travel | `/collections/travel` | `travel` | 4 | Limited but usable | Supplier mapping and launch shortlist. |
| Lifestyle | `/collections/lifestyle` | `lifestyle` | 5 | Limited but usable | Supplier mapping and launch shortlist. |

All current collections returned no collection featured image in the read-only collection inspection. This does not prevent text navigation, but collection imagery should be reviewed before any image-led navigation is proposed. A read-only `published_status:published` collection query returned the listed collections, so their current storefront publication state is published.

## Approved Footer Support Menu

| Page title | Intended label | Handle | Publication | Content readiness | Dependencies and correction required |
| --- | --- | --- | --- | --- | --- |
| Help | Help Centre | `help` | Unpublished | Not ready live | R770 wording is aligned; confirm support channel and tracking process. |
| Customer Service | Customer Service | `customer-service` | Unpublished | Not ready live | Confirm inbox, owner, support hours, response wording, cancellation/refund workflow. |
| Shipping Information | Shipping Information | `shipping-information` | Unpublished | Not ready live | R770 copy is aligned; approve rate presentation, route-dependent timing and South Africa-only operation. |
| Returns & Refunds | Returns & Refunds | `returns-and-refunds` | Unpublished | Not ready live | Approve reporting window, eligibility, exclusions, refund process and legal wording. |
| Payment Information | Payment Information | `payment-information` | Unpublished | Not ready live | Confirm final PayFast/PayPal/Test Gateway public presentation; do not promise settlement or refund timing. |
| FAQ | FAQ | `faq` | Unpublished | Not ready live | Align shipping, payment, returns and support answers with approved operations. |
| Contact | Contact Us | `contact` | Published | Ready after controlled test | Confirm recipient inbox, owner, privacy wording, spam handling and realistic response wording. |

No unpublished support page is safe for a customer-visible menu until its content is approved and it is separately published.

LP-3B.1 aligned repository-held support drafts to the approved R770 threshold, route-dependent delivery wording and provider-neutral payment language. The pages remain operationally blocked and unpublished; see `docs/lp-3b-1-content-contact-readiness.md` for the Contact decision register.

LP-3B.2 completed the support-page publication-readiness matrix in `docs/lp-3b-2-support-page-publication-matrix.md`. LP-3B.3 completed the recommended internal operational decision package in `docs/lp-3b-3-merchant-operational-decisions.md`. No page or policy is approved for publication; LP-3C requires separate explicit approval.

## Approved Footer Legal Menu

| Intended label | Source | Intended URL | Current readiness | Required approval |
| --- | --- | --- | --- | --- |
| Privacy Policy | Shopify policy | Shopify policy URL | Privacy policy link is observed; legal content was not approved in LP-3B. | Merchant and South African legal review. |
| Terms of Use | Shopify Terms of Service policy | Shopify policy URL when configured | Not verified as a customer-visible destination. | Merchant and South African legal review. |
| Refund Policy | Shopify policy | Shopify policy URL when configured | Not verified as a customer-visible destination. | Merchant/legal review; must match Returns & Refunds. |
| Shipping Policy | Shopify policy | Shopify policy URL when configured | Not verified as a customer-visible destination. | Merchant/legal review; must match approved R770 and delivery wording. |

Do not create a Footer Legal menu or add placeholders until the policies are configured, reviewed and their URLs are verified.

## Collection Readiness

| Collection | Handle | Products | Featured image | Launch-navigation finding |
| --- | --- | --- | --- | --- |
| Home Organisation | `home-organisation` | 8 | None returned | Suitable. |
| Office & Desk Essentials | `office-desk-essentials` | 6 | None returned | Suitable as a separate destination; not the proposed combined Tech & Office group. |
| Tech Accessories | `tech-accessories` | 5 | None returned | Suitable as a separate destination; not the proposed combined Tech & Office group. |
| Travel | `travel` | 4 | None returned | Suitable as a separate destination; not the proposed combined Travel & Lifestyle group. |
| Lifestyle | `lifestyle` | 5 | None returned | Suitable as a separate destination; not the proposed combined Travel & Lifestyle group. |
| Best Sellers | `best-sellers` | 7 | None returned | Keep off launch navigation until genuine sales data supports the label. |
| New Arrivals | `new-arrivals` | 6 | None returned | Keep off persistent navigation unless a merchant owns the merchandising rule. |

`Tech & Office` and `Travel & Lifestyle` do not currently exist as collections. They are **not ready for navigation** under those labels.

## Page And Contact Readiness

Contact is published at `/pages/contact` and has a standard Shopify form (`Name`, required `Email`, `Phone number`, `Comment`, `Send`). At 360px it had no horizontal overflow. The form posts to Shopify's contact route, but LP-3B did not submit it, so recipient configuration, confirmation/acknowledgement, spam handling and real delivery are unverified. No customer-facing privacy note, public support email, response-time promise or recipient address was observed.

Contact becomes ready only after a monitored recipient, named escalation owner, suitable privacy wording, realistic response wording and separately approved controlled form test are complete.

## Missing And Unsupported Links

- Remove Search from the future Support and Legal menus; the header search control already serves search.
- Do not add Track My Order, international shipping, wishlist, reviews, social profiles, Deals, Best Sellers, Express Delivery, Payflex, Mobicred or unverified payment links.
- Do not surface `Tech & Office` or `Travel & Lifestyle` until an intentional collection exists and is populated.
- Keep the customer account menu (`Orders`, `Profile`) separate from storefront navigation.

## LP-3C Controlled Implementation Plan

| Step | Shopify area | Current state | Approved action | Prerequisite | Verification |
| --- | --- | --- | --- | --- | --- |
| 1 | Support content | Six pages unpublished | Approve each final page body | Shipping/payment/support/legal decisions resolved | No placeholders or unapproved claims remain. |
| 2 | Pages | Six support pages unpublished | Publish only approved support pages | Step 1 and explicit publish approval | Each intended page URL loads. |
| 3 | Policies | Only Privacy link observed; legal state not approved | Confirm/approve policy content and URLs | Legal review | Four approved policy URLs load. |
| 4 | Main menu | Home, Catalog, Contact | Rename Catalog to Shop; create approved hierarchy | Approved collection destinations and Help/Contact readiness | No duplicate or unpublished target. |
| 5 | Footer Shop | Uses `main-menu` | Create/correct dedicated Footer Shop menu | Step 4 collection decisions | All collection links load. |
| 6 | Footer Support | Search only | Create/correct dedicated Support menu | Step 2 | Every support URL is published and correct. |
| 7 | Footer Legal | Search only | Create/correct dedicated Legal menu | Step 3 | Every policy URL is configured and correct. |
| 8 | Development theme | Existing footer block assignments | Assign the three approved menu handles in the theme editor | Steps 4-7 | Header/footer show the correct menu content. |
| 9 | Desktop QA | Existing links incomplete | Verify navigation and destinations | Step 8 | Labels, routes and payment presentation match approval. |
| 10 | Mobile QA | Existing mobile menu mirrors main menu | Verify hierarchy, keyboard and Escape behaviour | Step 8 | Focus, touch size, collapse state and no overflow pass. |
| 11 | Link QA | Support/legal targets not live | Verify every destination | Steps 2-8 | No 404, Search placeholder or duplicate. |
| 12 | Expectation QA | Provider/feature decisions pending | Confirm no unsupported functionality is linked or implied | Payment and launch decisions | No wishlist, fake reviews, tracking or international promise. |

LP-3C requires separate explicit approval. It must not combine content publication, policy edits and menu wiring unless the merchant explicitly authorizes each mutation.

## Strict No-Change Confirmation

LP-3B performed read-only collection, storefront, theme configuration and repository inspection. No Shopify menu, page, policy, theme source, theme-editor assignment, payment, shipping, order, refund, fulfilment, CJ, product, collection or Admin setting was changed.
