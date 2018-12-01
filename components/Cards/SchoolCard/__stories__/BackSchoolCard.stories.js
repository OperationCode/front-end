import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import { s3 } from 'common/constants/urls';

// Mimic <SchoolCard>
import Card from 'components/_common_/Card/Card';
import styles from '../SchoolCard.css';

import BackSchoolCard from '../BackSchoolCard';

storiesOf('Cards/SchoolCard/Back', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Card className={`${styles.SchoolCard} ${styles.backCard}`} hasAnimationOnHover={false}>
      <BackSchoolCard
        cardFlipCallback={action('Close Back Button Clicked!')}
        locations={[
          {
            address1: '1st Ave ',
            adress2: 'Suite 1',
            city: 'Los Angeles',
            state: 'CA',
            va_accepted: false,
          },
          {
            address1: '2nd Ave ',
            adress2: 'Suite 2',
            city: 'Joshua Tree',
            state: 'CA',
            va_accepted: true,
          },
          {
            address1: '3rd Ave ',
            adress2: 'Suite 3',
            city: 'Boston',
            state: 'MA',
            va_accepted: false,
          },
          {
            address1: '4th Ave ',
            adress2: 'Suite 4',
            city: 'New York',
            state: 'NY',
            va_accepted: false,
          },
          {
            address1: '5th Ave ',
            adress2: 'Suite 5',
            city: 'Portland',
            state: 'OR',
            va_accepted: false,
          },
          {
            address1: '6thAve ',
            adress2: 'Suite 6',
            city: 'Seattle',
            state: 'WA',
            va_accepted: true,
          },
        ]}
        logoSource={text('logoSource', `${s3}codeSchoolLogos/general_assembly.jpg`)}
        schoolName={text('name', 'General Assembly')}
      />
    </Card>
  ));
