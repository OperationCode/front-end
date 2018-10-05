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
  className: '',
  isFullViewHeight: false,
};

function HeroBanner({ children, className, imageSource, isFullViewHeight, title }) {
  const dynamicBackgroundImage = { backgroundImage: `url(${imageSource})` };

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
