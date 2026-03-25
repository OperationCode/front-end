import { cn } from '@/common/utils/cva';
import { ALERT } from '@/common/constants/testIDs';
import CloseButton from '@/components/Buttons/CloseButton/CloseButton';

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
      className={cn(
        'rounded-lg border border-solid border-black p-2 text-sm shadow-sm',
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
      {onClose && <CloseButton theme="secondary" onClick={onClose} />}
      <span>{children}</span>
    </div>
  );
}

export default Alert;
