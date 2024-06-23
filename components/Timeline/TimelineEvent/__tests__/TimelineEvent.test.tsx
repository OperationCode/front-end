import { TimelineEvent } from '../TimelineEvent';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

describe('TimelineEvent', () => {
  it('should render with required props', () => {
    createSnapshotTest(<TimelineEvent title="test title" content="here is some test content" />);
  });
});
