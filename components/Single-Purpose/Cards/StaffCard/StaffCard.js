import React from 'react';
import PropTypes from 'prop-types';
import Card from 'common/components/Card/Card';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
import styles from './StaffCard.css';

StaffCard.propTypes = {
  email: PropTypes.string,
  imageAlternateText: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  staffRole: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string,
};

StaffCard.defaultProps = {
  email: undefined,
  twitterHandle: undefined,
};

function StaffCard({
 email, imageAlternateText, imageSource, name, staffRole, twitterHandle 
}) {
  return (
    <Card
      className={styles.StaffCard}
      hasAnimationOnHover
    >
      <img
        className={styles.image}
        src={imageSource}
        alt={imageAlternateText}
      />
      <h5 className={styles.name}>{name}</h5>
      <i>{staffRole}</i>
      <hr />
      <ul className={styles.staffDetails}>
        {twitterHandle && (
          <li>
            <span className={styles.detailPrompt}>Twitter: </span>
            <OutboundLink
              analyticsEventLabel={`<StaffCard> ${name} Twitter Handle Click`}
              href={`https://twitter.com/${twitterHandle}`}
            >
              @
              {twitterHandle}
            </OutboundLink>
          </li>
        )}
        {email && (
          <li>
            <span className={styles.detailPrompt}>Email: </span>
            <OutboundLink
              analyticsEventLabel={`<StaffCard> ${name} Email Click`}
              hasIcon={false}
              href={`mailto:${email}`}
            >
              {email}
            </OutboundLink>
          </li>
        )}
      </ul>
    </Card>
  );
}

export default StaffCard;
