'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { AxiosError } from 'axios';
import LogRocket from 'logrocket';
import { getServerErrorMessage } from '@/lib/utils/api-utils';
import { MultiStepForm } from '@/components/Form/MultiStepForm';
import { updateUser } from '@/lib/constants/api';
import { ProfessionalDetails } from '@/components/Forms/UpdateProfileForm/steps/ProfessionalDetails';
import { MilitaryStatus } from '@/components/Forms/UpdateProfileForm/steps/MilitaryStatus';
import { MilitaryDetails } from '@/components/Forms/UpdateProfileForm/steps/MilitaryDetails';
import { PersonalDetails } from '@/components/Forms/UpdateProfileForm/steps/PersonalDetails';

const generateError = (errorObject: AxiosError) => {
  const serverResponse = (errorObject?.response?.data ?? {}) as Record<string, string>;
  const responseDataValues = Object.values(serverResponse);
  const isHandledServerError = responseDataValues.length > 0;

  if (isHandledServerError) {
    const hasMultiError = responseDataValues.some(
      (value) => Array.isArray(value) && value.length > 0,
    );

    if (hasMultiError) {
      const errorMessage = responseDataValues
        .map((messages) => {
          return messages[0];
        })
        .join('\n');

      return errorMessage;
    }
  }

  return getServerErrorMessage(errorObject);
};

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

  const onStepSubmit = async (
    values: UpdateProfileFormShape,
    helpers: { setFieldTouched: (name: string, touched: boolean) => void },
  ) => {
    const hasMilitaryExperience = [
      'Active Duty U.S. Military Service Member',
      'U.S. Reserve or National Guard member',
      'U.S. Veteran',
    ].includes(values.militaryAffiliation);

    setShouldShowMilitaryStep(hasMilitaryExperience);

    if (hasMilitaryExperience) {
      const relevantKeys = Object.keys(
        MilitaryDetails.initialValues,
      ) as (keyof typeof MilitaryDetails.initialValues)[];

      const isMilitaryDetailsStepEmpty = relevantKeys.every((key) => values[key].length === 0);

      if (isMilitaryDetailsStepEmpty) {
        relevantKeys.forEach((key) => helpers.setFieldTouched(key, false));
      }
    }

    try {
      await updateUser(values);
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401 || axiosError.response?.status === 404) {
        push('/join?registrationError=true');
        throw error;
      }
      throw error;
    }
  };

  const goToProfile = async (values: UpdateProfileFormShape) => {
    try {
      await updateUser({ ...values, finalize: true });
      push('/join/success');
    } catch (error) {
      LogRocket.captureException(error as Error);
    }
  };

  const steps = shouldShowMilitaryStep
    ? [ProfessionalDetails, MilitaryStatus, MilitaryDetails, PersonalDetails]
    : [ProfessionalDetails, MilitaryStatus, PersonalDetails];

  return (
    <MultiStepForm<UpdateProfileFormShape>
      initialValues={initialValues}
      getErrorMessage={generateError}
      onEachStepSubmit={onStepSubmit}
      onFinalSubmit={goToProfile}
      steps={steps}
    />
  );
}

export default UpdateProfileForm;
