import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

OutboundLink.propTypes = {
  analyticsEventLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

OutboundLink.defaultProps = {
  className: undefined,
};

function OutboundLink({
  analyticsEventLabel, children, className, href,
}) {
  // TODO: Use something safer than `window.location`
  const analyticsMessage = `OUTBOUND [${analyticsEventLabel}] from ${window.location.pathname}`;

  if (process.env.NODE_ENV === 'production') {
    return (
      <ReactGA.OutboundLink
        className={className}
        eventLabel={analyticsMessage}
        rel="noopener noreferrer"
        target="_blank"
        to={href}
      >
        {children}
      </ReactGA.OutboundLink>
    );
  }

  return (
    <a
      className={className}
      href={href}
      onClick={() => {
        // eslint-disable-next-line no-console
        console.log(`analytics disabled locally: ${analyticsMessage}`);
      }}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default OutboundLink;
