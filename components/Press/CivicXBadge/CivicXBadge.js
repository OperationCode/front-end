import React from 'react';
import PropTypes from 'prop-types';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import { withRouter } from 'next/router';
import styles from './CivicXBadge.css';

CivicXBadge.propTypes = {
  sourceUrl: PropTypes.string,
};

CivicXBadge.defaultProps = {
  sourceUrl: 'http://cvcx.org/veterans-solutions-lab/',
};

function CivicXBadge(props) {
  const { sourceUrl } = props;

  return (
    <div>
      <OutboundLink
        hasIcon={false}
        href={sourceUrl}
        analyticsEventLabel={`[CivicX Accelerator Badge] ${sourceUrl}`}
        router={props}
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

export default withRouter(CivicXBadge);
