import { test, expect } from '@playwright/test';

const HERO_BANNER_H1 = 'HERO_BANNER_H1';

const someRandomPagesWithHashLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Corporate Sponsorship', path: '/sponsorship' },
];

test.describe('Hash Links', () => {
  test.describe('Desktop (Chromium)', () => {
    for (const { title, path } of someRandomPagesWithHashLinks) {
      // eslint-disable-next-line playwright/no-skipped-test
      test(`on ${title} page, will be invisible until hovered and change route when clicked`, async ({
        page,
        browserName,
      }) => {
        // eslint-disable-next-line playwright/no-skipped-test
        test.skip(browserName !== 'chromium', 'This test is for desktop only');

        await page.goto(path);

        // Wait for navigation to complete, allowing us to know the page is interactive
        await expect(page.getByTestId('Desktop Nav')).toBeVisible();

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

          // Verify the hash link has opacity: 0 initially
          await expect(link).toHaveCSS('opacity', '0', { timeout: 2000 });

          // Scroll heading into view
          await heading.scrollIntoViewIfNeeded();

          // Hover over the heading to make the hash link visible
          await heading.hover();
          await expect(link).toHaveCSS('opacity', '1');

          // Click the hash link to navigate
          await link.evaluate((el: HTMLAnchorElement) => el.click());

          // Verify URL includes the hash
          await expect(page).toHaveURL(new RegExp(`${path}#${hashId}`));
        }
      });
    }
  });

  test.describe('Mobile (Safari)', () => {
    for (const { title, path } of someRandomPagesWithHashLinks) {
      // eslint-disable-next-line playwright/no-skipped-test
      test(`on ${title} page, headings should have IDs but hash links should not be visible`, async ({
        page,
        browserName,
      }) => {
        // eslint-disable-next-line playwright/no-skipped-test
        test.skip(browserName === 'chromium', 'This test is for mobile only');

        await page.goto(path);

        // Wait for navigation to complete, allowing us to know the page is interactive
        await expect(page.getByTestId('Mobile Nav Container')).toBeVisible();

        // Verify hero banner is visible
        await expect(page.getByTestId(HERO_BANNER_H1).first()).toBeVisible();

        // Get all headings with hash link IDs
        // Hash links might not be visible but headings should have IDs
        const headingsWithIds = await page.locator('[id$="-link"]').all();

        // Verify that headings have IDs for deep linking
        expect(headingsWithIds.length).toBeGreaterThan(0);

        for (const heading of headingsWithIds) {
          const headingId = await heading.getAttribute('id');

          // eslint-disable-next-line playwright/no-conditional-in-test
          if (!headingId) continue;

          // Verify heading exists and is visible
          await expect(heading).toBeVisible();

          // Find the hash link within or near this heading
          const link = page
            .getByTestId('Hash Link')
            .filter({ has: page.locator(`[href="#${headingId}"]`) })
            .first();

          // On mobile, hash links should not be visible (hidden or width 0)
          // Check if link exists first
          const linkCount = await page
            .getByTestId('Hash Link')
            .filter({ has: page.locator(`[href="#${headingId}"]`) })
            .count();

          // eslint-disable-next-line playwright/no-conditional-in-test
          if (linkCount > 0) {
            // Hash link exists but should not be visible on mobile
            // It should have width 0 or be hidden
            const width = await link.evaluate(el => el.getBoundingClientRect().width);
            // eslint-disable-next-line playwright/no-conditional-expect
            expect(width).toBe(0);
          }
        }
      });
    }
  });
});
