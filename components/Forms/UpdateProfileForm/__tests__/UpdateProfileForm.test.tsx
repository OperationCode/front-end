import createSnapshotTest from 'test-utils/createSnapshotTest';
import UpdateProfileForm from '../UpdateProfileForm';

describe('UpdateProfileForm', () => {
  beforeEach(() => {
    vi.mock('next/router', () => require('next-router-mock')); // eslint-disable-line global-require
  });

  it('should render with required props', () => {
    createSnapshotTest(<UpdateProfileForm />);
  });
});
