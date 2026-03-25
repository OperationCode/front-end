import Link from 'next/link';
import Image from 'next/image';
import OutboundLink from '@/components/OutboundLink/OutboundLink';
import SocialMedia from '@/components/SocialMedia/SocialMedia';
import { footerItems } from '@/lib/constants/navigation';
import Logo from '@/static/images/logo.svg';

import platniumTransparencySeal from '@/static/images/platinum-transparency.png';
import compTia from '@/static/images/sponsors/comptia_logo.png';

export interface FooterPropsType {
  href: string;
  name: string;
  analyticsEventLabel?: string;
}

function FooterLink({ href, name, analyticsEventLabel }: FooterPropsType) {
  return (
    <li key={href}>
      {analyticsEventLabel ? (
        <OutboundLink analyticsEventLabel={`${name} footer link`} href={href} hasIcon={false}>
          {name}
        </OutboundLink>
      ) : (
        <Link href={href}>{name}</Link>
      )}
    </li>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  const { items, legal } = footerItems;

  return (
    <footer className="border-t border-primary/20 pt-12 pb-40 md:py-8">
      <div>
        <div className="flex flex-col items-center pb-6">
          <Link href="/" key="Home">
            <Logo style={{ width: 318, height: 60 }} className="cursor-pointer fill-current" />
          </Link>
          <h6 className="mb-2">Connect With Us!</h6>
          <SocialMedia />
        </div>
        <div className="mb-4 flex items-center justify-center gap-8">
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
        <div className="mx-auto max-w-[1000px] pb-10">
          <ul className="grid grid-cols-2 gap-7 px-10 pt-3 text-center text-xl md:grid-cols-4 md:gap-3 md:px-0 lg:text-base">
            {items.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
          </ul>
        </div>
        <div className="pt-4 pb-20 text-center text-sm md:pb-8">
          <div className="mb-6">
            &#169; 2014-{currentYear} Operation Code™
            <span className="pl-4">registered 501(c)3</span>
          </div>
          <div className="mx-auto flex w-60 justify-between [&_a]:text-white">
            {legal.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
