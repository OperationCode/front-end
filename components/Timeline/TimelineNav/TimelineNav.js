import React from 'react';
import { Link } from 'react-scroll';
import historyData from '../historyData';
import styles from './TimelineNav.module.css';

const TimelineNav = () => {
  return (
    <section className={styles.timelineNav}>
      <nav className={styles.timelineNavLinksContainer}>
        {Object.keys(historyData).map(year => (
          <Link key={year} to={`event-${year}`} smooth className={styles.timelineNavLink}>
            {year}
          </Link>
        ))}
      </nav>
      <div className={styles.timelineNavSeperator} />
    </section>
  );
};

export default TimelineNav;
