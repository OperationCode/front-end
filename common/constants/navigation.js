import flattenDepth from 'lodash/flattenDepth';

const donate = {
  href: '/donate',
  name: 'Donate',
};

const services = {
  name: 'Services',
  href: '/services',
};

const about = {
  name: 'About Us',
  href: '/about',
};

const history = {
  name: 'History',
  href: '/history',
};

const team = {
  name: 'Our Team',
  href: '/team',
};

const contact = {
  name: 'Contact Us',
  href: '/contact',
};

const faq = {
  name: 'FAQ',
  href: '/faq',
};

const podcast = {
  name: 'Podcast',
  href: '/podcast',
};

const branding = {
  name: 'Branding',
  href: '/branding',
};

const getInvolved = {
  name: 'Get Involved',
  href: '/get_involved',
};

const merchStore = {
  name: 'Merch Store',
  href: '/swag',
};

const jobs = {
  href: '/jobs',
  name: 'Job Board',
};

const sponsorship = {
  name: 'Sponsorship',
  href: '/sponsorship',
};

const projectRebuild = {
  name: 'Project Rebuild',
  href: '/project_rebuild',
};

const servicesGroup = {
  ...services,
  sublinks: [podcast, projectRebuild],
};

const aboutUsGroup = {
  ...about,
  sublinks: [team, history, faq, branding],
};

const getInvolvedGroup = {
  ...getInvolved,
  sublinks: [sponsorship, merchStore, contact, donate],
};

// MARK: Nav items
export const loggedOutNavItems = [aboutUsGroup, servicesGroup, getInvolvedGroup];

// Extracts sublinks to list everything as a single, top-level list
export const mobileLoggedOutNavItems = flattenDepth(
  [about, getInvolved, ...servicesGroup.sublinks, ...getInvolvedGroup.sublinks].map(
    ({ sublinks = [], ...item }) => [item, sublinks],
  ),
  2,
);

// MARK: Footer items
export const footerItems = {
  column1: [contact, faq, jobs],
  column2: [podcast, merchStore, sponsorship],
  column3: [getInvolved, sponsorship, donate],
  column4: [
    about,
    history,
    {
      href: '/press',
      name: 'Press',
    },
    team,
  ],
  legal: [
    {
      href: '/terms',
      name: 'Terms of Use',
    },
    {
      // NOTE: If you change this route, please update the redirect in `vercel.json` as well
      href: 'https://www.iubenda.com/privacy-policy/8174861',
      name: 'Privacy',
      analyticsEventLabel: 'Privacy',
    },
  ],
};
