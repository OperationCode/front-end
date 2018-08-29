import React from 'react';
import PropTypes from 'prop-types';
import Card from 'common/components/Card/Card';
import styles from './ValueCard.css';

const ValueCard = ({ name, description }) => (
  <Card className={styles.valueCard} hasAnimationOnHover={false}>
    <h3>{name}</h3>
    <p>{description}</p>
  </Card>
);

ValueCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ValueCard;
