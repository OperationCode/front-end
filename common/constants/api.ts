import { patch, post } from 'common/utils/api-utils';
import type { RegistrationFormValues } from 'components/Forms/RegistrationForm/RegistrationForm';
import type { MilitaryDetailsFormShape } from 'components/Forms/UpdateProfileForm/steps/MilitaryDetails';
import type { MilitaryStatusFormShape } from 'components/Forms/UpdateProfileForm/steps/MilitaryStatus';
import type { PersonalDetailsFormShape } from 'components/Forms/UpdateProfileForm/steps/PersonalDetails';
import type { ProfessionalDetailsFormShape } from 'components/Forms/UpdateProfileForm/steps/ProfessionalDetails';

export const registerUser = (values: RegistrationFormValues) =>
  post('/api/registration/new', values);

type FormShape =
  | PersonalDetailsFormShape
  | ProfessionalDetailsFormShape
  | MilitaryStatusFormShape
  | MilitaryDetailsFormShape;

export const updateUser = (values: FormShape & { finalize?: boolean }) =>
  patch('/api/registration/update', values);
