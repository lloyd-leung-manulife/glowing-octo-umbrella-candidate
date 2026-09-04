import { defineConfig, devices } from '@playwright/test';

// Select environment with: TEST_ENV=dev|uat|prod npm test
const ENV = process.env.TEST_ENV || 'dev';

// Hosted for this session. Override any of these with env vars
// (BASE_URL_DEV / BASE_URL_UAT / BASE_URL_PROD) if you're pointed
// somewhere else.
const BASE_URLS: Record<string, string> = {
  dev: process.env.BASE_URL_DEV || 'https://dev.candidate1.manu.firstfire.ca',
  uat: process.env.BASE_URL_UAT || 'https://uat.candidate1.manu.firstfire.ca',
  prod: process.env.BASE_URL_PROD || 'https://prod.candidate1.manu.firstfire.ca',
};

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: BASE_URLS[ENV] || BASE_URLS.dev,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
