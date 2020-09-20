import React from 'react';
import { arrayOf, bool, func, string, shape } from 'prop-types';
import classNames from 'classnames';
import { Image } from '@innocuous/components';
import Card from 'components/Cards/Card/Card';
import OnlineIcon from 'static/images/icons/Custom/online.svg';
import CampusIcon from 'static/images/icons/Custom/campus.svg';
import HousingIcon from 'static/images/icons/Custom/housing.svg';
import EquipmentIcon from 'static/images/icons/Custom/equipment.svg';
import LinkButton from 'components/Buttons/LinkButton/LinkButton';
import Button from 'components/Buttons/Button/Button';
import Badge from 'components/Badge/Badge';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './SchoolCard.module.css';

export const ONLINE_ONLY = 'Online only';
export const UNKNOWN = 'Unknown';
export const MULTIPLE = 'Multiple locations';

export const getSchoolLocationText = (hasOnlyOnline, locations) => {
  if (hasOnlyOnline) {
    return ONLINE_ONLY;
  }

  if (!Array.isArray(locations)) {
    return 'Unknown';
  }

  if (locations.length === 1) {
    const [location] = locations;
    return `${location.city}, ${location.state}`;
  }

  return 'Multiple locations';
};

// eslint-disable-next-line react/prop-types
const LabelWithScreenReader = ({ isActive, label }) => (
  <>
    <ScreenReaderOnly>{isActive ? 'Has ' : 'Does not have '}</ScreenReaderOnly>
    {label}
  </>
);

SchoolCard.propTypes = {
  hasHardwareIncluded: bool.isRequired,
  hasHousing: bool,
  hasOnline: bool.isRequired,
  hasOnlyOnline: bool.isRequired,
  // isFullTime: bool.isRequired,
  isVetTecApproved: bool,
  locations: arrayOf(
    shape({
      city: string,
      vaAccepted: bool.isRequired,
      state: string,
    }),
  ).isRequired,
  logoSource: string.isRequired,
  name: string.isRequired,
  website: string.isRequired,
  toggleModal: func.isRequired,
};

SchoolCard.defaultProps = {
  hasHousing: false,
  isVetTecApproved: false,
};

function SchoolCard({
  name,
  locations,
  toggleModal,
  isVetTecApproved,
  logoSource,
  hasOnline,
  hasHousing,
  hasOnlyOnline,
  hasHardwareIncluded,
  website,
}) {
  const toggleModalClick = () => {
    toggleModal({ name, locations });
  };

  const hasGiBill = locations.some(location => location.vaAccepted);
  const hasVetTec = isVetTecApproved;

  const badgeClassNames = isActive =>
    classNames(styles.badgeGroupItem, { [styles.active]: isActive, [styles.inactive]: !isActive });

  return (
    <Card className={styles.SchoolCard} hasAnimationOnHover={false} data-testid="SchoolCard">
      {/* Clearly express code school name to screen readers */}
      <ScreenReaderOnly>
        <h6 data-testid={`SchoolCard Name: ${name}`}>{name}</h6>
      </ScreenReaderOnly>

      {hasGiBill && (
        <div className={classNames(styles.ribbon, styles.gi)} data-testid="GI Bill Ribbon">
          GI Bill
        </div>
      )}

      {hasVetTec && (
        <div className={classNames(styles.ribbon, styles.vettec)} data-testid="Vet Tec Ribbon">
          Vet Tec
        </div>
      )}

      {hasVetTec && hasGiBill && (
        <div className={classNames(styles.ribbon, styles.dual)} data-testid="Dual Ribbon">
          GI Bill
        </div>
      )}

      <div className={styles.cardBrand}>
        <Image src={logoSource} alt={`${name} logo`} height="150" />
      </div>

      <div className={classNames(styles.cardBlock, styles.badgeGroup)}>
        <Badge
          label={<LabelWithScreenReader label="Physical campus" isActive={!hasOnlyOnline} />}
          icon={<CampusIcon />}
          className={badgeClassNames(!hasOnlyOnline)}
        />
        <Badge
          label={<LabelWithScreenReader label="Online classes" isActive={hasOnline} />}
          icon={
            <OnlineIcon data-testid={hasOnline ? 'School has online' : 'School has no online'} />
          }
          className={badgeClassNames(hasOnline)}
        />
        <Badge
          label={<LabelWithScreenReader label="Housing options" isActive={hasHousing} />}
          icon={<HousingIcon />}
          className={badgeClassNames(hasHousing)}
        />
        <Badge
          label={
            <LabelWithScreenReader label="Provided equipment" isActive={hasHardwareIncluded} />
          }
          icon={<EquipmentIcon />}
          className={badgeClassNames(hasHardwareIncluded)}
        />
      </div>

      <div className={styles.cardBlock}>
        <span className={styles.cardBlockTitle}>Campus Locations:</span>

        {getSchoolLocationText(hasOnlyOnline, locations)}

        {locations.length > 1 && (
          <Button
            analyticsObject={{
              action: 'Button Selected',
              category: 'Interactions',
              label: `${name} | Locations`,
            }}
            onClick={toggleModalClick}
            className={styles.modalToggler}
          >
            view all
          </Button>
        )}
      </div>

      <div className={styles.cardBlock}>
        <LinkButton
          analyticsEventLabel={`${name} | Website`}
          href={website}
          fullWidth
          theme="secondary"
        >
          Visit Website
        </LinkButton>
      </div>
    </Card>
  );
}

export default SchoolCard;
