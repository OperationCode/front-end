import type { InputHTMLAttributes } from 'react';
import { INPUT, INPUT_FEEDBACK_GROUPING } from '@/lib/constants/testIDs';
import { cn } from '@/lib/utils';
import Label from '@/components/Form/Label/Label';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled'> {
  hasValidationStyling?: boolean;
  isDisabled?: boolean;
  isLabelHidden?: boolean;
  label: string;
  error?: string;
  isTouched?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

function Input({
  className,
  isDisabled = false,
  hasValidationStyling = true,
  id,
  isLabelHidden = false,
  label,
  name,
  type = 'text',
  error,
  isTouched = false,
  ref,
  ...props
}: InputProps) {
  const hasErrors = Boolean(error);
  const isLabelAfterInput = type === 'radio';
  const isLabelBeforeInput = !isLabelAfterInput;

  return (
    <div className={className} data-testid={INPUT}>
      {isLabelBeforeInput && (
        <Label htmlFor={id || name} isHidden={isLabelHidden}>
          {label}
        </Label>
      )}

      <div
        className="flex flex-col items-stretch lg:relative"
        data-testid={INPUT_FEEDBACK_GROUPING}
      >
        <input
          {...props}
          ref={ref}
          className={cn(
            'rounded-sm border border-secondary/50 bg-white p-2 text-lg',
            'min-w-48 disabled:opacity-60 hover:disabled:cursor-not-allowed',
            'focus-visible:border-primary/50 focus-visible:shadow-xs focus-visible:shadow-primary/75 focus-visible:outline-none',
            {
              'border-success-deep shadow-xs shadow-success-deep outline-none':
                isTouched && !hasErrors && hasValidationStyling,
              'border-error-deep shadow-xs shadow-error-deep':
                isTouched && hasErrors && hasValidationStyling,
            },
          )}
          disabled={isDisabled}
          id={id || name}
          name={name}
          type={type}
        />
      </div>

      {isLabelAfterInput && (
        <Label htmlFor={name} isHidden={isLabelHidden}>
          {label}
        </Label>
      )}
    </div>
  );
}

export default Input;
