import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css';

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: undefined,
};

function Card({
  children, className,
}) {
  return <article className={`${styles.Card} ${className}`}>{children}</article>;
}

export default Card;
