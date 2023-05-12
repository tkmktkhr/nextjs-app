import { test, expect } from '@playwright/test';

test.describe('sample e2e', () => {
  test.afterAll(async ({ page }) => {
    await page.close();
  });

  // test('sample', async ({ browser }) => {
  //   const page: Page = await browser.newPage({ storageState: undefined });
  test('sample', async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);
    console.log(baseURL);
    await expect(page).toHaveTitle('Home');
  });
});
