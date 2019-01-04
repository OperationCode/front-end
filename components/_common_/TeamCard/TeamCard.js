import React from 'react';
import PropTypes from 'prop-types';
import styles from './TeamCard.css';

const TeamCard = ({
  name, role, slackUsername, email, isBoard, description, imageSrc
}) => (
  <div className={styles.teamCard}>
    {imageSrc && <img src={imageSrc} alt={`Headshot of ${name}`} />}
    <h6 className={styles.name}>{name}</h6>
    <i className={styles.role}>{role}</i>
    <hr className={styles.hr} />
    {!isBoard && (
      <span className={styles.detail}>
        <span className={styles.slack}>
          <text>{slackUsername}</text>
        </span>
        <span className={styles.email}>
          <text>{email}</text>
        </span>
      </span>
    )}
    {isBoard &&
      description && (
        <span className={styles.descriptionText}>
          <text>{description}</text>
        </span>
      )}
  </div>
);

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  slackUsername: PropTypes.string,
  email: PropTypes.string,
  isBoard: PropTypes.bool,
  imageSrc: PropTypes.string,
  description: PropTypes.string
};

TeamCard.defaultProps = {
  description: null,
  email: '',
  isBoard: true,
  imageSrc: '',
  slackUsername: ''
};

export default TeamCard;