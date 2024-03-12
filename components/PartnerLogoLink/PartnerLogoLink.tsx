import Image from 'next/image';
import OutboundLink from 'components/OutboundLink/OutboundLink';

type SizeType = 'small' | 'medium' | 'large';

export type PartnerLogoLinkPropsType = {
  /**
   * Path to the logo image.
   */
  logoSource: string;
  /**
   * Applies a name for analytics label and alt text for the image.
   */
  name: string;
  /**
   * Url for the partner.
   */
  url: string;
  /**
   * Sets the size of the logo.
   * @default 'medium'
   */
  size?: SizeType;
};

const sizeMappings = {
  small: {
    width: 100,
    height: 100,
  },
  medium: {
    width: 125,
    height: 125,
  },
  large: {
    width: 150,
    height: 150,
  },
};

export default function PartnerLogoLink({
  logoSource,
  name,
  url,
  size = 'medium',
}: PartnerLogoLinkPropsType) {
  return (
    <div className="text-center w-36">
      <OutboundLink href={url} analyticsEventLabel={`Partner Logo Click - ${name}`} hasIcon={false}>
        <Image
          className="w-full h-full text-center transition-all duration-200 ease-linear grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:transition-all hover:duration-200 hover:ease-linear"
          src={logoSource}
          alt={`${name} logo`}
          {...sizeMappings[size]}
          layout="fixed"
        />
      </OutboundLink>
    </div>
  );
}
