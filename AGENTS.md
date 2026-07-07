# Get Yours Shopify Dawn Conversion Instructions

## Project Role

This repository contains the Get Yours Shopify Dawn conversion work. The static prototype in `get-yours-static-prototype/` is the visual and UX reference, while `get-yours-shopify-theme/` is the Dawn-based Shopify theme foundation.

## Conversion Guardrails

- Keep the static prototype unchanged unless a task explicitly targets it.
- Preserve Dawn behavior, accessibility patterns, section schema conventions, cart behavior, predictive search, localization, and theme editor compatibility wherever possible.
- Do not paste static HTML directly into Liquid templates.
- Convert static prototype patterns into Dawn-compatible sections, snippets, settings, and JSON templates in phased work.
- Do not introduce React, TypeScript, backend services, or non-Shopify runtime dependencies for the storefront theme.
- Avoid broad restructures, formatting churn, and unrelated Dawn changes.
- Keep Get Yours brand tokens centralised in `get-yours-shopify-theme/assets/gy-theme.css`.

## Brand Direction

- Primary blue: `#0081D8`
- Navy: `#073A66`
- Deep navy: `#063A66`
- Logo yellow: `#FFD200`
- Gold accent: `#F5B700`
- Use gold/yellow sparingly for small labels or highlights, not full-width backgrounds.
- The announcement bar and footer should use the navy family.

## Phase Discipline

- Phase 1 is foundation only: Dawn scaffold, copied reference docs, logo asset, token stylesheet, and setup documentation.
- Later phases should build header/footer, homepage sections, collection/product/cart templates, content pages, settings, and QA in separate scoped passes.
- Before changing Dawn Liquid, inspect the relevant Dawn section/snippet/template and follow its existing conventions.

## Validation Expectations

- Run Shopify Theme Check when available.
- Check changed Liquid and JSON files for syntax and schema integrity.
- Document any Shopify CLI, store authentication, or theme preview blockers in `get-yours-shopify-theme/docs/`.
