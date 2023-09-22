import { node, string } from 'prop-types';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';

SocialMediaItem.propTypes = {
  name: string.isRequired,
  href: string.isRequired,
  svg: node.isRequired,
};

function SocialMediaItem({ name, href, svg }) {
  return (
    <div className="my-0 mx-2 opacity-80 hover:opacity-100">
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

export default SocialMediaItem;
