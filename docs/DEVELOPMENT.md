# Cellife development baseline

## Provenance

Recorded 22 October 2026. Local source baseline: Dawn version label `16.0.0`, commit
`258f00f64365e2018ca4c62778a6bf55a5d3cd18`. Keep this immutable commit as the
comparison point for Cellife changes. Shopify's license remains in `LICENSE.md`.

The [official releases page](https://github.com/Shopify/dawn/releases) currently
lists v16.0.0 as latest, pointing to `bc39a7d`. This differs from the local source
commit despite the same version label. The upstream release notes require stores
using legacy customer accounts to upgrade before publishing that release.
**This source has not been verified byte-for-byte against the release tag.**
Do not describe it as a verified exact release or publish it based on its label.

Before visual implementation, fetch the official tag in a network-enabled environment,
compare it with the recorded baseline, inspect release changes and confirm Cellife's
customer-account setup. Then deliberately adopt the release or document why the
existing commit is retained. Never merge upstream main automatically.

```sh
git fetch https://github.com/Shopify/dawn.git tag v16.0.0
git rev-parse v16.0.0^{commit}
git diff --stat 258f00f64365e2018ca4c62778a6bf55a5d3cd18 v16.0.0
```

## Local checks

No frontend build step is required. Python 3 runs the dependency-free JSON syntax
check; Shopify CLI supplies Liquid and schema checks. Install a supported Shopify
CLI version following its official instructions, record `shopify version` with
results, and use the same version across developers when establishing the baseline.

```sh
python3 scripts/check-theme-json.py
shopify theme check
git diff --check
```

JSON validation is not a substitute for Theme Check or storefront testing.
The inherited Theme Check exceptions for MatchingTranslations and TemplateLength
remain unchanged until a real baseline report is available.

CI runs JSON validation and the existing Shopify Theme Check action on pushes and
pull requests with read-only repository permissions. It has no store credentials,
theme upload, Lighthouse deployment, or publication step. The inherited Lighthouse
job was removed because it used store credentials and could write a preview theme.
CLA and stale-issue workflows remain separate inherited repository administration;
they are not deployment workflows.

## Preview workflow

After a development store and its access are authorized, substitute its actual
hostname in the following command. It creates/updates a development theme and
requires authentication; local checking above does not.

```sh
shopify theme dev --store YOUR-DEVELOPMENT-STORE.myshopify.com
```

Use a development store with representative, non-sensitive sample data first.
If an existing store must be used, verify the destination and development theme ID.
Do not use `--allow-live`, `theme publish`, or push to the live theme. Theme
development does not isolate shared discounts, apps, products or Markets settings.
Production configuration and live publication require separate authorization.

Once access exists, capture homepage, collection and product screenshots at mobile
and desktop sizes and record three comparable mobile Lighthouse runs with the real
app stack. Record the store/theme, date, tool version, device/network settings and
median metrics. Until then there is no rendered or performance baseline.

## Initial check record

- Runtime: Node 24.19.0; npm 11.9.0; Python 3 available.
- Shopify CLI and Ruby Theme Check were not installed in this workspace.
- Direct Git access failed because the configured proxy was unreachable. npm
  metadata access also failed to return, so no CLI package/version was installed.
- Release notes were readable through public web retrieval; full tag verification
  remains pending. No upstream code was changed or fetched into the worktree.
- JSON validation and whitespace results are recorded in the completion report.
- Shopify Theme Check, GitHub Actions execution, browser, commerce and performance
  checks remain unrun; no passing result is implied.
