import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './HeroBanner.css';

HeroBanner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  imageSource: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};

HeroBanner.defaultProps = {
  children: undefined,
  className: '',
};

function HeroBanner({ children, className, imageSource, title }) {
  const dynamicBackgroundImage = { backgroundImage: `url(${imageSource})` };

  return (
    <div style={dynamicBackgroundImage} className={classNames(className, styles.HeroBanner)}>
      <div className={styles.content}>
        <h1 className={classNames({ [styles.underline]: children })}>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default HeroBanner;
