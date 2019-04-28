import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ErrorMessage } from 'formik';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';
import styles from './Input.css';

Input.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.objectOf(PropTypes.bool),
    errors: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  isLabelHidden: PropTypes.bool,
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

      <div className={styles.inputFeedBackGrouping}>
        <input
          {...field}
          {...props}
          className={classNames(styles.input, {
            [styles.valid]: touched[name] && !hasErrors,
            [styles.invalid]: touched[name] && hasErrors,
          })}
          id={id || name}
          name={name}
          type={type}
        />

        <ErrorMessage name={name} render={message => <Alert isOpen={hasErrors}>{message}</Alert>} />
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
