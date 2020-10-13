import React from 'react';
import { shape, string, number, object, objectOf, oneOfType, bool, oneOf } from 'prop-types';
import classNames from 'classnames';
import { ErrorMessage } from 'formik';
import { CHECKBOX, INPUT_ERROR, INPUT_FEEDBACK_GROUPING } from 'common/constants/testIDs';
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
  isLabelHidden: bool,
  id: oneOfType([string, number]),
  label: string.isRequired,
  hasValidationStyling: bool,
  type: 'checkbox',
};

Checkbox.defaultProps = {
  hasValidationStyling: true,
  isLabelHidden: false,
  id: '',
  type: 'text',
};

function Checkbox({
  field: { name, value, ...field },
  form: { touched, errors },
  hasValidationStyling,
  id,
  isLabelHidden,
  label,
  type,
  ...props // input simply has too many possible attributes... we'd be redocumenting the web
  // See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes_common_to_all_input_types
}) {
  const hasErrors = Boolean(errors[name]);
  const isLabelAfterInput = type === 'radio' || type === 'checkbox';
  const isLabelBeforeInput = !isLabelAfterInput;

  return (
    <div data-testid={CHECKBOX}>
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
          {message => {
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

export default Checkbox;