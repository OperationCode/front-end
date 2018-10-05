import React from 'react';
import styles from './styles/policy.css';

// replace commented out info div below with new event info content if
// this component is needed for reuse in the future

const Policy = () => (
  <div className={styles.content}>
    <h1 className={styles.header}>
      <div className={styles.title}>Modernize the GI Bill</div>
      <div className={styles.subtitle}>
        Demand that Congress develop policies to make veterans more competitive for careers in the
        tech sector.
      </div>
    </h1>

    <div className={styles.statisticContainer}>
      <figure className={`${styles.statistic} ${styles.shortenedStatistic}`}>
        <div className={styles.statisticNumber}>2%</div>
        <div className={styles.statisticDescription}>
          Percentage of the tech industry that are veterans.
        </div>
      </figure>

      <figure className={styles.statistic}>
        <div className={styles.statisticNumber}>1.6 Mil.</div>
        <div className={styles.statisticDescription}>
          Software development job postings between 2016 and 2017.
        </div>
      </figure>
    </div>

    {/* <div className={styles.info}>
      <h1 className={styles.infoSubtitle}>
        Join us on our mission to spread awareness, demand change, and seek
        solutions.
      </h1>
      <div className={styles.event}>
        <figure className={styles.eventDetails}>
          <div className={styles.detail}>Capitol Hill</div>
          <div className={styles.detail}>April 19, 2018</div>
          <div className={styles.detail}>12:30PM - 2:00PM</div>
        </figure>
        <OutboundLink
          href={formLink}
          analyticsEventLabel={`[AdBanner Hit] to ${formLink} from /`}
          className={styles.rsvp}
        >
          RSVP
        </OutboundLink>
      </div>
    </div> */}
  </div>
);

export default Policy;
