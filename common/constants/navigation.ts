interface NavLink {
  name: string;
  href: string;
  sublinks?: { name: string; href: string }[];
  isExternal?: boolean;
}

type MobileNavLink = Pick<NavLink, 'name' | 'href'>;

const donate: NavLink = {
  href: '/donate',
  name: 'Donate',
};

const services: NavLink = {
  name: 'Services',
  href: '/services',
};

const about: NavLink = {
  name: 'About Us',
  href: '/about',
};

const history: NavLink = {
  name: 'History',
  href: '/history',
};

const team: NavLink = {
  name: 'Our Team',
  href: '/team',
};

const contact: NavLink = {
  name: 'Contact Us',
  href: '/contact',
};

const faq: NavLink = {
  name: 'FAQ',
  href: '/faq',
};

const podcast: NavLink = {
  name: 'Podcast',
  href: '/podcast',
};

const branding: NavLink = {
  name: 'Branding',
  href: '/branding',
};

const getInvolved: NavLink = {
  name: 'Get Involved',
  href: '/get_involved',
};

const merchStore: NavLink = {
  name: 'Merch Store',
  href: '/swag',
  isExternal: true,
};

const jobs: NavLink = {
  href: '/jobs',
  name: 'Job Board',
};

const chapters: NavLink = {
  name: 'Chapters',
  href: '/chapters',
};

const sponsorship: NavLink = {
  name: 'Sponsorship',
  href: '/sponsorship',
};

const scholarship: NavLink = {
  name: 'Scholarship',
  href: '/scholarship',
};

const projectRebuild: NavLink = {
  name: 'Project Rebuild',
  href: '/project_rebuild',
};

const press: NavLink = {
  name: 'Press',
  href: '/press',
};

const corporateTraining: NavLink = {
  name: 'Corporate Training',
  href: '/corporate-training',
};

const servicesGroup: NavLink = {
  ...services,
  sublinks: [podcast, scholarship, projectRebuild, corporateTraining],
};

const aboutUsGroup: NavLink = {
  ...about,
  sublinks: [team, history, faq, branding],
};

const getInvolvedGroup: NavLink = {
  ...getInvolved,
  sublinks: [chapters, sponsorship, merchStore, contact, donate],
};

// MARK: Nav items
export const desktopNavItems: NavLink[] = [aboutUsGroup, servicesGroup, getInvolvedGroup];

// Extracts sublinks to list everything as a single, top-level list
export const mobileNavItems: MobileNavLink[] = [
  about,
  getInvolved,
  servicesGroup.sublinks as MobileNavLink[],
  getInvolvedGroup.sublinks as MobileNavLink[],
].flat();

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
