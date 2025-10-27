import { cx } from 'common/utils/cva';

interface InlineLoadingSpinnerProps {
  className?: string;
}

export const InlineLoadingSpinner = ({ className }: InlineLoadingSpinnerProps) => (
  <span
    aria-hidden
    className={cx(
      'border-solid border-white border-4 !border-b-primary rounded-[50%] h-5 w-5 box-border animate-spin group-hover:border-secondary transition-colors',
      className,
    )}
  />
);
