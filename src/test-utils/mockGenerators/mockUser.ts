import { faker } from '@faker-js/faker';
import type { RegistrationFormValues } from '@/components/Forms/RegistrationForm/RegistrationForm';

export function mockUser(desiredEmail?: string): RegistrationFormValues {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email =
    desiredEmail || faker.internet.email({ firstName, lastName, provider: 'operationcode.org' });
  const zipcode = `${faker.location.zipCode()}`;

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
