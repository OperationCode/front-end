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
    sublinks: [],
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
      href: '/who_we_serve',
      name: 'Who We Serve',
    },
    {
      href: '/code_schools',
      name: 'Code Schools',
    },
    {
      href: '/jobs',
      name: 'Job Board',
    },
    eventsLink,
  ],
  column3: [
    getInvolvedLink,
    {
      href: '/mentoring',
      name: 'Become A Mentor',
    },
    {
      href: '/history',
      name: 'History',
    },
    {
      href: '/donate',
      name: 'Donate',
    },
  ],
  column4: [
    {
      href: '/resources',
      name: 'Resources',
    },
    {
      href: '/press',
      name: 'Press',
    },
    {
      href: '/branding',
      name: 'Branding',
    },
    {
      href: '/blog',
      name: 'Blog',
    },
  ],
  legal: [
    {
      analyticsEventLabel: 'FooterLink',
      href: 'https://www.somefakeurl.com/',
      name: 'Terms of Use',
    },
    {
      analyticsEventLabel: 'FooterLink',
      href: 'https://www.anotherfakeurl.com/',
      name: 'Cookies',
    },
    {
      analyticsEventLabel: 'FooterLink',
      href: 'https://www.iubenda.com/privacy-policy/8174861',
      name: 'Privacy',
    },
  ],
};
