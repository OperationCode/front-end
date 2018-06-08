import React from 'react';
import PropTypes from 'prop-types';
import styles from './BoardCard.css';

BoardCard.propTypes = {
  boardRole: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

BoardCard.defaultProps = {
  description: null,
};

function BoardCard({
  boardRole, description, imageSource, name,
}) {
  return (
    <div className={styles.boardCard}>
      <img
        src={imageSource}
        alt={`Headshot of ${name}`}
      />
      <h6 className={styles.name}>{name}</h6>
      <i className={styles.boardRole}>{boardRole}</i>
      <hr className={styles.hr} />
      {description && (
        <span className={styles.descriptionText}>
          <text>{description}</text>
        </span>
      )}
    </div>
  );
}

export default BoardCard;
