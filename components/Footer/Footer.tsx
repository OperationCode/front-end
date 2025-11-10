import Link from 'next/link';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import { footerItems } from 'common/constants/navigation';
import Image from 'next/image';
import Logo from 'public/static/images/logo.svg';

import platniumTransparencySeal from 'static/images/platinum-transparency.png';
import compTia from 'static/images/sponsors/comptia_logo.png';

export interface FooterPropsType {
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
}

function Footer() {
  const currentYear = new Date().getFullYear();
  const { items, legal } = footerItems;

  const renderLink = ({ href, name, analyticsEventLabel }: FooterPropsType) => {
    return (
      <li key={href}>
        {analyticsEventLabel ? (
          <OutboundLink analyticsEventLabel={`${name} footer link`} href={href} hasIcon={false}>
            {name}
          </OutboundLink>
        ) : (
          // TODO: Attack prefetch to scroll listener
          <Link href={href}>{name}</Link>
        )}
      </li>
    );
  };

  return (
    <footer className="pt-12 pb-40 md:py-8">
      <div>
        <div className="flex flex-col items-center pb-6">
          <Link href="/" key="Home">
            <Logo style={{ width: 318, height: 60 }} fill="#252e3e" className="cursor-pointer" />
          </Link>
          <h6 className="mb-2">Connect With Us!</h6>
          <SocialMedia />
        </div>
        <div className="flex items-center justify-center gap-8 mb-4">
          <OutboundLink
            href="https://www.guidestar.org/profile/shared/52626ac8-5e8b-445a-889e-30bf1ac0b46e"
            analyticsEventLabel="Footer GuideStar"
            hasIcon={false}
          >
            <Image
              src={platniumTransparencySeal}
              alt="GuideStar Gold Transparency Seal"
              width={128}
              height={128}
            />
          </OutboundLink>
          <OutboundLink
            href="https://www.comptia.org/?utm_source=operationcode"
            analyticsEventLabel="Footer CompTIA"
            hasIcon={false}
          >
            <Image src={compTia} width={128} height={128} alt="CompTIA Authorized Partner - Gold" />
          </OutboundLink>
        </div>
        <div className="max-w-[1000px] mx-auto pb-10">
          <ul className="text-xl lg:text-base px-10 md:px-0 text-center grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-3 pt-3">
            {items.map(link => renderLink(link))}
          </ul>
        </div>
        <div className="text-sm text-center pb-20 pt-4 md:pb-8">
          <div className="mb-6">
            &#169; 2014-{currentYear} Operation Code™
            <span className="pl-4">registered 501(c)3</span>
          </div>
          <div className="flex mx-auto justify-between w-60 [&_a]:text-white">
            {legal.map(link =>
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
                  {link.name}
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
