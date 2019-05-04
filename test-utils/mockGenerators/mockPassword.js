import faker from 'faker';
import { minimumPasswordLength } from '../../common/constants/validations';

/**
 * @description generate a mocked password for registration tests
 *
 * @export
 * @param {boolean} [isValid=true] Determine if the returned password is valid
 * @returns {string}
 */
export default function mockPassword(isValid = true) {
  return isValid
    ? `${faker.internet.password(minimumPasswordLength)}!1Aa${faker.internet.password(1)}`
    : `${faker.internet.password(minimumPasswordLength - 2)}`;
}
