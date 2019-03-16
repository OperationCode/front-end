import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BadgeGroup from 'components/BadgeGroup/BadgeGroup';
import Button from 'components/Button/Button';
import LinkButton from 'components/LinkButton/LinkButton';
import DesktopIcon from 'static/images/icons/FontAwesome/desktop-solid.svg';
import DevicesIcon from 'static/images/icons/FontAwesome/devices-alt-solid.svg';
import HomeIcon from 'static/images/icons/FontAwesome/home-solid.svg';
import PeopleIcon from 'static/images/icons/FontAwesome/users-solid.svg';
import GIBillApprovedIcon from 'static/images/icons/gi-bill-approved.svg';
import GIBillUnavailableIcon from 'static/images/icons/gi-bill-unavailable.svg';
import styles from './FrontSchoolCard.css';

const badgeClassName = isBadgeActive =>
  classNames(styles.codeSchoolCardIcon, {
    [styles.active]: isBadgeActive,
    [styles.disabled]: !isBadgeActive,
  });

export default class FrontSchoolCard extends Component {
  static propTypes = {
    cardFlipCallback: PropTypes.func.isRequired,
    hasHardwareIncluded: PropTypes.bool.isRequired,
    hasHousing: PropTypes.bool.isRequired,
    hasOnline: PropTypes.bool.isRequired,
    hasOnlyOnline: PropTypes.bool.isRequired,
    isFullTime: PropTypes.bool.isRequired,
    locations: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string,
        va_accepted: PropTypes.bool.isRequired,
        state: PropTypes.string,
      }),
    ).isRequired,
    logoSource: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  };

  render() {
    const { name, locations, ...props } = this.props;

    const hasLocationAcceptingGIBill = locations.some(location => location.va_accepted);
    const analyticsObject = {
      action: 'Button Selected',
      category: 'Interactions',
      label: `${name} | Locations`,
    };

    return (
      <>
        <h5>{name}</h5>
        <img src={props.logoSource} alt={`${name} logo`} />

        <div className={styles.interactionsContainer}>
          <LinkButton analyticsEventLabel={`${name} | Website`} href={props.website}>
            Go To Website
          </LinkButton>
          {locations.length && (
            <Button analyticsObject={analyticsObject} onClick={props.cardFlipCallback}>
              See Locations
            </Button>
          )}
          {!locations.length && (
            <span className={styles.singleLocationText}>
              {props.hasOnlyOnline ? 'Online Only' : `${locations[0].city}, ${locations[0].state}`}
            </span>
          )}
        </div>

        <hr className={styles.divider} />

        <div className={styles.cardBadgeGroups}>
          <BadgeGroup
            className={styles.cardBadgeGroup}
            hasBadgeMargins={false}
            items={[
              {
                label: 'G.I. Bill',
                icon: hasLocationAcceptingGIBill ? (
                  <GIBillApprovedIcon />
                ) : (
                  <GIBillUnavailableIcon />
                ),
                className: badgeClassName(hasLocationAcceptingGIBill),
              },
              {
                label: 'Online',
                icon: <DesktopIcon />,
                className: badgeClassName(props.hasOnline),
              },
              {
                label: 'In-Person',
                icon: <PeopleIcon />,
                className: badgeClassName(props.isFullTime),
              },
            ]}
          />

          <BadgeGroup
            className={styles.detailsBadges}
            hasBadgeMargins={false}
            items={[
              {
                label: 'Equipment',
                icon: <DevicesIcon />,
                className: badgeClassName(props.hasHardwareIncluded),
              },
              {
                label: 'Housing',
                icon: <HomeIcon />,
                className: badgeClassName(props.hasHousing),
              },
            ]}
          />
        </div>
      </>
    );
  }
}
