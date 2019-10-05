import React from 'react';
import { Link } from 'react-scroll';
import historyData from '../historyData';
import styles from './TimelineNav.css';

const TimelineNav = () => {
  return (
    <div className={styles.timelineNavContainer}>
      {Object.keys(historyData).map(year => (
        <Link key={year} to={`event-${year}`} smooth className={styles.timelineNavLink}>
          {year}
        </Link>
      ))}
    </div>
  );
};

export default TimelineNav;
