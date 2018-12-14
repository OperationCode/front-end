import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import { s3 } from 'common/constants/urls';

import FlatCard from '../FlatCard';

storiesOf('Common/FlatCard', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <FlatCard
        imageAlt={text('imageAlt', 'FlatCard image caption')}
        imageSource={text('imageSource', `${s3}headshots/david_molina.jpg`)}
        headerText={text('headerText', 'David Molina')}
        subHeaderText={text('subHeaderText', 'Founder, Board Chairman')}
        bodyText={text(
          'bodyText',
          `David Molina is Founder & Board Chairman of Operation Code and self-taught himself Ruby
          on Rails writing the first line of code for operationcode.org to petition Congress to
          expand the New GI Bill to include coding schools, a benefit he couldn’t use after exiting 
          Dover AFB after 12 years in uniform. An entrepreneur, David has built numerous startups, 
          has testified before members of Congress to expand technical education for veterans and 
          spouses, and as a former captain in the Army was recipient of the Lt. Rowan Award, 
          Meritorious Service Medal and Army Commendation Medal.
          `,
        )}
      />
    )),
  )
  .add(
    'without subheader',
    withInfo()(() => (
      <FlatCard
        imageAlt={text('imageAlt', 'FlatCard image caption')}
        imageSource={text('imageSource', `${s3}headshots/jon_deng.jpg`)}
        headerText={text('headerText', 'Jon Deng, US Army, Software Engineer')}
        bodyText={text(
          'bodyText',
          `Transitioning out the military into tech is a difficult process. You have to learn 
          new skills and a new way of thinking. The part that doesn't change is that it's easier 
          to be successful when you have a good team. Through Operation Code, I was able to access 
          mentorship, attend technology conferences, and found a support network that helped me 
          find my first software engineering job.`,
        )}
      />
    )),
  );
