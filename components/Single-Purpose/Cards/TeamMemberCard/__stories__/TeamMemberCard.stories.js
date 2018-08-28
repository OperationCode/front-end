import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import TeamMemberCard from '../TeamMemberCard';

storiesOf('Single-Purpose/Cards/TeamMemberCard', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TeamMemberCard
      email={text('email', 'kyle@operationcode.org')}
      imageAlternateText={text('imageAlternateText', "Kyle's beautiful face")}
      imageSource={text('imageSource', 'https://kylemh.com/public/img/me.jpg')}
      name={text('name', 'Kyle Holmberg')}
      staffRole={text('staffRole', 'Lead Front-End Engineer')}
      twitterHandle={text('twitterHandle', 'kylemh_')}
    />
  ));
