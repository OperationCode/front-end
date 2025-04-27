import { twMerge } from 'tailwind-merge';

interface InlineLoadingSpinnerProps {
  className?: string;
}

export const InlineLoadingSpinner = ({ className }: InlineLoadingSpinnerProps) => (
  <span
    aria-hidden
    className={twMerge(
      'border-solid border-white border-4 !border-b-themePrimary rounded-[50%] h-5 w-5 box-border animate-spin group-hover:border-themeSecondary transition-colors',
      className,
    )}
  />
);
