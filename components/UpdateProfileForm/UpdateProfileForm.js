import React, { Component } from 'react';
import get from 'lodash/get';
import Router from 'next/router';
import { getServerErrorMessage } from 'common/utils/api-utils';
import { array, objectOf, oneOfType, string, number, bool } from 'prop-types';
import { insertIf } from '@innocuous/functions';
import MultiStepForm from 'components/Form/MultiStepForm';
import { ProfessionalDetails, MilitaryStatus, MilitaryDetails, Technology } from './steps';

class UpdateProfileForm extends Component {
  static propTypes = {
    initialValues: objectOf(oneOfType([array, string, number, bool])),
  };

  static defaultProps = {
    initialValues: {
      ...ProfessionalDetails.initialValues,
      ...MilitaryStatus.initialValues,
      ...MilitaryDetails.initialValues,
      ...Technology.initialValues,
    },
  };

  state = {
    shouldShowMilitaryStep: false,
  };

  // TODO: Abstract method to utility and use for all error-handling purposes
  generateError = errorObject => {
    const serverResponse = get(errorObject, 'response.data', {});
    const responseDataValues = Object.values(serverResponse);
    const isHandledServerError = responseDataValues.length > 0;

    if (isHandledServerError) {
      const hasMultiError = responseDataValues.some(
        value => Array.isArray(value) && value.length > 0,
      );

      if (hasMultiError) {
        const errorMessage = responseDataValues
          .map(messages => {
            // Only return the first item of a potential array of errors.
            // Rather than make this code more complex, just let the user resolve them per submit.
            return messages[0];
          })
          .join('\n'); // could span many fields as well, so have a new line per field with error

        return errorMessage;
      }
    }

    console.log('errorObject', JSON.stringify(errorObject, null, 2));

    return getServerErrorMessage(errorObject);
  };

  onValueChange = values => {
    if (values.militaryStatus === '') {
      return;
    }

    const isMilitary = values.militaryStatus === 'veteran' || values.militaryStatus === 'current';

    if (isMilitary) {
      this.showMilitaryStep();
    } else {
      // setValues remove military values OR on submit, don't pass military values
      this.hideMilitaryStep();
    }
  };

  showMilitaryStep = () => {
    this.setState({ shouldShowMilitaryStep: true });
  };

  hideMilitaryStep = () => {
    this.setState({ shouldShowMilitaryStep: false });
  };

  goToProfile = () => {
    Router.push('/profile');
  };

  render() {
    const { initialValues } = this.props;
    const { shouldShowMilitaryStep } = this.state;

    // ordered
    const steps = [
      ProfessionalDetails,
      MilitaryStatus,
      ...insertIf(shouldShowMilitaryStep, MilitaryDetails),
      Technology,
    ];

    return (
      <MultiStepForm
        initialValues={initialValues}
        getErrorMessage={this.generateError}
        onEachStepSubmit={this.onValueChange}
        onFinalSubmit={this.goToProfile}
        steps={steps}
      />
    );
  }
}

export default UpdateProfileForm;
