import React from 'react';

import DonateSection from '../DonateSection/DonateSection';
import { JoinSection } from '../JoinSection/JoinSection';
import SponsorsSection from '../SponsorsSection/SponsorsSection';

export default {
  title: 'ReusableSections',
};

export const donateSection = () => <DonateSection />;
donateSection.story = { name: 'DonateSection' };

export const joinSection = () => <JoinSection isLoggedIn={false} />;
joinSection.story = { name: 'JoinSection' };

export const sponsorsSection = () => <SponsorsSection />;
sponsorsSection.story = { name: 'SponsorsSection' };
