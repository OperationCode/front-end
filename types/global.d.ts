import type { ReactElement } from 'react';

declare global {
  type RenderableChild = string | number | ReactElement;

  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test';
      readonly PRODUCTION_DEPLOYMENT?: string;
      readonly SENTRY_DSN?: string;
      readonly NEXT_PUBLIC_SENTRY_DSN?: string;
      readonly SENTRY_AUTH_TOKEN?: string;
      readonly AIRTABLE_PAT?: string;
      readonly VERCEL_ENV?: 'production' | 'preview' | 'development';
      readonly ANALYZE?: string;
      readonly CI?: string;
    }
  }
}
