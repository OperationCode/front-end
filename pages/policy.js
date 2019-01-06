import Head from 'components/head';
import HeroBanner from 'components/_common_/HeroBanner/HeroBanner';
import { s3 } from 'common/constants/urls';
import styles from './styles/policy.css';

export default () => (
  <>
    <Head title="Policy" />

    <HeroBanner
      className={styles.overlay}
      title="Modernize the GI Bill"
      imageSource={`${s3}heroBanners/capitol-building.jpg`}
      isFullViewHeight
    >
      <h6 className={styles.subtitle}>
        We demanded that Congress develop policies to make veterans more competitive for careers in
        the tech sector. Mission accomplished!
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
