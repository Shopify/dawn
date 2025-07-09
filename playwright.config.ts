import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import type { PlaywrightTestConfig } from '@playwright/test';

// Load environment variables from .env file
dotenv.config();

const themeConfigEnv = process.env.THEME_CONFIG || 'theme1';
let testMatchPattern: string | RegExp = /.*\.spec\.(js|ts)$/; // Default: match all spec files

if (themeConfigEnv) {
  // If THEME_CONFIG is set, assume it's a subdirectory within testDir.
  // This will match files like 'tests/theme1/any.spec.ts' or 'tests/theme1/subdir/another.spec.ts'
  testMatchPattern = `${themeConfigEnv}/**/*.spec.{js,ts}`;
} else {
  console.warn(
    `THEME_CONFIG environment variable is not set. Running all tests matching default pattern: ${testMatchPattern}`
  );
}

/**
 * @see https://playwright.dev/docs/test-configuration
 */
let config: PlaywrightTestConfig = defineConfig({
  testDir: './tests',
  globalSetup: './tests/session.setup.js',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  maxFailures: process.env.CI ? 1 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: process.env.CI ? process.env.PLAYWRIGHT_CI_URL : `http://127.0.0.1:3000`,
    storageState: 'playwright.state.json',
    trace: 'on-first-retry',
    userAgent: 'Shopify Horizon Playwright Test Runner/1.0 (Test Environment)',
  },
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.01 },
  },
  snapshotPathTemplate: '{testDir}/{testFilePath}-snapshots/{arg}-{projectName}-{platform}{ext}',
  projects: [
    {
      name: 'chromium',
      testMatch: testMatchPattern, // Use the derived pattern
      use: {
        ...devices['Desktop Chrome'],
        userAgent: 'Shopify Horizon Playwright Chrome Test/1.0 (Test Environment)',
      },
    },
    {
      name: 'safari',
      testMatch: testMatchPattern, // Use the derived pattern
      use: {
        ...devices['Desktop Safari'],
        userAgent: 'Shopify Horizon Playwright Safari Test/1.0 (Test Environment)',
      },
    },
  ],

  // Run your local dev server before starting the tests, but only in non-CI environments
  webServer: process.env.CI
    ? undefined
    : {
        command: `npm run dev:port:${themeConfigEnv}`,
        url: 'http://127.0.0.1:3000',
        reuseExistingServer: true,
        timeout: 120 * 1000,
      },
});

export default config;
