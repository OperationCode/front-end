import React from 'react';
import { string, oneOf } from 'prop-types';
import classNames from 'classnames';
import { Image } from '@innocuous/components';
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

const sizeStyles = {
  small: styles.small,
  large: styles.large,
};

export default function PartnerLogoLink({ logoSource, name, url, size }) {
  return (
    <div className={styles.PartnerLogoLink}>
      <OutboundLink href={url} analyticsEventLabel={`Partner Logo Click - ${name}`} hasIcon={false}>
        <Image
          className={classNames(styles.logo, sizeStyles[size])}
          src={logoSource}
          alt={`${name} logo`}
        />
      </OutboundLink>
    </div>
  );
}
