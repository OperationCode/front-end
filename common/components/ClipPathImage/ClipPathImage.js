import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ClipPathImage.css';

ClipPathImage.propTypes = {
  altText: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  theme: PropTypes.oneOf(['primary', 'secondary', 'gray']),
  title: PropTypes.string.isRequired,
};

ClipPathImage.defaultProps = {
  altText: undefined,
  className: undefined,
  link: undefined,
  theme: 'primary',
};

function ClipPathImage({
  altText, className, image, link, theme, title,
}) {
  return (
    <a
      href={link}
      className={classNames(className, styles.ClipPathImage)}
    >
      <div className={classNames(styles[theme], styles.content)}>
        <img
          alt={altText}
          src={image}
        />
        <h6>{title}</h6>
      </div>
    </a>
  );
}

export default ClipPathImage;
