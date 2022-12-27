import { useEffect, useRef } from 'react';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import styles from 'styles/join.module.css';

const pageTitle = 'Join';

function Join() {
  const ref = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://cdn.virtuoussoftware.com/virtuous.embed.min.js';
    script.async = true;
    script.setAttribute('fetchpriority', 'high');
    script.setAttribute('data-vform', '925226EB-B502-4DAF-A38F-FAFBB8C98146');
    script.setAttribute('data-orgId', '3423');
    script.setAttribute('data-isGiving', 'false');
    script.setAttribute('data-dependencies', '[]');

    if (ref.current) {
      ref.current.appendChild(script);
    }

    return () => {
      ref.current.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head title={pageTitle} />
      <HeroBanner title={pageTitle} />

      <Content theme="gray" columns={[<div className={styles.joinForm} ref={ref} />]} />
    </>
  );
}

export default Join;
