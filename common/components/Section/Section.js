import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Heading from 'common/components/Heading/Heading';
import styles from './Section.css';

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
  className: PropTypes.string,
  theme: PropTypes.string,
  headingLines: PropTypes.bool,
  headingTheme: PropTypes.string,
};

Section.defaultProps = {
  id: null,
  title: null,
  className: null,
  theme: 'gray',
  headingLines: true,
  headingTheme: 'dark',
};

function Section({
  id, title, children, className, theme, headingLines, headingTheme,
}) {
  const classes = classNames({
    [`${styles.Section}`]: true,
    [`${className}`]: className,
    [`${styles[theme]}`]: true,
  });

  return (
    <div
      name={id}
      className={classes}
    >
      {title && <Heading
        text={title}
        id={id}
        headingLines={headingLines}
        theme={headingTheme}
      />}
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Section;
