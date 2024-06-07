// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from '@playwright/test';

test('HomePage Example Test', async ({ page }) => {
  await page.goto('https://operationcode.org/');
  await expect(page).toHaveTitle('Operation Code | Home');
});
