import { test, expect } from '@playwright/test';

const HERO_BANNER_H1 = 'HERO_BANNER_H1';

const someRandomPagesWithHashLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Corporate Sponsorship', path: '/sponsorship' },
];

test.describe('Hash Links', () => {
  for (const { title, path } of someRandomPagesWithHashLinks) {
    test(`on ${title} page, will be invisible until hovered and change route when clicked`, async ({
      page,
      browserName,
      hasTouch,
    }) => {
      await page.goto(path);

      // Wait for navigation to complete, allowing us to know the page is interactive
      await expect(
        page.getByTestId(browserName === 'chromium' ? 'Desktop Nav' : 'Mobile Nav Container'),
      ).toBeVisible();

      // Verify hero banner is visible
      await expect(page.getByTestId(HERO_BANNER_H1).first()).toBeVisible();

      // Get all hash links on the page
      const hashLinks = await page.getByTestId('Hash Link').all();

      for (const link of hashLinks) {
        const hash = await link.getAttribute('href');

        // This is to satiate TS
        // eslint-disable-next-line playwright/no-conditional-in-test
        if (!hash) continue;

        // Verify the hash link is not visible initially
        await expect(link).toBeHidden();

        const hashId = hash.replace(/^.*#/, '');

        // Locate the heading element relevant to the hashlink
        const heading = page.locator(`#${hashId}`);

        // Scroll heading into view
        await heading.scrollIntoViewIfNeeded();

        // Hover over the heading to make the hash link visible
        // eslint-disable-next-line playwright/no-conditional-in-test
        if (hasTouch) {
          await heading.hover();
          await heading.tap();
        } else {
          await heading.hover();
        }

        await expect(link).toBeVisible();

        // On mobile safari, clicking elements positioned outside viewport can fail
        // Use evaluate to navigate directly by clicking via JavaScript
        await link.evaluate((el: HTMLAnchorElement) => el.click());

        // Verify URL includes the hash
        await expect(page).toHaveURL(new RegExp(`${path}#${hashId}`));
      }
    });
  }
});
