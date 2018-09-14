import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'common/components/Button/Button';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
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
        doesAcceptGIBill: PropTypes.bool.isRequired,
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
          {props.locations.some(location => location.doesAcceptGIBill) ? (
            <figure className={`${styles.detailItem} ${styles.active}`}>
              <GIBillApprovedIcon
                aria-hidden="true"
                className={styles.icon}
                style={{ margin: '0 0.25rem' }}
              />
              <figcaption className={styles.detailText}>G.I. Bill</figcaption>
            </figure>
          ) : (
            <figure className={`${styles.detailItem} ${styles.disabled}`}>
              <GIBillUnavailableIcon
                aria-hidden="true"
                className={styles.icon}
                style={{ margin: '0 0.25rem' }}
              />
              <figcaption className={styles.detailText}>G.I. Bill</figcaption>
            </figure>
          )}

          {/* Online Education */}
          <figure
            className={classNames(styles.detailItem, {
              [styles.active]: props.hasOnline,
              [styles.disabled]: !props.hasOnline,
            })}
          >
            <DesktopIcon aria-hidden="true" className={styles.icon} />
            <figcaption className={styles.detailText}>Online</figcaption>
          </figure>

          {/* In-Person Education */}
          <figure
            className={classNames(styles.detailItem, {
              [styles.active]: props.isFullTime,
              [styles.disabled]: !props.isFullTime,
            })}
          >
            <PeopleIcon aria-hidden="true" className={styles.icon} />
            <figcaption className={styles.detailText}>In-Person</figcaption>
          </figure>
        </div>

        <div className={styles.detailsRow}>
          {/* Equipment Provided */}
          <figure
            className={classNames(styles.detailItem, {
              [styles.active]: props.hasHardwareIncluded,
              [styles.disabled]: !props.hasHardwareIncluded,
            })}
          >
            <DevicesIcon aria-hidden="true" className={styles.icon} />
            <figcaption className={styles.detailText}>Equipment</figcaption>
          </figure>

          {/* Housing Provided */}
          <figure
            className={classNames(styles.detailItem, {
              [styles.active]: props.hasHousing,
              [styles.disabled]: !props.hasHousing,
            })}
          >
            <HomeIcon aria-hidden="true" className={styles.icon} />
            <figcaption className={styles.detailText}>Housing</figcaption>
          </figure>
        </div>
      </>
    );
  }
}
