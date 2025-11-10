import { gtag } from 'common/utils/thirdParty/gtag';
import ExternalLinkIcon from 'static/images/icons/FontAwesome/external-link-square-alt-solid.svg';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import { cx } from 'common/utils/cva';

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

function OutboundLink({
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
      className={cx('inline-flex items-start text-burnt-orange', className)}
      data-testid={testID}
      href={href}
      onClick={trackOutboundLinkClick}
      rel={isNotMailToLink ? 'noopener noreferrer' : undefined}
      target={isNotMailToLink ? '_blank' : undefined}
    >
      <span>
        {children}

        <ScreenReaderOnly>Opens in new window</ScreenReaderOnly>
        {hasIcon && <ExternalLinkIcon className="inline-block ml-1 fill-current -mt-3 size-3.5" />}
      </span>
    </a>
  );
}

export default OutboundLink;
