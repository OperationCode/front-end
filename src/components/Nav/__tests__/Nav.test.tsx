import { render, screen } from '@testing-library/react';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

import { Nav } from '../Nav';

describe('Nav', () => {
  it('should render with no props passed', () => createSnapshotTest(<Nav />));

  it('should render both desktop and mobile navigations', () => {
    render(<Nav />);

    expect(screen.queryByTestId('Desktop Nav Container')).not.toBeNull();
    expect(screen.queryByTestId('Mobile Nav Container')).not.toBeNull();
  });
});
