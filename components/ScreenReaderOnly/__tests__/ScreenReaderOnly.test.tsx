import createSnapshotTest from 'test-utils/createSnapshotTest';
import ScreenReaderOnly from '../ScreenReaderOnly';

describe('ScreenReaderOnly', () => {
  it('should render with required props', () => {
    createSnapshotTest(<ScreenReaderOnly>ScreenReader content</ScreenReaderOnly>);
  });
});
