/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Form from 'components/_common_/Form/Form';

describe('Form', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <Form>
        <p>Test</p>
      </Form>,
    );
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Form className="login-form">
        <p>Test</p>
      </Form>,
    );
  });
});
