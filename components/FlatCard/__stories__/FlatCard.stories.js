import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import { s3 } from 'common/constants/urls';

import FlatCard from '../FlatCard';

const contentText = `
  David Molina is Founder & Board Chairman of Operation Code and self-taught himself Ruby
  on Rails writing the first line of code for operationcode.org to petition Congress to
  expand the New GI Bill to include coding schools, a benefit he couldn’t use after exiting 
  Dover AFB after 12 years in uniform. An entrepreneur, David has built numerous startups, 
  has testified before members of Congress to expand technical education for veterans and 
  spouses, and as a former captain in the Army was recipient of the Lt. Rowan Award, 
  Meritorious Service Medal and Army Commendation Medal.
`;

storiesOf('Common/FlatCard', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <FlatCard
        imageAlt={text('imageAlt', 'FlatCard image caption')}
        imageSource={text('imageSource', `${s3}headshots/david_molina.jpg`)}
        header={
          <div>
            <h1>David Molina</h1>
            <h6>Founder, Board Chairman</h6>
          </div>
        }
        content={<p>{contentText}</p>}
      />
    )),
  );
