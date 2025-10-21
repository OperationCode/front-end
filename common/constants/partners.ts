import { s3 } from 'common/constants/urls';
import sortBy from 'lodash/sortBy';

// Paid Sponsors
import etsy from 'static/images/sponsors/etsy_logo.png';
import umpquaBank from 'static/images/sponsors/umpqua_bank_logo.png';
import juniperNetworks from 'static/images/sponsors/juniper_networks_logo.png';

// In Kind Sponsors
import google from 'static/images/sponsors/google_logo.png';
import codePlatoon from 'static/images/sponsors/code_platoon_logo.png';
import uniteUs from 'static/images/sponsors/unite_us_logo.png';
import airbnb from 'static/images/sponsors/airbnb_logo.png';

export const PARTNER_TYPES = {
  PAID: 'PAID',
  KIND: 'IN-KIND',
} as const;

interface Partner {
  name: string;
  logoSource: string;
  url: string;
  type: typeof PARTNER_TYPES.PAID | typeof PARTNER_TYPES.KIND;
}

const partners: Partner[] = [
  {
    name: 'APEX Systems',
    logoSource: `${s3}partnerLogos/apex_systems.png`,
    url: 'https://apexsystems.com',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'GitHub',
    logoSource: `${s3}partnerLogos/github.png`,
    url: 'https://github.com',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Elyon International',
    logoSource: `${s3}partnerLogos/elyon.png`,
    url: 'https://elyoninternational.com',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: '1Password',
    logoSource: `${s3}partnerLogos/1password.png`,
    url: 'https://1password.com',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'US Bank',
    logoSource: `${s3}partnerLogos/usbank.png`,
    url: 'https://www.usbank.com/index.html',
    type: PARTNER_TYPES.PAID,
  },
  {
    name: 'Threat Stack',
    logoSource: `${s3}partnerLogos/threat_stack.png`,
    url: 'https://threatstack.com',
    type: PARTNER_TYPES.PAID,
  },
  {
    name: "O'Reilly Media",
    logoSource: `${s3}partnerLogos/oreilly.png`,
    url: 'https://oreilly.com',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'HackerRank',
    logoSource: `${s3}partnerLogos/hackerrank.png`,
    url: 'https://hackerrank.com',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Zapier',
    logoSource: `${s3}partnerLogos/zapier.png`,
    url: 'https://zapier.com',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'LogRocket',
    logoSource: `${s3}partnerLogos/logrocket.png`,
    url: 'https://logrocket.com',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Vercel',
    logoSource: `${s3}partnerLogos/vercel.png`,
    url: 'https://vercel.com',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Secure Code Warrior',
    logoSource: `https://user-images.githubusercontent.com/51661129/92973323-3d540b80-f484-11ea-85dd-d202fc751cd9.png`,
    url: 'https://securecodewarrior.com',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Chromatic',
    logoSource: `${s3}partnerLogos/chromatic.png`,
    url: 'https://chromatic.com',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Coursera',
    logoSource: `${s3}partnerLogos/coursera.png`,
    url: 'https://coursera.org',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Team Treehouse',
    logoSource: `${s3}partnerLogos/treehouse.png`,
    url: 'https://teamtreehouse.com',
    type: PARTNER_TYPES.KIND,
  },
  { name: 'Etsy', logoSource: etsy.src, url: 'https://etsy.com', type: PARTNER_TYPES.PAID },
  {
    name: 'Umpqua Bank',
    logoSource: umpquaBank.src,
    url: 'https://www.umpquabank.com/',
    type: PARTNER_TYPES.PAID,
  },
  {
    name: 'Juniper Networks',
    logoSource: juniperNetworks.src,
    url: 'https://www.juniper.net',
    type: PARTNER_TYPES.PAID,
  },
  { name: 'Google', logoSource: google.src, url: 'https://google.com', type: PARTNER_TYPES.KIND },
  {
    name: 'Code Platoon',
    logoSource: codePlatoon.src,
    url: 'https://www.codeplatoon.org',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Unite Us',
    logoSource: uniteUs.src,
    url: 'https://uniteus.com',
    type: PARTNER_TYPES.KIND,
  },
  { name: 'Airbnb', logoSource: airbnb.src, url: 'https://airbnb.com', type: PARTNER_TYPES.KIND },
];

const sortedPartners: Partner[] = sortBy(partners, 'name');

export default sortedPartners;
