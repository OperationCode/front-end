import { string, oneOf } from 'prop-types';
import Image from 'next/image';
import OutboundLink from 'components/OutboundLink/OutboundLink';

PartnerLogoLink.propTypes = {
  logoSource: string.isRequired,
  name: string.isRequired,
  url: string.isRequired,
  size: oneOf(['small', 'medium', 'large']),
};

PartnerLogoLink.defaultProps = {
  size: 'medium',
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

export default function PartnerLogoLink({ logoSource, name, url, size }) {
  return (
    <div className="text-center w-36">
      <OutboundLink href={url} analyticsEventLabel={`Partner Logo Click - ${name}`} hasIcon={false}>
        <Image
          className="w-full grayscale h-full text-center filter opacity-60 transition-opacity duration-200 ease-linear hover:grayscale-0 hover:opacity-100 hover:transition-opacity hover:duration-200 hover:ease-linear"
          src={logoSource}
          alt={`${name} logo`}
          {...sizeMappings[size]}
          layout="fixed"
        />
      </OutboundLink>
    </div>
  );
}
