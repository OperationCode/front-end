import React from 'react';
import { string, number, oneOfType, bool, node, oneOf } from 'prop-types';
import classNames from 'classnames';
import styles from './Heading.css';

Heading.propTypes = {
  className: string,
  id: oneOfType([string, number]), // reference for scroll anchors
  children: node.isRequired,
  hasHeadingLines: bool,
  theme: oneOf(['gray', 'secondary', 'white']),
};

Heading.defaultProps = {
  className: undefined,
  id: '',
  hasHeadingLines: true,
  theme: 'gray',
};

function Heading({ children, className, hasHeadingLines, id, theme }) {
  const classes = classNames(className, styles.Heading, styles[theme], {
    [`${styles.headingLines}`]: hasHeadingLines,
  });

  return (
    <h2 className={classes} id={id}>
      {children}
    </h2>
  );
}

export default Heading;
