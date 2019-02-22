import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './HeroBanner.css';

HeroBanner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  imageSource: PropTypes.node.isRequired,
  isFullViewHeight: PropTypes.bool,
  title: PropTypes.node.isRequired,
};

HeroBanner.defaultProps = {
  children: undefined,
  className: undefined,
  isFullViewHeight: false,
};

function HeroBanner({ children, className, imageSource, isFullViewHeight, title }) {
  // See https://css-tricks.com/tinted-images-multiple-backgrounds/ for explanation
  const darkOverlay = 'linear-gradient(rgba(33, 48, 69, 0.65),rgba(33, 48, 69, 0.65))';
  const dynamicBackgroundImage = {
    backgroundImage: `${darkOverlay}, url(${imageSource})`,
  };

  return (
    <div
      style={dynamicBackgroundImage}
      className={classNames(className, styles.HeroBanner, {
        [styles.fullViewHeight]: isFullViewHeight,
      })}
    >
      <div className={styles.content}>
        <h1 className={classNames({ [styles.underline]: children })}>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default HeroBanner;
