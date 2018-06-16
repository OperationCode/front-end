import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import StaffCard from '../StaffCard';

storiesOf('Single-Purpose/Cards/StaffCard', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <StaffCard
      email={text('email', 'kyle@operationcode.org')}
      imageAlternateText={text('imageAlternateText', "Kyle's beautiful face")}
      imageSource={text('imageSource', 'https://kylemh.com/public/img/me.jpg')}
      name={text('name', 'Kyle Holmberg')}
      staffRole={text('staffRole', 'Lead Front-End Engineer')}
      twitterHandle={text('twitterHandle', 'kylemh_')}
    />
  ));
