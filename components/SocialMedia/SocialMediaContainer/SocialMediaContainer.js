import React from 'react';
import PropTypes from 'prop-types';
import styles from './SocialMediaContainer.css';

const SocialMediaContainer = ({ children }) => (
  <div className={styles.SocialMediaContainer}>
    {children}
  </div>
);

SocialMediaContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default SocialMediaContainer;
