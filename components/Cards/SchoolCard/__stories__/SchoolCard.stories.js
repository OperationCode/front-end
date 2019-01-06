import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

<<<<<<< HEAD
=======
import { s3 } from 'common/constants/urls';

>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
import SchoolCard from '../SchoolCard';

storiesOf('Cards/SchoolCard', module)
  .addDecorator(withKnobs)
<<<<<<< HEAD
  .add('default', () => (
    <SchoolCard
      schoolWebsite={text('schoolWebsite', 'https://sabio.la/veterans')}
      schoolName={text('schoolName', 'Sabio')}
      schoolAddress={text('schoolAddress', '400 Corporate Pointe')}
      schoolCity={text('schoolCity', 'Culver City')}
      schoolState={text('schoolState', 'CA')}
      logoSource={text(
        'logoSource',
        'https://s3.amazonaws.com/operationcode-assets/codeSchoolLogos/sabio.png',
      )}
      acceptsGIBill={boolean('acceptsGIBill', true)}
      isFullTime={boolean('isFullTime', true)}
      hasHardware={boolean('hasHardware', false)}
    >
      {text('children', 'Primary SchoolCard')}
    </SchoolCard>
=======
  .add('with many locations', () => (
    <SchoolCard
      hasHardwareIncluded={boolean('hasHardwareIncluded', false)}
      hasHousing={boolean('hasHousing', false)}
      hasOnline={boolean('hasOnline', true)}
      hasOnlyOnline={boolean('hasOnlyOnline', false)}
      isFullTime={boolean('isFullTime', true)}
      locations={[
        { city: 'Los Angeles', state: 'CA', va_accepted: false },
        { city: 'Joshua Tree', state: 'CA', va_accepted: true },
        { city: 'Boston', state: 'MA', va_accepted: false },
        { city: 'New York', state: 'NY', va_accepted: false },
        { city: 'Portland', state: 'OR', va_accepted: false },
        { city: 'Seattle', state: 'WA', va_accepted: true },
      ]}
      logoSource={text('logoSource', `${s3}codeSchoolLogos/general_assembly.jpg`)}
      name={text('name', 'General Assembly')}
      website={text('website', 'https://generalassembly.com')}
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
          va_accepted: boolean('va_accepted', false),
        },
      ]}
      logoSource={text('logoSource', `${s3}codeSchoolLogos/code_immersives.jpg`)}
      name={text('name', 'Code Immersives')}
      website={text('website', 'https://codeimmersives.com')}
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
    />
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  ));
