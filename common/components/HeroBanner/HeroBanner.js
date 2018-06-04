import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeroBanner.css';

HeroBanner.propTypes = {
  children: PropTypes.node,
  imageSrc: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

HeroBanner.defaultProps = {
  children: undefined,
  subtitle: '',
};

function HeroBanner({ imageSrc, title, subtitle }) {
  const bannerStyles = { backgroundImage: `url(${imageSrc})` };

  return (
    <div style={bannerStyles} className={styles.HeroBanner}>
      <div className={styles.header}>
        <h1>{title}</h1>
        {subtitle && <h4>{subtitle}</h4>}
        {children}
      </div>
    </div>
  );
}

export default HeroBanner;
