import React from 'react';
import { string } from 'prop-types';
import { Image } from '@innocuous/components';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import styles from './PartnerLogoLink.css';

PartnerLogoLink.propTypes = {
  logoSource: string.isRequired,
  name: string.isRequired,
  url: string.isRequired,
};

export default function PartnerLogoLink({ logoSource, name, url }) {
  return (
    <div className={styles.PartnerLogoLink}>
      <OutboundLink href={url} analyticsEventLabel={`Partner Logo Click - ${name}`} hasIcon={false}>
        <Image className={styles.logo} src={logoSource} alt={`${name} logo`} />
      </OutboundLink>
    </div>
  );
}
