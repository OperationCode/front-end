import React, { useState } from 'react';
import { string } from 'prop-types';
import LinkIcon from 'static/images/icons/FontAwesome/link-solid.svg';
import styles from './HashLink.css';

HashLink.propTypes = {
  id: string,
  theme: string,
  customIconOffset: string,
};

HashLink.defaultProps = {
  id: 'default',
  theme: 'white',
  customIconOffset: 'default',
};

function HashLink({ id, theme, customIconOffset }) {
  const newId = id.replace(/\s+/g, '-').toLowerCase();
  const [isVisible, setVisible] = useState();

  const stylesIconHidden = `${styles.icon} ${styles.iconHidden}`;
  let stylesIconVisible = `${styles.icon} ${styles.iconVisible}`;
  const { anchorDefault, anchorEventHeadingTitleOffset } = styles;
  let customClass;

  if (theme === 'white' || theme === 'gray') {
    stylesIconVisible += `${styles.iconFillBlue}`;
  } else {
    stylesIconVisible += `${styles.iconFillWhite}`;
  }

  if (customIconOffset === 'eventHeadingTitleOffset') {
    customClass = anchorEventHeadingTitleOffset;
  } else {
    customClass = anchorDefault;
  }

  return (
    <a
      id={newId}
      href={`#${newId}`}
      className={customClass}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <LinkIcon
        className={isVisible ? stylesIconVisible : stylesIconHidden}
        data-testid="link-icon"
      />
    </a>
  );
}

export default HashLink;
