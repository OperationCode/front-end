/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
import styles from './IconTextGrouping.css';

IconTextGrouping.propTypes = {
  className: PropTypes.string,
  fontAwesomeIcon: PropTypes.object.isRequired,
  iconAboveHeading: PropTypes.bool,
  iconSize: PropTypes.string,
  subText: PropTypes.node,
  theme: PropTypes.oneOf(['primary', 'secondary', 'gray']),
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

IconTextGrouping.defaultProps = {
  className: '',
  iconAboveHeading: false,
  iconSize: '6x',
  subText: undefined,
  theme: 'gray',
  url: undefined,
};

function IconTextGrouping({
  className,
  fontAwesomeIcon,
  iconSize,
  iconAboveHeading,
  subText,
  theme,
  title,
  url,
}) {
  const icon = (
    <FontAwesomeIcon
      className={styles.IconTextGrouping__icon}
      icon={fontAwesomeIcon}
      size={iconSize}
    />
  );

  let iconBefore = null;
  let iconAfter = null;
  const titleNode = <h5 className={styles.IconTextGrouping__title}>{title}</h5>;

  if (iconAboveHeading) {
    iconBefore = icon;
  } else {
    iconAfter = icon;
  }

  const themeClassNames = {
    [styles.primary]: theme === 'primary',
    [styles.secondary]: theme === 'secondary',
    [styles.gray]: theme === 'gray',
  };

  const subTextNode = subText ? (
    <div className={styles.IconTextGrouping__subtext}>{subText}</div>
  ) : null;

  if (url) {
    return (
      <OutboundLink
        analyticsEventLabel={`${title} <IconTextGrouping>`}
        className={classNames(
          styles.IconTextGrouping,
          styles.IconTextGroupingWithSubText,
          styles.IconTextGrouping__link,
          themeClassNames,
          className,
        )}
        href={url}
        hasIcon={false}
      >
        {iconBefore}
        {titleNode}
        {iconAfter}
        {subTextNode}
      </OutboundLink>
    );
  }

  return (
    <div
      className={classNames(styles.IconTextGrouping, themeClassNames, className, {
        [styles.IconTextGroupingWithSubText]: subTextNode,
      })}
    >
      {iconBefore}
      {titleNode}
      {iconAfter}
    </div>
  );
}

export default IconTextGrouping;
