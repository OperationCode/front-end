import { test, expect } from '@playwright/test';
import { ACCORDION_CONTENT, ACCORDION_TOGGLE_BUTTON } from '../common/constants/testIDs';

test.describe('faq', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/faq');
    await expect(page.locator('h1')).toHaveText('Frequently Asked Questions');
  });

  test('reveals text after clicking "SHOW"', async ({ page }) => {
    await expect(page.getByTestId(ACCORDION_CONTENT).first()).toBeHidden();
    await page.getByTestId(ACCORDION_TOGGLE_BUTTON).first().click();
    await expect(page.getByTestId(ACCORDION_CONTENT).first()).toBeVisible();
  });
});
