import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { ALERT_CLOSE_BUTTON } from 'common/constants/testIDs';

import Alert from '../Alert';

describe('Alert', () => {
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

    expect(onCloseMock).toHaveBeenCalledTimes(0);

    fireEvent.click(queryByTestId(ALERT_CLOSE_BUTTON));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should NOT render button if close handler not provided', () => {
    const { queryByTestId } = render(<Alert type="warning">Warning Test Alert!</Alert>);

    expect(queryByTestId(ALERT_CLOSE_BUTTON)).toBeNull();
  });
});
