import { s3 } from 'common/constants/urls';
import sortBy from 'lodash/sortBy';

export const PARTNER_TYPES = {
  PAID: 'PAID',
  KIND: 'IN-KIND',
};

const partners = [
  {
    name: 'APEX Systems',
    logoSource: `${s3}partnerLogos/apex_systems.png`,
    url: 'https://apexsystems.com/?utm_source=operationcode',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'GitHub',
    logoSource: `${s3}partnerLogos/github.png`,
    url: 'https://github.com/?utm_source=operationcode',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Elyon International',
    logoSource: `${s3}partnerLogos/elyon.png`,
    url: 'https://elyoninternational.com/?utm_source=operationcode',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: '1Password',
    logoSource: `${s3}partnerLogos/1password.png`,
    url: 'https://1password.com/?utm_source=operationcode',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'US Bank',
    logoSource: `${s3}partnerLogos/usbank.png`,
    url: 'https://www.usbank.com/index.html?utm_source=operationcode',
    type: PARTNER_TYPES.PAID,
  },
  {
    name: 'Threat Stack',
    logoSource: `${s3}partnerLogos/threat_stack.png`,
    url: 'https://threatstack.com/?utm_source=operationcode',
    type: PARTNER_TYPES.PAID,
  },
  {
    name: "O'Reilly Media",
    logoSource: `${s3}partnerLogos/oreilly.png`,
    url: 'https://oreilly.com/?utm_source=operationcode',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'HackerRank',
    logoSource: `${s3}partnerLogos/hackerrank.png`,
    url: 'https://hackerrank.com/?utm_source=operationcode',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Zapier',
    logoSource: `${s3}partnerLogos/zapier.png`,
    url: 'https://zapier.com/?utm_source=operationcode',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'LogRocket',
    logoSource: `${s3}partnerLogos/logrocket.png`,
    url: 'https://logrocket.com/?utm_source=operationcode',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Vercel',
    logoSource: `${s3}partnerLogos/vercel.png`,
    url: 'https://vercel.com/home?utm_source=operationcode',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Secure Code Warrior',
    logoSource: `https://user-images.githubusercontent.com/51661129/92973323-3d540b80-f484-11ea-85dd-d202fc751cd9.png`,
    url: 'https://securecodewarrior.com/?utm_source=operationcode',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Chromatic',
    logoSource: `${s3}partnerLogos/chromatic.png`,
    url: 'https://chromatic.com/?utm_source=operationcode',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Coursera',
    logoSource: `${s3}partnerLogos/coursera.png`,
    url: 'https://coursera.org/?utm_source=operationcode',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Team Treehouse',
    logoSource: `${s3}partnerLogos/treehouse.png`,
    url: 'https://teamtreehouse.com/?utm_source=operationcode',
    type: PARTNER_TYPES.KIND,
  },
];

export default sortBy(partners, 'name');
