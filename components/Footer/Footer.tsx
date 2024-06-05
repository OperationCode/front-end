import Link from 'next/link';
import classNames from 'classnames';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import { footerItems } from 'common/constants/navigation';
import Image from 'next/image';
import Logo from 'public/static/images/logo.svg';
import styles from './Footer.module.css';

export type FooterPropsType = {
  /**
   * Url string applied ot the link.
   */
  href: string;
  /**
   * String applied to the link label.
   */
  name: string;
  /**
   * Only pass analytics event label if you're href is to an external website
   */
  analyticsEventLabel?: string;
};

function Footer() {
  const currentYear = new Date().getFullYear();

  // eslint-disable-next-line react/prop-types
  const renderLink = ({ href, name, analyticsEventLabel }: FooterPropsType) => {
    return (
      <li key={href}>
        {analyticsEventLabel ? (
          <OutboundLink analyticsEventLabel={`${name} footer link`} href={href} hasIcon={false}>
            {name}
          </OutboundLink>
        ) : (
          // TODO: Attack prefetch to scroll listener
          <Link href={href}>
            <a>{name}</a>
          </Link>
        )}
      </li>
    );
  };

  return (
    <footer className={styles.Footer}>
      <div className={styles.test}>
        <div className={classNames(styles.footerGrouping, styles.socialGrouping)}>
          <div className={classNames(styles.logoGrouping)}>
            <Link href="/" key="Home">
              <a>
                <Logo
                  className={classNames(styles.logoLink, styles.link)}
                  style={{ width: 318, height: 60 }}
                  fill="#252e3e"
                />
              </a>
            </Link>
          </div>
          <div className={classNames(styles.capitalize, styles.marginBottom)}>Connect With Us!</div>
          <SocialMedia />
        </div>
        <div className={styles.goldSealImg}>
          <OutboundLink
            href="https://www.guidestar.org/profile/shared/52626ac8-5e8b-445a-889e-30bf1ac0b46e"
            analyticsEventLabel="Footer GuideStar"
            hasIcon={false}
          >
            <Image
              src="/static/images/platinum-transparency.png"
              alt="GuideStar Gold Transparency Seal"
              width={128}
              height={128}
            />
          </OutboundLink>
        </div>
        <div className={classNames(styles.footerWrapper, styles.row)}>
          <div
            className={classNames(styles.footerGrouping, styles.linksGrouping, styles.capitalize)}
          >
            <div className={styles.linksRow}>
              <ul className={styles.linksColumn}>
                {footerItems.column1.map(link => renderLink(link))}
              </ul>
              <ul className={styles.linksColumn}>
                {footerItems.column2.map(link => renderLink(link))}
              </ul>
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
            &#169; 2014-{currentYear} Operation Code™ registered 501(c)3
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
                <Link href={link.href} key={link.href}>
                  <a className={styles.lineHeightFix}>{link.name}</a>
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
