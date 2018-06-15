import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css';

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardFooter.defaultProps = {
  className: undefined,
};

function CardFooter({
  children, className,
}) {
  return <footer className={`${styles.footer} ${className}`}>{children}</footer>;
}

export default CardFooter;
