import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from 'components/Cards/Card/Card';
import styles from './ImageCard.css';

ImageCard.propTypes = {
  alt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  isImageFirst: PropTypes.bool,
};

ImageCard.defaultProps = {
  className: undefined,
  isImageFirst: true,
};

function ImageCard({ alt, children, className, imageSource, isImageFirst }) {
  return (
    <Card className={classNames(styles.ImageCard, className)}>
      {isImageFirst ? (
        <>
          <img className={styles.image} src={imageSource} alt={alt} />
          <div className={styles.content}>{children}</div>
        </>
      ) : (
        <>
          <div className={styles.content}>{children}</div>
          <img className={styles.image} src={imageSource} alt={alt} />
        </>
      )}
    </Card>
  );
}

export default ImageCard;
