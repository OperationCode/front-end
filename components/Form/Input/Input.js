import React from 'react';
import { shape, string, number, objectOf, oneOfType, bool, oneOf } from 'prop-types';
import classNames from 'classnames';
import { ErrorMessage } from 'formik';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';
import styles from './Input.css';

Input.propTypes = {
  field: shape({
    name: string.isRequired,
  }).isRequired,
  form: shape({
    touched: objectOf(bool),
    errors: objectOf(string),
  }).isRequired,
  isLabelHidden: bool,
  id: oneOfType([string, number]),
  label: string.isRequired,
  type: oneOf([
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
  isLabelHidden: false,
  id: '',
  type: 'text',
};

function Input({
  field: { name, ...field },
  form: { touched, errors },
  label,
  isLabelHidden,
  id,
  type,
  ...props // input simply has too many possible attributes... we'd be redocumenting the web
  // See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes_common_to_all_input_types
}) {
  const hasErrors = Boolean(errors[name]);
  const isLabelAfterInput = type === 'radio' || type === 'checkbox';
  const isLabelBeforeInput = !isLabelAfterInput;

  return (
    <div className={styles.field}>
      {isLabelBeforeInput && (
        <Label for={name} isHidden={isLabelHidden}>
          {label}
        </Label>
      )}

      <div className={styles.inputFeedbackGrouping}>
        <input
          {...field}
          {...props}
          className={classNames(styles.Input, {
            [styles.valid]: touched[name] && !hasErrors,
            [styles.invalid]: touched[name] && hasErrors,
          })}
          id={id || name}
          name={name}
          type={type}
        />

        <ErrorMessage
          name={name}
          render={message => (
            <Alert isOpen={hasErrors} className={styles.errorMessage}>
              {message}
            </Alert>
          )}
        />
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
