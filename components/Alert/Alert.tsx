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
      className={cx('border border-solid border-black rounded shadow-md text-sm p-2', className, {
        'bg-error border-error-deep text-error-deep': type === 'error',
        'bg-success border-success-deep text-success-deep': type === 'success',
        'bg-warning border-warning-deep text-warning-deep': type === 'warning',
      })}
      data-testid={testID}
      role="alert"
    >
      {/* TODO: Use CloseButton */}
      {Boolean(onClose) && (
        <button
          type="button"
          className="text-2xl align-middle py-1 px-2 mr-1 transition-all duration-200 ease-linear cursor-pointer hover:text-black hover:scale-110"
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
