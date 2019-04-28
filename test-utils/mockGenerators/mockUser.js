import faker from 'faker';
import mockPassword from './mockPassword';

/**
 * @description generate a mocked user object for registration tests
 *
 * @export
 * @param {string} [desiredEmail=''] User will be created with this email, if passed
 * @returns {Object.<string, string>}
 */
export default function mockUser(desiredEmail = '') {
  const email = desiredEmail || faker.internet.email();
  const password = mockPassword();

  const user = {
    email,
    'confirm-email': email,
    password,
    'confirm-password': password,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    zipcode: faker.address.zipCode(),
  };

  return user;
}
