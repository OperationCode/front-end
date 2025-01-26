import flattenDepth from 'lodash/flattenDepth';

const donate = {
  href: '/donate',
  name: 'Donate',
  target: '_self',
};

const services = {
  name: 'Services',
  href: '/services',
  target: '_self',
};

const about = {
  name: 'About Us',
  href: '/about',
  target: '_self',
};

const history = {
  name: 'History',
  href: '/history',
  target: '_self',
};

const team = {
  name: 'Our Team',
  href: '/team',
  target: '_self',
};

const contact = {
  name: 'Contact Us',
  href: '/contact',
  target: '_self',
};

const faq = {
  name: 'FAQ',
  href: '/faq',
  target: '_self',
};

const podcast = {
  name: 'Podcast',
  href: '/podcast',
  target: '_self',
};

const branding = {
  name: 'Branding',
  href: '/branding',
  target: '_self',
};

const getInvolved = {
  name: 'Get Involved',
  href: '/get_involved',
  target: '_self',
};

const merchStore = {
  name: 'Merch Store',
  href: '/swag',
  target: '_blank',
};

const jobs = {
  href: '/jobs',
  name: 'Job Board',
  target: '_self',
};

const chapters = {
  name: 'Chapters',
  href: '/chapters',
  target: '_self',
};

const sponsorship = {
  name: 'Sponsorship',
  href: '/sponsorship',
  target: '_self',
};

const scholarship = {
  name: 'Scholarship',
  href: '/scholarship',
  target: '_self',
};

const projectRebuild = {
  name: 'Project Rebuild',
  href: '/project_rebuild',
  target: '_self',
};

const press = {
  name: 'Press',
  href: '/press',
  target: '_self',
};

const corporateTraining = {
  name: 'Corporate Training',
  href: '/corporate-training',
  target: '_self',
};

const servicesGroup = {
  ...services,
  sublinks: [podcast, scholarship, projectRebuild, corporateTraining],
};

const aboutUsGroup = {
  ...about,
  sublinks: [team, history, faq, branding],
};

const getInvolvedGroup = {
  ...getInvolved,
  sublinks: [chapters, sponsorship, merchStore, contact, donate],
};

// MARK: Nav items
export const desktopNavItems = [aboutUsGroup, servicesGroup, getInvolvedGroup];

// Extracts sublinks to list everything as a single, top-level list
export const mobileNavItems = flattenDepth(
  [about, getInvolved, ...servicesGroup.sublinks, ...getInvolvedGroup.sublinks].map(
    ({ sublinks = [], ...item }) => [item, sublinks],
  ),
  2,
);

export const footerItems = {
  items: [
    about,
    chapters,
    jobs,
    getInvolved,
    contact,
    scholarship,
    podcast,
    history,
    faq,
    donate,
    press,
    branding,
    services,
    team,
    corporateTraining,
  ],
  legal: [
    {
      name: 'Terms of Use',
      href: '/terms',
    },
    {
      // NOTE: If you change this route, please update the redirect in `vercel.json` as well
      name: 'Privacy',
      href: 'https://www.iubenda.com/privacy-policy/8174861',
      analyticsEventLabel: 'Privacy',
    },
  ],
};
