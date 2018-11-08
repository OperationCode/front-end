import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/_common_/Card/Card';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import { withRouter } from 'next/router';
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

function TeamMemberCard(props) {
  const { email, imageAlternateText, imageSource, name, staffRole, twitterHandle } = props;

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
                  analyticsEventLabel={`Team Member ${name} Twitter Click`}
                  href={`https://twitter.com/${twitterHandle}`}
                  router={props}
                >
                  @{twitterHandle}
                </OutboundLink>
              </li>
            )}
            {email && (
              <li>
                <span className={styles.detailPrompt}>Email: </span>
                <OutboundLink
                  analyticsEventLabel={`Team Member ${name} Email Click`}
                  hasIcon={false}
                  href={`mailto:${email}`}
                  router={props}
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

export default withRouter(TeamMemberCard);
