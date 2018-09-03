import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimelineEvent.css';

TimelineEvent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
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
