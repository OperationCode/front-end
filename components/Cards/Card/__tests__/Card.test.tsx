import { Card } from '../Card';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

describe('Card', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Card>Test</Card>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Card className="test-class" hasAnimationOnHover>
        Test
      </Card>,
    );
  });
});
