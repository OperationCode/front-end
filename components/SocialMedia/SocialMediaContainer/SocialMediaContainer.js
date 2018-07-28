import React from 'react';
import PropTypes from 'prop-types';
import styles from './SocialMediaContainer.css';

SocialMediaContainer.propTypes = { children: PropTypes.arrayOf(PropTypes.element).isRequired };

function SocialMediaContainer({ children }) {
  return <div className={styles.SocialMediaContainer}>{children}</div>;
}

export default SocialMediaContainer;
