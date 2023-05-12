import { chromium, FullConfig } from '@playwright/test';

// To reuse the signed-in state in the tests.
async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(`${baseURL}`);
  console.log(baseURL);
  await page.context().storageState({ path: storageState as string });
  await page.close();
}

export default globalSetup;
