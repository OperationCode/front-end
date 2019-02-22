import Head from 'components/head';
import { s3 } from 'common/constants/urls';
import Section from 'components/_common_/Section/Section';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Timeline from 'components/Timeline/Timeline';
import styles from './styles/history.css';

export default function() {
  return (
    <>
      <Head title="History" />

      <HeroBanner
        backgroundImageSource={`${s3}heroBanners/colin-powell.jpg`}
        className={styles.hero}
        title="History"
      >
        <>
          <blockquote className={styles.quote}>
            &ldquo;There are no secrets to success. It is the result of preparation, hard work,
            learning from failure.&rdquo;
          </blockquote>
          <span className={styles.author}>- Colin Powell</span>
        </>
      </HeroBanner>

      <Section theme="white" hasHeadingLines={false}>
        <Timeline />
      </Section>
    </>
  );
}
