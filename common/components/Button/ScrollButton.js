import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactGA from 'react-ga';
import { withRouter } from 'next/router';
import { Link as ScrollLink, Events as ScrollEvent } from 'react-scroll';
import styles from './Button.css';

ScrollButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  router: PropTypes.object.isRequired,
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

function ScrollButton({ className, children, fullWidth, href, onClick, router, tabIndex, theme }) {
  const buttonClassNames = classNames(styles.Button, className, {
    [styles.primary]: theme === 'primary',
    [styles.secondary]: theme === 'secondary',
    [styles.slate]: theme === 'slate',
    [styles.fullWidth]: fullWidth,
  });

  const isProd = process.env.NODE_ENV === 'production';

  // Report scroll link button clicks to Google Analytics
  if (isProd) {
    ScrollEvent.scrollEvent.register('begin', () => {
      ReactGA.event({
        category: 'Scroll Button Clicked',
        action: `[${children}] from ${router.route}`,
      });
    });
  }

  const clickHandler = () => {
    if (!isProd) {
      const analyticsMessage = `Analytics disabled. <ScrollButton> clicked.`;

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

// Export testable child for tests
export { ScrollButton };

// Implementation usage
export default withRouter(ScrollButton);
