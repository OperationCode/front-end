import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from 'components/_common_/CloseButton/CloseButton';
import styles from './BackSchoolCard.css';

BackSchoolCard.propTypes = {
  cardFlipCallback: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      va_accepted: PropTypes.bool.isRequired,
      state: PropTypes.string,
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
          <li key={`${location}`}>
            {location.city && location.state && `${location.city}, ${location.state}`}
            {location.va_accepted ? '*' : null}
          </li>
        ))}
      </ul>
    </>
  );
}

export default BackSchoolCard;
