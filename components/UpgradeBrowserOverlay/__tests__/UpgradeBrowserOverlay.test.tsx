import { UpgradeBrowserOverlay } from '../UpgradeBrowserOverlay';
import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

describe('UpgradeBrowserOverlay', () => {
  it('should render with no props passed', () => {
    createShallowSnapshotTest(<UpgradeBrowserOverlay />);
  });
});
