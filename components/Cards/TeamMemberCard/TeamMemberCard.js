import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/_common_/Card/Card';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import styles from './TeamMemberCard.css';

TeamMemberCard.propTypes = {
  email: PropTypes.string,
  imageAlternateText: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  staffRole: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string,
};

TeamMemberCard.defaultProps = {
  email: undefined,
  twitterHandle: undefined,
};

function TeamMemberCard({
  email,
  imageAlternateText,
  imageSource,
  name,
  staffRole,
  twitterHandle,
}) {
  return (
    <Card className={styles.TeamMemberCard} hasAnimationOnHover>
      <img className={styles.image} src={imageSource} alt={imageAlternateText} />
      <h5 className={styles.name}>{name}</h5>
      <i>{staffRole}</i>
      <hr />
      {twitterHandle &&
        email && (
          <ul className={styles.staffDetails}>
            {twitterHandle && (
              <li>
                <span className={styles.detailPrompt}>Twitter: </span>
                <OutboundLink
                  analyticsEventLabel={`<TeamMemberCard> ${name} Twitter Handle Click`}
                  href={`https://twitter.com/${twitterHandle}`}
                >
                  @{twitterHandle}
                </OutboundLink>
              </li>
            )}
            {email && (
              <li>
                <span className={styles.detailPrompt}>Email: </span>
                <OutboundLink
                  analyticsEventLabel={`<TeamMemberCard> ${name} Email Click`}
                  hasIcon={false}
                  href={`mailto:${email}`}
                >
                  {email}
                </OutboundLink>
              </li>
            )}
          </ul>
        )}
    </Card>
  );
}

export default TeamMemberCard;
