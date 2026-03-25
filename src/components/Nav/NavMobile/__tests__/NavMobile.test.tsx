import { render } from '@testing-library/react';
import noop from 'lodash/noop';
import createSnapshotTest from '@/test-utils/createSnapshotTest';
import { mobileNavItems } from '@/lib/constants/navigation';

import NavMobile from '../NavMobile';

describe('NavMobile', () => {
  it('should render', () =>
    createSnapshotTest(<NavMobile navItems={mobileNavItems} isOpen={false} setOpen={noop} />));

  it('should not have a visible menu when isOpen prop is false', () => {
    const wrapper = render(<NavMobile navItems={mobileNavItems} isOpen={false} setOpen={noop} />);

    expect(wrapper.container.querySelector('ul')).toBeNull();
  });
});
