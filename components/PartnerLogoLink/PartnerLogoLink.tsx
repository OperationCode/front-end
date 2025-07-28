import Image from 'next/image';
import OutboundLink from 'components/OutboundLink/OutboundLink';

type SizeType = 'small' | 'medium' | 'large';

export interface PartnerLogoLinkPropsType {
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
}

const sizeMappings = {
  small: 'h-[100px] w-[100px]',
  medium: 'h-[125px] w-[125px]',
  large: 'h-[150px] w-[150px]',
};

export default function PartnerLogoLink({
  logoSource,
  name,
  url,
  size = 'medium',
}: PartnerLogoLinkPropsType) {
  const urlObj = new URL(url);
  urlObj.searchParams.append('utm_source', 'operationcode');
  return (
    <OutboundLink
      href={urlObj.toString()}
      analyticsEventLabel={`Partner Logo Click - ${name}`}
      hasIcon={false}
    >
      <div className={`relative ${sizeMappings[size]}`}>
        <Image
          className="transition-all duration-200 ease-linear grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:transition-all hover:duration-200 hover:ease-linear object-contain"
          src={logoSource}
          alt={`${name} logo`}
          layout="fill"
        />
      </div>
    </OutboundLink>
  );
}
