import classNames from 'classnames';
import { ErrorMessage } from 'formik';
import { CHECKBOX, CHECKBOX_ERROR } from 'common/constants/testIDs';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';
import styles from './Checkbox.module.css';

export type CheckboxPropsType = {
  /**
   * Applies a label that to the form input.
   */
  label: React.ReactNode | string;
  /**
   * Sets the name and value for the input element.
   */
  field: {
    name: string;
    value?: string;
  };
  form: {
    touched: Record<string, any>;
    errors?: Record<string, string>;
  };
  /**
   * Passes an idea to the root input element.
   */
  id?: string;
};

function Checkbox({
  field: { name, value, ...field },
  form: { errors },
  id,
  label,
}: CheckboxPropsType) {
  const hasErrors = Boolean(errors?.[name]);

  return (
    <div className={styles.field} data-testid={CHECKBOX}>
      <Label for={name} isHidden={false}>
        <input
          {...field}
          className={classNames(styles.Checkbox)}
          id={id || name}
          name={name}
          type="checkbox"
          value={value || ''}
        />

        {label}
      </Label>

      <ErrorMessage name={name}>
        {(message: string) => {
          return hasErrors ? (
            <Alert className={styles.errorMessage} data-testid={CHECKBOX_ERROR} type="error">
              {message}
            </Alert>
          ) : null;
        }}
      </ErrorMessage>
    </div>
  );
}

export default Checkbox;
