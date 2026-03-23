'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import ErrorDisplay from '@/components/ErrorDisplay/ErrorDisplay';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return <ErrorDisplay statusCode={500} />;
}
