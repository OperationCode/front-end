import React from 'react';
import PropTypes from 'prop-types';

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

function CardHeader({
  children, className,
}) {
  return <header className={className}>{children}</header>;
}

export default CardHeader;
