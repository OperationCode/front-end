import { SCREEN_READER_ONLY } from 'common/constants/testIDs';

export const toggleMessages = {
  open: 'Show more',
  close: 'Hide expanded',
};

export type ScreenReaderOnlyPropsType = {
  /**
   * Child content that is rendered in the root element, but not displayed.
   */
  children: React.ReactNode;
};

function ScreenReaderOnly({ children }: ScreenReaderOnlyPropsType) {
  return (
    <span className="sr-only" data-testid={SCREEN_READER_ONLY}>
      {children}
    </span>
  );
}

export default ScreenReaderOnly;
