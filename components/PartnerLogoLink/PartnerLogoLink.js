import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import styles from './PartnerLogoLink.css';

export default class PartnerLogoLink extends Component {
  static propTypes = {
    logoSource: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
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
