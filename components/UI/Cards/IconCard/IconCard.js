/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styles from './IconCard.css';

IconCard.propTypes = {
  fontAwesomeIcon: PropTypes.object.isRequired,
  iconAboveHeading: PropTypes.bool,
  iconSize: PropTypes.string,
  subText: PropTypes.node,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

IconCard.defaultProps = {
  iconAboveHeading: false,
  iconSize: '6x',
  subText: undefined,
  url: undefined,
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
    return (
      <a
        href={url}
        className={classNames(styles.iconCard, styles.iconCardWithSubText)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {iconBefore}
        {titleNode}
        {iconAfter}
        {subText && subTextNode}
      </a>
    );
  }

  if (subText) {
    return (
      <div className={classNames(styles.iconCard, styles.iconCardWithSubText)}>
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
