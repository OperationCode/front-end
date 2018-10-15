import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { s3 } from 'common/constants/urls';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import styles from './PartnerLogoLink.css';

export default class PartnerLogoLink extends Component {
  static propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className, logo, name, url } = this.props;

    return (
      <div className={classNames(className, styles.PartnerLogoLink)}>
        <OutboundLink
          ref={url}
          analyticsEventLabel={`Opening partner link ${name}`}
          hasIcon={false}
        >
          <img className={styles.logo} src={`${s3}${logo}`} alt={name} />
        </OutboundLink>
      </div>
    );
  }
}
