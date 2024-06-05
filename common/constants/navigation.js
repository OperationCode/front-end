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

const chapters = {
  name: 'Chapters',
  href: '/chapters',
};

const sponsorship = {
  name: 'Sponsorship',
  href: '/sponsorship',
};

const scholarship = {
  name: 'Scholarship',
  href: '/scholarship',
};

const projectRebuild = {
  name: 'Project Rebuild',
  href: '/project_rebuild',
};

const servicesGroup = {
  ...services,
  sublinks: [podcast, scholarship, projectRebuild],
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

// MARK: Footer items
export const footerItems = {
  column1: [about, contact, faq, services],
  column2: [chapters, scholarship, jobs],
  column3: [getInvolved, podcast, history, donate],
  column4: [
    {
      href: '/press',
      name: 'Press',
    },
    branding,
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

export const footerStuff = [
  {
    name: 'About Us',
    href: '/about',
  },
  {
    name: 'Contact Us',
    href: '/contact',
  },
  {
    name: 'FAQ',
    href: '/faq',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'Chapters',
    href: '/chapters',
  },
  {
    name: 'Scholarship',
    href: '/scholarship',
  },
  {
    name: 'Job Board',
    href: '/jobs',
  },
  {
    name: 'Get Involved',
    href: '/get_involved',
  },
  {
    name: 'Podcast',
    href: '/podcast',
  },
  {
    name: 'History',
    href: '/history',
  },
  {
    href: '/donate',
    name: 'Donate',
  },
  {
    name: 'Press',
    href: '/press',
  },
  {
    name: 'Branding',
    href: '/branding',
  },
  {
    name: 'Our Team',
    href: '/team',
  },
];
