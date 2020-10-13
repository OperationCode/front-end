import React from 'react';
import { shape, string, number, object, objectOf, oneOfType, bool } from 'prop-types';
import classNames from 'classnames';
import { ErrorMessage } from 'formik';
import { CHECKBOX, CHECKBOX_ERROR, CHECKBOX_GROUPING } from 'common/constants/testIDs';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';
import styles from './Checkbox.module.css';

Checkbox.propTypes = {
  field: shape({
    name: string.isRequired,
  }).isRequired,
  form: shape({
    touched: object.isRequired,
    errors: objectOf(string),
  }).isRequired,
  isLabelHidden: bool,
  id: oneOfType([string, number]),
  label: string.isRequired,
  hasValidationStyling: bool,
};

Checkbox.defaultProps = {
  hasValidationStyling: true,
  isLabelHidden: false,
  id: '',
};

function Checkbox({
  field: { name, value, ...field },
  form: { touched, errors },
  hasValidationStyling,
  id,
  isLabelHidden,
  label,
  ...props // input simply has too many possible attributes... we'd be redocumenting the web
  // See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes_common_to_all_input_types
}) {
  const hasErrors = Boolean(errors[name]);

  return (
    <div data-testid={CHECKBOX}>
      <div className={styles.checkboxGrouping} data-testid={CHECKBOX_GROUPING}>
        <div>
          <input
            {...field}
            {...props}
            className={classNames(styles.checkboxGrouping, hasValidationStyling, {
              [styles.goodCheck]: touched[name] && !hasErrors && hasValidationStyling,
              [styles.badCheck]: touched[name] && hasErrors && hasValidationStyling,
            })}
            id={id || name}
            name={name}
            type="checkbox"
            value={value || ''}
          />
        </div>

        <div className={styles.floatRight}>
          <Label for={name} isHidden={isLabelHidden} className={styles.labelAfterCheckbox}>
            {label}
          </Label>
        </div>

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
    </div>
  );
}

export default Checkbox;
