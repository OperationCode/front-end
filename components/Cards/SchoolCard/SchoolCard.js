import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Cards/Card/Card';
import OnlineIcon from 'static/images/icons/Custom/online.svg';
import CampusIcon from 'static/images/icons/Custom/campus.svg';
import HousingIcon from 'static/images/icons/Custom/housing.svg';
import EquipmentIcon from 'static/images/icons/Custom/equipment.svg';
import LinkButton from 'components/LinkButton/LinkButton';
import Button from 'components/Button/Button';
import Badge from 'components/Badge/Badge';
import styles from './SchoolCard.css';

class SchoolCard extends Component {
  static propTypes = {
    hasHardwareIncluded: PropTypes.bool.isRequired,
    hasHousing: PropTypes.bool,
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
    toggleModal: PropTypes.func.isRequired,
  };

  static defaultProps = {
    hasHousing: true,
  };

  toggleModalClick = () => {
    const { name, locations, toggleModal } = this.props;
    toggleModal({ name, locations });
  };

  render() {
    const { props } = this;

    const hasManyLocations = props.locations.length > 1;

    let locationText = 'Multiple locations';
    if (props.hasOnlyOnline) {
      locationText = 'Online only';
    } else if (!hasManyLocations) {
      const [location] = props.locations;
      locationText = `${location.city}, ${location.state}`;
    }

    const analyticsObject = {
      action: 'Button Selected',
      category: 'Interactions',
      label: `${props.name} | Locations`,
    };

    return (
      <Card className={styles.SchoolCard} hasAnimationOnHover={false}>
        <>
          <div className={styles.giBillRibbon}>GI Bill</div>

          <div className={styles.cardBrand}>
            <img src={props.logoSource} alt={`${props.name} logo`} height="150" />
          </div>

          <div className={styles.cardBlock}>
            <span className={styles.cardBlockTitle}>Availability</span>
            <div className={styles.badgeGroup}>
              {props.hasOnline && (
                <Badge label="Online" icon={<OnlineIcon />} className={styles.badgeGroupItem} />
              )}
              {props.hasOnlyOnline || (
                <Badge label="Campus" icon={<CampusIcon />} className={styles.badgeGroupItem} />
              )}
              {props.hasHousing && (
                <Badge label="Housing" icon={<HousingIcon />} className={styles.badgeGroupItem} />
              )}
              {props.hasHardwareIncluded && (
                <Badge
                  label="Equipment"
                  icon={<EquipmentIcon />}
                  className={styles.badgeGroupItem}
                />
              )}
            </div>
          </div>

          <div className={styles.cardBlock}>
            <span className={styles.cardBlockTitle}>Accepts GI Bill</span>
            Yes
          </div>

          <div className={styles.cardBlock}>
            <span className={styles.cardBlockTitle}>Campus Locations</span>
            {locationText}
            {hasManyLocations && (
              <>
                {' ('}
                <Button
                  analyticsObject={analyticsObject}
                  onClick={this.toggleModalClick}
                  className={styles.modalToggler}
                >
                  view all
                </Button>
                {')'}
              </>
            )}
          </div>

          <div className={styles.cardBlock}>
            <LinkButton
              analyticsEventLabel={`${props.name} | Website`}
              href={props.website}
              fullWidth
            >
              Visit Website
            </LinkButton>
          </div>
        </>
      </Card>
    );
  }
}

export default SchoolCard;
