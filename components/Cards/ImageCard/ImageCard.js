import React from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';
import Card from 'components/Cards/Card/Card';
import styles from './ImageCard.css';

ImageCard.propTypes = {
  alt: string.isRequired,
  children: node.isRequired,
  className: string,
  imageSource: string.isRequired,
  isImageFirst: bool,
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
