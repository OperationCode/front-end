import React from 'react';
import PropTypes from 'prop-types';
import OutboundLink from 'shared/components/OutboundLink/OutboundLink';
import styles from './SchoolCard.css';

const SchoolCard = ({
  alt,
  GI,
  fullTime,
  hardware,
  link,
  logo,
  schoolAddress,
  schoolCity,
  schoolName,
  schoolState,
}) => (
  <OutboundLink
    href={link}
    analyticsEventLabel={`User clicked on <SchoolCard> ${schoolName} - ${schoolCity} location`}
    className={styles.SchoolCardLink}
  >
    <div className={styles.SchoolCard}>
      <div className={styles.SchoolCardImage}>
        <img src={logo} alt={alt} className={styles.Logo} />
      </div>

      <div className={styles.SchoolText}>
        <p>
          <span className={styles.SchoolName}>{schoolName}</span>
          <br />
          <span className={styles.SchoolLocation}>
            {schoolAddress.includes('Online') ? (
              <text>
                Online Available<br />
              </text>
            ) : null}
            {schoolCity}
            {schoolCity ? ', ' : null}
            {schoolState}
            {schoolState ? <br /> : null}
            <br />
          </span>
        </p>

        <p className={styles.SchoolInfo}>
          GI Bill Accepted: <b>{GI}</b>
          <br />
          Commitment: <b>{fullTime}</b>
          <br />
          Hardware Included: <b>{hardware}</b>
        </p>
      </div>
    </div>
  </OutboundLink>
);

SchoolCard.propTypes = {
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  schoolName: PropTypes.string.isRequired,
  schoolAddress: PropTypes.string.isRequired,
  schoolCity: PropTypes.string,
  schoolState: PropTypes.string,
  logo: PropTypes.string.isRequired,
  GI: PropTypes.string.isRequired,
  fullTime: PropTypes.string.isRequired,
  hardware: PropTypes.string.isRequired,
};

SchoolCard.defaultProps = {
  schoolCity: null,
  schoolState: null,
};

export default SchoolCard;
