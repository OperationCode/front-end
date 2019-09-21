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

function getId(id) {
  return id
    .replace(/\s+/g, '-')
    .replace(/\?|!/g, '')
    .toLowerCase();
}

function getVisibleIcon(theme) {
  let visibleIcon = `${styles.icon} ${styles.iconVisible}`;

  if (theme === 'white' || theme === 'gray') {
    visibleIcon += `${styles.iconFillBlue}`;
  } else {
    visibleIcon += `${styles.iconFillWhite}`;
  }

  return visibleIcon;
}

function getAnchorClass(customIconOffset) {
  const { anchorDefault, anchorOffsetLineHeightOne } = styles;
  let anchorClass;

  if (customIconOffset === 'offsetLineHeightOne') {
    anchorClass = anchorOffsetLineHeightOne;
  } else {
    anchorClass = anchorDefault;
  }

  return anchorClass;
}

function HashLink({ id, theme, customIconOffset }) {
  const [isVisible, setVisible] = useState();
  const anchorId = getId(id);
  const anchorClass = getAnchorClass(customIconOffset);
  const hiddenIcon = `${styles.icon} ${styles.iconHidden}`;
  const visibleIcon = getVisibleIcon(theme);

  return (
    <a
      id={anchorId}
      href={`#${anchorId}`}
      className={anchorClass}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <LinkIcon className={isVisible ? visibleIcon : hiddenIcon} data-testid="link-icon" />
    </a>
  );
}

export default HashLink;
