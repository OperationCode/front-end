import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';

/**
 * @description This is only to avoid 404s locally on `/resources`. `now.json` redirects on prod
 * @see https://github.com/zeit/next.js/issues/10488
 * @returns {null} will client-side redirect on render for devs
 */
function ResourcesPageIndex() {
  const router = useRouter();

  useEffect(() => {
    router.push('/resources/1');
  }, []);

  return (
    <>
      <Head title="Resources" />
      <HeroBanner title="Resources" />
    </>
  );
}

export default ResourcesPageIndex;
