import Link from 'next/link';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import type { VariantProps } from 'common/utils/cva';
import { buttonCva } from '../Button/Button';

export interface LinkButtonProps extends VariantProps<typeof buttonCva> {
  /**
   * Url to be passed to the base anchor element.
   */
  href: string;
  /**
   * String or element to be used as the label.
   */
  children: React.ReactNode;
  /**
   * Applies classnames to the base element.
   */
  className?: string;
  /**
   * Only pass analytics event label if you're href is to an external website
   */
  analyticsEventLabel?: string;
  /**
   * Sets an id to the base element for testing.
   */
  'data-testid'?: string;
}

export default function LinkButton({
  analyticsEventLabel,
  children,
  className,
  'data-testid': testID,
  fullWidth,
  href,
  theme,
  disabled,
}: LinkButtonProps) {
  const linkButtonClassNames = buttonCva({ theme, fullWidth, disabled, className });

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
