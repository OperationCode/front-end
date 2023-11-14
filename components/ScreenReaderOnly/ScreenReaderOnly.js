import { node } from 'prop-types';
import { SCREEN_READER_ONLY } from 'common/constants/testIDs';

export const toggleMessages = {
  open: 'Show more',
  close: 'Hide expanded',
};

ScreenReaderOnly.propTypes = {
  children: node.isRequired,
};

function ScreenReaderOnly({ children }) {
  return (
    <span className="sr-only" data-testid={SCREEN_READER_ONLY}>
      {children}
    </span>
  );
}

export default ScreenReaderOnly;
