import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'components/_common_/Button/Button';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import DesktopIcon from 'static/images/icons/FontAwesome/desktop-solid.svg';
import DevicesIcon from 'static/images/icons/FontAwesome/devices-alt-solid.svg';
import HomeIcon from 'static/images/icons/FontAwesome/home-solid.svg';
import PeopleIcon from 'static/images/icons/FontAwesome/users-solid.svg';
import GIBillApprovedIcon from 'static/images/icons/gi-bill-approved.svg';
import GIBillUnavailableIcon from 'static/images/icons/gi-bill-unavailable.svg';
import Badge from 'components/Badge/Badge';
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

    return (
      <>
        <h5>{props.name}</h5>
        <img src={props.logoSource} alt="" />

        <div className={styles.interactionsContainer}>
          <Button>
            <OutboundLink analyticsEventLabel={`${props.name} | Website`} href={props.website}>
              Go To Website
            </OutboundLink>
          </Button>

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
          {props.locations.some(location => location.va_accepted) ? (
            <div className={`${styles.detailItem} ${styles.active}`}>
              <Badge
                label="G.I Bill"
                className={styles.codeSchoolCardIcon}
                icon={<GIBillApprovedIcon />}
              />
            </div>
          ) : (
            <div className={`${styles.detailItem} ${styles.disabled}`}>
              <Badge
                label="G.I Bill"
                className={styles.codeSchoolCardIcon}
                icon={<GIBillUnavailableIcon />}
              />
            </div>
          )}

          {/* Online Education */}
          <div
            className={classNames(styles.detailItem, {
              [styles.active]: props.hasOnline,
              [styles.disabled]: !props.hasOnline,
            })}
          >
            <Badge label="Online" className={styles.codeSchoolCardIcon} icon={<DesktopIcon />} />
          </div>

          {/* In-Person Education */}
          <div
            className={classNames(styles.detailItem, {
              [styles.active]: props.isFullTime,
              [styles.disabled]: !props.isFullTime,
            })}
          >
            {' '}
            <Badge label="In-Person" className={styles.codeSchoolCardIcon} icon={<PeopleIcon />} />
          </div>
        </div>

        <div className={styles.detailsRow}>
          {/* Equipment Provided */}
          <div
            className={classNames(styles.detailItem, {
              [styles.active]: props.hasHardwareIncluded,
              [styles.disabled]: !props.hasHardwareIncluded,
            })}
          >
            {' '}
            <Badge label="Equipment" className={styles.codeSchoolCardIcon} icon={<DevicesIcon />} />
          </div>

          {/* Housing Provided */}
          <div
            className={classNames(styles.detailItem, {
              [styles.active]: props.hasHousing,
              [styles.disabled]: !props.hasHousing,
            })}
          >
            {' '}
            <Badge label="Housing" className={styles.codeSchoolCardIcon} icon={<HomeIcon />} />
          </div>
        </div>
      </>
    );
  }
}
