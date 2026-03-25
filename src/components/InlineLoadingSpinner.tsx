import { cn } from '@/common/utils/cva';

interface InlineLoadingSpinnerProps {
  className?: string;
}

export const InlineLoadingSpinner = ({ className }: InlineLoadingSpinnerProps) => (
  <span
    aria-hidden
    className={cn(
      `box-border size-5 animate-spin rounded-[50%] border-4 border-solid border-white border-b-primary! transition-colors group-hover:border-secondary`,
      className,
    )}
  />
);
