import { fireEvent, render } from '@testing-library/react';
import { BUTTON } from '@/common/constants/testIDs';
import { gtag } from '@/common/utils/thirdParty/gtag';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

import { Button } from '../Button';

describe('Button', () => {
  const requiredProps = {
    children: 'Test',
  };

  it('should render with required props', () => {
    createSnapshotTest(<Button {...requiredProps} />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Button
        {...requiredProps}
        analyticsObject={{ action: 'Test Button Selected', category: 'Testing' }}
        className="test-class"
        disabled
        fullWidth
        onClick={vi.fn()}
        tabIndex={-1}
        theme="secondary"
        type="submit"
        data-id="test-id"
      />,
    );
  });

  it('call props.onClick when button is clicked', () => {
    const onClickMock = vi.fn();
    const { queryByTestId } = render(<Button onClick={onClickMock}>Testing</Button>);

    expect(onClickMock).toHaveBeenCalledTimes(0);
    // @ts-expect-error Argument of type 'HTMLElement | null' is not assignable (delete comment to view full error)
    fireEvent.click(queryByTestId(BUTTON));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('fires gtag event onclick', () => {
    const { queryByTestId } = render(<Button {...requiredProps} />);
    const gtagSpy = vi.spyOn(gtag, 'event');
    expect(gtagSpy).toHaveBeenCalledTimes(0);
    // @ts-expect-error Argument of type 'HTMLElement | null' is not assignable (delete comment to view full error)
    fireEvent.click(queryByTestId(BUTTON));

    expect(gtagSpy).toHaveBeenCalledTimes(1);
    expect(gtagSpy).toHaveBeenCalledWith({
      action: 'Button Selected',
      category: 'Interactions',
      label: requiredProps.children,
    });
  });
});
