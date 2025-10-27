import type { FieldInputProps, FormikHelpers, FormikState } from 'formik';
import { ErrorMessage } from 'formik';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';
import { cx } from 'common/utils/cva';
import type { ThemedReactSelectProps, OptionType } from './ThemedReactSelect';
import { ThemedReactSelect } from './ThemedReactSelect';

export interface SelectSingleProps
  extends Pick<ThemedReactSelectProps<false>, 'id' | 'hasValidationStyling' | 'isSearchable'> {
  className?: string;
  field: FieldInputProps<string>;
  form: FormikState<Record<string, string>> & FormikHelpers<Record<string, string>>;
  isLabelHidden?: boolean;
  label: string;
  options: OptionType[];
  disabled?: boolean;
}

export function SelectSingle({
  className,
  field: { name, value: fieldValue },
  form: { errors, setFieldTouched, setFieldValue, touched },
  hasValidationStyling = true,
  id,
  isLabelHidden = false,
  isSearchable = true,
  label,
  options,
  disabled,
  ...props // disabled, placeholder, etc.
}: SelectSingleProps) {
  const value = options.find(option => option.value === fieldValue);
  const hasErrors = Boolean(errors[name]);

  return (
    <div className={cx('min-w-64', className)}>
      <Label htmlFor={name} isHidden={isLabelHidden}>
        {label}
      </Label>
      <div className="lg:relative">
        <ThemedReactSelect<false>
          {...props}
          id={id ? `${id}` : undefined}
          name={name}
          hasErrors={hasErrors}
          hasValidationStyling={hasValidationStyling}
          isTouched={Boolean(touched[name])}
          onBlur={() => setFieldTouched(name)}
          isSearchable={isSearchable}
          isMulti={false}
          onChange={async option => {
            await setFieldValue(name, option?.value ?? '');
            await setFieldTouched(name, true);
          }}
          options={options}
          value={value}
          isDisabled={disabled}
        />

        <ErrorMessage name={name}>
          {(message: string) => {
            return hasErrors ? (
              <Alert
                className={cx(
                  'max-w-full -mx-0.5 mt-2 flex-1',
                  'lg:mt-0 lg:ml-4 lg:absolute lg:top-0 lg:left-full',
                  'lg:min-w-36 lg:max-w-72 lg:w-max',
                  'lg:py-0 lg:px-2.5 lg:h-full lg:flex lg:items-center lg:justify-center',
                )}
                type="error"
              >
                {message}
              </Alert>
            ) : null;
          }}
        </ErrorMessage>
      </div>
    </div>
  );
}
