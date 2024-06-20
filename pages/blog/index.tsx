import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Head } from 'components/Head';
import { HeroBanner } from 'components/HeroBanner/HeroBanner';

const pageTitle = 'Blog';

function BlogIndex() {
  const router = useRouter();

  useEffect(() => {
    router.push({ pathname: '/blog', query: router.query });
  }, []);

  return (
    <>
      <Head title={pageTitle} />
      <HeroBanner title={pageTitle} />
    </>
  );
}

export default BlogIndex;
