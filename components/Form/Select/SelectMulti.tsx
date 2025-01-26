import { ErrorMessage, FieldInputProps, FormikHelpers, FormikState } from 'formik';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';
import classNames from 'classnames';
import { ThemedReactSelect, OptionType, ThemedReactSelectProps } from './ThemedReactSelect';
import styles from './Select.module.css';

export interface SelectMultiProps
  extends Pick<ThemedReactSelectProps<true>, 'id' | 'hasValidationStyling' | 'isSearchable'> {
  className?: string;
  field: FieldInputProps<string[]>;
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
  const value = options.filter(option => fieldValue.includes(option.value));
  const hasErrors = Boolean(errors[name]);

  const sharedProps = {
    ...props,
    id: id ? `${id}` : name,
    hasErrors,
    hasValidationStyling,
    isTouched: Boolean(touched[name]),
    isSearchable,
    name,
    onBlur: () => setFieldTouched(name),
    options,
    value,
  };

  return (
    <div className={classNames(className, styles.field)}>
      <Label for={name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <div className={styles.selectFeedbackGrouping}>
        <ThemedReactSelect<true>
          {...sharedProps}
          isMulti={true} // eslint-disable-line react/jsx-boolean-value
          onChange={selectedArray => {
            if (selectedArray) {
              setFieldValue(
                name,
                selectedArray.map(item => item.value),
              );
            } else {
              setFieldValue(name, []);
            }
          }}
          options={options}
          value={value ?? []}
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
