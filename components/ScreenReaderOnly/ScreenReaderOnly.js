import { node } from 'prop-types';
import { SCREEN_READER_ONLY } from 'common/constants/testIDs';
import styles from './ScreenReaderOnly.module.css';

export const toggleMessages = {
  open: 'Show more',
  close: 'Hide expanded',
};

ScreenReaderOnly.propTypes = {
  children: node.isRequired,
};

function ScreenReaderOnly({ children }) {
  return (
    <span className={styles.ScreenReaderOnly} data-testid={SCREEN_READER_ONLY}>
      {children}
    </span>
  );
}

export default ScreenReaderOnly;
