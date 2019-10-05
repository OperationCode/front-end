import React from 'react';
import historyData from '../historyData';
import styles from './TimelineNav.css';

const TimelineNav = () => {
  return (
    <div className={styles.timelineNavContainer}>
      {Object.keys(historyData).map(year => (
        <span key={year} className={styles.timelineNavLink}>
          {year}
        </span>
      ))}
    </div>
  );
};

export default TimelineNav;
