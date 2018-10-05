/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormCheckBox from '../FormCheckBox';

describe('FormCheckBox', () => {
  it('should render with just required props passed', () => {
    createSnapshotTest(<FormCheckBox>Test</FormCheckBox>);
  });

  it('should render properly with some props assigned', () => {
    createSnapshotTest(
      <FormCheckBox
        className="somename"
        data-custom-attr="custom stuff here"
        disabled
        fullWidth
        type="checkbox"
      >
        Test
      </FormCheckBox>,
    );
  });
});
