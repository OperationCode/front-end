/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import PasswordResetForm from '../PasswordResetForm';

describe('PasswordResetForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <PasswordResetForm onSuccess={jest.fn()} passwordReset={jest.fn()}>
        Test
      </PasswordResetForm>,
    );
  });
});
