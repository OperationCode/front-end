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
      <>
        <p style={{ margin: '1rem auto', textAlign: 'center' }}>
          Note that this component cannot be interactive outside the context of Next.js&apos;s
          router.
          <br />
          To see the different states, simply adjust the knobs.
        </p>

        <Pagination
          currentPage={number('currentPage', 1) || 1}
          pathname="/resources/[page]"
          totalPages={number('totalPages', 20) || 20}
        />
      </>
    )),
  );
