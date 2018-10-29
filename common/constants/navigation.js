export const navItems = [
  {
    name: 'About Us',
    href: '/about',
    shouldPrefetch: false,
    sublinks: [
      {
        name: 'Contact Us',
        href: '/contact_us',
      },
      {
        name: 'FAQ',
        href: '/faq',
      },
    ],
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
    name: 'Events',
    href: '/events',
    shouldPrefetch: false,
    sublinks: [],
  },
  {
    name: 'Get Involved',
    href: '/get_involved',
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
    {
      href: '/team',
      title: 'Team',
    },
    {
      href: '/contact',
      title: 'Contact Us',
    },
    {
      href: '/faq',
      title: 'FAQ',
    },
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
    {
      href: '/events',
      title: 'Events',
    },
    {
      href: '/blog',
      title: 'Blog',
    },
  ],
  column3: [
    {
      href: '/get_involved',
      title: 'Get Involved',
    },
    {
      href: '/mentor',
      title: 'Become A Mentor',
    },
    {
      href: '/feedback',
      title: 'Feedback',
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
  ],
  legal: [
    {
      href: '/terms',
      title: 'Terms of Use',
    },
    {
      analyticsEventLabel: 'Footer - Cookies',
      href: 'https://www.anotherfakeurl.com/',
      title: 'Cookies',
    },
    {
      analyticsEventLabel: 'Footer - Privacy',
      href: 'https://www.iubenda.com/privacy-policy/8174861',
      title: 'Privacy',
    },
  ],
};
