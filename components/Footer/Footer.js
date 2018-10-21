import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import Button from 'components/_common_/Button/Button';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import { s3, footerLinks } from 'common/constants/urls';
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
              {footerLinks.column1.map(link => (
                <li>
                  <Link key={link.url} href={link.url}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={styles.linksColumn}>
              {footerLinks.column2.map(link => (
                <li>
                  <Link key={link.url} href={link.url}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.linksRow}>
            <ul className={styles.linksColumn}>
              {footerLinks.column3.map(link => (
                <li>
                  <Link key={link.url} href={link.url}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={styles.linksColumn}>
              {footerLinks.column4.map(link => (
                <li>
                  <Link key={link.url} href={link.url}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={classNames(styles.footerGrouping, styles.newsletterGrouping)}>
          <div className={classNames(styles.capitalize, styles.marginBottom)}>Newsletter</div>
          <div className={styles.newsletterItem}>
            Subscribe to our newsletter and never miss a beat!
          </div>
          <input className={styles.newsletterItem} type="text" placeholder="Email address" />
          <Button className={styles.newsletterItem}>Subscribe</Button>
        </div>
      </div>

      <div className={classNames(styles.row, styles.legalGrouping)}>
        <div className={styles.copyright}>Copyright {currentYear} Operation Code™</div>
        <div className={classNames(styles.row, styles.legalLinks)}>
          {footerLinks.legal.map(link => (
            <OutboundLink analyticsEventLabel={link.analyticsEventLabel} href={link.href}>
              {link.title}
            </OutboundLink>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
