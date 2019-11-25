import React from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Alert from '../Alert';

describe('Alert', () => {
  afterEach(cleanup);

  it('should render with required props', () => {
    createSnapshotTest(<Alert type="error">Error Test Alert!</Alert>);
  });

  it('should call close handler when close alert button clicked', () => {
    const onCloseMock = jest.fn();

    const { queryByTestId } = render(
      <Alert onClose={onCloseMock} type="success">
        Success Test Alert!
      </Alert>,
    );

    const CloseAlertButton = queryByTestId('Close Alert Button');

    expect(onCloseMock).toHaveBeenCalledTimes(0);

    act(() => {
      fireEvent.click(CloseAlertButton);
    });

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should NOT render button if close handler not provided', () => {
    const { queryByTestId } = render(<Alert type="warning">Warning Test Alert!</Alert>);

    const CloseAlertButton = queryByTestId('Close Alert Button');

    expect(CloseAlertButton).toBeNull();
  });
});
