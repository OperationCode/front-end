import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Link as ScrollLink, Events as ScrollEvent } from 'react-scroll';
import ReactGA from 'react-ga';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
import styles from './LinkButton.css';

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  isScrollLink: PropTypes.bool,
  text: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

LinkButton.defaultProps = {
  isExternal: false,
  isScrollLink: false,
  theme: 'blue',
};

function LinkButton({
  href, isExternal, isScrollLink, text, theme, ...otherProps
}) {
  // TODO: Remove isExternal and parse URL to determine within component
  // TODO: Use something safer than `window.location`
  if (isScrollLink) {
    // Report scroll link button clicks to Google Analytics
    if (process.env.NODE_ENV === 'production') {
      ScrollEvent.scrollEvent.register('begin', () => {
        ReactGA.event({
          category: 'Scroll Button Clicked',
          action: `Clicked to view ${href} from ${window.location.pathname}`,
        });
      });
    }

    return (
      <ScrollLink
        className={`${styles.LinkButton} ${styles[theme]}`}
        to={href}
        smooth
        duration={400}
        {...otherProps}
      >
        {text}
      </ScrollLink>
    );
  }

  if (isExternal) {
    return (
      <OutboundLink
        analyticsEventLabel={`[${text} Button Click]`}
        className={`${styles.LinkButton} ${styles[theme]}`}
        href={href}
      >
        {text}
      </OutboundLink>
    );
  }

  return (
    <Link
      className={`${styles.LinkButton} ${styles[theme]}`}
      href={href}
      prefetch
      {...otherProps}
    >
      {text}
    </Link>
  );
}

export default LinkButton;
