import classNames from 'classnames';
import { ErrorMessage, FieldProps } from 'formik';
import { INPUT, INPUT_ERROR, INPUT_FEEDBACK_GROUPING } from 'common/constants/testIDs';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';
import styles from './Input.module.css';

export type InputType =
  | 'button'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export type InputPropsType = {
  /**
   * Applies a label that to the form input.
   */
  label: string;
  /**
   * Sets the name and value for the input element.
   */
  /**
   * Passes the input type to the base input element.
   * @default 'text'
   */
  type?: InputType;
  /**
   * Applies classnames to the base `input` element for styling.
   */
  className?: string;
  /**
   * Sets if the label is hidden or not.
   * @default false
   */
  isLabelHidden?: boolean;
  /**
   * Passes an idea to the root input element.
   */
  id?: string;
  /**
   * Allows validation styling if validation is being used.
   * @default true
   */
  hasValidationStyling?: boolean;
} & FieldProps;

function Input({
  className,
  field: { name, value, ...field },
  form: { touched, errors },
  hasValidationStyling = true,
  id,
  isLabelHidden = false,
  label,
  type = 'text',
  ...props // input simply has too many possible attributes... we'd be redocumenting the web
}: // See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes_common_to_all_input_types
InputPropsType) {
  const hasErrors = Boolean(errors?.[name]);
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
