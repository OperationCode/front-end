import { func, node, oneOf, string } from 'prop-types';
import classNames from 'classnames';
import { ALERT, ALERT_CLOSE_BUTTON } from 'common/constants/testIDs';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './Alert.module.css';

Alert.propTypes = {
  children: node.isRequired,
  className: string,
  'data-testid': string,
  onClose: func,
  type: oneOf(['error', 'success', 'warning']).isRequired,
};

Alert.defaultProps = {
  className: undefined,
  'data-testid': ALERT,
  onClose: undefined,
};

function Alert({ children, className, 'data-testid': testID, onClose, type }) {
  return (
    <div
      className={classNames(styles.Alert, className, {
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
      {children}
    </div>
  );
}

export default Alert;
