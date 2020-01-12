import React from 'react';
import classNames from 'classnames';
import { string, node, bool, oneOf } from 'prop-types';
import Link from 'next/link';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import styles from 'components/Button/Button.module.css';

LinkButton.propTypes = {
  // Only pass analytics event label if you're href is to an external website
  analyticsEventLabel: string,
  children: node.isRequired,
  className: string,
  fullWidth: bool,
  href: string.isRequired,
  shouldPrefetch: bool,
  theme: oneOf(['primary', 'secondary']),
};

LinkButton.defaultProps = {
  analyticsEventLabel: '',
  className: undefined,
  fullWidth: false,
  shouldPrefetch: false,
  theme: 'primary',
};

export default function LinkButton({
  analyticsEventLabel,
  children,
  className,
  fullWidth,
  href,
  shouldPrefetch,
  theme,
}) {
  const linkButtonClassNames = classNames(styles.Button, className, styles[theme], {
    [styles.fullWidth]: fullWidth,
  });

  return (
    <Link href={href} prefetch={shouldPrefetch}>
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
