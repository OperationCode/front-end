import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import Bullseye from 'static/images/icons/Custom/bullseye.svg';

import BadgeGroup from '../BadgeGroup';

const badgesArray = [
  {
    label: 'Lorem ipsum dolor sit amet',
    icon: <Bullseye />,
  },
  {
    label: 'Proin at diam',
    icon: <Bullseye />,
  },
  {
    label: 'Fusce imperdiet fringilla enim quis aliquet',
    icon: <Bullseye />,
  },
];

storiesOf('BadgeGroup', module)
  .addDecorator(withKnobs)
  .add('default', withInfo()(() => <BadgeGroup items={badgesArray} />));
