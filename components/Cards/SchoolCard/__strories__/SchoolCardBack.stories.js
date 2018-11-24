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
          { city: 'Los Angeles', state: 'CA', doesAcceptGIBill: false },
          { city: 'Joshua Tree', state: 'CA', doesAcceptGIBill: true },
          { city: 'Boston', state: 'MA', doesAcceptGIBill: false },
          { city: 'New York', state: 'NY', doesAcceptGIBill: false },
          { city: 'Portland', state: 'OR', doesAcceptGIBill: false },
          { city: 'Seattle', state: 'WA', doesAcceptGIBill: true },
        ]}
        logoSource={text('logoSource', `${s3}codeSchoolLogos/general_assembly.jpg`)}
        name={text('name', 'General Assembly')}
      />
    </Card>
  ));
