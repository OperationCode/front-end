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
  {
    name: 'Donate',
    href: '/donate',
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
      href: '/job_board',
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
