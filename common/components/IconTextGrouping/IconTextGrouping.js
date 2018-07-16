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
  isIconAboveHeading: PropTypes.bool,
  iconSize: PropTypes.string,
  subText: PropTypes.string,
  theme: PropTypes.oneOf(['primary', 'secondary', 'slate']),
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

IconTextGrouping.defaultProps = {
  className: '',
  isIconAboveHeading: false,
  iconSize: '6x',
  subText: '',
  theme: 'slate',
  url: undefined,
};

function IconTextGrouping({
  className,
  fontAwesomeIcon,
  iconSize,
  isIconAboveHeading,
  subText,
  theme,
  title,
  url,
}) {
  const iconTextGroupingClassNames = classNames(
    styles.IconTextGrouping, className, styles[theme], { [styles.link]: !!url },
  );

  const content = (
    <React.Fragment>
      {isIconAboveHeading && (
        <FontAwesomeIcon
          className={styles.icon}
          icon={fontAwesomeIcon}
          size={iconSize}
        />
      )}
      {<h5 className={styles.title}>{title}</h5>}
      {!isIconAboveHeading && (
        <FontAwesomeIcon
          className={styles.icon}
          icon={fontAwesomeIcon}
          size={iconSize}
        />
      )}
      {subText && <div className={styles.subtext}>{subText}</div>}
    </React.Fragment>
  );

  return url ? (
    <OutboundLink
      analyticsEventLabel={`${title} <IconTextGrouping>`}
      className={iconTextGroupingClassNames}
      href={url}
      hasIcon={false}
    >
      {content}
    </OutboundLink>
  ) : (
    <div className={iconTextGroupingClassNames}>{content}</div>
  );
}

export default IconTextGrouping;
