import { fireEvent, render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { ALERT_CLOSE_BUTTON } from 'common/constants/testIDs';

import { ErrorAlert, SuccessAlert, WarningAlert } from '../__stories__/Alert.stories';

describe('Alert', () => {
  it('should render error alert with required props', () => {
    createSnapshotTest(<ErrorAlert {...ErrorAlert.args} />);
  });

  it('should call close handler when close alert button clicked', () => {
    const onCloseMock = vi.fn();

    const { queryByTestId } = render(<SuccessAlert {...SuccessAlert.args} onClose={onCloseMock} />);

    expect(onCloseMock).toHaveBeenCalledTimes(0);

    fireEvent.click(queryByTestId(ALERT_CLOSE_BUTTON));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should NOT render button if close handler not provided', () => {
    const { queryByTestId } = render(<WarningAlert {...WarningAlert.args} />);

    expect(queryByTestId(ALERT_CLOSE_BUTTON)).toBeNull();
  });
});
