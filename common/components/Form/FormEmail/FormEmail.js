import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';

class FormEmail extends Component {
  render() {
    const validEmailRegex = /(^[^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/;

    return (
      <FormInput
        {...this.props}
        validationRegex={validEmailRegex}
        validationErrorMessage="Must be a valid email"
        ref={(child) => { this.inputRef = child; }}
      />
    );
  }
}

export default FormEmail;
