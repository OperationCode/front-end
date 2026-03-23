'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import ErrorDisplay from '@/components/ErrorDisplay/ErrorDisplay';

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <ErrorDisplay statusCode={500} />
      </body>
    </html>
  );
}
