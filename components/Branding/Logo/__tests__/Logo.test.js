import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import { Logo } from '../Logo';

describe('Logo', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(<Logo />);
  });
});
