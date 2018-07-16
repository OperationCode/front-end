import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Heading from 'common/components/Heading/Heading';
import styles from './Section.css';

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasHeadingLines: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // reference for scroll anchors
  style: PropTypes.object,
  theme: PropTypes.oneOf(['gray', 'grayLight', 'slate', 'white']),
  title: PropTypes.string,
};

Section.defaultProps = {
  className: '',
  hasHeadingLines: true,
  id: '',
  style: {},
  theme: 'gray',
  title: '',
};

function Section({
  children, className, hasHeadingLines, id, theme, style, title,
}) {
  // heading theme should contrast from section's theme.
  const headingTheme = theme === 'white' || theme === 'grayLight' ? 'slate' : 'white';

  return (
    <section
      className={classNames(className, styles.Section, styles[theme])}
      style={style}
    >
      {title && (
        <Heading
          id={id}
          hasHeadingLines={hasHeadingLines}
          theme={headingTheme}
        >
          {title}
        </Heading>
      )}
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}

export default Section;
