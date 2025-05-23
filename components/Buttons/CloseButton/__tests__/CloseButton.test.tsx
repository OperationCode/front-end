import { fireEvent, render } from '@testing-library/react';
import { CLOSE_BUTTON } from 'common/constants/testIDs';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import CloseButton from '../CloseButton';

describe('CloseButton', () => {
  it('should render with just required props passed', () => {
    createSnapshotTest(<CloseButton onClick={vi.fn()} />);
  });

  it('should not be clickable when disabled', () => {
    const onClickMock = vi.fn();
    const { queryByTestId } = render(<CloseButton disabled onClick={onClickMock} />);

    fireEvent.click(queryByTestId(CLOSE_BUTTON)!);

    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});
