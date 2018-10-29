import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { withRouter } from 'next/router';
import ExternalLinkIcon from 'static/images/icons/FontAwesome/external-link-square-alt-solid.svg';
import ScreenReaderOnly from 'components/_common_/ScreenReaderOnly/ScreenReaderOnly';
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
  className: undefined,
  hasIcon: true,
};

function OutboundLink({ analyticsEventLabel, children, className, hasIcon, href, router }) {
  const linkContent = (
    <React.Fragment>
      <ScreenReaderOnly>Opens in new window</ScreenReaderOnly>
      {children}
      {hasIcon && <ExternalLinkIcon className={styles.externalLinkIcon} />}
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

export default withRouter(OutboundLink);
