# Phase 1.5 Repo Hygiene

## Status

Phase 1.5 cleanup is complete.

This pass only cleaned up repository hygiene for the Dawn workspace and documented the next Shopify CLI workflow. No Dawn header, footer, announcement bar, homepage, section, or static prototype conversion work was done.

## Parent Repo Git Status Summary

Parent repo:

- Path: `/Users/thabisoradebe/Developer/projects/getyours`
- Branch: `shopify-dawn-conversion`

Current parent repo status summary:

- Modified files:
  - `.gitignore`
- Deleted tracked files:
  - `374` tracked root-level files are deleted.
- Untracked files/directories:
  - `AGENTS.md`
  - `get-yours-shopify-theme/`
  - `get-yours-static-prototype/`

## Nested Dawn Git Metadata

Before cleanup:

- `get-yours-shopify-theme/.git` existed.
- `git -C get-yours-shopify-theme rev-parse --is-inside-work-tree` returned `true`.
- `git ls-files --stage get-yours-shopify-theme` returned no parent-tracked gitlink entry, so the folder had not yet been committed as a submodule, but it was an embedded Git repository risk.

Action taken:

```sh
rm -rf get-yours-shopify-theme/.git
```

After cleanup:

- `get-yours-shopify-theme/.git` no longer exists.
- `find get-yours-shopify-theme -maxdepth 2 -type d -name .git -print` returns no nested Git metadata.
- `git status --short --untracked-files=all get-yours-shopify-theme` now lists individual Dawn theme files as normal untracked files visible to the parent repo.

Conclusion:

- The Dawn folder is no longer an embedded Git repo.
- The parent Get Yours repo can now track the theme files directly.

## Root-Level Deleted File Findings

The parent repo still has `374` deleted tracked files at the repository root.

Deleted-file summary by top-level path:

```text
1   GETYOURS_BRIEF.md
1   LICENSE.md
1   README.md
194 assets
2   config
2   layout
51  locales
1   release-notes.md
61  sections
40  snippets
20  templates
```

These deleted paths strongly look like an older Dawn theme that previously lived at the repository root:

- `assets/`
- `config/`
- `layout/`
- `locales/`
- `sections/`
- `snippets/`
- `templates/`
- Dawn root docs such as `LICENSE.md`, `README.md`, and `release-notes.md`

They also include Get Yours custom root-level Dawn work, for example:

- `assets/get-yours-logo.svg`
- `assets/getyours-components.css`
- `assets/getyours-theme.css`
- `sections/getyours-brand-story.liquid`
- `sections/getyours-category-tiles.liquid`
- `sections/getyours-hero.liquid`
- `sections/getyours-product-trust.liquid`
- `sections/getyours-promo-grid.liquid`
- `sections/getyours-trust-strip.liquid`
- `snippets/getyours-sale-badge.liquid`

Recommended cleanup approach:

- Treat the root-level deleted files as a separate repository cleanup decision from Phase 2 visual conversion.
- If the new source of truth is `get-yours-shopify-theme/`, keep the root-level Dawn deletions and commit them intentionally as cleanup.
- If any prior Get Yours Liquid work inside the deleted root-level files is still valuable, recover or compare it before committing the deletions.
- Prefer a dedicated cleanup commit for root-level Dawn removal, separate from later header/footer/theme conversion work.

## Recommended Commit Approach

Recommended commit grouping:

1. Commit Phase 1 and Phase 1.5 foundation files:
   - `AGENTS.md`
   - `get-yours-shopify-theme/`
   - relevant documentation under `get-yours-shopify-theme/docs/`

2. Decide separately whether to commit the root-level deleted Dawn files:
   - Commit the deletions if the repository root should no longer be a Shopify theme.
   - Restore or archive any useful prior Get Yours Liquid work before committing the deletions.

3. Keep the frozen static prototype separate:
   - Do not convert or edit `get-yours-static-prototype/` during Dawn conversion setup.
   - Use it as visual and UX reference only.

## Shopify CLI Store Workflow

Preferred workflow:

- Keep `get-yours-shopify-theme/` as the local source.
- Use Shopify CLI to preview against store data during conversion.
- Push to an unpublished development theme when ready for stakeholder preview.
- Do not push to the active live theme during Phase 2.

Confirmed by Shopify CLI help:

- `shopify theme dev` supports `--store` and `--path`.
- `shopify theme push` supports `--store`, `--path`, and `--unpublished`.

Suggested future local preview command:

```sh
shopify theme dev --store getyours-9322.myshopify.com --path get-yours-shopify-theme
```

Suggested future unpublished theme push:

```sh
shopify theme push --store getyours-9322.myshopify.com --path get-yours-shopify-theme --unpublished
```

Warnings:

- Do not use `--allow-live`.
- Do not use `--publish`.
- Do not push to the active live theme until the Dawn conversion has passed full QA.
- Store authentication may be requested the first time either command is run.

## Phase 2 Readiness

Phase 2 can begin safely from a repository structure perspective because:

- The Dawn theme folder is no longer an embedded Git repository.
- The parent repo can track `get-yours-shopify-theme/` files normally.
- The Shopify CLI workflow for local dev and unpublished pushes is documented.

Before committing, make a deliberate decision about the existing root-level deleted Dawn files so the commit history is clear.
