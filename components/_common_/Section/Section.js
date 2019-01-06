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
<<<<<<< HEAD
  theme: PropTypes.oneOf(['gray', 'grayLight', 'mist', 'slate', 'white']),
=======
  theme: PropTypes.oneOf(['gray', 'secondary', 'white']),
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  title: PropTypes.string,
  contentClassName: PropTypes.string,
};

Section.defaultProps = {
<<<<<<< HEAD
  className: '',
=======
  className: undefined,
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  hasHeadingLines: true,
  id: '',
  style: {},
  theme: 'gray',
  title: '',
<<<<<<< HEAD
  contentClassName: '',
=======
  contentClassName: undefined,
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
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
<<<<<<< HEAD
    case 'grayLight':
    case 'mist':
    case 'white':
      headingTheme = 'slate';
      break;
    // Dark background colors have light heading color
    case 'gray':
    case 'slate':
=======
    case 'white':
    case 'gray':
      headingTheme = 'secondary';
      break;
    // Dark background colors have light heading color
    case 'secondary':
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
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
