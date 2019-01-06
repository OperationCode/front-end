import React from 'react';
import PropTypes from 'prop-types';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import BuildingIcon from 'static/images/icons/FontAwesome/building_icon.svg';
import CloudUploadIcon from 'static/images/icons/FontAwesome/cloud_upload_icon.svg';
import MapMarkerIcon from 'static/images/icons/FontAwesome/map_marker_icon.svg';
import styles from './FeaturedJobItem.css';

FeaturedJobItem.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired,
  city: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string,
  description: PropTypes.string.isRequired,
  remote: PropTypes.bool,
};

FeaturedJobItem.defaultProps = {
  remote: false,
  city: '',
  state: '',
  country: '',
};

function FeaturedJobItem({ title, source, sourceUrl, city, state, country, description, remote }) {
  return (
    <article className={styles.job}>
<<<<<<< HEAD
      <div>
        <OutboundLink
          href={sourceUrl}
          analyticsEventLabel={`Featured Job ${source}`}
          hasIcon={false}
        >
          <h6 className={styles.link}>{title}</h6>
        </OutboundLink>
      </div>
=======
      <OutboundLink href={sourceUrl} analyticsEventLabel={`Featured Job ${source}`}>
        <h6>{title}</h6>
      </OutboundLink>

>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      <div className={styles.details}>
        <div className={styles.detailsContainer}>
          <BuildingIcon className={styles.icon} />
          <span className={styles.detail}>{source}</span>
        </div>
<<<<<<< HEAD
=======

>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        <div className={styles.detailsContainer}>
          {(city || state || country) && <MapMarkerIcon className={styles.icon} />}
          {city && <span className={styles.detail}>{city},</span>}
          {state && <span className={styles.detail}>{state},</span>}
          {country && <span className={styles.detail}>{country}</span>}
        </div>
<<<<<<< HEAD
=======

>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        {remote && (
          <div className={styles.detailsContainer}>
            <CloudUploadIcon className={styles.icon} />
            <span className={styles.remote}>Remote</span>
          </div>
        )}
      </div>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default FeaturedJobItem;
