/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import PasswordResetSubmitForm from '../PasswordResetSubmitForm';

describe('PasswordResetSubmitForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <PasswordResetSubmitForm
        onSuccess={jest.fn()}
        passwordResetSubmit={jest.fn()}
        token="testToken"
        uid="testUID"
      />,
    );
  });
});
