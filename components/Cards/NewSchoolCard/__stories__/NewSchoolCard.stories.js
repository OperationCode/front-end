import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { s3 } from 'common/constants/urls';
import NewSchoolCard from '../NewSchoolCard';

storiesOf('Cards/NewSchoolCard', module)
  .addDecorator(withKnobs)
  .add('with many locations', () => (
    <NewSchoolCard
      hasHardWareIncluded={boolean('hasHardWareIncluded', false)}
      hasOnline={boolean('hasOnline', false)}
      isFullTime={boolean('isFullTime', false)}
      locations={[
        { address: '123 Poppins Road', city: 'Los Angeles', state: 'CA', doesAcceptGIBill: false },
        { address: '726 Zyzzyx Street', city: 'Joshua Tree', state: 'CA', doesAcceptGIBill: true },
        { address: '9929 Hone Avenue', city: 'Boston', state: 'MA', doesAcceptGIBill: false },
        { address: '8772 Broadway Street', city: 'New York', state: 'NY', doesAcceptGIBill: false },
        { address: '524 Couch Street', city: 'Portland', state: 'OR', doesAcceptGIBill: false },
        { address: '2341 Queen Anne Circle', city: 'Seattle', state: 'WA', doesAcceptGIBill: true },
      ]}
      logoSource={text('logoSource', `${s3}codeSchoolLogos/code_immersives.jpg`)}
      name={text('name', 'Fake Boot Camp')}
      website={text('website', 'https://google.com')}
    />
  ))
  .add('with one location', () => (
    <NewSchoolCard
      hasHardWareIncluded={boolean('hasHardWareIncluded', false)}
      hasOnline={boolean('hasOnline', false)}
      isFullTime={boolean('isFullTime', false)}
      locations={[
        {
          address: '124 Poppins Road',
          city: 'Los Angeles',
          state: 'CA',
          doesAcceptGIBill: boolean('doesAcceptGIBill', false),
        },
      ]}
      logoSource={text('logoSource', `${s3}codeSchoolLogos/code_immersives.jpg`)}
      name={text('name', 'Fake Boot Camp')}
      website={text('website', 'https://google.com')}
    />
  ))
  .add('with no physical locations', () => (
    <NewSchoolCard
      hasHardWareIncluded={boolean('hasHardWareIncluded', false)}
      hasOnline={boolean('hasOnline', false)}
      isFullTime={boolean('isFullTime', false)}
      logoSource={text('logoSource', `${s3}codeSchoolLogos/code_immersives.jpg`)}
      name={text('name', 'Fake Boot Camp')}
      website={text('website', 'https://google.com')}
    />
  ));
