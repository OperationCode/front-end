import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Badge from 'components/Badge/Badge';
import styles from './BadgeGroup.css';

export default class BadgeGroup extends Component {
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.node.isRequired,
        label: PropTypes.string.isRequired,
        className: PropTypes.string,
      }),
    ).isRequired,
    hasMarginTop: PropTypes.bool,
    hasBadgeMargins: PropTypes.bool,
  };

  static defaultProps = {
    className: undefined,
    hasMarginTop: false,
    hasBadgeMargins: true,
  };

  render() {
    const { className, hasBadgeMargins, hasMarginTop, items } = this.props;

    const groupClassNames = [styles.BadgeGroup, className];

    if (hasBadgeMargins) {
      groupClassNames.push(styles.groupBadgeMargins);
    }

    if (hasMarginTop) {
      groupClassNames.push(styles.groupMarginTop);
    }

    return (
      <div className={classNames(...groupClassNames)}>
        {items.map((badge, index) => (
          <Badge
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={classNames(styles.groupBadge, badge.className)}
            label={badge.label}
            icon={badge.icon}
          />
        ))}
      </div>
    );
  }
}
