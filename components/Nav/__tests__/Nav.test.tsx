import { fireEvent, render, screen } from '@testing-library/react';
import { CLOSE_BUTTON } from 'common/constants/testIDs';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import { Nav } from '../Nav';

describe('Nav', () => {
  it('should render with no props passed', () => createShallowSnapshotTest(<Nav />));

  it('should render both desktop and mobile navigations', () => {
    // we conditionally display them via CSS, but always render them
    render(<Nav />);

    expect(screen.queryByTestId('Desktop Nav Container')).not.toBeNull();
    expect(screen.queryByTestId('Mobile Nav Container')).not.toBeNull();
  });

  it('should only reveal mobile nav when hamburger button is clicked', async () => {
    render(<Nav />);

    expect(screen.queryByTestId('Mobile Nav')).toBeNull();

    const hamburgerButton = screen.queryByTestId('Hamburger Button')!;

    fireEvent.click(hamburgerButton);

    expect(await screen.findByTestId('Mobile Nav')).not.toBeNull();
  });

  it('should hide mobile nav when hamburger button is clicked', async () => {
    render(<Nav />);

    const HamburgerButton = screen.getByTestId('Hamburger Button');
    fireEvent.click(HamburgerButton);

    const CloseButton = await screen.findByTestId(CLOSE_BUTTON);
    fireEvent.click(CloseButton);

    expect(screen.queryByTestId('Mobile Nav')).toBeNull();
  });
});
