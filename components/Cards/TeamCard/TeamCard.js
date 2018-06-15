import React from 'react';
import PropTypes from 'prop-types';
import styles from './TeamCard.css';

const TeamCard = ({
  name, role, slackUsername, email, isBoard, description, imageSrc
}) => (
  <div className={styles.TeamCard}>
    {imageSrc && <img src={imageSrc} alt={`Headshot of ${name}`} />}
    <h6 className={styles.Name}>{name}</h6>
    <i className={styles.Role}>{role}</i>
    <hr className={styles.Hr} />
    {!isBoard && (
      <span className={styles.Detail}>
        <span className={styles.Slack}>
          <text>{slackUsername}</text>
        </span>
        <span className={styles.Email}>
          <text>{email}</text>
        </span>
      </span>
    )}
    {isBoard &&
      description && (
        <span className={styles.DescriptionText}>
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
