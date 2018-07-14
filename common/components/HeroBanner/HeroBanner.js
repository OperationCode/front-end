import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeroBanner.css';

HeroBanner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  imageSrc: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
};

HeroBanner.defaultProps = {
  children: undefined,
  className: '',
  subtitle: undefined,
};

function HeroBanner({
  children, className, imageSrc, title, subtitle,
}) {
  const dynamicBackgroundImage = {
    backgroundImage: `url(${imageSrc})`,
  };

  return (
    <div
      style={dynamicBackgroundImage}
      className={`${className} ${styles.HeroBanner}`}
    >
      <div className={styles.text}>
        <h1 className={subtitle && styles.underline}>{title}</h1>
        {subtitle && <h6>{subtitle}</h6>}
        {children}
      </div>
    </div>
  );
}

export default HeroBanner;
