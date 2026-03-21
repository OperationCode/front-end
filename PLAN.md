# Migration Plan: Update Deps, App Router, Sentry CLI

## Overview
Incremental migration in 3 phases. Each phase verified with tests before proceeding.

**Success criteria:** All Playwright e2e tests and Vitest unit tests pass.

---

## Phase 1: Update All Dependencies to Latest

### 1.1 Update Next.js 12 → 16.2.0 (and React 18 → 19)
Next.js 16 requires React 19. Key breaking changes across versions:

- **Next 13**: `<Link>` no longer needs `<a>` child, `next/image` removes `layout` prop, App Router introduced
- **Next 14**: Turbopack stabilized, Server Actions stable
- **Next 15**: `fetch` no longer cached by default, `params`/`searchParams` are async, React 19
- **Next 16**: React 19 required, continued App Router improvements

**Changes needed before update:**
1. **`next/link`** — Remove nested `<a>` tags in 8 files (about, contact, faq, get_involved, join/index, press, scholarship/index, terms, Nav component)
2. **`next/image`** — Remove deprecated `layout` prop in 4 files (project_rebuild, scholarship/index, get_involved). Replace with CSS equivalents:
   - `layout="fill"` → `fill` boolean prop + parent `position: relative`
   - `layout="fixed"` → explicit `width`/`height` (already present)
   - `layout="intrinsic"` → explicit `width`/`height`
3. **`images.domains`** → `images.remotePatterns` in next.config.js
4. **`@next/bundle-analyzer`** — Update to match Next.js version
5. **`next.config.js`** — Convert to `next.config.mjs` (ESM), remove `excludeDefaultMomentLocales` (removed), update `devIndicators`

### 1.2 Update React 18 → 19
- `react`, `react-dom` → ^19.x
- `@types/react`, `@types/react-dom` → ^19.x
- `react-test-renderer` → removed (deprecated in React 19, use `@testing-library/react` instead)
- `react-is` → ^19.x
- Check for removed APIs: `ReactDOM.render`, `findDOMNode` etc.

### 1.3 Update @sentry/nextjs 7 → 9 (latest)
- Massive API changes — handled in Phase 3 detail
- For now, just bump version

### 1.4 Update All Other Dependencies
| Package | Current | Action |
|---------|---------|--------|
| `@radix-ui/react-dialog` | 1.1.15 | Update to latest |
| `@radix-ui/react-tabs` | 1.1.13 | Update to latest |
| `axios` | ^1.12.2 | Update to latest |
| `cva` | 1.0.0-beta.4 | Update to latest stable |
| `fast-xml-parser` | ^3.21.1 | Update to v5 (breaking: API changes) |
| `formik` | ^2.4.6 | Update to latest |
| `logrocket` | ^10.1.0 | Update to latest |
| `react-select` | ^4.0.2 | Update to v5 (breaking: React 18+ only, type changes) |
| `react-player` | ^2.16.0 | Update to latest |
| `tailwind-merge` | ^3.3.1 | Update to latest |
| `yup` | ^1.7.1 | Update to latest |
| `next-sitemap` | ^4.2.3 | Update to latest |
| `@svgr/webpack` | ^6.3.1 | Update to latest (v8) |
| `eslint` | ^8.56.0 | Update to v9 (flat config) |
| `@typescript-eslint/*` | ^6.21.0 | Update to latest (v8) |
| `storybook` | ^7.4.1 | Update to v8 |
| `@testing-library/react` | ^12.1.5 | Update to v16 |
| `@testing-library/jest-dom` | ^6.9.1 | Update to latest |
| `chromatic` | ^6.8.0 | Update to latest |
| `playwright` | ^1.56.1 | Update to latest |
| `lint-staged` | 13.0.3 | Update to latest |
| `postcss` | ^8.5.6 | Update to latest |
| `typescript` | ^5.9.3 | Update to latest |
| `vitest` / `@vitest/*` | ^3.1.2 | Update to latest |

### 1.5 Remove Obsolete Dependencies
- `fingerprintjs2` — discontinued, replace or remove
- `next-cookies` — not needed with App Router (use `cookies()` from `next/headers`)
- `path` — Node.js built-in, no need for polyfill
- `intersection-observer` — polyfill no longer needed (widely supported)
- `css-loader`, `style-loader`, `file-loader`, `url-loader` — webpack loaders not needed with Next.js
- `require-context.macro` — CRA-specific, not used
- `identity-obj-proxy` — replaced by vitest CSS handling
- `process` — polyfill not needed
- `express` — check if actually used, likely removable
- `react-test-renderer` — deprecated in React 19

### 1.6 Fix Breaking Changes in Dependencies
- **`fast-xml-parser` v3→v5**: API changed. Update `pages/podcast.tsx` parser usage
- **`react-select` v4→v5**: Type imports changed, `styles` API slightly different
- **`@testing-library/react` v12→v16**: `render` import stable, but `renderHook` moved
- **ESLint v8→v9**: Requires flat config migration (`.eslintrc.js` → `eslint.config.mjs`)
- **Storybook v7→v8**: Config format may change slightly

### 1.7 Verify Phase 1
- Run `pnpm test` (vitest unit tests)
- Run `pnpm test:e2e:headless` (playwright)
- Fix any snapshot mismatches with `pnpm test:update-snaps`

---

## Phase 2: Migrate Pages Router → App Router (Full Migration)

### 2.1 Create App Directory Structure
```
app/
├── layout.tsx              ← from _app.tsx + _document.tsx
├── page.tsx                ← from pages/index.tsx
├── not-found.tsx           ← from pages/404.tsx
├── error.tsx               ← from pages/_error.tsx
├── about/page.tsx
├── blog/page.tsx
├── branding/page.tsx
├── challenge/page.tsx
├── chapters/page.tsx
├── chapter_leader/page.tsx
├── contact/page.tsx
├── corporate-training/page.tsx
├── donate/page.tsx
├── faq/page.tsx
├── get_involved/page.tsx
├── history/page.tsx
├── jobs/page.tsx
├── podcast/page.tsx
├── policy/page.tsx
├── press/page.tsx
├── project_rebuild/page.tsx
├── scholarship/
│   ├── page.tsx
│   └── code_platoon/page.tsx
├── services/page.tsx
├── slack_guide/page.tsx
├── sponsorship/page.tsx
├── team/page.tsx
├── terms/page.tsx
├── thank_you/page.tsx
├── join/
│   ├── page.tsx
│   ├── form/page.tsx
│   └── success/page.tsx
└── api/
    └── registration/
        ├── new/route.ts
        └── update/route.ts
```

### 2.2 Convert _app.tsx + _document.tsx → app/layout.tsx
The root layout combines both:
- **From _document.tsx**: `<html lang="en">`, meta tags, GA scripts, favicon
- **From _app.tsx**: Layout wrapper (Nav, Footer, ScrollToTopButton), analytics initialization, font loading
- Metadata API replaces `<Head>` for static meta (title, OG, Twitter card)
- Google Analytics moves to `<Script>` from `next/script`
- Font loading moves to `next/font/google`
- CSS import stays in layout

### 2.3 Convert Custom Head Component → Metadata API
- `components/head.tsx` uses `next/head` — replace with:
  - Per-route `export const metadata` for static pages
  - `generateMetadata()` function for dynamic pages
- Remove `next/head` import from all files

### 2.4 Convert Page Components
For each page in `pages/*.tsx`:
1. Move to `app/*/page.tsx`
2. Remove `<Head>` usage, add `metadata` export
3. Mark as `'use client'` if it uses hooks, state, or browser APIs
4. Pages that are purely presentational can be Server Components (no directive needed)

**Pages requiring `'use client'`** (use hooks/state/effects):
- join/index (useRouter, useEffect, useState)
- join/form (useEffect, formik)
- blog/index (useRouter)
- podcast (if using client-side player)
- faq (accordion state)

**Pages that can be Server Components:**
- about, branding, challenge, chapters, chapter_leader, contact, corporate-training, donate, get_involved, history, jobs, policy, press, project_rebuild, services, slack_guide, sponsorship, team, terms, thank_you, scholarship/*, join/success

### 2.5 Convert Data Fetching
- **`pages/podcast.tsx` `getStaticProps`** → async Server Component with `fetch()` + `revalidate`
- **`pages/join/form.tsx` `getInitialProps`** (cookie check + redirect) → `middleware.ts` or Server Component with `cookies()` from `next/headers`

### 2.6 Convert API Routes
- `pages/api/registration/new.ts` → `app/api/registration/new/route.ts`
  - `export default handler` → `export async function POST(request: Request)`
  - `req.body` → `await request.json()`
  - `res.status().json()` → `return NextResponse.json()`
  - Cookie setting via `NextResponse` headers
- Same for `update.ts` → `route.ts` with `PATCH` export

### 2.7 Convert Router Usage
5 files use `next/router`:
- `useRouter()` → `useRouter()` from `next/navigation` (different API: no `query`, use `useSearchParams()`)
- `Router.events` → removed in App Router. Use `usePathname()` + `useEffect` for route change detection
- `router.push()` → `router.push()` (compatible)
- `router.prefetch()` → `router.prefetch()` (compatible)
- `router.query` → `useSearchParams()` or page `params` prop

### 2.8 Update next.config
- Remove Pages Router-specific config
- Ensure App Router compatibility
- Update cache headers source patterns for app router static paths

### 2.9 Delete pages/ Directory
After all pages are migrated and verified, delete `pages/` entirely.

### 2.10 Update tsconfig.json Path Aliases
- Remove `pages/*` alias (no longer needed)
- Ensure `app/*` works if needed

### 2.11 Update Tests
- **Vitest**: Update `vitest.setup.tsx` if needed for App Router mocking
- **Playwright**: Tests should mostly work as-is since they test the running app via URL
- **Snapshots**: Regenerate all snapshots after migration
- **next-router-mock**: May need updates for `next/navigation` mocking

### 2.12 Verify Phase 2
- `pnpm build` (ensure production build succeeds)
- `pnpm test` (unit tests)
- `pnpm test:e2e:headless` (e2e tests)
- Fix any failures

---

## Phase 3: Reconfigure Sentry via sentry-cli (Full Setup)

### 3.1 Update @sentry/nextjs to v9 (Latest)
Already bumped in Phase 1, but now configure properly:

**New initialization pattern (v8+):**
- `sentry.client.config.js` → `sentry.client.config.ts` (updated API)
- `sentry.server.config.js` → `sentry.server.config.ts` (updated API)
- Add `sentry.edge.config.ts` (new in v8)
- Add `instrumentation.ts` in project root (Next.js instrumentation hook):
  ```ts
  export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
      await import('./sentry.server.config');
    }
    if (process.env.NEXT_RUNTIME === 'edge') {
      await import('./sentry.edge.config');
    }
  }
  ```

**Config changes:**
- `Sentry.configureScope()` → removed, use `Sentry.setExtra()`, `Sentry.setTag()`
- `Sentry.flush()` → still available
- `withSentryConfig` API updated — new options format

### 3.2 Install and Configure sentry-cli
```bash
pnpm add -D @sentry/cli
```

**Update `sentry.properties`:**
```
defaults.url=https://sentry.io/
defaults.org=operation-code
defaults.project=front-end
cli.executable=node_modules/.bin/sentry-cli
```

### 3.3 Configure Source Map Uploads
In `next.config.mjs`, update `withSentryConfig` options:
```js
withSentryConfig(nextConfig, {
  org: "operation-code",
  project: "front-end",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },
  // Release management
  release: {
    name: process.env.SENTRY_RELEASE || `front-end@${pkg.version}`,
    create: true,
    finalize: true,
    // Commit integration
    setCommits: {
      auto: true,
    },
    // Deploy tracking
    deploy: {
      env: process.env.VERCEL_ENV || 'development',
    },
  },
});
```

### 3.4 Update Sentry Client Config
```ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '...',
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    Sentry.replayIntegration(),
    Sentry.browserTracingIntegration(),
  ],
  enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN,
});
```

### 3.5 Update Sentry Server Config
```ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN || '...',
  tracesSampleRate: 1.0,
  enabled: !!process.env.SENTRY_DSN,
});
```

### 3.6 Update Error Handling
- `pages/_error.tsx` → `app/error.tsx` (already done in Phase 2)
- App Router error boundary uses `'use client'` directive
- `app/global-error.tsx` for root-level errors
- Sentry auto-captures via `withSentryConfig`

### 3.7 Update Code Using Sentry APIs
- `_app.tsx` (now `layout.tsx`): Replace `Sentry.configureScope()` with `Sentry.setExtra()`
- `_error.tsx` (now `error.tsx`): Update error capture pattern

### 3.8 Add sentry-cli to CI/CD
Update `.github/workflows/ci.yml`:
- Add `SENTRY_AUTH_TOKEN` secret
- Add `SENTRY_ORG` and `SENTRY_PROJECT` env vars
- sentry-cli runs automatically via `withSentryConfig` during `next build`

### 3.9 Verify Phase 3
- `pnpm build` (verify source maps upload)
- `pnpm test` (unit tests)
- `pnpm test:e2e:headless` (e2e tests)

---

## Risk Mitigation

1. **Commit after each sub-step** so we can bisect failures
2. **Update snapshots** after visual changes (`pnpm test:update-snaps`)
3. **ESLint flat config** migration is complex — may need to keep v8 compatibility if v9 causes issues with plugins
4. **Storybook v8** may need separate verification (not in test criteria)
5. **`fingerprintjs2`** removal may break LogRocket fingerprinting — assess if still needed
6. **React 19** removes `react-test-renderer` — must migrate snapshot tests to `@testing-library/react`

## Estimated File Changes
- ~50 page/component files modified
- ~10 config files modified
- ~5 new files created (instrumentation.ts, error.tsx, global-error.tsx, etc.)
- ~40 files moved (pages/ → app/)
- ~77 test files may need snapshot updates
