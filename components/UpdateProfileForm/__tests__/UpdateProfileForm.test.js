/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

// MultiStepForm is connected to redux, and is nested within UpdateProfileForm
import MockStoreProvider from 'test-utils/mocks/MockStoreProvider';

import UpdateProfileForm from '../UpdateProfileForm';

describe('UpdateProfileForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <MockStoreProvider>
        <UpdateProfileForm />
      </MockStoreProvider>,
    );
  });
});
