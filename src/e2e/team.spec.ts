import { test, expect } from '@playwright/test';

test.describe('team', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/team');
    await expect(page.locator('h1')).toHaveText('The Team');
  });

  test('renders many board members', async ({ page }) => {
    const articleCount = await page.locator('article').count();
    expect(articleCount).toBeGreaterThan(3);
  });
});
