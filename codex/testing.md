# Testing

The theme uses [Playwright](https://playwright.dev/) for UI testing.

Jump to:

- [How to write tests](#how-to-write-tests)
- [Screenshot and visual regression testing](#screenshots-and-visual-regression-testing)

## Setup

Before running tests, get your development environment ready.

1. Install dependencies: `npm install`
2. Have collaborator access to the testing store: `59364a-2.myshopify.com`

Verify access by logging in: `shopify theme dev --store 59364a-2`

### Troubleshooting

Verify the `npm install` runs correctly, and that `npm run which:shopify` returns the `@shopify` package local to the project - not your global one, or a file in some other location.

Past troubleshooting:

- If you get an error about `@shopify/cli` or `shopify` not being found, then you haven't downloaded the project dependencies. Run `npm install`.
- If you are told you need store permission, try logging out and back in again. Run `shopify auth logout`, then logging back in `shopify theme dev --store 59364a-2`
- If your local Playwright session is stuck on the password page, there may be an authentication error when accessing your store. This can be seen as redirects in the Network tab. Verify you're using the project's `@shopify` package and you can login to the store.
- If you get an error in the Playwright UI about `WebServer: "Command 'theme dev' not found.`, then the web server is failing to use the project's local version of `@shopify/cli`.
- If you still have issues with running `shopify` in Playwright: run `npx @shopify/cli theme dev --store 59364a-2 --port 3000`. This will temporarily download and use the latest version of the `@shopify/cli` package.

## Demo store considerations

The `sessions.setup.js` script sets a few variables for the test suite:

- sets the `?country` parameter to `US` so all test runs initially use USD, regardless where the test is run from geographically.
- sets `pb=0` to hide the preview bar so it doesn't show up in screenshot tests or get in the way of clicking elements.
- submits the `?password` through a URL param to quickly sign-in to the password protected store

### Exposing the demo store password

⚠️ If we make the repo public, we need to change the demo store to reflect what we want a public audience to see.

The online store and password are purposely included in the `.env` file. This is to make it easier to test locally, and for users to change the test store.

Exposing the demo store and password is not a security risk as we want people to view the demo store. It just happens to be behind a password.

### Product and collection data

While we want our tests to be written for any store, we do need to have perfect information about the product and collection data we are testing against. e.g. If we test a product's add to cart button, we need to know that product exists and is available to purchase.

You will see a number of hardcoded URL paths to test, this is based on the demo store's content.

## Running tests

Tests are organized under the `tests/themes` directory. We have multiple themes because tests for theme-level settings are mutually exclusive. See [How to write tests](#how-to-write-tests) for more details. The majority of tests are written for the `theme1` test environment. Scripts will default to that environment, unless otherwise specified. The correct development preview is managed by setting a `--path` flag when running `shopify theme dev` - [Shopify.dev Docs](https://shopify.dev/docs/api/shopify-cli/theme/theme-dev#flags-propertydetail-pathvalue).

### Local testing

To run tests locally, you can use the following command:

- `npm run test:ui` - Run tests in UI mode, which will open a browser and show Playwright traces.
- `npm run test` - Run tests in headless mode, which will not open a browser.
- `npm run test:chrome` - Run tests only in a Chrome environment.
- `npm run test:safari` - Run tests only in a Safari environment.

### Testing in CI

Tests are run in CI with GitHub Actions. At the end of the test run, the browser is closed and the test results are uploaded to the GitHub Actions artifacts.

If tests fail, the artifacts will include a `test-results` folder with zips of the traces. You can download these and open them in the [Playwright Trace Viewer](https://trace.playwright.dev/) to see what went wrong. More information about Playwright traces can be found [here](https://playwright.dev/docs/trace-viewer).

To view the traces locally after you've downloaded them, run the following command:

```bash
npx playwright show-trace path/to/trace.zip
```

## How to write tests

Testing is focused on the UI and the user experience. Your tests should be focused on what the user can perceive and interact with; which includes what is communicated via screen readers. See Playwright's philosophy on [test user-visible behavior](https://playwright.dev/docs/best-practices#test-user-visible-behavior). For more project-specific guidance, see [Recommended testing patterns](#recommended-testing-patterns).

There are 4 types of test files:

- **Section and blocks**. These rely on creating alternative view templates for a resource which has different configurations of sections and blocks saved. See [Testing sections and block](#testing-sections-and-blocks)
- **Header and footer section groups**. These sections need to be setup for alternate layout templates, see [testing header and footer section groups](#testing-header-and-footer-section-groups).
- **Theme settings**. Different configurations of `settings_data.json` that make theme-level settings, see [testing theme settings](#testing-theme-settings)
- **Templates**. Final test type that is primarily used for integration tests of multiple sections together. see [testing templates](#testing-templates)

The majority of tests are written in the `tests/themes/theme1` environment since that is the default env for test scripts. If you need to write tests that rely on specific theme-level settings, then you should choose a new test theme.

### Testing sections and blocks

We run a test on a section by rendering it in an **[alternate template view](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates)** that does not ship with the theme. For example, `index.test-accordion.json`. This gives us a dedicated URL to test different configurations of the section on the relevant template.

Each section has a dedicated folder in the `tests/` folder. e.g. `tests/accordion/`. This folder has:

1. `accordion.test.js`: the playwright test file.
2. `index.accordion.json`: the alternate template configuration which is uploaded to a store's theme and tested against.

The `setupTheme` script will append "`test-`" to the alternate view before uploading to your store. e.g. `index.test-accordion.json`. This makes it easy to identify template files to ignore in the repo.

### Testing header and footer section groups

Different configurations of header/footer section groups can be tested in alternative `layout/theme.liquid` files. For example, testing different header configurations of localization selectors and menu settings.

When you run `npm run test:create`, it will:

1. Create a new layout file based on `theme.liquid`, prepending the `test-` prefix to the file name.
1. Copy your test template and section files to the theme, prepending the `test-` prefix to the file names.
1. In the new layout file, replace the `header-group` sections reference with your new test section group.

This is based on a `layout.config.json` file that specifies which layout to copy and what sections to replace further covered below.

#### How to create header and footer group tests

You'll need three files in a new `tests/sections/` folder. Using a `localization` test suite example:

1. A `layout.config.json` file that specifies which layout to copy and what sections to replace:

   ```json
   {
     "layout_to_replace": {
       "from": "theme.liquid",
       "to": "localization.liquid"
     },
     "layout_sections_to_replace": [
       {
         "from": "header-group",
         "to": "header-localization"
       }
     ]
   }
   ```

2. A section file for your test header group (e.g. `header-localization.section.json`):

   ```json
   {
     "name": "Test Localization Header",
     "type": "header",
     "sections": {
       "header": {
         "type": "custom-header",
         "settings": {
           "enable_language_selector": true,
           "enable_currency_selector": true
         }
       }
     },
     "order": ["custom-header"]
   }
   ```

3. A template file that uses your test layout (e.g. `index.header-localization.template.json`). The `layout` field must match the `to` field in the `layout.config.json` file.

   ```json
   {
     "layout": "test-header-localization",
     "sections": {
       "main": {
         "type": "main-index",
         "settings": {}
       }
     },
     "order": ["main"]
   }
   ```

When you run `npm run test:create`, it will:

1. Copy your template and section files to the theme
2. Create a new layout file based on theme.liquid
3. Replace the `header-group` sections reference with your new test section group
4. Allow you to test your header configuration in isolation

#### Test multiple configurations of a section

If a section has a number of meaningful, mutually exclusive configurations to test against, make a new alternate view for each setup. For example: a `product-card.liquid` block needs to test the add-to-cart functionality when a "quick add" feature is enabled and also when it is disabled. Create two alternate views, but keep the names generic so they can be used for other tests with mutually exclusive configurations. i.e. `index.product-card-simple.json` and `index.test-product-card-complex.json`.

### Testing theme settings

Unlike sections and templates, Theme Settings configurations are mutually exclusively - we cannot write alternate `view` templates for the information saved in `settings_data.json`. Instead, we create different instances of a theme to test in the `tests/` directory. i.e. `theme1` and `theme2`.

The `createTestThemes.js` contains a `newThemeSettingsData` array of different `settings_data.json` values to overwrite from the initial `settings_data.json` file. For example:

```js
const newThemeSettingsData = [
  {
    quick_add: true,
  },
  {
    quick_add: false,
  },
];
```

This will create 2 new test themes under `tests/themes`: `theme1` and `theme2`. Each has identical `config/settings_data.json`, except for the `quick_add` setting. The rest of the files are symlinked (symbolic link) to the base theme so that any changes are immediately reflected in all test themes.

These themes have their respective test suites in the `tests/suites` folder.

### Testing templates

The `templates/` folder contains the templates that are tested against. This is used when either:

1. there a not relevant sections to test, such as checking the homepage's title or the content of a password protected page.
2. the test verifies how multiple sections work together, effectively an integration test.

The `templates/` folder should be used **sparingly**. Our tests should be scoped to the block/section implementation level, since sections can be shared across multiple templates and we don't want to recreate the same test suite for multiple templates unnecessarily. Additionally, the add-to-cart flow is currently the only integration test we should be concerned with that requires testing UI across multiple disparate sections. Other integration-like tests should be scoped to the section-level, such as verifying a `filters` block's functionality affects the `product-grid` block's functionality.

## Recommended testing patterns

Guidance on writing your tests.

### Page Object Model

The [Page Object Model pattern](https://playwright.dev/docs/pom) encapsulates component structure and behaviour to classes. This centralizes the shared logic between tests for different configurations of the same theme sections and blocks. The benefits of this approach:

- Reduces code duplication by centralizing selectors and common operations
- Makes tests more readable by abstracting implementation details out of a single test case
- Simplifies maintenance by having section/block-specific code in one place

All page object models are stored in the `tests/page-object-models` directory, organized by section or block type.

For example, instead of repeating selector logic across tests:

```typescript
// Without Page Object Model ❌
test('add to cart flow', async ({ page }) => {
  await page.goto('collections/all-clothing?view=test-product-card');

  const productCard = page.locator('product-card').first();
  await productCard.hover();
  const openOverlayButton = productCard.getByRole('button', { name: t('actions.add'), exact: true });
  await expect(openOverlayButton).toBeVisible();
  await openOverlayButton.click();
});

// With Page Object Model ✅
test('add to cart flow', async ({ page }) => {
  await cardPage.goToSingleCardPage();

  const productCard = productCardPage.firstCard;
  await productCard.clickQuickAddButton();
});
```

#### Writing POM classes

Follow these criteria when creating classes to be used as POM:

- Add them to the `tests/page-object-models` folder.
- All POM classes end in `Page`, i.e. `ProductCardPage`
  - Don't make a new POM class for each test fixture since the same methods would be reused across multiple section/block configurations. e.g. `verticalFilters` and `horizontalFilters` will share nearly all the same methods. Instead, add a new `page.goTo()` method for each text fixture and any additional methods that may be needed for that new markup.
- Most locators are declared as class properties, i.e. `this.allCards = this.page.locator('product-card');`
- For more complex locators that need parameters, internal logic, etc create a method that starts with `get`, i.e. `getImageById(expectedResetMedia)`. Refrain to use getter functions, since they need to be synchronous.
- The methods that use `page.goTo` start with the words `goTo`, i.e. `goToMultipleCardsPage()`
- Names for locators and functions must be easily understood from within the test suite without having to know the POM internals. i.e. `clickQuickAddButton`, not `clickAddButton` where the context of "add" is unclear.

### Choosing selectors

Use the framework's [built-in locators](https://playwright.dev/docs/locators) whenever possible as they focus on what is exposed to the user. Additionally, using locators based on text removes fragility of specific selectors that can change over time.

**Example**: Selecting a "Submit" button based on role and text label.

```typescript
// ✅ Good: Uses role and name for better accessibility and resilience
page.getByRole('button', { name: 'submit' });

// ❌ Bad: Fragile selector that can break if the ID changes
page.locator('button#submit');
```

#### When user-facing labels aren't available

If a user-facing label is not available, it's often a sign to add one - like an icon button with no aria-label. Otherwise, use the following options instead of an ID or class selector:

- **Role + specificity filter**: The semenatic meaning of an element with an optional filter. Example: `page.getByRole('button', { name: "back" })`, or `page.getByRole('radio').first()`
- **Web components**: Select by the web component tag name or its `ref` attributes. These are less likely to change than a particular HTML tag as any change is effectively an API change. Example: `searchModal.locator('[ref="resultsItems[]"]')`
- **Form elements**: Selecting by the `name` attribute is acceptable when it is linked to an API payload. Useful for when the user-facing content is dynamic and not known to the test. Example: `page.locator('input[name=id]')`;
- **Test IDs**: Use the locator [`getByTestId()`](https://playwright.dev/docs/api/class-frame#frame-get-by-test-id) for times when you need to target an area with no user-facing or semantic meaning. Example: `getByTestId('header-top-left')`

> [!NOTE]
> It is a conscious choice to limit the use of `data-testId` selectors. Aim to keep the [Playwright testing philosophy](https://playwright.dev/docs/best-practices#test-user-visible-behavior) that tests based on what is visible and meaningful to the end-user.

#### Handling multiple matching elements

If your selector risks matching multiple elements on the page, include a custom element selector (or other more specific selector) first in the chain. For example, if you are targeting a "Clear" button, there may be multiple buttons for search boxes and filters that match the selector `page.getByRole('button', { name: 'clear' });`.

```typescript
// ✅ Good: More specific and less likely to break
page.locator('custom-element').getByRole('button', { name: 'clear' });

// ❌ Bad: May match multiple elements, and you'll be returned the first one
page.getByRole('button', { name: 'clear' });
```

## Screenshots and visual regression testing

Playwright has a [visual comparison](https://playwright.dev/docs/test-snapshots) used for screenshot tests.

Each test file that runs a snapshot test has "baseline" images for the expected image at different viewport sizes, browsers, and operating systems. When there is a pixel ratio difference above 2% the test fails. If the visual difference is intentional, then a new baseline snapshot is needed; see [how to update screenshots](#how-to-update-screenshots).

When running snapshots locally, images are compared to the `*-darwin.png` operating system. Tests on CI are compare the `*-linux.png` images. Screenshot test should always be compared in the exact same environments for more predictable comparisons. For example, between environments, there can be difference in rendering (pixel density, sub-pixels diffs) and image heights when a component/locator is captured instead of the whole viewport.

### Ignoring snapshot tests

We can remove snapshot tests from CI if they prove to be too flaky. Update the `.github/playwright.yml` workflow to include `--ignore-snapshots` [Playwright docs reference](https://playwright.dev/docs/test-cli#reference). Example below:

This will remove it for all future PRs, so the root of flakiness should be figured out so we can re-implement it asap.

```bash
- name: Run Playwright tests
  env:
    PLAYWRIGHT_CI_URL: ${{ env.PREVIEW_URL }}
    SHOPIFY_STORE_PASSWORD: "horizon"
  run: npx playwright test
  # To ignore snapshots, uncomment the following line
  # run: npx playwright test --ignore-snapshots
```

### Web fonts

Because the tests are run in different operating systems (Linux on CI, darwin for Macs locally), we cannot use system fonts in the theme since that will fail a visual regression test. To resolve this, we use web fonts in all test themes.

Each test theme has a separate `settings_data.json` that overwrites the fonts used in the theme. See the `createTestThemes.js` script.

### How to update screenshots

Tests that fail because a snapshot doesn't exist yet automatically create a new baseline image for you. If there's an existing image, you'll need to replace it.

After running `npm run test:ui` to verify the correctness of images:

#### Update locally

Update the `-darwin.png` images by running `npm run test:updateSnapshots`. This will re-run the whole test suite in headless mode and you will see new PNG files next to the relevant test files.

Update snapshots for a single test: `npx playwright test <path-to-test> --update-snapshots`.
Example: `npx playwright test tests/theme1/templates/password/password.spec.js --update-snapshots`

#### Update remotely (CI)

Remotely update the `-linux.png` images by running the workflow action **Update Playwright Snapshots**. Choose your PR's branch as the target branch and run it, not `main`. A new PR will be created and after verifying the images, merge it into your PR's branch.

By default, all the tests in the suite will be run. You can limit it to a specific test path by providing a `test_path` in the workflow input. For example: `tests/theme1/templates/password/password.spec.js` will run the command:

```bash
npx playwright test tests/theme1/templates/password/password.spec.js --update-snapshots
```

This is useful if you're concerned about generating new baseline images outside the scope of your tests. Ideally, this will not be necessary and the whole test suite can be run and return images only relevant to your changes.

## Accessibility testing

### Testing with Playwright

Playwright offers https://playwright.dev/docs/accessibility-testing through the AXE package. With this add-on you can easily run an automated check in all or parts of the rendered page.

```js
const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
expect(accessibilityScanResults.violations).toEqual([]);
```

When testing components it is recommended to use the `.include()` feature ([see the docs](https://playwright.dev/docs/accessibility-testing#configuring-axe-to-scan-a-specific-part-of-a-page)) to scope the analysis to the relevant part of the page.

```js
const accessibilityScanResults = await new AxeBuilder({ page }).include('[data-testid="section-content"]').analyze();
expect(accessibilityScanResults.violations).toEqual([]);
```

If the page or component that you are testing has different statuses it is important to test all of them, including error messages, empty states, etc.

The most simple accessibility tests can be written using the [`runAccessibilityTest`](../tests/utils/accesibilityTests.js) utility. This utility doesn't provide the option to interact with the page before running the test, so it's not useful for components that require it, for example to open a drawer.

### Compliance level

Right now we are using the default checks by AXE core, which is a WCAG 2.1 AA compliance level, and some extra best practices. Check out all the rules [here](https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md).

WCAG 2.2 and AAA rules are currently disabled by default in AXE core (2.2 will be enabled in the future at some point), but tags can be enabled or disabled as pleased even in a case-by-case basis using the [`withTags` feature in Playwright](https://playwright.dev/docs/accessibility-testing#scanning-for-wcag-violations)

### Testing manually

Accessibility cannot be properly tested only by automated tools. To properly judge if a page is accessible by people with different capacities, you'll need to test manually and use your common sense. For example, an automated tool can detect when an element doesn't have a label, but it can't know if the label is descriptive enough.

Some of the tests you can do manually include:

- Navigate the theme only with a keyboard. Are all the features still usable? Can you quickly navigate around?
- Activate [VoiceOver](https://support.apple.com/en-ca/guide/voiceover/welcome/mac) or other screen reader, and compare the text read aloud with the visual experience. Is there any information missing? Is the interface still comprehensible?
- Activate [Voice Control](https://support.apple.com/en-us/111778) and show the tags. Are all the interactive elements tagged? Does the tag text match the text in the screen?
