import { string, oneOf } from 'prop-types';
import Image from 'next/image';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import styles from './PartnerLogoLink.module.css';

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
    width: 50,
    height: 50,
  },
  medium: {
    width: 100,
    height: 100,
  },
  large: {
    width: 150,
    height: 150,
  },
};

export default function PartnerLogoLink({ logoSource, name, url, size }) {
  return (
    <div className={styles.PartnerLogoLink}>
      <OutboundLink href={url} analyticsEventLabel={`Partner Logo Click - ${name}`} hasIcon={false}>
        <Image
          className={styles.logo}
          src={logoSource}
          alt={`${name} logo`}
          {...sizeMappings[size]}
          layout="fixed"
        />
      </OutboundLink>
    </div>
  );
}
