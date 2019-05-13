import React from 'react';
import { array, node, oneOfType, string } from 'prop-types';
import styles from './TimelineEvent.css';

TimelineEvent.propTypes = {
  content: oneOfType([string, array, node]).isRequired,
  title: string.isRequired,
};

function TimelineEvent({ content, title }) {
  return (
    <div className={styles.eventContainer}>
      <h4 className={styles.eventTitle}>{title}</h4>

      <div className={styles.eventContent}>{content}</div>
    </div>
  );
}

export default TimelineEvent;
