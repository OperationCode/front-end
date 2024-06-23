import { SCREEN_READER_ONLY } from '@/common/constants/testIDs';

export const toggleMessages = {
  open: 'Show more',
  close: 'Hide expanded',
};

export function ScreenReaderOnly({ children }: React.PropsWithChildren<unknown>) {
  return (
    <span className="sr-only" data-testid={SCREEN_READER_ONLY}>
      {children}
    </span>
  );
}
