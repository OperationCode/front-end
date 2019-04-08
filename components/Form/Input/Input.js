import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ErrorMessage } from 'formik';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';
import styles from './Input.css';

Input.propTypes = {
  className: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.objectOf(PropTypes.bool),
    errors: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  shouldHideError: PropTypes.bool,
  shouldHideLabel: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
};

Input.defaultProps = {
  className: undefined,
  shouldHideError: false,
  shouldHideLabel: false,
  id: '',
  type: 'text',
};

function Input({
  className,
  field: { name, ...field },
  form: { touched, errors },
  label,
  shouldHideError,
  shouldHideLabel,
  id,
  type,
  ...props // input simply has too many possible attributes... we'd be redocumenting the web
  // See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes_common_to_all_input_types
}) {
  const hasErrors = Boolean(errors[name]);
  const isLabelAfterInput = type === 'radio' || type === 'checkbox';
  const isLabelBeforeInput = !isLabelAfterInput;

  return (
    <div className={classNames(styles.field, className)}>
      {isLabelBeforeInput && (
        <Label for={name} isHidden={shouldHideLabel}>
          {label}
        </Label>
      )}

      <div className={styles.inputFeedBackGrouping}>
        <input
          {...field}
          {...props}
          className={classNames(styles.input, {
            [styles.inputWithError]: shouldHideError,
            [styles.valid]: touched[name] && !hasErrors,
            [styles.invalid]: touched[name] && hasErrors,
          })}
          id={id || name}
          name={name}
          type={type}
        />

        {!shouldHideError && (
          <ErrorMessage name={name} render={msg => <Alert isOpen={hasErrors}>{msg}</Alert>} />
        )}
      </div>

      {isLabelAfterInput && (
        <Label for={name} isHidden={shouldHideLabel} className={styles.labelAfterInput}>
          {label}
        </Label>
      )}
    </div>
  );
}

export default Input;
