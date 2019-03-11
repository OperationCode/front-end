import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import styles from 'components/Button/Button.css';

LinkButton.propTypes = {
  // Only pass analytics event label if you're href is to an external website
  analyticsEventLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  href: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['primary', 'secondary']),
};

LinkButton.defaultProps = {
  analyticsEventLabel: '',
  className: undefined,
  disabled: false,
  fullWidth: false,
  theme: 'primary',
};

export default function LinkButton({
  analyticsEventLabel,
  children,
  className,
  fullWidth,
  href,
  theme,
}) {
  const linkButtonClassNames = classNames(styles.Button, className, styles[theme], {
    [styles.fullWidth]: fullWidth,
  });

  return (
    <Link href={href}>
      {analyticsEventLabel && process.env.NODE_ENV === 'production' ? (
        <OutboundLink
          analyticsEventLabel={analyticsEventLabel}
          href={href}
          className={linkButtonClassNames}
        >
          {children}
        </OutboundLink>
      ) : (
        <a className={linkButtonClassNames} href={href}>
          {children}
        </a>
      )}
    </Link>
  );
}
