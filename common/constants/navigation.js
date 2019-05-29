import { donateLink } from 'common/constants/urls';

// links shared between nav and footer (no duplicate code)
const contactLink = {
  name: 'Contact Us',
  href: '/contact',
};

const faqLink = {
  name: 'FAQ',
  href: '/faq',
};

const getInvolvedLink = {
  name: 'Get Involved',
  href: '/get_involved',
};

const eventsLink = {
  name: 'Events',
  href: '/events',
};

export const navItems = [
  {
    name: 'About Us',
    href: '/about',
    shouldPrefetch: false,
    sublinks: [contactLink, faqLink],
  },
  {
    name: 'Who We Serve',
    href: '/who_we_serve',
    shouldPrefetch: false,
    sublinks: [
      {
        name: 'Member Login',
        href: '/login',
      },
      {
        name: 'Join',
        href: '/join',
      },
    ],
  },
  {
    ...eventsLink,
    shouldPrefetch: false,
    sublinks: [],
  },
  {
    ...getInvolvedLink,
    shouldPrefetch: false,
    sublinks: [
      // {
      //   name: 'Mentoring',
      //   href: '/mentoring',
      // },
      {
        name: 'Sponsorship',
        href: '/sponsorship',
      },
      {
        name: 'Leadership Circle',
        href: '/leadership_circle',
      },
    ],
  },
];

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
    {
      href: '/podcasts',
      name: 'Podcast',
    },
    getInvolvedLink,
    // {
    //   href: '/mentoring',
    //   name: 'Become A Mentor',
    // },
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
    // {
    //   href: '/resources',
    //   name: 'Resources',
    // },
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
    // {
    //   href: '/blog',
    //   name: 'Blog',
    // },
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
      href: 'https://www.iubenda.com/privacy-policy/8174861',
      name: 'Privacy',
      analyticsEventLabel: 'Privacy',
    },
  ],
};
