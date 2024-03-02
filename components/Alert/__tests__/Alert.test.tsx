import { fireEvent, render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { ALERT_CLOSE_BUTTON } from 'common/constants/testIDs';
import meta, { ErrorAlert, SuccessAlert, WarningAlert } from '../__stories__/Alert.stories';

const ErrorAlertStory = composeStory(ErrorAlert, meta);
const SuccessAlertStory = composeStory(SuccessAlert, meta);
const WarningAlertStory = composeStory(WarningAlert, meta);

describe('Alert', () => {
  it('should render error alert with required props', () => {
    createSnapshotTest(<ErrorAlertStory />);
  });

  it('should call close handler when close alert button clicked', () => {
    const onCloseMock = vi.fn();

    const { queryByTestId } = render(<SuccessAlertStory onClose={onCloseMock} />);

    expect(onCloseMock).toHaveBeenCalledTimes(0);

    // @ts-expect-error
    fireEvent.click(queryByTestId(ALERT_CLOSE_BUTTON));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should NOT render button if close handler not provided', () => {
    const { queryByTestId } = render(<WarningAlertStory />);

    expect(queryByTestId(ALERT_CLOSE_BUTTON)).toBeNull();
  });
});
