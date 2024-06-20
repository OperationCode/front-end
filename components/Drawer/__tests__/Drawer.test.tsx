import createSnapshotTest from '@/test-utils/createSnapshotTest';

import { Drawer } from '../Drawer';

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
