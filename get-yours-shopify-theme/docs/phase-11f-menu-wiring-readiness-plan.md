# Phase 11F Menu Wiring Readiness Plan

## Scope

This document records the read-only Shopify Admin snapshot and prepares a future menu-wiring decision. No page, menu, Contact content, Shopify setting, theme file, or storefront configuration was changed during this phase.

Store requested: `getyours-9322.myshopify.com`

Permanent Shopify authentication domain used: `tdaqk1-nv.myshopify.com`

## Current Navigation State

| Menu title | Menu handle | Existing items | Notes |
| --- | --- | --- | --- |
| Main menu | `main-menu` | Home -> `/`; Catalog -> `/collections/all`; Contact -> `/pages/contact` | Update this menu in place after approval. Do not create a duplicate Main menu. |
| Footer menu | `footer` | Search -> `/search` | Recommended for repurposing as Footer Shop after approval, avoiding an unnecessary duplicate generic footer menu. |
| Customer account main menu | `customer-account-main-menu` | Orders; Profile | Leave unchanged. It belongs to Shopify customer-account navigation, not storefront merchandising or support navigation. |

The current Shopify Admin navigation contains no links to the six new support pages.

## Page Visibility Status

| Page title | Handle | Shopify Page ID | Published | Safe for a customer-visible menu now? |
| --- | --- | --- | --- | --- |
| Help | `help` | `gid://shopify/Page/110941700199` | No | No. Publish first unless the merchant explicitly accepts controlled-QA link risk. |
| Customer Service | `customer-service` | `gid://shopify/Page/110941732967` | No | No. Publish first unless the merchant explicitly accepts controlled-QA link risk. |
| Shipping Information | `shipping-information` | `gid://shopify/Page/110941765735` | No | No. Publish first unless the merchant explicitly accepts controlled-QA link risk. |
| Returns & Refunds | `returns-and-refunds` | `gid://shopify/Page/110941798503` | No | No. Publish first unless the merchant explicitly accepts controlled-QA link risk. |
| Payment Information | `payment-information` | `gid://shopify/Page/110941831271` | No | No. Publish first unless the merchant explicitly accepts controlled-QA link risk. |
| FAQ | `faq` | `gid://shopify/Page/110941864039` | No | No. Publish first unless the merchant explicitly accepts controlled-QA link risk. |

All six Page IDs, titles, handles, and unpublished states were confirmed through a read-only Admin GraphQL query.

## Recommended Menu Structure

### Main Menu

Update the existing `main-menu` in place:

- Home -> `/`
- Shop All -> `/collections/all`
- Home Organisation -> `/collections/home-organisation`
- Office & Desk -> `/collections/office-desk-essentials`
- Kitchen & Storage -> `/collections/kitchen-storage`
- Travel -> `/collections/travel`
- Tech Accessories -> `/collections/tech-accessories`
- Help -> `/pages/help`

Rename the existing Catalog item to Shop All. Move Contact to Footer Support rather than retaining it in the Main menu, subject to final merchant approval.

### Footer Shop Menu

Repurpose the existing `footer` menu as Footer Shop after approval:

- Shop All -> `/collections/all`
- Featured Practical Finds -> `/collections/featured-practical-finds`
- New Arrivals -> `/collections/new-arrivals`
- Best Sellers -> `/collections/best-sellers`
- Home Organisation -> `/collections/home-organisation`
- Office & Desk Essentials -> `/collections/office-desk-essentials`

Remove Search from this menu only during the approved wiring phase. Storefront search remains available through Dawn's search interface.

### Footer Support Menu

Create one dedicated Footer Support menu only after explicit approval:

- Help -> `/pages/help`
- Customer Service -> `/pages/customer-service`
- Shipping Information -> `/pages/shipping-information`
- Returns & Refunds -> `/pages/returns-and-refunds`
- Payment Information -> `/pages/payment-information`
- FAQ -> `/pages/faq`
- Contact -> `/pages/contact`

### Footer Legal Menu

Create one dedicated Footer Legal menu only after explicit approval and only include configured policy destinations:

- Privacy Policy -> Shopify policy URL
- Terms of Service -> Shopify policy URL
- Refund Policy -> Shopify policy URL if configured
- Shipping Policy -> Shopify policy URL if configured

Do not add placeholder or broken policy links. The new Footer Support and Footer Legal menus should not be created until the merchant approves menu wiring.

## Visibility Warning

Unpublished Shopify pages should not be added to customer-visible menus. Storefront visitors may be unable to resolve unpublished page URLs, creating broken or inaccessible support journeys.

Menu wiring should proceed only when one of these conditions is true:

- The six pages have been approved and published before their menu links become customer-visible.
- The store is password-protected or restricted to internal QA, and the merchant explicitly accepts that the links may not resolve for ordinary customers.

Publishing pages and wiring menus are separate state changes. Approval for one does not imply approval for the other.

## Execution Options

### Option A: Publish, Then Wire

Publish the six verified support pages first. Confirm their real URLs load, then wire the approved menus in a separate action. This is the recommended customer-safe sequence.

### Option B: Keep Unpublished And Postpone Wiring

Keep all six pages unpublished and leave navigation unchanged. Use this option while payment, shipping, support, policy, or operational decisions remain unresolved.

### Option C: Controlled QA Wiring

Wire menus only in a password-protected or otherwise controlled QA context after the merchant explicitly accepts the risk that unpublished page links may not resolve for normal customers. Do not use this option for a customer-visible storefront.

## Exact Future Approval Wording

### Approval To Publish Pages Only

> I approve publishing the six verified support pages: Help, Customer Service, Shipping Information, Returns & Refunds, Payment Information, and FAQ. Do not modify menus, Contact, Shopify policies, or theme code.

### Approval To Wire Menus Only

> I approve wiring the Main, Footer Shop, Footer Support, and Footer Legal menus according to the Phase 11F plan. Do not publish or update pages, Contact, Shopify policies, or theme code. I confirm the storefront is a controlled QA context and accept the risk of linking to unpublished pages.

### Approval To Publish Pages And Wire Menus Together

> I approve publishing the six verified support pages and wiring the Main, Footer Shop, Footer Support, and Footer Legal menus according to the Phase 11F plan. Do not update Contact, Shopify policy content, customer-account navigation, or theme code.

## Remaining Blockers

- PayFast activation and testing.
- South Africa shipping-rate setup and testing.
- R500 free-shipping announcement alignment with checkout configuration.
- Tax and VAT confirmation.
- Support email and support-hours decision.
- Final legal and Shopify policy review.
- Complete test order and refund cycle.
- Separate approval for the Contact page update.

## Recommended Next Approval

Choose Option B while launch blockers remain unresolved. When the six page drafts and the relevant operational wording are approved, use the exact Option A sequence: authorize publication of the six pages only, verify their real URLs, then separately authorize menu wiring. Do not combine Contact-page work with either approval.
