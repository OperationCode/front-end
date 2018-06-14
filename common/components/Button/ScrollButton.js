import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactGA from 'react-ga';
import { Link as ScrollLink, Events as ScrollEvent } from 'react-scroll';
import styles from './Button.css';

ScrollButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  theme: PropTypes.oneOf(['primary', 'secondary', 'gray']),
};

ScrollButton.defaultProps = {
  children: undefined,
  className: undefined,
  fullWidth: false,
  href: undefined,
  onClick: undefined,
  tabIndex: 0,
  theme: 'primary',
};

function ScrollButton({
  className, children, fullWidth, href, onClick, tabIndex, theme,
}) {
  const buttonClassNames = classNames(styles.Button, className, {
    [styles.primary]: theme === 'primary',
    [styles.secondary]: theme === 'secondary',
    [styles.gray]: theme === 'gray',
    [styles.fullWidth]: fullWidth,
  });

  // TODO: Handle non-string input for analytics event label on both outbound and scroll link
  // Example: SVG as a child
  const scrollLinkAnalyticsObject = {
    category: 'Scroll Button Clicked',
    action: `[${children}] from ${window.location.pathname}`,
  };

  // Report scroll link button clicks to Google Analytics
  if (process.env.NODE_ENV === 'production') {
    ScrollEvent.scrollEvent.register('begin', () => {
      ReactGA.event(scrollLinkAnalyticsObject);
    });
  }

  const scrollLinkAnalyticsMessage = `Analytics disabled. Message: ${
    scrollLinkAnalyticsObject.category
  } - ${scrollLinkAnalyticsObject.action}`;

  return (
    <ScrollLink
      className={buttonClassNames}
      duration={400}
      onClick={() => {
        // eslint-disable-next-line no-console
        console.log(scrollLinkAnalyticsMessage);
        onClick(scrollLinkAnalyticsMessage);
      }}
      smooth
      tabIndex={tabIndex}
      to={href}
    >
      {children}
    </ScrollLink>
  );
}

export default ScrollButton;
