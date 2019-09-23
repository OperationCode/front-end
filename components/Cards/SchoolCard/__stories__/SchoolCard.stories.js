import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { s3 } from 'common/constants/urls';

import SchoolCard from '../SchoolCard';

storiesOf('Cards/SchoolCard', module)
  .addDecorator(withKnobs)
  .add('with many locations', () => (
    <SchoolCard
      hasHardwareIncluded={boolean('hasHardwareIncluded', false)}
      hasHousing={boolean('hasHousing', false)}
      hasOnline={boolean('hasOnline', true)}
      isVetTecApproved={boolean('isVetTecApproved', true)}
      hasOnlyOnline={boolean('hasOnlyOnline', false)}
      isFullTime={boolean('isFullTime', true)}
      locations={[
        { city: 'Los Angeles', state: 'CA', vaAccepted: false },
        { city: 'Joshua Tree', state: 'CA', vaAccepted: true },
        { city: 'Boston', state: 'MA', vaAccepted: false },
        { city: 'New York', state: 'NY', vaAccepted: false },
        { city: 'Portland', state: 'OR', vaAccepted: false },
        { city: 'Seattle', state: 'WA', vaAccepted: true },
      ]}
      logoSource={text('logoSource', `${s3}codeSchoolLogos/general_assembly.jpg`)}
      name={text('name', 'General Assembly')}
      website={text('website', 'https://generalassembly.com')}
      toggleModal={action('Modal opened!')}
    />
  ))
  .add('with one location', () => (
    <SchoolCard
      hasHardwareIncluded={boolean('hasHardwareIncluded', true)}
      hasHousing={boolean('hasHousing', false)}
      hasOnline={boolean('hasOnline', false)}
      hasOnlyOnline={boolean('hasOnlyOnline', false)}
      isFullTime={boolean('isFullTime', true)}
      locations={[
        {
          city: 'Los Angeles',
          state: 'CA',
          vaAccepted: boolean('vaAccepted', false),
        },
      ]}
      logoSource={text('logoSource', `${s3}codeSchoolLogos/code_immersives.jpg`)}
      name={text('name', 'Code Immersives')}
      website={text('website', 'https://codeimmersives.com')}
      toggleModal={action('Modal opened!')}
    />
  ))
  .add('with no physical locations', () => (
    <SchoolCard
      hasHardwareIncluded={boolean('hasHardwareIncluded', false)}
      hasHousing={boolean('hasHousing', false)}
      hasOnline={boolean('hasOnline', true)}
      hasOnlyOnline={boolean('hasOnlyOnline', true)}
      isFullTime={boolean('isFullTime', false)}
      locations={[]}
      logoSource={text('logoSource', `${s3}codeSchoolLogos/thinkful.jpg`)}
      name={text('name', 'Thinkful')}
      website={text('website', 'https://thinkful.com')}
      toggleModal={action('Modal opened!')}
    />
  ));
