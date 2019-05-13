import React from 'react';
import { bool, node, string } from 'prop-types';
import ReactGA from 'react-ga';
import ExternalLinkIcon from 'static/images/icons/FontAwesome/external-link-square-alt-solid.svg';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './OutboundLink.css';

OutboundLink.propTypes = {
  // will report this label plus the URL from where it was clicked
  analyticsEventLabel: string.isRequired,
  children: node.isRequired,
  className: string,
  hasIcon: bool,
  href: string.isRequired,
};

OutboundLink.defaultProps = {
  className: undefined,
  hasIcon: true,
};

function OutboundLink({ analyticsEventLabel, children, className, hasIcon, href }) {
  return (
    <ReactGA.OutboundLink
      className={className}
      eventLabel={`OUTBOUND [${analyticsEventLabel}]`}
      rel="noopener noreferrer"
      target="_blank"
      to={href}
    >
      <>
        <ScreenReaderOnly>Opens in new window</ScreenReaderOnly>
        {children}
        {hasIcon && <ExternalLinkIcon className={styles.externalLinkIcon} />}
      </>
    </ReactGA.OutboundLink>
  );
}

export default OutboundLink;
