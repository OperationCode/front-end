// TODO: Remove eslint disable when adding export to file
/* eslint-disable import/prefer-default-export */

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
