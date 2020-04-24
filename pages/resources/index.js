import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Why we have this: https://github.com/zeit/next.js/issues/10488
function ResourcesPageIndex() {
  const router = useRouter();

  useEffect(() => {
    router.push('/resources/1');
  }, []);

  return null;
}

export default ResourcesPageIndex;
