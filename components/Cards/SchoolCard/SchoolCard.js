import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from 'components/Cards/Card/Card';
import OnlineIcon from 'static/images/icons/Custom/online.svg';
import CampusIcon from 'static/images/icons/Custom/campus.svg';
import HousingIcon from 'static/images/icons/Custom/housing.svg';
import EquipmentIcon from 'static/images/icons/Custom/equipment.svg';
import LinkButton from 'components/LinkButton/LinkButton';
import Button from 'components/Button/Button';
import Badge from 'components/Badge/Badge';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './SchoolCard.css';

export const getSchoolLocationText = (hasOnlyOnline, locations) => {
  let locationText = 'Multiple locations';
  if (hasOnlyOnline) {
    locationText = 'Online only';
  } else if (locations.length === 1) {
    const [location] = locations;
    locationText = `${location.city}, ${location.state}`;
  }

  return locationText;
};

// eslint-disable-next-line react/prop-types
const LabelWithScreenReader = ({ isActive, label }) => (
  <>
    <ScreenReaderOnly>{isActive ? 'Has ' : 'Does not have '}</ScreenReaderOnly>
    {label}
  </>
);

export default class SchoolCard extends Component {
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
    hasHousing: false,
  };

  toggleModalClick = () => {
    const { name, locations, toggleModal } = this.props;
    toggleModal({ name, locations });
  };

  render() {
    const { props } = this;

    const hasGiBill = props.locations.some(location => location.va_accepted);
    const badgeClassNames = isActive =>
      classNames(styles.badgeGroupItem, { [styles.active]: isActive });

    return (
      <Card className={styles.SchoolCard} hasAnimationOnHover={false}>
        {hasGiBill && <div className={styles.giBillRibbon}>GI Bill</div>}

        <div className={styles.cardBrand}>
          <img src={props.logoSource} alt={`${props.name} logo`} height="150" />
        </div>

        <div className={styles.cardBlock}>
          <span className={styles.cardBlockTitle}>Availability</span>
          <div className={styles.badgeGroup}>
            <Badge
              label={<LabelWithScreenReader label="Online" isActive={props.hasOnline} />}
              icon={<OnlineIcon />}
              className={badgeClassNames(props.hasOnline)}
            />
            <Badge
              label={<LabelWithScreenReader label="Campus" isActive={!props.hasOnlyOnline} />}
              icon={<CampusIcon />}
              className={badgeClassNames(!props.hasOnlyOnline)}
            />
            <Badge
              label={<LabelWithScreenReader label="Housing" isActive={props.hasHousing} />}
              icon={<HousingIcon />}
              className={badgeClassNames(props.hasHousing)}
            />
            <Badge
              label={
                <LabelWithScreenReader label="Equipment" isActive={props.hasHardwareIncluded} />
              }
              icon={<EquipmentIcon />}
              className={badgeClassNames(props.hasHardwareIncluded)}
            />
          </div>
        </div>

        <div className={styles.cardBlock}>
          <span className={styles.cardBlockTitle}>Accepts GI Bill</span>
          {hasGiBill ? 'Yes' : 'No'}
        </div>

        <div className={styles.cardBlock}>
          <span className={styles.cardBlockTitle}>Campus Locations</span>
          {getSchoolLocationText(props.hasOnlyOnline, props.locations)}
          {props.locations.length > 1 && (
            <Button
              analyticsObject={{
                action: 'Button Selected',
                category: 'Interactions',
                label: `${props.name} | Locations`,
              }}
              onClick={this.toggleModalClick}
              className={styles.modalToggler}
            >
              view all
            </Button>
          )}
        </div>

        <div className={styles.cardBlock}>
          <LinkButton
            analyticsEventLabel={`${props.name} | Website`}
            href={props.website}
            fullWidth
            theme="secondary"
          >
            Visit Website
          </LinkButton>
        </div>
      </Card>
    );
  }
}
