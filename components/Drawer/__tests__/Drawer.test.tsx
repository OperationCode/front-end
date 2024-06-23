import { Drawer } from '../Drawer';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

describe('Drawer', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Drawer>Test</Drawer>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Drawer className="test-class" isVisible>
        Test
      </Drawer>,
    );
  });
});
