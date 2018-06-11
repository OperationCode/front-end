import React from 'react';
import PropTypes from 'prop-types';
import styles from './StaffCard.css';

const StaffCard = ({
  src, alt, name, role, twitter, email
}) => (
  <div className={styles.StaffCard}>
    <img className={styles.img} src={src} alt={alt} />
    <span className={styles.Name}>
      {name}
    </span>
    <hr className={styles.Hr} />
    <span className={styles.Item}>
      <span className={styles.Upper}>Role: </span> {role}
    </span>
    <span className={styles.Item}>
      <span className={styles.Upper}>Twitter: </span> {twitter}
    </span>
    <span className={styles.Item}>
      <span className={styles.Upper}>Email: </span> {email}
    </span>
  </div>
);

StaffCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default StaffCard;
