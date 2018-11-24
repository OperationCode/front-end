import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from 'components/_common_/CloseButton/CloseButton';
import styles from './BackSchoolCard.css';

BackSchoolCard.propTypes = {
  cardFlipCallback: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      doesAcceptGIBill: PropTypes.bool.isRequired,
      state: PropTypes.string,
    }),
  ).isRequired,
  logoSource: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

function BackSchoolCard({ cardFlipCallback, locations, logoSource }) {
  return (
    <>
      <CloseButton onClick={cardFlipCallback} />

      <img src={logoSource} alt="" />
      <span className={styles.disclaimer}>
        <b>*</b> denotes a location that accepts the GI Bill
      </span>

      <hr className={styles.divider} />

      <ul className={styles.locations}>
        {locations.map(location => (
          <li>
            {location.city && location.state && `${location.city}, ${location.state}`}
            {location.doesAcceptGIBill ? '*' : null}
          </li>
        ))}
      </ul>
    </>
  );
}

export default BackSchoolCard;
