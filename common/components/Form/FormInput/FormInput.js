import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from 'common/components/label/label';
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

  handleChange = (event) => {
    const isValid = this.validate(event.target.value);
    this.setState(
      {
        text: event.target.value,
        isValid,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state.text, this.state.isValid);
        }
      },
    );
  };

  revalidate() {
    const valid = this.validate(this.state.text);
    this.setState({
      isValid: valid,
    });
  }

  validate = (text) => {
    if (this.props.validateFunc) {
      return this.props.validateFunc(text);
    } else if (text.length > 0 && this.props.validationRegex) {
      return this.props.validationRegex.test(text);
    } else if (text.length > 0) {
      return true;
    }

    return false;
  };

  render() {
    return (
      <div className={styles.formInput}>
        {this.props.label && <Label htmlFor={this.props.id}>{this.props.label}</Label>}

        <input
          className={!this.state.isValid ? styles.error : undefined}
          id={this.props.id}
          type={this.props.inputType}
          value={this.state.text}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        {!this.state.isValid && <span>{this.props.validationErrorMessage}</span>}
      </div>
    );
  }
}

export default FormInput;
