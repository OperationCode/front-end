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
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
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
  type: 'button',
};

function Button({
  className,
  children,
  disabled,
  fullWidth,
  href,
  onClick,
  tabIndex,
  theme,
  type,
}) {
  // TODO: Handle non-string input for analytics event label on both outbound and scroll link
  // Example: SVG as a child

  const buttonClassNames = classNames(
    styles.Button, className, styles[theme], {
      [styles.disabled]: disabled,
      [styles.fullWidth]: fullWidth,
    },
  );

  const onClickHandler = !disabled ? onClick : () => {};

  const onEnterHandler = ev => (ev.key === 'Enter' ? onClickHandler() : () => {});

  // MARK: Outbound link (leaves OperationCode host)
  if (href.includes('http')) {
    return (
      <OutboundLink
        analyticsEventLabel={children}
        className={classNames(buttonClassNames, styles.outboundLink)}
        hasIcon
        href={href}
        onClick={onClickHandler}
        tabIndex={tabIndex}
      >
        {children}
      </OutboundLink>
    );
  }

  // Lint rule disabled because it's an eslint bug
  // TODO: File issue on eslint repo
  /* eslint-disable react/button-has-type */
  const ButtonJSX = (
    <button
      className={buttonClassNames}
      disabled={disabled}
      onClick={onClickHandler}
      onKeyDown={onEnterHandler}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
    </button>
  );
  /* eslint-enable react/button-has-type */

  return !href ? (
    ButtonJSX
  ) : (
    <Link
      href={href}
      prefetch
    >
      {ButtonJSX}
    </Link>
  );
}

export default Button;
