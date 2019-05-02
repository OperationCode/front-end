import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { login } from 'common/utils/auth-utils';
import MultiStepForm from 'components/Form/MultiStepForm';
import { steps, entireFormInitialValues } from './Steps';

class NewRegistrationForm extends Component {
  static propTypes = {
    initialValues: PropTypes.objectOf(PropTypes.string),
  };

  static defaultProps = {
    initialValues: {
      ...entireFormInitialValues,
    },
  };

  handleSuccess = ({ token, user }) => {
    login({ token, user });
  };

  render() {
    const { initialValues } = this.props;

    return (
      <MultiStepForm
        initialValues={initialValues}
        onFinalstepsuccess={this.handleSuccess}
        steps={steps}
      />
    );
  }
}

export default NewRegistrationForm;
