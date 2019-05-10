import React from 'react';
import { string, node, bool } from 'prop-types';
import classNames from 'classnames';
import Container from 'components/Container/Container';
import styles from './HeroBanner.css';

HeroBanner.propTypes = {
  backgroundImageSource: string,
  className: string,
  children: node,
  isFullViewportHeight: bool,
  title: string.isRequired,
};

HeroBanner.defaultProps = {
  backgroundImageSource: '',
  className: undefined,
  children: undefined,
  isFullViewportHeight: false,
};

function HeroBanner({ backgroundImageSource, children, className, isFullViewportHeight, title }) {
  return (
    <Container
      backgroundImageSource={backgroundImageSource}
      className={classNames(styles.HeroBanner, className, {
        [styles.smallHero]: !children && !backgroundImageSource,
      })}
      isFullViewportHeight={isFullViewportHeight}
    >
      <h1 className={classNames({ [styles.underline]: children })}>{title}</h1>
      {children}
    </Container>
  );
}

export default HeroBanner;
