import faker from 'faker';
import { RegistrationFormValues } from 'components/Forms/RegistrationForm/RegistrationForm';

export function mockUser(desiredEmail?: string): RegistrationFormValues {
  const firstName = faker.name.firstName() as string;
  const lastName = faker.name.lastName() as string;
  const email =
    desiredEmail || (faker.internet.email(firstName, lastName, 'operationcode.org') as string);
  const zipcode = `${faker.address.zipCode()}`; // force to be string

  /**
   * In Cypress, ✅ ing the checkbox requires hitting the space bar, which is done by LITERALLY
   * typing a string with an space character. Cute.
   *
   * This causes issues with Jest, so I found an environment variable used in Jest, but not Cypress
   * so that the mocked value is correct in all contexts.
   */
  const codeOfConduct = typeof Cypress === 'object' ? ' ' : true;
  const slackGuidelines = typeof Cypress === 'object' ? ' ' : true;

  const user = {
    email,
    'confirm-email': email,
    firstName,
    lastName,
    zipcode,
    codeOfConduct,
    slackGuidelines,
  };

  return user as RegistrationFormValues;
}
