import type { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.', '.env.test') });

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve('./global-setup'),
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3001',
    headless: true,
    viewport: { width: 1280, height: 720 },
    // ignoreHTTPSErrors: true,
    // video: 'retain-on-failure',
    // screenshot: 'only-on-failure',
    // trace: 'retain-on-failure',
    storageState: './e2e/state.json',
  },
  outputDir: './test-results',
  testDir: './e2e',
  workers: 1,
  webServer: {
    command: 'npm run dev -- --port 3001',
    port: 3001,
    reuseExistingServer: true,
    env: {
      NEXT_PUBLIC_BASE_URL: process.env.PLAYWRIGHT_TEST_BASE_URL as string,
    },
  },
};
export default config;
