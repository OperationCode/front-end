import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css';

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardHeader.defaultProps = {
  className: undefined,
};

function CardHeader({
  children, className,
}) {
  return <header className={`${styles.header} ${className}`}>{children}</header>;
}

export default CardHeader;
