import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/_common_/Card/Card';
import classNames from 'classnames';
import styles from './ClipPathImage.css';

ClipPathImage.propTypes = {
  altText: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['primary', 'secondary', 'slate']),
  title: PropTypes.string.isRequired,
};

ClipPathImage.defaultProps = {
  altText: '',
  theme: 'primary',
};

function ClipPathImage({ altText, imageSource, theme, title }) {
  return (
    <Card className={classNames(styles.ClipPathImage)}>
      <div className={classNames(styles[theme], styles.content)}>
        <img alt={altText} className={styles.image} src={imageSource} />
        <h6 className={styles.title}>{title}</h6>
      </div>
    </Card>
  );
}

export default ClipPathImage;
