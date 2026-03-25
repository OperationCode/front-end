import { forwardRef } from 'react';
import { CHECKBOX } from '@/lib/constants/testIDs';
import Label from '@/components/Form/Label/Label';
import { cn } from '@/lib/utils';

interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'disabled' | 'type'
> {
  label: React.ReactNode | string;
  isDisabled?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { className, id, isDisabled = false, label, name, ...props },
  ref,
) {
  return (
    <div className={cn('relative', className)} data-testid={CHECKBOX}>
      <Label
        htmlFor={id || name}
        isHidden={false}
        className={cn(
          'group flex items-start gap-3 outline outline-offset-2 outline-transparent',
          'cursor-pointer has-[input:disabled]:cursor-not-allowed [&>input:focus-visible]:outline-secondary/50',
        )}
      >
        <input
          {...props}
          ref={ref}
          className={cn(
            'size-5 cursor-[inherit] rounded-sm border border-secondary/50 group-hover:border-secondary disabled:opacity-60',
            'outline outline-offset-2 outline-transparent',
            'group-hover:outline-secondary/25',
          )}
          disabled={isDisabled}
          id={id || name}
          name={name}
          type="checkbox"
        />

        <span className="-mt-0.75 select-none">{label}</span>
      </Label>
    </div>
  );
});

export default Checkbox;
