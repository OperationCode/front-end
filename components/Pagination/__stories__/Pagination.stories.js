import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number } from '@storybook/addon-knobs';

import Pagination from '../Pagination';

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <Pagination currentPage={number('currentPage', 7)} totalPages={number('totalPages', 14)} />
    )),
  );
