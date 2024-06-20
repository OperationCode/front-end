import { UpdateProfileForm } from '../UpdateProfileForm';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

describe('UpdateProfileForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(<UpdateProfileForm />);
  });
});
