import { cx } from 'common/utils/cva';
import { ALERT, ALERT_CLOSE_BUTTON } from 'common/constants/testIDs';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './Alert.module.css';

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
      className={cx(styles.Alert, className, {
        [styles.error]: type === 'error',
        [styles.success]: type === 'success',
        [styles.warning]: type === 'warning',
      })}
      data-testid={testID}
      role="alert"
    >
      {/* TODO: Use CloseButton */}
      {Boolean(onClose) && (
        <button
          type="button"
          className={styles.alertCloseButton}
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
