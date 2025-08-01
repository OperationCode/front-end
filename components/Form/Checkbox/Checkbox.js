import { shape, string, node, number, object, objectOf, oneOfType } from 'prop-types';
import { ErrorMessage } from 'formik';
import { CHECKBOX, CHECKBOX_ERROR } from 'common/constants/testIDs';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';
import styles from './Checkbox.module.css';

Checkbox.propTypes = {
  field: shape({
    name: string.isRequired,
  }).isRequired,
  form: shape({
    // TODO: Resolve why multiselects can end up with touched: { key: array }
    // see ThemedReactSelect as well
    // touched: objectOf(bool).isRequired,
    touched: object.isRequired,
    errors: objectOf(string),
  }).isRequired,
  id: oneOfType([string, number]),
  label: oneOfType([node, string]).isRequired,
};

Checkbox.defaultProps = {
  id: '',
};

function Checkbox({ field: { name, value, ...field }, form: { errors }, id, label }) {
  const hasErrors = Boolean(errors[name]);

  return (
    <div className={styles.field} data-testid={CHECKBOX}>
      <Label for={name} isHidden={false}>
        <input
          {...field}
          className={styles.Checkbox}
          id={id || name}
          name={name}
          type="checkbox"
          value={value || ''}
        />

        {label}
      </Label>

      <ErrorMessage name={name}>
        {message => {
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
