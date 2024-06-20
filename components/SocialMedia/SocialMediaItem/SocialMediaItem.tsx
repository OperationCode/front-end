import { OutboundLink } from 'components/OutboundLink/OutboundLink';
import { ScreenReaderOnly } from 'components/ScreenReaderOnly/ScreenReaderOnly';

export interface SocialMediaItemPropsType {
  /**
   * Name of the social media item.
   */
  name: string;
  /**
   * URL to the social media site.
   */
  href: string;
  /**
   * Icon to be used.
   */
  svg: React.ReactNode;
}

export function SocialMediaItem({ name, href, svg }: SocialMediaItemPropsType) {
  return (
    <div className="mx-2 my-0 opacity-80 hover:opacity-100">
      <OutboundLink
        analyticsEventLabel={`Social Media Engagement: ${name}`}
        hasIcon={false}
        href={href}
      >
        <ScreenReaderOnly>Operation Code&apos;s {name}</ScreenReaderOnly>
        {svg}
      </OutboundLink>
    </div>
  );
}
