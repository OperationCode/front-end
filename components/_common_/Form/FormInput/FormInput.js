import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FormInput.css';

class FormInput extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    validateFunc: PropTypes.func,
    validationErrorMessage: PropTypes.string,
    validationRegex: PropTypes.string,
  };

  static defaultProps = {
    inputType: 'text',
    label: null,
    onChange: null,
    placeholder: null,
    validateFunc: null,
    validationErrorMessage: null,
    validationRegex: null,
  };

  state = {
    isValid: true,
    text: '',
  };

  handleChange = event => {
    const { props } = this;

    const isValid = this.validate(event.target.value);
    this.setState(
      {
        text: event.target.value,
        isValid,
      },
      () => {
        if (props.onChange) {
          const { text, isValid: isValidAfterChange } = this.state;
          props.onChange(text, isValidAfterChange);
        }
      },
    );
  };

  validate = text => {
    const { props } = this;

    if (props.validateFunc) {
      return props.validateFunc(text);
    }
    if (text.length > 0 && props.validationRegex) {
      return props.validationRegex.test(text);
    }
    if (text.length > 0) {
      return true;
    }

    return false;
  };

  render() {
    const { props, state } = this;

    return (
      <div className={styles.formInput}>
        {props.label && <label htmlFor={props.id}>{props.label}</label>}

        <input
          className={!state.isValid ? styles.error : undefined}
          id={props.id}
          type={props.inputType}
          value={state.text}
          placeholder={props.placeholder}
          onChange={this.handleChange}
        />
        {!state.isValid && <span>{props.validationErrorMessage}</span>}
      </div>
    );
  }
}

export default FormInput;
