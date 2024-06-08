// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from '@playwright/test';

test('HomePage Example Test', async ({ page }) => {
  await page.goto('https://operationcode.org/');
  await expect(page).toHaveTitle('Operation Code | Home');
});

test('learn more link', async ({ page }) => {
  await page.goto('https://operationcode.org/');
  await page.getByRole('link', { name: 'learn more' }).click();
  await expect(page.getByRole('heading', { name: 'about us' })).toBeVisible();
});
