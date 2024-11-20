import { DonateSection } from '../DonateSection';
import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

describe('DonateSection', () => {
  it('should render with no props passed passed', () =>
    createShallowSnapshotTest(<DonateSection />));
});
