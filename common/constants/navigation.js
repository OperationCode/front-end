import flattenDepth from 'lodash/flattenDepth';
import { donateLink } from 'common/constants/urls';

// MARK: Links shared between nav and footer (no duplicate code)
const contactLink = {
  name: 'Contact Us',
  href: '/contact',
  shouldPrefetch: false,
};

const faqLink = {
  name: 'FAQ',
  href: '/faq',
  shouldPrefetch: false,
};

const getInvolvedLink = {
  name: 'Get Involved',
  href: '/get_involved',
  shouldPrefetch: true,
};

const eventsLink = {
  name: 'Events',
  href: '/events',
  shouldPrefetch: true,
};

// MARK: Top-level navigation items
const whoWeServeWithoutSublinks = {
  name: 'Who We Serve',
  href: '/who_we_serve',
  shouldPrefetch: true,
};

const whoWeServeWithSublinks = {
  ...whoWeServeWithoutSublinks,
  sublinks: [
    {
      name: 'Login',
      href: '/login',
    },
    {
      name: 'Join',
      href: '/join',
    },
  ],
};

const aboutUs = {
  name: 'About Us',
  href: '/about',
  shouldPrefetch: true,
  sublinks: [contactLink, faqLink],
};

const events = {
  ...eventsLink,
  shouldPrefetch: false,
};

const getInvolved = {
  ...getInvolvedLink,
  sublinks: [
    {
      name: 'Sponsorship',
      href: '/sponsorship',
    },
    {
      name: 'Leadership Circle',
      href: '/leadership_circle',
    },
  ],
};

const profile = {
  name: 'Profile',
  href: '/profile',
  shouldPrefetch: false,
};

const logout = {
  name: 'Logout',
  href: '/login?loggedOut=true',
  shouldPrefetch: false,
};

// MARK: Nav items
export const loggedInNavItems = [
  aboutUs,
  whoWeServeWithoutSublinks,
  events,
  getInvolved,
  profile,
  logout,
];
export const loggedOutNavItems = [aboutUs, whoWeServeWithSublinks, events, getInvolved];

// Extracts sublinks to list everything as a single, top-level list
export const mobileLoggedInNavItems = flattenDepth(
  [logout, profile, aboutUs, whoWeServeWithoutSublinks, events, getInvolved].map(
    ({ sublinks = [], ...item }) => [item, sublinks],
  ),
  2,
);
export const mobileLoggedOutNavItems = flattenDepth(
  [...whoWeServeWithSublinks.sublinks, aboutUs, whoWeServeWithoutSublinks, events, getInvolved].map(
    ({ sublinks = [], ...item }) => [item, sublinks],
  ),
  2,
);

// MARK: Footer items
export const footerItems = {
  column1: [
    {
      href: '/about',
      name: 'About Us',
    },
    contactLink,
    faqLink,
  ],
  column2: [
    {
      href: '/code_schools',
      name: 'Code Schools',
    },
    {
      href: '/jobs',
      name: 'Job Board',
    },
    eventsLink,
    {
      href: '/who_we_serve',
      name: 'Who We Serve',
    },
  ],
  column3: [
    getInvolvedLink,
    {
      href: '/history',
      name: 'History',
    },
    {
      href: donateLink,
      name: 'Donate',
      analyticsEventLabel: 'Donate',
    },
  ],
  column4: [
    {
      href: '/press',
      name: 'Press',
    },
    {
      href: '/branding',
      name: 'Branding',
    },
    {
      href: '/team',
      name: 'Team',
    },
  ],
  legal: [
    {
      href: '/terms',
      name: 'Terms of Use',
    },
    // TODO: Create a link for this
    // {
    //   href: 'https://www.anotherfakeurl.com/',
    //   name: 'Cookies',
    //   analyticsEventLabel: 'Cookies',
    // },
    {
      // NOTE: If you change this route, please update the redirect in `now.json` as well
      href: 'https://www.iubenda.com/privacy-policy/8174861',
      name: 'Privacy',
      analyticsEventLabel: 'Privacy',
    },
  ],
};
