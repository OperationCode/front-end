import { useState } from 'react';
import get from 'lodash/get';
import Router from 'next/router';
import { getServerErrorMessage } from 'common/utils/api-utils';
import { array, objectOf, oneOfType, string, number, bool } from 'prop-types';
import { insertIf } from '@innocuous/functions';
import { MultiStepForm } from 'components/Form/MultiStepForm';
import { ProfessionalDetails, MilitaryStatus, MilitaryDetails, Technology } from './steps';

UpdateProfileForm.propTypes = {
  // Not required to allow for diff props in testing
  initialValues: objectOf(oneOfType([array, string, number, bool])),
};

UpdateProfileForm.defaultProps = {
  initialValues: {
    ...ProfessionalDetails.initialValues,
    ...MilitaryStatus.initialValues,
    ...MilitaryDetails.initialValues,
    ...Technology.initialValues,
  },
};

function UpdateProfileForm({ initialValues }) {
  const [shouldShowMilitaryStep, handleShouldShowMilitaryStep] = useState(false);

  // TODO: Abstract method to utility and use for all error-handling purposes
  const generateError = errorObject => {
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

    return getServerErrorMessage(errorObject);
  };

  const onValueChange = values => {
    if (values.militaryStatus === '') {
      return;
    }

    const isMilitary = values.militaryStatus === 'veteran' || values.militaryStatus === 'current';

    if (isMilitary) {
      handleShouldShowMilitaryStep(true);
    } else {
      // setValues remove military values OR on submit, don't pass military values
      handleShouldShowMilitaryStep(false);
    }
  };

  const goToProfile = () => {
    Router.push('/join/success');
  };

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
      getErrorMessage={generateError}
      onEachStepSubmit={onValueChange}
      onFinalSubmit={goToProfile}
      steps={steps}
    />
  );
}

export default UpdateProfileForm;
