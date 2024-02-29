import classNames from 'classnames';
import Link from 'next/link';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import styles from '../Button/Button.module.css';

export type LinkButtonProps = {
  /**
   * Url to be passed to the base anchor element.
   */
  href: string;
  /**
   * Only pass analytics event label if you're href is to an external website
   */
  analyticsEventLabel?: string;
  /**
   * Sets an id to the base element for testing.
   */
  'data-testid'?: string;
  /**
   * Forces the component's width as wide as its parent container's width.
   */
  fullWidth?: boolean;
  /**
   * Sets the button color theme.
   */
  theme?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function LinkButton({
  analyticsEventLabel = undefined,
  children,
  className = undefined,
  'data-testid': testID,
  fullWidth = false,
  href,
  theme = 'primary',
}: LinkButtonProps) {
  const linkButtonClassNames = classNames(styles.Button, className, styles[theme], {
    [styles.fullWidth]: fullWidth,
  });

  const hasAnalyticsEventLabel = !!analyticsEventLabel;

  return hasAnalyticsEventLabel ? (
    <OutboundLink
      analyticsEventLabel={analyticsEventLabel}
      className={linkButtonClassNames}
      data-testid={testID}
      hasIcon={false}
      href={href}
    >
      {children}
    </OutboundLink>
  ) : (
    <Link href={href}>
      <a className={linkButtonClassNames} data-testid={testID} href={href}>
        {children}
      </a>
    </Link>
  );
}
