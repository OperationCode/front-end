// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from '@playwright/test';

test('HomePage Example Test', async ({ page }) => {
  await page.goto('https://operationcode.org/');
  await expect(page).toHaveTitle('Operation Code | Home');
});

test('get started link', async ({ page }) => {
  await page.goto('https://operationcode.org/');

  // Click the get started link.
  await page.getByRole('link', { name: 'learn more' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'about us' })).toBeVisible();
});
