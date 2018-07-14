/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
import styles from './IconTextGrouping.css';

IconTextGrouping.propTypes = {
  fontAwesomeIcon: PropTypes.object.isRequired,
  iconAboveHeading: PropTypes.bool,
  iconSize: PropTypes.string,
  subText: PropTypes.node,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

IconTextGrouping.defaultProps = {
  iconAboveHeading: false,
  iconSize: '6x',
  subText: undefined,
  url: undefined,
};

function IconTextGrouping({
  fontAwesomeIcon, iconSize, iconAboveHeading, subText, title, url,
}) {
  const icon = (<FontAwesomeIcon
    icon={fontAwesomeIcon}
    size={iconSize}
  />);

  let iconBefore = null;
  let iconAfter = null;
  const titleNode = <h5 className={styles.IconTextGrouping__title}>{title}</h5>;

  if (iconAboveHeading) {
    iconBefore = icon;
  } else {
    iconAfter = icon;
  }

  const subTextNode = <span className={styles.IconTextGrouping__subtext}>{subText}</span>;

  if (url) {
    return (
      <OutboundLink
        analyticsEventLabel={`${title} <IconTextGrouping>`}
        className={classNames(styles.IconTextGrouping, styles.IconTextGroupingWithSubText)}
        href={url}
        hasIcon={false}
      >
        {iconBefore}
        {titleNode}
        {iconAfter}
        {subText && subTextNode}
      </OutboundLink>
    );
  }

  if (subText) {
    return (
      <div className={classNames(styles.IconTextGrouping, styles.IconTextGroupingWithSubText)}>
        {iconBefore}
        {titleNode}
        {iconAfter}
        {subTextNode}
      </div>
    );
  }

  return (
    <div className={styles.IconTextGrouping}>
      {iconBefore}
      {titleNode}
      {iconAfter}
    </div>
  );
}

export default IconTextGrouping;
