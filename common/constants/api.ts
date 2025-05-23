import { patch, post } from 'common/utils/api-utils';
import type { RegistrationFormValues } from 'components/Forms/RegistrationForm/RegistrationForm';
import type { MilitaryStatusFormShape } from 'components/Forms/UpdateProfileForm/steps/MilitaryStatus';
import type { ProfessionalDetailsFormShape } from 'components/Forms/UpdateProfileForm/steps/ProfessionalDetails';

export const registerUser = (values: RegistrationFormValues) =>
  post('/api/registration/new', values);

export const updateUser = (values: ProfessionalDetailsFormShape | MilitaryStatusFormShape) =>
  patch('/api/registration/update', values);
