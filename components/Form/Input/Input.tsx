import type { FieldInputProps, FormikHelpers, FormikState } from 'formik';
import { ErrorMessage } from 'formik';
import { INPUT, INPUT_ERROR, INPUT_FEEDBACK_GROUPING } from 'common/constants/testIDs';
import type { InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import Label from 'components/Form/Label/Label';
import Alert from 'components/Alert/Alert';
import styles from './Input.module.css';

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes_common_to_all_input_types */
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'form'> {
  field: FieldInputProps<string>;
  form: FormikState<Record<string, string>> & FormikHelpers<Record<string, string>>;
  hasValidationStyling?: boolean;
  isDisabled?: boolean;
  isLabelHidden?: boolean;
  label: string;
}

function Input({
  className,
  isDisabled = false,
  field: { name, value, ...field },
  form: { touched, errors },
  hasValidationStyling = true,
  id,
  isLabelHidden = false,
  label,
  type = 'text',
  ...props
}: InputProps) {
  const hasErrors = Boolean(errors[name]);
  const isLabelAfterInput = type === 'radio';
  const isLabelBeforeInput = !isLabelAfterInput;

  return (
    <div className={classNames(className, styles.field)} data-testid={INPUT}>
      {isLabelBeforeInput && (
        <Label for={name} isHidden={isLabelHidden}>
          {label}
        </Label>
      )}

      <div className={styles.inputFeedbackGrouping} data-testid={INPUT_FEEDBACK_GROUPING}>
        <input
          {...field}
          {...props}
          className={classNames(styles.Input, hasValidationStyling, {
            [styles.valid]: touched[name] && !hasErrors && hasValidationStyling,
            [styles.invalid]: touched[name] && hasErrors && hasValidationStyling,
          })}
          disabled={isDisabled}
          id={id || name}
          name={name}
          type={type}
          value={value || ''}
        />

        <ErrorMessage name={name}>
          {(message: string) => {
            return hasErrors ? (
              <Alert className={styles.errorMessage} data-testid={INPUT_ERROR} type="error">
                {message}
              </Alert>
            ) : null;
          }}
        </ErrorMessage>
      </div>

      {isLabelAfterInput && (
        <Label for={name} isHidden={isLabelHidden} className={styles.labelAfterInput}>
          {label}
        </Label>
      )}
    </div>
  );
}

export default Input;
