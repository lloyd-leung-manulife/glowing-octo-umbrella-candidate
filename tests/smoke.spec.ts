import { test, expect } from '@playwright/test';

// Starter smoke test — proves the environment/tooling works end to end.
// Candidates are expected to replace/extend this with their own test plan
// and coverage; this is intentionally NOT a solution.
test('home page loads and shows the environment banner', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#envBanner')).toBeVisible();
  await expect(page.locator('h1')).toHaveText('ReturnFlow');
});
