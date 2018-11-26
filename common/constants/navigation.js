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
      title: 'About Us',
    },
    contactLink,
    faqLink,
  ],
  column2: [
    {
      href: '/who_we_serve',
      title: 'Who We Serve',
    },
    {
      href: '/code_schools',
      title: 'Code Schools',
    },
    {
      href: '/jobs',
      title: 'Job Board',
    },
    eventsLink,
  ],
  column3: [
    getInvolvedLink,
    {
      href: '/mentoring',
      title: 'Become A Mentor',
    },
    {
      href: '/history',
      title: 'History',
    },
    {
      href: '/donate',
      title: 'Donate',
    },
  ],
  column4: [
    {
      href: '/resources',
      title: 'Resources',
    },
    {
      href: '/press',
      title: 'Press',
    },
    {
      href: '/branding',
      title: 'Branding',
    },
    {
      href: '/blog',
      title: 'Blog',
    },
  ],
  legal: [
    {
      analyticsEventLabel: 'FooterLink',
      href: 'https://www.somefakeurl.com/',
      title: 'Terms of Use',
    },
    {
      analyticsEventLabel: 'FooterLink',
      href: 'https://www.anotherfakeurl.com/',
      title: 'Cookies',
    },
    {
      analyticsEventLabel: 'FooterLink',
      href: 'https://www.iubenda.com/privacy-policy/8174861',
      title: 'Privacy',
    },
  ],
};
