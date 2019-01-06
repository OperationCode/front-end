import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import SocialMedia from 'components/SocialMedia/SocialMedia';
<<<<<<< HEAD
import styles from './Footer.css';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={classNames(styles.footerGrouping, styles.socialGrouping)}>
        <a className={styles.email} href="mailto:contact@operationcode.org">
          contact@operationcode.org
        </a>

        <SocialMedia />
      </div>

      <div className={classNames(styles.footerGrouping, styles.logoGrouping)}>
        <img src="/static/images/icons/operation_code_logo.svg" alt="Operation Code Logo" />

        <p className={styles.copyright}>
          Copyright {`${new Date().getUTCFullYear()}`}
          <br />
          Operation Code™
        </p>
      </div>

      <div className={classNames(styles.footerGrouping, styles.linksGrouping)}>
        <div className={styles.linkColumn}>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/press">
            <a>Press</a>
          </Link>
          <Link href="/branding">
            <a>Branding</a>
          </Link>
          <Link href="/faq">
            <a>FAQ</a>
          </Link>
          <Link href="/team">
            <a>Team</a>
          </Link>
        </div>

        <div className={styles.linkColumn}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/terms">
            <a>Terms of Service</a>
          </Link>
          <OutboundLink
            analyticsEventLabel="Footer Link"
            href="https://github.com/OperationCode/operationcode_frontend/issues/new"
          >
            Report A Bug
          </OutboundLink>
          <OutboundLink
            analyticsEventLabel="Footer Link"
            href="https://smile.amazon.com/ch/47-4247572"
          >
            Amazon Smile
          </OutboundLink>
          <OutboundLink
            analyticsEventLabel="Footer Link"
            href="https://www.iubenda.com/privacy-policy/8174861"
          >
            Privacy
          </OutboundLink>
=======
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
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        </div>
      </div>
    </footer>
  );
}

export default Footer;
