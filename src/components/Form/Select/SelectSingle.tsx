import { cn } from '@/lib/utils';
import Label from '@/components/Form/Label/Label';
import type { ThemedReactSelectProps, OptionType } from './ThemedReactSelect';
import { ThemedReactSelect } from './ThemedReactSelect';

export interface SelectSingleProps extends Pick<
  ThemedReactSelectProps<false>,
  'id' | 'hasValidationStyling' | 'isSearchable'
> {
  className?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  isLabelHidden?: boolean;
  label: string;
  options: OptionType[];
  disabled?: boolean;
  error?: string;
  isTouched?: boolean;
}

export function SelectSingle({
  className,
  name,
  value: fieldValue,
  onChange,
  onBlur,
  hasValidationStyling = true,
  id,
  isLabelHidden = false,
  isSearchable = true,
  label,
  options,
  disabled,
  error,
  isTouched = false,
}: SelectSingleProps) {
  const value = options.find((option) => option.value === fieldValue);
  const hasErrors = Boolean(error);

  return (
    <div className={cn('min-w-64', className)}>
      <Label htmlFor={name} isHidden={isLabelHidden}>
        {label}
      </Label>
      <div className="lg:relative">
        <ThemedReactSelect<false>
          id={id ? `${id}` : undefined}
          name={name}
          hasErrors={hasErrors}
          hasValidationStyling={hasValidationStyling}
          isTouched={isTouched}
          onBlur={onBlur}
          isSearchable={isSearchable}
          isMulti={false}
          onChange={(option) => {
            onChange(option?.value ?? '');
          }}
          options={options}
          value={value}
          isDisabled={disabled}
        />
      </div>
    </div>
  );
}
