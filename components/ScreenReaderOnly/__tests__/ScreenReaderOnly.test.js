import createSnapshotTest from 'test-utils/createSnapshotTest';

import { Default } from '../__stories__/ScreenReaderOnly.stories';

describe('ScreenReaderOnly', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Default {...Default.args} />);
  });
});
