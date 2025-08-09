import type { FieldInputProps, FormikHelpers, FormikState } from 'formik';
import { ErrorMessage } from 'formik';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';
import { cx } from 'common/utils/cva';
import type { OptionType, ThemedReactSelectProps } from './ThemedReactSelect';
import { ThemedReactSelect } from './ThemedReactSelect';

export interface SelectMultiProps
  extends Pick<ThemedReactSelectProps<true>, 'id' | 'hasValidationStyling' | 'isSearchable'> {
  className?: string;
  field: FieldInputProps<{ label: string; value: string }[]>;
  form: FormikState<Record<string, string[]>> & FormikHelpers<Record<string, string[]>>;
  isLabelHidden?: boolean;
  label: string;
  options: OptionType[];
  disabled?: boolean;
}

export function SelectMulti({
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
}: SelectMultiProps) {
  const hasErrors = Boolean(errors[name]);

  return (
    <div className={cx('m-4 min-w-64', className)}>
      <Label htmlFor={name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <div className="lg:relative">
        <ThemedReactSelect<true>
          {...props}
          id={id ? `${id}` : undefined}
          name={name}
          hasErrors={hasErrors}
          hasValidationStyling={hasValidationStyling}
          isMulti
          isSearchable={isSearchable}
          isTouched={Boolean(touched[name])}
          onBlur={() => setFieldTouched(name)}
          onChange={async selectedArray => {
            await setFieldValue(name, selectedArray ?? []);
            await setFieldTouched(name, true);
          }}
          options={options}
          value={fieldValue}
          isDisabled={disabled}
        />

        <ErrorMessage name={name}>
          {(message: string) => {
            return hasErrors ? (
              <Alert
                className={cx(
                  'max-w-full -mx-0.5',
                  'lg:mt-0 lg:ml-4 lg:absolute lg:top-0 lg:left-full',
                  'lg:min-w-36 lg:max-w-72 Lg:w-max py-0 px-2.5',
                  'lg:h-full lg:flex lg:items-center lg:justify-center',
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
