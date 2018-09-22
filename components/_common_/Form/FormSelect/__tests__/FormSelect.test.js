/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormSelect from '../FormSelect';

describe('FormSelect', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(
      <FormSelect
        options={[{ label: 'test 1', value: 'TEST1' }, { label: 'test 2', value: 'TEST2' }]}
      />,
    );
  });
});
