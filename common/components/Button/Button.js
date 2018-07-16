import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
import styles from './Button.css';

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  theme: PropTypes.oneOf(['primary', 'secondary', 'slate']),
};

Button.defaultProps = {
  children: undefined,
  className: '',
  disabled: false,
  fullWidth: false,
  href: undefined,
  onClick: undefined,
  tabIndex: 0,
  theme: 'primary',
};

function Button({
  className, children, disabled, fullWidth, href, onClick, tabIndex, theme,
}) {
  // TODO: Handle non-string input for analytics event label on both outbound and scroll link
  // Example: SVG as a child

  const buttonClassNames = classNames(styles.Button, className, styles[theme], {
    [styles.disabled]: disabled,
    [styles.fullWidth]: fullWidth,
  });

  // MARK: Non-navigational button is checked first as it is the most common implementation
  if (!href) {
    return (
      <button
        className={buttonClassNames}
        disabled={disabled}
        onClick={disabled ? () => {} : onClick}
        tabIndex={tabIndex}
      >
        {children}
      </button>
    );
  }

  // MARK: Outbound link (leaves OperationCode host)
  if (href.includes('http')) {
    return (
      <OutboundLink
        analyticsEventLabel={children}
        className={classNames(buttonClassNames, styles.outboundLink)}
        hasIcon
        href={href}
        onClick={onClick}
        tabIndex={tabIndex}
      >
        {children}
      </OutboundLink>
    );
  }

  // MARK: Internal navigation link button
  return (
    <Link
      href={href}
      prefetch
    >
      {/* eslint-disable */}
      {/* TODO: resolve a bunch of a11y rules... */}
      <a className={buttonClassNames} onClick={onClick}>
        {children}
      </a>
      {/* eslint-enable */}
    </Link>
  );
}

export default Button;
