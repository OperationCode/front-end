import React from 'react';
import classNames from 'classnames';
import { string, node, bool, oneOf } from 'prop-types';
import Link from 'next/link';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import styles from 'components/Button/Button.css';

LinkButton.propTypes = {
  // Only pass analytics event label if you're href is to an external website
  analyticsEventLabel: string,
  children: node.isRequired,
  className: string,
  disabled: bool,
  fullWidth: bool,
  href: string.isRequired,
  theme: oneOf(['primary', 'secondary']),
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
