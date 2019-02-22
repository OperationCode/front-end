import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Container from 'components/_common_/Container/Container';
import styles from './HeroBanner.css';

HeroBanner.propTypes = {
  backgroundImageSource: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  isFullViewportHeight: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

HeroBanner.defaultProps = {
  className: undefined,
  children: undefined,
  isFullViewportHeight: false,
};

function HeroBanner({ backgroundImageSource, children, className, isFullViewportHeight, title }) {
  return (
    <Container
      backgroundImageSource={backgroundImageSource}
      className={classNames(styles.HeroBanner, className)}
      isFullViewportHeight={isFullViewportHeight}
    >
      <h1 className={classNames({ [styles.underline]: children })}>{title}</h1>
      {children}
    </Container>
  );
}

export default HeroBanner;
