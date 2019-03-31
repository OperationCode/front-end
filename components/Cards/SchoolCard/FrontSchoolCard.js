import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Badge from 'components/Badge/Badge';
import Button from 'components/Button/Button';
import LinkButton from 'components/LinkButton/LinkButton';
import DesktopIcon from 'static/images/icons/FontAwesome/desktop-solid.svg';
import DevicesIcon from 'static/images/icons/FontAwesome/devices-alt-solid.svg';
import HomeIcon from 'static/images/icons/FontAwesome/home-solid.svg';
import PeopleIcon from 'static/images/icons/FontAwesome/users-solid.svg';
import GIBillApprovedIcon from 'static/images/icons/gi-bill-approved.svg';
import GIBillUnavailableIcon from 'static/images/icons/gi-bill-unavailable.svg';
import styles from './FrontSchoolCard.css';

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
    const { props } = this;

    const hasLocationAcceptingGIBill = props.locations.some(location => location.va_accepted);

    return (
      <>
        <h5>{props.name}</h5>
        <img src={props.logoSource} alt={`${props.name} logo`} />
        <div className={styles.interactionsContainer}>
          <LinkButton analyticsEventLabel={`${props.name} | Website`} href={props.website}>
            Go To Website
          </LinkButton>
          {props.locations.length > 1 ? (
            <Button
              analyticsObject={{
                action: 'Button Selected',
                category: 'Interactions',
                label: `${props.name} | Locations`,
              }}
              onClick={props.cardFlipCallback}
            >
              See Locations
            </Button>
          ) : (
            <span className={styles.singleLocationText}>
              {props.hasOnlyOnline
                ? 'Online Only'
                : `${props.locations[0].city}, ${props.locations[0].state}`}
            </span>
          )}
        </div>

        <hr className={styles.divider} />

        <div className={styles.detailsRow}>
          {/* GI Bill */}
          <Badge
            label="G.I. Bill"
            className={classNames(styles.codeSchoolCardIcon, {
              [styles.active]: hasLocationAcceptingGIBill,
              [styles.disabled]: !hasLocationAcceptingGIBill,
            })}
            icon={hasLocationAcceptingGIBill ? <GIBillApprovedIcon /> : <GIBillUnavailableIcon />}
          />

          {/* Online Education */}
          <Badge
            label="Online"
            className={classNames(styles.codeSchoolCardIcon, {
              [styles.active]: props.hasOnline,
              [styles.disabled]: !props.hasOnline,
            })}
            icon={<DesktopIcon />}
          />

          {/* In-Person Education */}
          <Badge
            label="In-Person"
            className={classNames(styles.codeSchoolCardIcon, {
              [styles.active]: props.isFullTime,
              [styles.disabled]: !props.isFullTime,
            })}
            icon={<PeopleIcon />}
          />
        </div>

        <div className={styles.detailsRow}>
          {/* Equipment Provided */}
          <Badge
            label="Equipment"
            className={classNames(styles.codeSchoolCardIcon, {
              [styles.active]: props.hasHardwareIncluded,
              [styles.disabled]: !props.hasHardwareIncluded,
            })}
            icon={<DevicesIcon />}
          />

          {/* Housing Provided */}
          <Badge
            label="Housing"
            className={classNames(styles.codeSchoolCardIcon, {
              [styles.active]: props.hasHousing,
              [styles.disabled]: !props.hasHousing,
            })}
            icon={<HomeIcon />}
          />
        </div>
      </>
    );
  }
}
