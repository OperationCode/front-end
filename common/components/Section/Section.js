import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Heading from 'common/components/Heading/Heading';
import styles from './Section.css';

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasHeadingLines: PropTypes.bool,
  id: PropTypes.oneOfType(PropTypes.string, PropTypes.number), // reference point for scroll anchors
  theme: PropTypes.oneOf(['gray', 'slate', 'white']),
  title: PropTypes.string,
};

Section.defaultProps = {
  className: undefined,
  hasHeadingLines: true,
  id: undefined,
  theme: 'gray',
  title: undefined,
};

function Section({
  children, className, hasHeadingLines, id, theme, title,
}) {
  // heading theme should contrast from section's theme.
  const headingTheme = theme === 'white' ? 'slate' : 'white';

  return (
    <div className={classNames(className, styles.Section, styles[theme])}>
      {title && (
        <Heading
          id={id}
          hasHeadingLines={hasHeadingLines}
          theme={headingTheme}
        >
          {title}
        </Heading>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Section;
