import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Heading from 'components/_common_/Heading/Heading';
import styles from './Section.css';

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasHeadingLines: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // reference for scroll anchors
  style: PropTypes.object,
  theme: PropTypes.oneOf(['gray', 'secondary', 'white']),
  title: PropTypes.string,
  contentClassName: PropTypes.string,
};

Section.defaultProps = {
  className: undefined,
  hasHeadingLines: true,
  id: '',
  style: {},
  theme: 'gray',
  title: '',
  contentClassName: undefined,
};

function Section({
  children,
  className,
  hasHeadingLines,
  id,
  theme,
  style,
  title,
  contentClassName,
}) {
  // heading theme should contrast from section's theme.
  let headingTheme;
  switch (theme) {
    // Light background colors have dark heading color
    case 'white':
    case 'gray':
      headingTheme = 'secondary';
      break;
    // Dark background colors have light heading color
    case 'secondary':
      headingTheme = 'white';
      break;
    default:
      break;
  }

  return (
    <section className={classNames(className, styles.Section, styles[theme])} style={style}>
      {title && (
        <Heading id={id} hasHeadingLines={hasHeadingLines} theme={headingTheme}>
          {title}
        </Heading>
      )}
      <div className={`${styles.content} ${contentClassName}`}>{children}</div>
    </section>
  );
}

export default Section;
