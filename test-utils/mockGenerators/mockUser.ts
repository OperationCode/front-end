import faker from 'faker';
import type { RegistrationFormValues } from 'components/Forms/RegistrationForm/RegistrationForm';

export function mockUser(desiredEmail?: string): RegistrationFormValues {
  const firstName = faker.name.firstName() as string;
  const lastName = faker.name.lastName() as string;
  const email =
    desiredEmail || (faker.internet.email(firstName, lastName, 'operationcode.org') as string);
  const zipcode = `${faker.address.zipCode()}`; // force to be string

  const user = {
    email,
    'confirm-email': email,
    firstName,
    lastName,
    zipcode,
    codeOfConduct: true,
    slackGuidelines: true,
  };

  return user as RegistrationFormValues;
}
