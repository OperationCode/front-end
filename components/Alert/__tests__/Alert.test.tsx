import { fireEvent, render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { ALERT_CLOSE_BUTTON } from 'common/constants/testIDs';
import Alert from '../Alert';

describe('Alert', () => {
  it('should render error alert with required props', () => {
    createSnapshotTest(<Alert type="error">Error Alert JSX or Text</Alert>);
  });

  it('should call close handler when close alert button clicked', () => {
    const onCloseMock = vi.fn();

    const { queryByTestId } = render(
      <Alert type="success" onClose={onCloseMock}>
        Success Alert JSX or Text
      </Alert>,
    );

    expect(onCloseMock).toHaveBeenCalledTimes(0);

    // @ts-expect-error
    fireEvent.click(queryByTestId(ALERT_CLOSE_BUTTON));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should NOT render button if close handler not provided', () => {
    const { queryByTestId } = render(<Alert type="warning">Warning Alert JSX or Text</Alert>);

    expect(queryByTestId(ALERT_CLOSE_BUTTON)).toBeNull();
  });
});
