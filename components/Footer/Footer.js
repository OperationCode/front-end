import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
import SocialMedia from 'components/SocialMedia/SocialMedia';
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
          <OutboundLink href="https://github.com/OperationCode/operationcode_frontend/issues/new">
            Report A Bug
          </OutboundLink>
          <OutboundLink href="https://smile.amazon.com/ch/47-4247572">Amazon Smile</OutboundLink>
          <OutboundLink href="https://www.iubenda.com/privacy-policy/8174861">Privacy</OutboundLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
