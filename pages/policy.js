import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import { s3 } from 'common/constants/urls';
import styles from './styles/policy.module.css';

function Policy() {
  return (
    <>
      <Head title="Policy" />

      <HeroBanner
        backgroundImageSource={`${s3}redesign/heroBanners/policy.jpg`}
        isFullViewportHeight
        title="Modernize the GI Bill"
      >
        <h6 className={styles.subtitle}>
          We demanded that Congress develop policies to make veterans more competitive for careers
          in the tech sector. Mission accomplished!
        </h6>

        <div className={styles.statisticContainer}>
          <figure className={`${styles.statistic} ${styles.shortenedStatistic}`}>
            <div className={styles.statisticNumber}>2%</div>
            <div className={styles.statisticDescription}>
              Percentage of the tech industry that are veterans.
            </div>
          </figure>

          <figure className={styles.statistic}>
            <div className={styles.statisticNumber}>1,600,000+</div>
            <div className={styles.statisticDescription}>
              Software development job postings between 2016 and 2017.
            </div>
          </figure>
        </div>
      </HeroBanner>
    </>
  );
}

export default Policy;
