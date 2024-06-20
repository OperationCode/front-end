import classNames from 'classnames';
import { gtag } from '@/common/utils/thirdParty/gtag';
import ExternalLinkIcon from '@/public/static/images/icons/FontAwesome/external-link-square-alt-solid.svg';
import { ScreenReaderOnly } from '@/components/ScreenReaderOnly/ScreenReaderOnly';

export interface OutboundLinkPropsType {
  /**
   * will report this label plus the URL from where it was clicked
   */
  analyticsEventLabel: string;
  /**
   * Url path for the link.
   */
  href: string;
  /**
   * Content to be rendered as the link.
   */
  children: React.ReactNode;
  /**
   * Name of style class to use.
   */
  className?: string;
  /**
   * Sets an id to the base element for testing.
   */
  'data-testid'?: string;
  /**
   * Adds an an icon to identify link is an external link.
   */
  hasIcon?: boolean;
}

export function OutboundLink({
  analyticsEventLabel,
  children,
  'data-testid': testID,
  className,
  hasIcon = true,
  href,
}: OutboundLinkPropsType) {
  const isNotMailToLink = !href.startsWith('mailto:');

  const trackOutboundLinkClick = () => {
    gtag.outboundLink(analyticsEventLabel, href);
  };

  return (
    <a
      className={classNames('inline-flex items-start', className)}
      data-testid={testID}
      href={href}
      onClick={trackOutboundLinkClick}
      rel={isNotMailToLink ? 'noopener noreferrer' : undefined}
      target={isNotMailToLink ? '_blank' : undefined}
    >
      {children}

      <ScreenReaderOnly>Opens in new window</ScreenReaderOnly>

      {hasIcon && <ExternalLinkIcon className="!fill-current relative my-0 mx-1 bottom-0 w-3" />}
    </a>
  );
}
