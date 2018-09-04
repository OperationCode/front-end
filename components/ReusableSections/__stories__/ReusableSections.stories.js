import React from 'react';
import { storiesOf } from '@storybook/react';

import DonateSection from '../DonateSection/DonateSection';
import JoinSection from '../JoinSection/JoinSection';
import SignUpSection from '../SignUpSection/SignUpSection';

storiesOf('ReusableSections', module)
  .add('DonateSection', () => <DonateSection />)
  .add('JoinSection', () => <JoinSection />)
  .add('SignUpSection', () => <SignUpSection />);
