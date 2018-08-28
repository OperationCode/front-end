import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './HeroBanner.css';

HeroBanner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  imageSrc: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};

HeroBanner.defaultProps = {
  children: undefined,
  className: '',
};

function HeroBanner({ children, className, imageSrc, title }) {
  const dynamicBackgroundImage = { backgroundImage: `url(${imageSrc})` };

  return (
    <div style={dynamicBackgroundImage} className={classNames(className, styles.HeroBanner)}>
      {title && <h1 className={classNames({ [styles.underline]: children })}>{title}</h1>}
      {children}
    </div>
  );
}

export default HeroBanner;
