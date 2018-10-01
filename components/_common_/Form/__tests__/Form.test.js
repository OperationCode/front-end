/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Form from 'components/_common_/Form/Form';

describe('Form', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(
      <Form>
        <div />
      </Form>,
    );
  });

  test('should render properly with some props assigned', () => {
    createSnapshotTest(
      <Form className="login-form">
        <div />
      </Form>,
    );
  });
});
