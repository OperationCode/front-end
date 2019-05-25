import React from 'react';
import { string, bool } from 'prop-types';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import BuildingIcon from 'static/images/icons/FontAwesome/building_icon.svg';
import CloudUploadIcon from 'static/images/icons/FontAwesome/cloud_upload_icon.svg';
import MapMarkerIcon from 'static/images/icons/FontAwesome/map_marker_icon.svg';
import styles from './FeaturedJobItem.css';

FeaturedJobItem.propTypes = {
  title: string.isRequired,
  source: string.isRequired,
  sourceUrl: string.isRequired,
  city: string,
  state: string,
  country: string,
  description: string.isRequired,
  remote: bool,
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
      <OutboundLink href={sourceUrl} analyticsEventLabel={`Featured Job ${source}`}>
        <h6>{title}</h6>
      </OutboundLink>

      <div className={styles.details}>
        <div className={styles.detailsContainer}>
          <BuildingIcon className={styles.icon} />
          <span className={styles.detail}>{source}</span>
        </div>

        <div className={styles.detailsContainer}>
          {(city || state || country) && <MapMarkerIcon className={styles.icon} />}
          {city && <span className={styles.detail}>{city},</span>}
          {state && <span className={styles.detail}>{state},</span>}
          {country && <span className={styles.detail}>{country}</span>}
        </div>

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
