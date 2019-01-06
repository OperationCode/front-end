/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Form from 'components/_common_/Form/Form';

describe('Form', () => {
<<<<<<< HEAD
  test('should render with just required props passed', () => {
    createSnapshotTest(
      <Form>
        <div />
=======
  it('should render with required props', () => {
    createSnapshotTest(
      <Form>
        <p>Test</p>
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      </Form>,
    );
  });

<<<<<<< HEAD
  test('should render properly with some props assigned', () => {
    createSnapshotTest(
      <Form className="login-form">
        <div />
=======
  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Form className="login-form">
        <p>Test</p>
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      </Form>,
    );
  });
});
