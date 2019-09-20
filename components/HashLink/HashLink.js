import React, { useState } from 'react';
import { string } from 'prop-types';
import LinkIcon from 'static/images/icons/FontAwesome/link-solid.svg';
import styles from './HashLink.css';

HashLink.propTypes = {
  id: string,
  theme: string,
};

HashLink.defaultProps = {
  id: 'default',
  theme: 'white',
};

function HashLink({ id, theme }) {
  const newId = id.replace(/\s+/g, '-').toLowerCase();
  const [isVisible, setVisible] = useState();

  const stylesIconHidden = `${styles.icon} ${styles.iconHidden}`;
  let stylesIconVisible;
  const { anchor } = styles;

  if (theme === 'white' || theme === 'gray') {
    stylesIconVisible = `${styles.icon} ${styles.iconFillBlue} ${styles.iconVisible}`;
  } else {
    stylesIconVisible = `${styles.icon} ${styles.iconFillWhite} ${styles.iconVisible}`;
  }

  return (
    <a
      id={newId}
      href={`#${newId}`}
      className={anchor}
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
