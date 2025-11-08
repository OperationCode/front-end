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

      // Wait for at least one hash link to be attached to ensure they're in a stable state
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (hashLinks.length > 0) {
        // eslint-disable-next-line playwright/no-conditional-expect
        await expect(hashLinks[0]).toBeAttached();
      }

      // Move mouse away from any elements to ensure no hover states are active
      await page.mouse.move(0, 0);

      for (const link of hashLinks) {
        const hash = await link.getAttribute('href');

        // This is to satiate TS
        // eslint-disable-next-line playwright/no-conditional-in-test
        if (!hash) continue;

        const hashId = hash.replace(/^.*#/, '');

        // Locate the heading element relevant to the hashlink
        const heading = page.locator(`#${hashId}`);

        // Ensure heading is not in hover state before checking link visibility
        await page.mouse.move(0, 0);

        // Verify the hash link has visibility: hidden initially
        await expect(link).toHaveCSS('visibility', 'hidden', { timeout: 2000 });

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
