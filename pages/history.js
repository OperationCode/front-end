import { s3 } from 'common/constants/urls';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Timeline from 'components/Timeline/Timeline';
import TimelineNav from 'components/Timeline/TimelineNav/TimelineNav';
import styles from './styles/history.module.css';

export default function () {
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

      <Content
        theme="white"
        columns={[
          <section>
            <TimelineNav />
            <Timeline />
          </section>,
        ]}
      />
    </>
  );
}
