import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Section from 'components/_common_/Section/Section';
import Partner from './Partner';
import styles from './Partners.css';

const partners = [
  {
    name: 'APEX Systems',
    logo: 'partnerLogos/apex_systems.png',
    url: 'https://apexsystems.com',
  },
  {
    name: 'GitHub',
    logo: 'partnerLogos/github.png',
    url: 'https://github.com',
  },
  {
    name: '1Password',
    logo: 'partnerLogos/1password.png',
    url: 'https://1password.com/',
  },
  {
    name: 'Docker',
    logo: 'partnerLogos/docker.png',
    url: 'https://docker.com',
  },
  {
    name: 'Oracle',
    logo: 'partnerLogos/oracle.png',
    url: 'https://oracle.com',
  },
  {
    name: "O'Reilly Media",
    logo: 'partnerLogos/oreilly.png',
    url: 'https://oreilly.com',
  },
  {
    name: 'HackerRank',
    logo: 'partnerLogos/hackerrank.png',
    url: 'https://hackerrank.com',
  },
  {
    name: 'Zapier',
    logo: 'partnerLogos/zapier.png',
    url: 'https://zapier.com',
  },
];

export default class Partners extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.element,
      PropTypes.string,
    ]).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { props } = this;

    return (
      <div className={classNames(props.className, styles.Partners)}>
        <Section hasHeadingLines={false} theme="gray" title="Partners">
          <div className={classNames(styles.partnerLogos)}>
            {partners.map(partner => (
              <Partner partner={partner} />
            ))}
          </div>
        </Section>
      </div>
    );
  }
}
