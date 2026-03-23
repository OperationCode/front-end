import { cx } from 'common/utils/cva';
import { ALERT, ALERT_CLOSE_BUTTON } from 'common/constants/testIDs';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';

export interface AlertPropsType {
  type: 'error' | 'success' | 'warning';
  children: React.ReactNode;
  className?: string;
  'data-testid'?: string;
  onClose?: () => void;
}

function Alert({
  children,
  className,
  'data-testid': testID = ALERT,
  onClose,
  type,
}: AlertPropsType) {
  return (
    <div
      className={cx(
        `rounded-sm border border-solid border-black p-2 text-sm shadow-md`,
        className,
        {
          'border-error-deep bg-error text-error-deep': type === 'error',
          'border-success-deep bg-success text-success-deep': type === 'success',
          'border-warning-deep bg-warning text-warning-deep': type === 'warning',
        },
      )}
      data-testid={testID}
      role="alert"
    >
      {/* TODO: Use CloseButton */}
      {Boolean(onClose) && (
        <button
          type="button"
          className="mr-1 cursor-pointer px-2 py-1 align-middle text-2xl transition-all duration-200 ease-linear hover:scale-110 hover:text-black"
          onClick={onClose}
          data-testid={ALERT_CLOSE_BUTTON}
        >
          <ScreenReaderOnly>Close Alert</ScreenReaderOnly>
          <span>&times;</span>
        </button>
      )}
      <span>{children}</span>
    </div>
  );
}

export default Alert;
