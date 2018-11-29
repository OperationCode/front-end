import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from 'components/_common_/CloseButton/CloseButton';
import styles from './BackSchoolCard.css';

BackSchoolCard.propTypes = {
  cardFlipCallback: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      address1: PropTypes.string,
      address2: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      va_accepted: PropTypes.bool.isRequired,
      zip: PropTypes.number,
    }),
  ).isRequired,
  logoSource: PropTypes.string.isRequired,
  schoolName: PropTypes.string.isRequired,
};

function BackSchoolCard({ cardFlipCallback, locations, logoSource, schoolName }) {
  return (
    <>
      <CloseButton onClick={cardFlipCallback} theme="white" />
      <img src={logoSource} alt={`${schoolName} logo`} />
      <span className={styles.disclaimer}>
        <b>*</b> denotes a location that accepts the GI Bill
      </span>
      <hr className={styles.divider} />
      <ul className={styles.locations}>
        {locations.map(location => (
          <li key={`${location.address1} ${location.address2}`}>
            {location.city && location.state && `${location.city}, ${location.state}`}
            {location.va_accepted ? '*' : null}
          </li>
        ))}
      </ul>
    </>
  );
}

export default BackSchoolCard;
