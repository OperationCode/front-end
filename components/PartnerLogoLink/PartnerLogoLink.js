import React, { Component } from 'react';
import { string } from 'prop-types';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import styles from './PartnerLogoLink.css';

export default class PartnerLogoLink extends Component {
  static propTypes = {
    logoSource: string.isRequired,
    name: string.isRequired,
    url: string.isRequired,
  };

  render() {
    const { logoSource, name, url } = this.props;

    return (
      <div className={styles.PartnerLogoLink}>
        <OutboundLink
          href={url}
          analyticsEventLabel={`Partner Logo Click - ${name}`}
          hasIcon={false}
        >
          <img className={styles.logo} src={logoSource} alt={`${name} logo`} />
        </OutboundLink>
      </div>
    );
  }
}
