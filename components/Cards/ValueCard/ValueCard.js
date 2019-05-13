import React from 'react';
import { string } from 'prop-types';
import Card from 'components/Cards/Card/Card';
import styles from './ValueCard.css';

ValueCard.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
};

function ValueCard({ description, name }) {
  return (
    <Card className={styles.ValueCard} hasAnimationOnHover={false}>
      <h3 className={styles.name}>{name}</h3>
      <p>{description}</p>
    </Card>
  );
}

export default ValueCard;
