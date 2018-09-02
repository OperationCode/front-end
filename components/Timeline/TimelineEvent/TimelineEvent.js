import React from 'react';
import PropTypes from 'prop-types';
import styles from "./TimelineEvent.css";

const TimelineEvent = ({ title, content }) => (
  <div className={styles.eventContainer}>
    <h4 className={styles.eventTitle}>{title}</h4>

    <div className={styles.eventContent}>{content}</div>
  </div>
);

TimelineEvent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.node]).isRequired,
};

export default TimelineEvent;
