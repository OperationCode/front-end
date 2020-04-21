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
    name: 'Slack',
    logoSource: `${s3}partnerLogos/slack.png`,
    url: 'https://slack.com/',
    type: PARTNER_TYPES.PAID,
  },
  {
    name: 'Heroku',
    logoSource: `${s3}partnerLogos/heroku.png`,
    url: 'https://heroku.com/',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: '1Password',
    logoSource: `${s3}partnerLogos/1password.png`,
    url: 'https://1password.com/',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'US Bank',
    logoSource: `${s3}partnerLogos/usbank.png`,
    url: 'https://usbank.com/index.html',
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
    url: 'https://logrocket.com/',
    type: PARTNER_TYPES.KIND,
  },
  {
    name: 'Zeit',
    logoSource: `${s3}partnerLogos/zeit.png`,
    url: 'https://zeit.co/home',
    type: PARTNER_TYPES.KIND,
  },
];

export default sortBy(partners, 'name');
