import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import Button from 'components/_common_/Button/Button';
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
            <div className={styles.linksColumn}>
              <Link href="/about">
                <a>About Us</a>
              </Link>
              <Link href="/team">
                <a>Team</a>
              </Link>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </div>
            <div className={styles.linksColumn}>
              <Link href="/who_we_serve">
                <a>Who We Serve</a>
              </Link>
              <Link href="/code_schools">
                <a>Code Schools</a>
              </Link>
              <Link href="/job_board">
                <a>Job Board</a>
              </Link>
              <Link href="/events">
                <a>Events</a>
              </Link>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </div>
          </div>
          <div className={styles.linksRow}>
            <div className={styles.linksColumn}>
              <Link href="/get_involved">
                <a>Get Involved</a>
              </Link>
              <Link href="/become_a_mentor">
                <a>Become a Mentor</a>
              </Link>
              <Link href="/support">
                <a>Support OC</a>
              </Link>
              <Link href="/donate">
                <a>Donate</a>
              </Link>
              <Link href="/feedback">
                <a>Feedback</a>
              </Link>
            </div>
            <div className={styles.linksColumn}>
              <Link href="/resources">
                <a>Resources</a>
              </Link>
              <Link href="/press">
                <a>Press</a>
              </Link>
              <Link href="/branding">
                <a>Branding</a>
              </Link>
              <Link href="/sitemap">
                <a>Sitemap</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={classNames(styles.footerGrouping, styles.newsletterGrouping)}>
          <div className={classNames(styles.capitalize, styles.newsletterHeading)}>Newsletter</div>
          <div className={styles.newsletterItem}>
            Subscribe to our newsletter and never miss a beat!
          </div>
          <input className={styles.newsletterItem} type="text" placeholder="Email address" />
          <Button className={styles.newsletterItem}>Subscribe</Button>
        </div>
      </div>

      <div className={classNames(styles.row, styles.legalGrouping)}>
        <div className={styles.copyright}>
          Copyright {currentYear} Operation Code™. Operation Code is a 501(c)(3) nonprofit, EIN
          47-4247572.
        </div>
        <OutboundLink analyticsEventLabel="Footer Link" href="">
          Terms of Use
        </OutboundLink>
        <OutboundLink analyticsEventLabel="Footer Link" href="">
          Cookies
        </OutboundLink>
        <OutboundLink
          analyticsEventLabel="Footer Link"
          href="https://www.iubenda.com/privacy-policy/8174861"
        >
          Privacy
        </OutboundLink>
      </div>
    </footer>
  );
}

export default Footer;
