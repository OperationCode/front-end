import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactGA from 'react-ga';
import { Link as ScrollLink, Events as ScrollEvent } from 'react-scroll';
import styles from './Button.css';

ScrollButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  theme: PropTypes.oneOf(['primary', 'secondary', 'slate']),
};

ScrollButton.defaultProps = {
  className: '',
  fullWidth: false,
  href: '',
  onClick: () => {},
  tabIndex: 0,
  theme: 'primary',
};

function ScrollButton({
 className, children, fullWidth, href, onClick, tabIndex, theme
}) {
  const buttonClassNames = classNames(
styles.Button, className, {
    [styles.primary]: theme === 'primary',
    [styles.secondary]: theme === 'secondary',
    [styles.slate]: theme === 'slate',
    [styles.fullWidth]: fullWidth,
  }
);

  // TODO: Handle non-string input for analytics event label on both outbound and scroll link
  // Example: SVG as a child
  const eventDetails = {
    category: 'Scroll Button Clicked',
    action: `[${children}] from ${window.location.pathname}`,
  };

  const isProd = process.env.NODE_ENV === 'production';

  // Report scroll link button clicks to Google Analytics
  if (isProd) {
    ScrollEvent.scrollEvent.register('begin', () => {
      ReactGA.event(eventDetails);
    });
  }

  const clickHandler = () => {
    if (!isProd) {
      const analyticsMessage = `Analytics disabled.
        Message: ${eventDetails.category} - ${eventDetails.action}`;

      // eslint-disable-next-line no-console
      console.log(analyticsMessage);
      onClick(analyticsMessage);
      return;
    }

    onClick();
  };

  const onEnterHandler = ev => (ev.key === 'Enter' ? clickHandler : () => {});

  return (
    <ScrollLink
      className={buttonClassNames}
      duration={400}
      onClick={clickHandler}
      onKeyDown={onEnterHandler}
      smooth
      tabIndex={tabIndex}
      to={href}
    >
      {children}
    </ScrollLink>
  );
}

export default ScrollButton;
