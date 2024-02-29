import classNames from 'classnames';
import { CLOSE_BUTTON } from 'common/constants/testIDs';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import PlusIcon from 'static/images/icons/plus.svg';
import styles from './CloseButton.module.css';

export type CloseButtonProps = {
  /**
   * Sets the button color theme.
   */
  theme?: 'primary' | 'secondary' | 'white';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

CloseButton.defaultProps = {
  disabled: false,
  theme: 'primary',
};

export default function CloseButton({
  disabled = false,
  onClick,
  theme = 'primary',
}: CloseButtonProps) {
  return (
    <button
      className={styles.CloseButton}
      data-testid={CLOSE_BUTTON}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <ScreenReaderOnly>Close</ScreenReaderOnly>

      <PlusIcon className={classNames(styles.icon, styles[theme])} />
    </button>
  );
}
