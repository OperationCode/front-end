import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import DonateSection from '../DonateSection';

describe('DonateSection', () => {
  it('should render with no props passed passed', () =>
    createShallowSnapshotTest(<DonateSection />));
});
