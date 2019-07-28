import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import { footerItems } from 'common/constants/navigation';
import { s3 } from 'common/constants/urls';
import styles from './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  // eslint-disable-next-line react/prop-types
  const renderLink = ({ href, name, analyticsEventLabel }) => {
    return (
      <li key={href}>
        {analyticsEventLabel ? (
          <OutboundLink analyticsEventLabel={`${name} footer link`} href={href} hasIcon={false}>
            {name}
          </OutboundLink>
        ) : (
          // TODO: Attack prefetch to scroll listener
          <Link href={href} prefetch={false}>
            <a>{name}</a>
          </Link>
        )}
      </li>
    );
  };

  return (
    <footer className={styles.Footer}>
      <div className={classNames(styles.footerWrapper, styles.row)}>
        <div className={classNames(styles.footerGrouping, styles.socialGrouping)}>
          <div className={classNames(styles.logoGrouping)}>
            <img src={`${s3}branding/logos/small-blue-logo.png`} alt="Operation Code Logo" />
          </div>
          <div className={classNames(styles.capitalize, styles.marginBottom)}>Connect With Us!</div>
          <SocialMedia />
        </div>

        <div className={classNames(styles.footerGrouping, styles.linksGrouping, styles.capitalize)}>
          <div className={styles.linksRow}>
            <ul className={styles.linksColumn}>
              {footerItems.column1.map(link => renderLink(link))}
            </ul>
            <ul className={styles.linksColumn}>
              {footerItems.column2.map(link => renderLink(link))}
            </ul>
          </div>

          <div className={styles.linksRow}>
            <ul className={styles.linksColumn}>
              {footerItems.column3.map(link => renderLink(link))}
            </ul>
            <ul className={styles.linksColumn}>
              {footerItems.column4.map(link => renderLink(link))}
            </ul>
          </div>
        </div>
      </div>

      <div className={classNames(styles.row, styles.legalGrouping)}>
        <div className={classNames(styles.row, styles.copyright)}>
          Copyright {currentYear} Operation Code™
        </div>
        <div className={classNames(styles.row, styles.legalLinks)}>
          {footerItems.legal.map(link =>
            // / logic of renderLink duplicated here
            link.analyticsEventLabel ? (
              <OutboundLink
                key={link.href}
                analyticsEventLabel={`${link.name} footer link`}
                href={link.href}
              >
                {link.name}
              </OutboundLink>
            ) : (
              <Link href={link.href} key={link.href} prefetch={false}>
                <a className={styles.lineHeightFix}>{link.name}</a>
              </Link>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
