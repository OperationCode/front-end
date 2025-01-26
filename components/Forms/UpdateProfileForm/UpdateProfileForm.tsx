import { useState } from 'react';
import { useRouter } from 'next/router';
import type { AxiosError } from 'axios';
import axios from 'axios';
import { getServerErrorMessage } from 'common/utils/api-utils';
import { MultiStepForm } from 'components/Form/MultiStepForm';
import LogRocket from 'logrocket';
import { updateUser } from 'common/constants/api';
import { ProfessionalDetails } from 'components/Forms/UpdateProfileForm/steps/ProfessionalDetails';
import { MilitaryStatus } from 'components/Forms/UpdateProfileForm/steps/MilitaryStatus';
import { MilitaryDetails } from 'components/Forms/UpdateProfileForm/steps/MilitaryDetails';
import { PersonalDetails } from 'components/Forms/UpdateProfileForm/steps/PersonalDetails';

const onboardingFormInitialValues = {
  ...ProfessionalDetails.initialValues,
  ...MilitaryStatus.initialValues,
  ...MilitaryDetails.initialValues,
  ...PersonalDetails.initialValues,
};

export type UpdateProfileFormShape = typeof onboardingFormInitialValues;

export interface UpdateProfileFormProps {
  initialValues?: UpdateProfileFormShape;
}

function UpdateProfileForm({
  initialValues = onboardingFormInitialValues,
}: UpdateProfileFormProps) {
  const { push } = useRouter();
  const [shouldShowMilitaryStep, setShouldShowMilitaryStep] = useState(false);

  const generateError = (errorObject: AxiosError) => {
    const serverResponse = (errorObject?.response?.data ?? {}) as Record<string, string>;
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

  const onValueChange = async (values: UpdateProfileFormShape) => {
    const hasMilitaryExperience = [
      'Active Duty U.S. Military Service Member',
      'U.S. Reserve or National Guard member',
      'U.S. Veteran',
    ].includes(values.militaryAffiliation);

    if (hasMilitaryExperience) {
      setShouldShowMilitaryStep(true);
    } else {
      // setValues remove military values OR on submit, don't pass military values
      setShouldShowMilitaryStep(false);
    }

    await updateUser(values);
  };

  const goToProfile = async (values: UpdateProfileFormShape) => {
    try {
      await axios.patch('/api/registration/update', values);
      push('/join/success');
    } catch (error) {
      LogRocket.captureException(error as Error);
    }
  };

  // ordered
  const steps = shouldShowMilitaryStep
    ? [ProfessionalDetails, MilitaryStatus, MilitaryDetails, PersonalDetails]
    : [ProfessionalDetails, MilitaryStatus, PersonalDetails];

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
