# Repository Guidelines

## Project Structure & Module Organization
- `assets/`: Theme JS, CSS, images, and fonts.
- `layout/`: Global layouts (for example, `theme.liquid`).
- `sections/`: Modular UI blocks used across templates.
- `snippets/`: Reusable Liquid partials.
- `templates/`: Page-level templates (for example, `product.json`, `collection.liquid`).
- `config/`: Theme settings (`settings_schema.json`, etc.).
- `locales/`: Translations. Keep keys consistent and scoped.
- `.github/`: CI, PR templates, contribution docs.

## Build, Test, and Development Commands
- `pnpm dev` or `npm run dev`: Start local dev server via Shopify CLI (`shopify theme dev`).
- `pnpm run pull`: Pull the latest theme files from the configured store.
- `npx shopify theme check`: Lint Liquid and theme structure with Theme Check.
- `npx prettier --write .`: Format files (uses `@shopify/prettier-plugin-liquid`).
- Preact bundles: `cd reax && pnpm install && pnpm build` (outputs `assets/vx-*.js`).

Example: `SHOPIFY_FLAG_STORE=<your-store>.myshopify.com pnpm dev` to point the dev server at a specific store.

## Coding Style & Naming Conventions
- Indentation: 2 spaces for Liquid, JSON, JS, and CSS.
- Liquid: Prefer server-rendered HTML; keep JS progressive and minimal.
- Naming: Use kebab-case for files (for example, `main-product.liquid`), snake_case for translation keys, and descriptive section/snippet names.
- Formatting: Required via Prettier (`.prettierrc.json`); single quotes except in `*.liquid`.
- Linting: Use Theme Check (`.theme-check.yml` governs rules). Keep rules green before opening PRs.

## Preact Integration (reax/ → assets/)
- Source: `reax/src/components/<feature>`. Built with Vite + Preact; entries are defined in `reax/vite.config.ts` and emit to `assets/` as `vx-<feature>.js`.
- Mount points: Liquid renders a root element with a stable id (for example, `stringing-root`, `splus-root`, `remix-modal`, `tshirt-printing-modal`, `track-root`).
- Loading: Liquid snippets lazy-load the matching `vx-*.js` via `<script type="module" defer src="{{ 'vx-<feature>.js' | asset_url }}"></script>` either on interaction or when idle.
- Data flow: Pass data using `data-*` attributes on the root. Read via `document.getElementById('<id>')?.dataset` in `index.tsx`.
- Example snippet pattern:
  - Liquid: `<section id="stringing-root" data-stringing-collection-id="{{ settings.stringing_collection_id }}"></section>` and load `{{ 'vx-stringing.js' | asset_url }}` on demand.
  - Preact: `const el = document.getElementById('stringing-root'); render(<App prop={el?.dataset.stringingCollectionId} />, el!);`

Current Preact-backed features
- Stringing options: `snippets/stringing.liquid` → `assets/vx-stringing.js`.
- S‑Plus options: `snippets/s-plus.liquid` → `assets/vx-splus.js`.
- Remix modal: `snippets/remix.liquid` → `assets/vx-remix.js`.
- T‑Shirt printing: `snippets/tshirt-printing.liquid` → `assets/vx-tshirt-printing.js`.
- Order tracking page: `templates/page.track.json` loads `assets/vx-track.js` into `#track-root`.

## Testing Guidelines
- Primary checks: Theme Check locally and CI. Aim to keep Lighthouse regressions minimal (CI runs Lighthouse audits).
- Manual QA: Verify key flows (home, product, collection, cart, checkout link) in `shopify theme dev`.
- Conventions: For new features, include demo content/settings so reviewers can reproduce.

## Commit & Pull Request Guidelines
- Commits: Write clear, imperative messages (for example, "Add predictive search section"). Group related changes.
- PRs: Use `.github/PULL_REQUEST_TEMPLATE.md`—include summary, linked issue ("Fixes #123"), demo store links, testing steps, and screenshots/GIFs for UI changes.
- Quality gates: Run Theme Check and Prettier locally before pushing. Ensure accessibility, cross-browser, and mobile checks pass.

## Security & Configuration Tips
- Do not commit store credentials. Authenticate locally with `shopify login`. Configure CI secrets in GitHub.
- Keep translations updated in `locales/` and settings in `config/` when adding UI.
