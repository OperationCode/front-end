import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'common/components/Button/Button';
import Card from 'common/components/Card/Card';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
// import DesktopIcon from 'static/images/icons/FontAwesome/desktop-solid.svg';
// import DevicesIcon from 'static/images/icons/FontAwesome/devices-alt-solid.svg';
// import HomeIcon from 'static/images/icons/FontAwesome/home-solid.svg';
// import PeopleIcon from 'static/images/icons/FontAwesome/users-solid.svg';
// import GIBillApprovedIcon from 'static/images/icons/gi-bill-approved.svg';
// import GIBillUnavailableIcon from 'static/images/icons/gi-bill-unavailable.svg';
import styles from './NewSchoolCard.css';

class NewSchoolCard extends Component {
  static propTypes = {
    hasHardwareIncluded: PropTypes.bool.isRequired,
    hasOnline: PropTypes.bool.isRequired,
    isFullTime: PropTypes.bool.isRequired,
    locations: PropTypes.arrayOf(
      PropTypes.shape({
        address: PropTypes.string,
        city: PropTypes.string,
        doesAcceptGIBill: PropTypes.bool,
        state: PropTypes.string,
      }),
    ),
    logoSource: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  };

  static defaultProps = {
    locations: [],
  };

  state = {
    isCardFlipped: false,
  };

  showLocations = () => {
    this.setState({ isCardFlipped: true });
  };

  render() {
    const { props, state } = this;

    if (state.isCardFlipped) {
      return <Card className={styles.NewSchoolCard} hasAnimationOnHover />;
    }

    return (
      <Card className={styles.NewSchoolCard} hasAnimationOnHover>
        <img src={props.logoSource} alt={`${props.name} Logo`} className={styles.logo} />

        <div className={styles.flexContainer}>
          <Button>
            <OutboundLink
              analyticsEventLabel={`Code School Website: ${props.name}`}
              hasIcon={false}
              href={props.website}
            >
              Go To Website
            </OutboundLink>
          </Button>

          {props.locations.length > 1 ? (
            <Button
              analyticsObject={{
                action: 'Button Selected',
                category: 'Interactions',
                label: `Code School Locations: ${props.name}`,
              }}
              onClick={this.showLocations}
            >
              See Locations
            </Button>
          ) : (
            <span className={styles.singleLocationText}>
              {props.locations.length === 1
                ? `${props.locations[0].city}, ${props.locations[0].state}`
                : 'Online Only'}
            </span>
          )}
        </div>

        <hr className={styles.divider} />

        <section className={classNames(styles.flexContainer, styles.detailIcons)}>
          <div />
        </section>

        {/* <template className={styles.content}>

          <section className={styles.NewSchoolCardText}>
            <h5 className={styles.name}>{name}</h5>
            <address className={styles.location}>
              {hasOnlineProgram && 'Online Available'}
              {hasOnlineProgram && <br />}
              {city && `${city}, `}
              {state}
            </address>

            <ul className={styles.info}>
              <li>
                GI Bill Accepted: <b>{doesAcceptGIBill ? 'Yes' : 'No'}</b>
              </li>
              <li>
                Commitment: <b>{isFullTime ? 'Full-Time' : 'Flexible'}</b>
              </li>
              <li>
                Hardware Included: <b>{hasHardwareIncluded ? 'Yes' : 'No'}</b>
              </li>
            </ul>
          </section>
        </template> */}
      </Card>
    );
  }
}

export default NewSchoolCard;
