import createSnapshotTest from 'test-utils/createSnapshotTest';

import ThemedReactSelect from '../ThemedReactSelect';

describe('ThemedReactSelect', () => {
  it('should render with required props', () => {
    createSnapshotTest(<ThemedReactSelect />);
  });
});
