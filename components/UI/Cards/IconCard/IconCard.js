/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styles from './IconCard.css';

IconCard.propTypes = {
  title: PropTypes.string.isRequired,
  subText: PropTypes.node,
  fontAwesomeIcon: PropTypes.object.isRequired,
  url: PropTypes.string,
  iconSize: PropTypes.string,
  iconAboveHeading: PropTypes.bool,
};

IconCard.defaultProps = {
  subText: undefined,
  url: undefined,
  iconSize: '6x',
  iconAboveHeading: false,
};

function IconCard({
  fontAwesomeIcon, iconSize, iconAboveHeading, subText, title, url,
}) {
  const icon = (<FontAwesomeIcon
    icon={fontAwesomeIcon}
    size={iconSize}
  />);

  let iconBefore = null;
  let iconAfter = null;
  const titleNode = <h5 className={styles.iconCard__title}>{title}</h5>;

  if (iconAboveHeading) {
    iconBefore = icon;
  } else {
    iconAfter = icon;
  }

  const subTextNode = <span className={styles.iconCard__subtext}>{subText}</span>;

  if (url) {
    if (subText) {
      return (
        <a
          href={url}
          className={[styles.iconCard, styles.iconCardWithSubText].join(' ')}
          target="_blank"
          rel="noopener noreferrer"
        >
          {iconBefore}
          {titleNode}
          {iconAfter}
          {subTextNode}
        </a>
      );
    }

    return (
      <a
        href={url}
        className={styles.iconCard}
        target="_blank"
        rel="noopener noreferrer"
      >
        {iconBefore}
        {titleNode}
        {iconAfter}
      </a>
    );
  }

  if (subText) {
    return (
      <div className={[styles.iconCard, styles.iconCardWithSubText].join(' ')}>
        {iconBefore}
        {titleNode}
        {iconAfter}
        {subTextNode}
      </div>
    );
  }

  return (
    <div className={styles.iconCard}>
      {iconBefore}
      {titleNode}
      {iconAfter}
    </div>
  );
}

export default IconCard;
