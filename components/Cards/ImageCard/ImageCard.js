import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
=======
import classNames from 'classnames';
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
import Card from 'components/_common_/Card/Card';
import styles from './ImageCard.css';

ImageCard.propTypes = {
  alt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
<<<<<<< HEAD
  imageSource: PropTypes.string.isRequired,
};

function ImageCard({ alt, children, imageSource }) {
  return (
    <Card className={styles.ImageCard}>
      <img className={styles.image} src={imageSource} alt={alt} />

      <div className={styles.content}>{children}</div>
=======
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
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    </Card>
  );
}

export default ImageCard;
