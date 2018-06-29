import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import SchoolCard from '../SchoolCard';

storiesOf('Single-Purpose/SpecificCards/SchoolCard', module)
  .addDecorator(withKnobs)
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
  ));
