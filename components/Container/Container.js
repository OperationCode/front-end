import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Container.css';

Container.propTypes = {
  backgroundImageSource: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isFullViewportHeight: PropTypes.bool,
  theme: PropTypes.oneOf(['gray', 'secondary', 'white']),
};

Container.defaultProps = {
  backgroundImageSource: undefined,
  children: undefined,
  className: undefined,
  isFullViewportHeight: false,
  theme: 'secondary',
};

function Container({ backgroundImageSource, children, className, isFullViewportHeight, theme }) {
  // See https://css-tricks.com/tinted-images-multiple-backgrounds/ for explanation
  const darkOverlay = 'linear-gradient(rgba(33, 48, 69, 0.65),rgba(33, 48, 69, 0.65))';
  const dynamicBackgroundImage = backgroundImageSource
    ? {
        backgroundImage: `${darkOverlay}, url(${backgroundImageSource})`,
      }
    : {};

  return (
    <div
      className={classNames(className, styles.Container, styles[theme], {
        [styles.fullViewportHeight]: isFullViewportHeight,
      })}
      style={dynamicBackgroundImage}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Container;
