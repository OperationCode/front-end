import React from 'react';
import PropTypes from 'prop-types';
import { s3 } from 'common/constants/urls';
import styles from './Partner.css';

const Partner = ({ partner }) => (
  <div className={styles.Partner}>
    <a href={partner.url} target="_blank" rel="noopener noreferrer">
      <img className={styles.logo} src={`${s3}${partner.logo}`} alt={partner.name} />
    </a>
  </div>
);

Partner.prototype.propTypes = {
  partner: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

Partner.prototype.defaultProps = {
  partner: {
    logo: '',
    name: '',
    url: '',
  },
};

export default Partner;
