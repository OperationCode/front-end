import React from 'react';
import PropTypes from 'prop-types';
import Card from 'common/components/Card/Card';
import styles from './ImageCard.css';

ImageCard.propTypes = {
  alt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  imageSource: PropTypes.string.isRequired,
};

function ImageCard({ alt, children, imageSource }) {
  return (
    <Card className={styles.ImageCard}>
      <img className={styles.image} src={imageSource} alt={alt} />

      <div className={styles.content}>{children}</div>
    </Card>
  );
}

export default ImageCard;
