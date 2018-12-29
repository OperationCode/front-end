import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './HeroBanner.css';

HeroBanner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  title: PropTypes.string,
};

HeroBanner.defaultProps = {
  className: undefined,
  children: undefined,
  title: undefined,
};

function HeroBanner({ title, className, children }) {
  return (
    <section title={title} className={classNames(className, styles.HeroBanner)}>
      {children}
    </section>
  );
}

export default HeroBanner;
