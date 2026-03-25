import { cn } from '@/lib/utils';
import Label from '@/components/Form/Label/Label';
import type { OptionType, ThemedReactSelectProps } from './ThemedReactSelect';
import { ThemedReactSelect } from './ThemedReactSelect';

export interface SelectMultiProps extends Pick<
  ThemedReactSelectProps<true>,
  'id' | 'hasValidationStyling' | 'isSearchable'
> {
  className?: string;
  name: string;
  value: OptionType[];
  onChange: (value: OptionType[]) => void;
  onBlur: () => void;
  isLabelHidden?: boolean;
  label: string;
  options: OptionType[];
  disabled?: boolean;
  error?: string;
  isTouched?: boolean;
}

export function SelectMulti({
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
}: SelectMultiProps) {
  const hasErrors = Boolean(error);

  return (
    <div className={cn('min-w-64', className)}>
      <Label htmlFor={name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <div className="lg:relative">
        <ThemedReactSelect<true>
          id={id ? `${id}` : undefined}
          name={name}
          hasErrors={hasErrors}
          hasValidationStyling={hasValidationStyling}
          isMulti
          isSearchable={isSearchable}
          isTouched={isTouched}
          onBlur={onBlur}
          onChange={(selectedArray) => {
            onChange((selectedArray ?? []) as OptionType[]);
          }}
          options={options}
          value={fieldValue}
          isDisabled={disabled}
        />
      </div>
    </div>
  );
}
