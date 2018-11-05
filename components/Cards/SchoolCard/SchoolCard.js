import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/_common_/Card/Card';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import MockedRouter from 'test-utils/mocks/nextRouterMock';
import styles from './SchoolCard.css';

SchoolCard.propTypes = {
  schoolWebsite: PropTypes.string.isRequired,
  schoolName: PropTypes.string.isRequired,
  schoolAddress: PropTypes.string.isRequired,
  schoolCity: PropTypes.string,
  schoolState: PropTypes.string,
  logoSource: PropTypes.string.isRequired,
  acceptsGIBill: PropTypes.bool.isRequired,
  isFullTime: PropTypes.bool.isRequired,
  hasHardware: PropTypes.bool.isRequired,
};

SchoolCard.defaultProps = {
  schoolCity: undefined,
  schoolState: undefined,
};

function SchoolCard({
  acceptsGIBill,
  isFullTime,
  hasHardware,
  schoolWebsite,
  logoSource,
  schoolAddress,
  schoolCity,
  schoolName,
  schoolState,
}) {
  const hasOnlineProgram = schoolAddress.includes('Online');

  // TODO: Try to normalize s3 image file names to sync with school names so that this component
  // won't need to be passed that prop
  return (
    <OutboundLink
      analyticsEventLabel={`${schoolName} - ${schoolCity} <SchoolCard> click`}
      className={styles.cardLinkOverrides}
      hasIcon={false}
      href={schoolWebsite}
      router={MockedRouter}
    >
      <Card className={styles.SchoolCard} hasAnimationOnHover>
        <template className={styles.content}>
          <img src={logoSource} alt={`${schoolName} Logo`} className={styles.logo} />

          <section className={styles.schoolCardText}>
            <h5 className={styles.name}>{schoolName}</h5>
            <address className={styles.location}>
              {hasOnlineProgram && 'Online Available'}
              {hasOnlineProgram && <br />}
              {schoolCity && `${schoolCity}, `}
              {schoolState}
            </address>

            <ul className={styles.info}>
              <li>
                GI Bill Accepted: <b>{acceptsGIBill ? 'Yes' : 'No'}</b>
              </li>
              <li>
                Commitment: <b>{isFullTime ? 'Full-Time' : 'Flexible'}</b>
              </li>
              <li>
                Hardware Included: <b>{hasHardware ? 'Yes' : 'No'}</b>
              </li>
            </ul>
          </section>
        </template>
      </Card>
    </OutboundLink>
  );
}

export default SchoolCard;
