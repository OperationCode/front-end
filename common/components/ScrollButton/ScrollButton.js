import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactGA from 'react-ga';
import { Link as ScrollLink, Events as ScrollEvent } from 'react-scroll';
import styles from 'common/components/Button/Button.css';

ScrollButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
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
  onClick: undefined,
  tabIndex: 0,
  theme: 'primary',
};

function ScrollButton({ className, children, fullWidth, href, onClick, tabIndex, theme }) {
  const buttonClassNames = classNames(styles.Button, className, {
    [styles.primary]: theme === 'primary',
    [styles.secondary]: theme === 'secondary',
    [styles.slate]: theme === 'slate',
    [styles.fullWidth]: fullWidth,
  });

  const isProd = process.env.NODE_ENV === 'production';

  const clickHandler = () => {
    if (!isProd) {
      // eslint-disable-next-line no-console
      console.log(`Analytics disabled. <ScrollButton> clicked.`);
      return onClick;
    }

    ScrollEvent.scrollEvent.register('begin', () => {
      ReactGA.event({
        category: 'Interactions',
        action: 'Clicked Scroll Button',
        label: `To [${href}]`,
      });
    });

    return onClick;
  };

  const onEnterHandler = ev => {
    if (ev.key === 'Enter') {
      clickHandler();
    }
  };

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
      {/* Render text nodes within a span to apply selector styles */}
      {typeof children === 'string' ? <span>{children}</span> : children}
    </ScrollLink>
  );
}

export default ScrollButton;
