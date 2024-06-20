import { ThemedReactSelect } from '../ThemedReactSelect';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

describe('ThemedReactSelect', () => {
  it('should render with required props', () => {
    createSnapshotTest(<ThemedReactSelect />);
  });
});
