import React from 'react';
import { storiesOf } from '@storybook/react';

import DonateSection from '../DonateSection/DonateSection';
import JoinSection from '../JoinSection/JoinSection';
import SponsorsSection from '../SponsorsSection';

storiesOf('ReusableSections', module)
  .add('DonateSection', () => <DonateSection />)
  .add('JoinSection', () => <JoinSection />)
  .add('SponsorsSection', () => <SponsorsSection />);
