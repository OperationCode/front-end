import { test, expect } from '@playwright/test';

test.describe('podcast', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/podcast');
    await expect(page.locator('h1')).toHaveText('Podcast');
  });

  test('renders many podcast cards', async ({ page }) => {
    await expect(page.getByTestId('Podcast Card')).toHaveCount(
      await page.getByTestId('Podcast Card').count(),
    );
    expect(await page.getByTestId('Podcast Card').count()).toBeGreaterThan(0);
  });
});
