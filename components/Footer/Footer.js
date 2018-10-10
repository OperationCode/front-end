import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import styles from './Footer.css';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerRow}>
        <div className={classNames(styles.footerGrouping, styles.socialGrouping)}>
          <div className={classNames(styles.footerGrouping, styles.logoGrouping)}>
            <img src="/static/images/icons/operation_code_logo.svg" alt="Operation Code Logo" />
          </div>
          <SocialMedia />
        </div>

        <div className={classNames(styles.footerGrouping, styles.linksGrouping)}>
          <div className={styles.linkColumn}>
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
          <div className={styles.linkColumn}>
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
          <div className={styles.linkColumn}>
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
          <div className={styles.linkColumn}>
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

      <div className={classNames(styles.footerRow)}>
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
