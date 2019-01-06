import React, { Component } from 'react';
import { zipCodeValidator } from 'common/utils/validator-utils';
import FormInput from '../FormInput/FormInput';

class FormZipCode extends Component {
  render() {
    return (
      <FormInput
        {...this.props}
        validateFunc={zipCodeValidator}
        validationErrorMessage="Must enter a valid zip code"
        ref={child => {
          this.inputRef = child;
        }}
<<<<<<< HEAD
=======
        id="zip-code"
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      />
    );
  }
}

export default FormZipCode;
