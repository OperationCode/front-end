import React from 'react';
import { bool, node, string } from 'prop-types';
import ReactGA from 'react-ga';
import ExternalLinkIcon from 'static/images/icons/FontAwesome/external-link-square-alt-solid.svg';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './OutboundLink.module.css';

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
  const isNotMailToLink = !href.startsWith('mailto:');

  return (
    <ReactGA.OutboundLink
      className={className}
      eventLabel={`OUTBOUND [${analyticsEventLabel}]`}
      rel={isNotMailToLink ? 'noopener noreferrer' : undefined}
      target={isNotMailToLink ? '_blank' : undefined}
      to={href}
    >
      <>
        {children}
        <ScreenReaderOnly>Opens in new window</ScreenReaderOnly>
        {hasIcon && <ExternalLinkIcon className={styles.externalLinkIcon} />}
      </>
    </ReactGA.OutboundLink>
  );
}

export default OutboundLink;
