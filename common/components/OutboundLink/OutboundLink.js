import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { withRouter } from 'next/router';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt';
import styles from './OutboundLink.css';

OutboundLink.propTypes = {
  analyticsEventLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasIcon: PropTypes.bool,
  href: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
};

OutboundLink.defaultProps = {
  className: '',
  hasIcon: true,
};

function OutboundLink({ analyticsEventLabel, children, className, hasIcon, href, router }) {
  const linkContent = (
    <React.Fragment>
      <span className={styles.screenReaderOnly}>Opens in new window</span>
      {children}
      {hasIcon && (
        <FontAwesomeIcon
          className={styles.externalLinkIcon}
          icon={faExternalLinkAlt}
          style={{ width: '14px' }}
        />
      )}
    </React.Fragment>
  );

  if (process.env.NODE_ENV === 'production') {
    return (
      <ReactGA.OutboundLink
        className={className}
        eventLabel={`OUTBOUND [${analyticsEventLabel}] from ${router.route}`}
        rel="noopener noreferrer"
        target="_blank"
        to={href}
      >
        {linkContent}
      </ReactGA.OutboundLink>
    );
  }

  return (
    <a className={className} href={href} rel="noopener noreferrer" target="_blank">
      {linkContent}
    </a>
  );
}

// Export testable child for tests
export { OutboundLink };

// Implementation usage
export default withRouter(OutboundLink);
