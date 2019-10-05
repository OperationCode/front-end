import React from 'react';
import historyData from '../historyData';
import styles from './TimelineNav.css';

const TimelineNav = () => {
  return (
    <div className={styles.timelineNavContainer}>
      {Object.keys(historyData).map(year => (
        <a href={`#event-${year}`} key={year} className={styles.timelineNavLink}>
          {year}
        </a>
      ))}
    </div>
  );
};

export default TimelineNav;
