import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';

const pageTitle = 'Resources';

/**
 * @description This is only to avoid 404s locally on `/resources`. `vercel.json` redirects on prod
 * @see https://github.com/vercel/next.js/issues/10488
 * @returns {null} will client-side redirect on render for devs
 */
function ResourcesIndex() {
  const router = useRouter();

  useEffect(() => {
    router.push({ pathname: '/resources/1', query: router.query });
  }, []);

  return (
    <>
      <Head title={pageTitle} />
      <HeroBanner title={pageTitle} />
    </>
  );
}

export default ResourcesIndex;
