import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { login } from 'common/utils/auth-utils';
import MultiStepForm from 'components/Form/MultiStepForm';
import { Steps, StepsInitialValues } from './Steps';

class NewRegistrationForm extends Component {
  static propTypes = {
    initialValues: PropTypes.objectOf(PropTypes.string),
  };

  static defaultProps = {
    initialValues: {
      ...StepsInitialValues,
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
        onFinalStepSuccess={this.handleSuccess}
        steps={Steps}
      />
    );
  }
}

export default NewRegistrationForm;
