import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import { ColorSection } from '../ColorSection';

describe('ColorSection', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(<ColorSection />);
  });
});
