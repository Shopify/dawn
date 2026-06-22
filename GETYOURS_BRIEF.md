# Get Yours — Shopify Dawn Theme Customisation

> **Project type:** Frontend/theme customisation only  
> **Base theme:** Shopify Dawn v15.5.0  
> **Branching strategy:** Trunk-Based Development (TBD)  
> **Working branch:** `feature/getyours-booster-inspired-theme`  
> **Target:** Premium, Booster-inspired, mobile-first storefront

---

## 1. Project Overview

Transform Shopify Dawn into a premium multipurpose ecommerce theme for **Get Yours**, inspired by Booster Theme’s layout, spacing, product placement, clean white background, discount tiles, subtle material-design cards, and conversion-focused merchandising.

**Brand colours (from logo):**
- Primary dark / text: `#3A3A3A`
- Accent magenta (CTA, sale): `#DE1C67`
- Accent blue (trust, links): `#0081D8`
- Background: White `#FFFFFF`
- Soft background: `#F7F8FA`

---

## 2. Completed Phases

### Phase 1: Setup & Audit ✅
- [x] Clone `Siya360/getyours`
- [x] Add Shopify Dawn upstream
- [x] Create working branch
- [x] Copy logo to `assets/get-yours-logo.svg`
- [x] Inspect Dawn structure
- [x] Check tooling (Node v22, npm v10)

### Phase 2: Brand Foundation ✅
- [x] Create `assets/getyours-theme.css` — design tokens (colours, spacing, radius, shadows, typography)
- [x] Create `assets/getyours-components.css` — button overrides, card elevation, input styling
- [x] Link stylesheets in `layout/theme.liquid`
- [x] Update `config/settings_schema.json` theme name to "Get Yours"

### Phase 3: Homepage Sections ✅
- [x] `sections/getyours-hero.liquid` — editable hero with dual CTAs
- [x] `sections/getyours-category-tiles.liquid` — image-first category grid
- [x] `sections/getyours-promo-grid.liquid` — promotional/discount tiles
- [x] `sections/getyours-trust-strip.liquid` — horizontal reassurance strip
- [x] `sections/getyours-brand-story.liquid` — editorial value proposition
- [x] Compose `templates/index.json` with section order

### Phase 4: Product Cards & Collection UX ✅
- [x] Customise `snippets/card-product.liquid` — rounded corners, shadows, hover lift
- [x] Create `snippets/getyours-sale-badge.liquid` — discount badge
- [x] Update `templates/collection.json` — 4-col desktop, 2-col mobile, square ratio
- [x] Polish collection grid spacing and filter drawer via CSS

### Phase 5: Product Page Conversion UX ✅
- [x] Update `templates/product.json` — conversion-focused block order
- [x] Create `sections/getyours-product-trust.liquid` — trust badges near CTA
- [x] Add collapsible delivery/returns tabs
- [x] Add icon-with-text highlights block
- [x] Improve price/sale treatment via CSS

### Phase 6: Navigation & Mobile UX ✅
- [x] Polish header spacing and tap targets via CSS
- [x] Refine menu drawer styling
- [x] Improve cart drawer typography/padding
- [x] Mobile-specific utilities (larger buttons, full-width drawer, no text zoom)

---

## 3. Outstanding Tasks

### Phase 7: QA & Polish
- [ ] Commit pending schema/template fixes
- [ ] Add newsletter section to homepage (`templates/index.json`)
- [ ] Add trending/best-sellers section to homepage (`templates/index.json`)
- [ ] Run `shopify theme check` (if CLI available)
- [ ] Validate responsive widths (320px → 1440px+)
- [ ] Verify keyboard navigation and focus states
- [ ] Check for console errors
- [ ] Verify image lazy loading
- [ ] Final commit and push
- [ ] Merge to `main` per TBD strategy

### Nice-to-Have (Post-Launch)
- [ ] Sticky add-to-cart on mobile (lightweight JS)
- [ ] Mega-menu structure (if navigation grows)
- [ ] Additional promotional section variants
- [ ] A/B test CTA copy and colours

---

## 4. Files Created

### Assets
- `assets/get-yours-logo.svg`
- `assets/getyours-theme.css`
- `assets/getyours-components.css`

### Sections
- `sections/getyours-hero.liquid`
- `sections/getyours-category-tiles.liquid`
- `sections/getyours-promo-grid.liquid`
- `sections/getyours-trust-strip.liquid`
- `sections/getyours-brand-story.liquid`
- `sections/getyours-product-trust.liquid`

### Snippets
- `snippets/getyours-sale-badge.liquid`

### Templates (Modified)
- `templates/index.json`
- `templates/product.json`
- `templates/collection.json`

### Config / Layout (Modified)
- `layout/theme.liquid`
- `config/settings_schema.json`
- `config/settings_data.json`

### Dawn Files Modified
- `snippets/card-product.liquid` — sale badge integration, card styling hooks

---

## 5. Shopify Admin Setup Notes

After deploying the theme, configure in **Shopify Theme Editor**:

1. **Header**
   - Upload Get Yours logo (if wordmark needed, upload separately)
   - Configure navigation menu

2. **Homepage**
   - Hero: upload lifestyle/hero image, set headline/subheadline
   - Category tiles: assign collection images and links
   - Promo grid: set promotional copy and links
   - Featured collection: select target collection
   - Trust strip: verify icons and copy
   - Brand story: upload brand image, edit copy
   - Newsletter: configure heading and subheading
   - Trending: select "best-sellers" or trending collection

3. **Product Page**
   - Trust highlights: verify icons match messaging
   - Delivery/returns tabs: update content to match actual policy
   - Related products: verify recommendations are enabled

4. **Collection Page**
   - Collection image and description
   - Filter groups (if using Shopify Search & Discovery)

5. **Colour Schemes**
   - The theme uses Dawn’s colour scheme system; customise via Theme Editor if needed
   - Get Yours CSS variables override most surface colours

---

## 6. Risks & Assumptions

| Risk | Mitigation |
|------|------------|
| Shopify CLI not installed locally | Code written assuming standard Dawn/Shopify CLI; preview via `shopify theme dev` once installed |
| Logo SVG is mark-only (no wordmark) | Using `shop.name` as text beside logo; upload wordmark via Theme Editor if desired |
| No sticky add-to-cart JS | Avoided to prevent cart breakage and accessibility issues |
| Dawn updates from upstream | Merge upstream changes carefully; Get Yours CSS is additive and should survive most updates |

---

## 7. How to Preview Locally

```bash
cd /Users/thabisoradebe/Developer/projects/getyours

# If Shopify CLI is installed:
shopify theme dev --store <your-store-name>.myshopify.com

# If using npm-run shopify (if installed locally):
npx shopify theme dev --store <your-store-name>.myshopify.com
```

---

## 8. TBD Branching Strategy

- **Trunk:** `main`
- **Feature branches:** Short-lived branches off `main`, merged via PR or fast-forward merge
- **Current branch:** `feature/getyours-booster-inspired-theme`
- **Next step:** Complete Phase 7, merge to `main`, delete feature branch

---

*Last updated:* 2026-06-23
*Next review:* After Phase 7 completion
