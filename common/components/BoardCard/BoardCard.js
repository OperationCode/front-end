import React from 'react';
import PropTypes from 'prop-types';
import Card from 'common/components/Card/Card';
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
    <Card className={styles.boardCard}>
      <div className={styles.imageContainer}>
        <img
          src={imageSource}
          alt={`Headshot of ${name}`}
        />
      </div>
      <h6 className={styles.name}>{name}</h6>
      <i className={styles.boardRole}>{boardRole}</i>
      <hr className={styles.hr} />
      {description && <span className={styles.descriptionText}>{description}</span>}
    </Card>
  );
}

export default BoardCard;
