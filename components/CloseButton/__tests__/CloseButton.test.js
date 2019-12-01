import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import CloseButton from '../CloseButton';

describe('CloseButton', () => {
  it('should render with just required props passed', () => {
    createSnapshotTest(<CloseButton onClick={jest.fn()} />);
  });

  it('should not be clickable when disabled', () => {
    const onClickMock = jest.fn();
    const { queryByTestId } = render(<CloseButton disabled onClick={onClickMock} />);

    act(() => {
      fireEvent.click(queryByTestId('Close Button'));
    });

    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});
