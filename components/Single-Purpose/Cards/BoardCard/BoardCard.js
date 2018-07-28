import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from 'common/components/Card/Card';
import styles from './BoardCard.css';

BoardCard.propTypes = {
  boardRole: PropTypes.string.isRequired,
  className: PropTypes.string,
  description: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

BoardCard.defaultProps = {
  className: '',
  description: undefined,
};

function BoardCard({
 boardRole, className, description, imageSource, name 
}) {
  return (
    <Card
      className={classNames(className, styles.BoardCard)}
      hasAnimationOnHover
    >
      <div className={styles.imageContainer}>
        <img
          alt={`Headshot of ${name}`}
          src={imageSource}
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
