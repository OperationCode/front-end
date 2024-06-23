import { ValueCard } from '../ValueCard';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

describe('ValueCard', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <ValueCard
        name="Testing"
        description="Testing is good for the soul and scientifically proven to make puppies happy."
      />,
    );
  });
});
