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
              {footerItems.column1.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={styles.linksColumn}>
              {footerItems.column2.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.linksRow}>
            <ul className={styles.linksColumn}>
              {footerItems.column3.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={styles.linksColumn}>
              {footerItems.column4.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
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
            // Use OutboundLink if non-internal URL
            // (indicated by the presence of an analytics label)
            link.analyticsEventLabel ? (
              <OutboundLink
                key={link.href}
                analyticsEventLabel={link.analyticsEventLabel}
                href={link.href}
              >
                {link.name}
              </OutboundLink>
            ) : (
              <Link href={link.href} key={link.href}>
                <a>{link.name}</a>
              </Link>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
