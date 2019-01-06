import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Heading.css';

Heading.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // reference for scroll anchors
  children: PropTypes.node.isRequired,
  hasHeadingLines: PropTypes.bool,
<<<<<<< HEAD
  theme: PropTypes.oneOf(['gray', 'slate', 'white']),
};

Heading.defaultProps = {
  className: '',
=======
  theme: PropTypes.oneOf(['gray', 'secondary', 'white']),
};

Heading.defaultProps = {
  className: undefined,
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
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
