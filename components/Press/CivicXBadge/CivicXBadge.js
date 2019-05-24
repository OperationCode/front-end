import React from 'react';
import { string } from 'prop-types';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import styles from './CivicXBadge.css';

CivicXBadge.propTypes = {
  sourceUrl: string,
};

CivicXBadge.defaultProps = {
  sourceUrl: 'http://cvcx.org/veterans-solutions-lab/',
};

function CivicXBadge({ sourceUrl }) {
  return (
    <div>
      <OutboundLink
        hasIcon={false}
        href={sourceUrl}
        analyticsEventLabel={`[CivicX Accelerator Badge] ${sourceUrl}`}
      >
        <img
          alt="Operation Code is a graduate of the CivicX Accelerator."
          className={styles.civic}
          src="/static/images/civic-x.png"
        />
      </OutboundLink>
    </div>
  );
}

export default CivicXBadge;
