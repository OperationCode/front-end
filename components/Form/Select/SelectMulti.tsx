import type { FieldInputProps, FormikHelpers, FormikState } from 'formik';
import { ErrorMessage } from 'formik';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';
import { cx } from 'common/utils/cva';
import type { OptionType, ThemedReactSelectProps } from './ThemedReactSelect';
import { ThemedReactSelect } from './ThemedReactSelect';
import styles from './Select.module.css';

export interface SelectMultiProps
  extends Pick<ThemedReactSelectProps<true>, 'id' | 'hasValidationStyling' | 'isSearchable'> {
  className?: string;
  field: FieldInputProps<{ label: string; value: string }[]>;
  form: FormikState<Record<string, string[]>> & FormikHelpers<Record<string, string[]>>;
  isLabelHidden?: boolean;
  label: string;
  options: OptionType[];
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
  ...props // disabled, placeholder, etc.
}: SelectMultiProps) {
  const hasErrors = Boolean(errors[name]);

  return (
    <div className={cx(className, styles.field)}>
      <Label for={name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <div className={styles.selectFeedbackGrouping}>
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
