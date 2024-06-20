import createSnapshotTest from 'test-utils/createSnapshotTest';
import { UpdateProfileForm } from '../UpdateProfileForm';

describe('UpdateProfileForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(<UpdateProfileForm />);
  });
});
