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
  const lastName = faker.name.lastName();
  const email = desiredEmail || faker.internet.email(firstName, lastName, 'operationcode.org');
  const password = mockPassword({
    hasMinimumLength: passwordOptions.hasMinimumLength,
    hasOneLowercaseChar: passwordOptions.hasOneLowercaseChar,
    hasOneUppercaseChar: passwordOptions.hasOneUppercaseChar,
    hasOneNumber: passwordOptions.hasOneNumber,
  });
  const zipcode = `${faker.address.zipCode()}`; // force to be string
  const codeOfConduct = ' '; // This represents the spacebar being hit to check the box

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
