import type { FieldInputProps, FormikHelpers, FormikState } from 'formik';
import { ErrorMessage } from 'formik';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';
import { cx } from 'common/utils/cva';
import type { ThemedReactSelectProps, OptionType } from './ThemedReactSelect';
import { ThemedReactSelect } from './ThemedReactSelect';
import styles from './Select.module.css';

export interface SelectSingleProps
  extends Pick<ThemedReactSelectProps<false>, 'id' | 'hasValidationStyling' | 'isSearchable'> {
  className?: string;
  field: FieldInputProps<string>;
  form: FormikState<Record<string, string>> & FormikHelpers<Record<string, string>>;
  isLabelHidden?: boolean;
  label: string;
  options: OptionType[];
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
  ...props // disabled, placeholder, etc.
}: SelectSingleProps) {
  const value = options.find(option => option.value === fieldValue);
  const hasErrors = Boolean(errors[name]);

  return (
    <div className={cx(className, styles.field)}>
      <Label for={name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <div className={styles.selectFeedbackGrouping}>
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
        />

        <ErrorMessage name={name}>
          {(message: string) => {
            return hasErrors ? (
              <Alert className={styles.errorMessage} type="error">
                {message}
              </Alert>
            ) : null;
          }}
        </ErrorMessage>
      </div>
    </div>
  );
}
