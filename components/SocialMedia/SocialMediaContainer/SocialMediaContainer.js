import { arrayOf, element } from 'prop-types';
import React from 'react';
import styles from './SocialMediaContainer.css';

SocialMediaContainer.propTypes = { children: arrayOf(element).isRequired };

function SocialMediaContainer({ children }) {
  return <div className={styles.SocialMediaContainer}>{children}</div>;
}

export default SocialMediaContainer;
