# Phase 1 Dawn Setup

## Status

Phase 1 foundation setup is complete.

This phase created a Dawn-based Shopify theme workspace for Get Yours without converting the static prototype into Liquid templates yet.

## Branch

- Working branch: `shopify-dawn-conversion`

## Theme Location

- Dawn theme folder: `get-yours-shopify-theme/`
- Static prototype reference folder: `get-yours-static-prototype/`

The new theme was scaffolded from Shopify Dawn using Shopify CLI:

```sh
shopify theme init get-yours-shopify-theme --clone-url=https://github.com/Shopify/dawn.git
```

The scaffolded Dawn version is `15.5.0` based on `config/settings_schema.json`.

## Files Created Or Copied

Created:

- `AGENTS.md`
- `get-yours-shopify-theme/assets/gy-theme.css`
- `get-yours-shopify-theme/docs/phase-1-dawn-setup.md`

Copied from the static prototype:

- `get-yours-shopify-theme/assets/get-yours-logo.svg`
- `get-yours-shopify-theme/docs/static-site-audit.md`
- `get-yours-shopify-theme/docs/final-ui-ux-audit.md`
- `get-yours-shopify-theme/docs/shopify-theme-roadmap.md`
- `get-yours-shopify-theme/docs/dawn-conversion-plan.md`

## Brand Token Layer

`get-yours-shopify-theme/assets/gy-theme.css` contains the Get Yours brand token layer only. It does not redesign Dawn or replace Dawn component styling.

Current tokens:

```css
--gy-blue: #0081D8;
--gy-navy: #073A66;
--gy-navy-deep: #063A66;
--gy-yellow-logo: #FFD200;
--gy-gold: #F5B700;
--gy-gold-soft: #FFF4CC;
--gy-blue-soft: #EAF6FF;
--gy-bg: #F5F7FA;
--gy-surface: #FFFFFF;
--gy-border: #E4E7EC;
--gy-text: #1F2933;
--gy-muted: #667085;
--gy-success: #16A34A;
```

The logo SVG confirms:

- Primary blue: `#0081D8`
- Logo yellow: `#FFD200`

## Theme CSS Loading

`get-yours-shopify-theme/layout/theme.liquid` now loads the Get Yours token stylesheet immediately after Dawn `base.css`:

```liquid
{{ 'base.css' | asset_url | stylesheet_tag }}
{{ 'gy-theme.css' | asset_url | stylesheet_tag }}
```

## Settings Review

Reviewed only:

- `get-yours-shopify-theme/config/settings_schema.json`
- `get-yours-shopify-theme/config/settings_data.json`

No settings files were modified in Phase 1.

Relevant future conversion notes:

- Dawn already supports logo image and logo width settings.
- Dawn color schemes remain stock for now and should be mapped to Get Yours brand colours in a later controlled pass.
- Button radius, card radius, inputs, product cards, and section spacing are available through Dawn settings and should be adjusted later only after the first Liquid section conversion decisions are made.

## Reversed Logo

No `get-yours-logo-reversed.svg` was created in Phase 1. A reversed logo should be produced from the source brand artwork or approved manually before being used on navy backgrounds.

## Shopify CLI And Auth Status

- Shopify CLI is installed and reports version `4.4.0`.
- During scaffolding, Shopify CLI auto-upgraded via Homebrew from an older installed version.
- Store authentication was not required for local scaffold or Theme Check.
- Store connection and preview authentication still need to be handled before `shopify theme dev` or theme push workflows.

## Validation

Completed:

- Verified Dawn theme files exist under `get-yours-shopify-theme/`.
- Verified copied reference docs exist under `get-yours-shopify-theme/docs/`.
- Verified `assets/get-yours-logo.svg` exists.
- Verified `assets/gy-theme.css` exists.
- Verified `layout/theme.liquid` loads `gy-theme.css`.
- Inspected Dawn settings schema and settings data without modifying them.
- Ran Shopify Theme Check.

Theme Check result:

- `169` files inspected.
- `8` warnings.
- `0` errors.

Warnings reported by Theme Check:

- `layout/password.liquid`: existing Dawn `scheme_classes` undefined-object warning.
- `layout/theme.liquid`: existing Dawn `scheme_classes` undefined-object warning.
- `sections/main-article.liquid`: existing Dawn variable naming warning for `anchorId`.
- `sections/main-list-collections.liquid`: existing Dawn variable naming warning for `moduloResult`.
- `sections/main-product.liquid`: existing Dawn unused assign warning for `seo_media`.
- `sections/main-product.liquid`: existing Dawn `continue` undefined-object warning.
- `sections/main-search.liquid`: existing Dawn unused assign warning for `product_settings`.
- `snippets/quick-order-product-row.liquid`: existing Dawn orphaned snippet warning.

These warnings are from the stock Dawn scaffold and were not introduced by the Get Yours token layer, except that `layout/theme.liquid` is now marked modified because it loads `gy-theme.css`.

## Known Issues

- `get-yours-shopify-theme/` was created by cloning Dawn and currently contains its own nested `.git/` folder. This was left intact in Phase 1 to avoid destructive cleanup. Decide whether to remove nested Git metadata before committing this folder into the parent repository.
- The parent repository already had many deleted root-level Dawn files before this phase began. Those pre-existing deletions were not reverted or modified.
- Local shell startup prints a Homebrew-related warning before commands: `(eval):1: no such file or directory: $/opt/homebrew/bin/brew`. It did not block Phase 1 commands.
- No store preview was launched because no Shopify store authentication or theme target was configured in this phase.

## Recommended Phase 2

Recommended next phase: header, announcement bar, footer, and brand settings mapping.

Phase 2 should:

- Decide whether to keep the nested Dawn folder as the main theme workspace or move/flatten it intentionally.
- Remove nested Dawn `.git/` metadata only after explicit approval or as part of a commit-prep task.
- Map Get Yours brand colours into Dawn color schemes.
- Configure or convert the header logo treatment.
- Convert the announcement bar and footer direction from the static prototype into Dawn-compatible settings and sections.
- Keep homepage product rails, product templates, collection templates, cart logic, and static content page conversion for later phases.
