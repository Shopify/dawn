import { chromium } from '@playwright/test';

async function globalSetup(config) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    await context.tracing.start({ screenshots: true, snapshots: true });
    const baseUrlObj = new URL(baseURL);
    let homeUrl = new URL('/', baseUrlObj.origin);

    for (const [key, value] of baseUrlObj.searchParams.entries()) {
      homeUrl.searchParams.set(key, value);
    }
    // Add the pb=0 parameter to hide the Preview Bar so it doesn't block the page elements
    homeUrl.searchParams.set('pb', '0');
    // Add the ?country parameter to enforce the country to be US
    homeUrl.searchParams.set('country', 'US');

    await page.goto(homeUrl.toString());

    if (page.url().includes('/password')) {
      const url = new URL(baseURL);
      const searchParams = new URLSearchParams(url.search);
      // Add the ?password parameter to submit the password form by http request
      searchParams.set('password', process.env.SHOPIFY_STORE_PASSWORD);
      // Construct the password bypass URL with all parameters, notably the preview_theme_id parameter
      const bypassPasswordURL = `${url.origin}${url.pathname}/password?${searchParams.toString()}`;
      console.log('bypassPasswordURL', bypassPasswordURL);
      await page.goto(bypassPasswordURL);
    }

    await page.context().storageState({ path: storageState });

    await context.tracing.stop({
      path: './test-results/setup-trace.zip',
    });
    await browser.close();
  } catch (error) {
    await context.tracing.stop({
      path: './test-results/failed-setup-trace.zip',
    });
    await browser.close();
    throw error;
  }
}

export default globalSetup;
