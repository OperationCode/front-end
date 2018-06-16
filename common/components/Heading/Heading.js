import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Heading.css';

Heading.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType(PropTypes.string, PropTypes.number), // reference point for scroll anchors
  children: PropTypes.node.isRequired,
  hasHeadingLines: PropTypes.bool,
  theme: PropTypes.oneOf(['gray', 'slate', 'white']),
};

Heading.defaultProps = {
  className: undefined,
  id: undefined,
  hasHeadingLines: true,
  theme: 'gray',
};

function Heading({
  children, className, hasHeadingLines, id, theme,
}) {
  const classes = classNames(className, styles.Heading, styles[theme], {
    [`${styles.headingLines}`]: hasHeadingLines,
  });

  return (
    <h2
      className={classes}
      id={id}
    >
      {children}
    </h2>
  );
}

export default Heading;
