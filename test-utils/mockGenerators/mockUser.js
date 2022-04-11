import faker from 'faker';
import mockPassword from './mockPassword';

/**
 * @description generate a mocked user object for registration tests
 *
 * @export
 * @param {string} [desiredEmail=''] User will be created with this email, if passed
 * @returns {Object.<string, string>}
 */
export default function mockUser({
  desiredEmail = '',
  passwordOptions = {
    hasMinimumLength: true,
    hasOneLowercaseChar: true,
    hasOneUppercaseChar: true,
    hasOneNumber: true,
  },
} = {}) {
  const firstName = faker.name.firstName();
  // running into duplicate users in e2e 'should be able to register with valid data' test
  const lastName = faker.name.lastName() + Math.round(Math.random() * 10000);
  const email = desiredEmail || faker.internet.email(firstName, lastName, 'operationcode.org');
  const password = mockPassword({
    hasMinimumLength: passwordOptions.hasMinimumLength,
    hasOneLowercaseChar: passwordOptions.hasOneLowercaseChar,
    hasOneUppercaseChar: passwordOptions.hasOneUppercaseChar,
    hasOneNumber: passwordOptions.hasOneNumber,
  });
  const zipcode = `${faker.address.zipCode()}`; // force to be string

  /**
   * In Cypress, ✅ ing the checkbox requires hitting the space bar, which is done by LITERALLY
   * typing a string with an space character. Cute.
   *
   * This causes issues with Jest, so I found an environment variable used in Jest, but not Cypress
   * so that the mocked value is correct in all contexts.
   */
  const codeOfConduct = typeof Cypress === 'object' ? ' ' : true;

  const user = {
    email,
    'confirm-email': email,
    password,
    'confirm-password': password,
    firstName,
    lastName,
    zipcode,
    codeOfConduct,
  };

  return user;
}
