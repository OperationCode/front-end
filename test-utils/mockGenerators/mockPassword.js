import faker from 'faker';
import { minimumPasswordLength } from '../../common/constants/validations';

const validPasswordRegex = /^[\w]*$/;
const invalidPasswordRegex = /^[\W]*$/;

/**
 * @description generate a mocked password for registration tests
 *
 * @export
 * @param {boolean} [hasMinimumLength=true] Password should have minimum length
 * @param {boolean} [hasOneLowercaseChar=true] Password should contain a lowercase char
 * @param {boolean} [hasOneUppercaseChar=true] Password should contain an uppercase char
 * @param {boolean} [hasOneNumber=true] Password should contain a number
 * @returns {string}
 */
export default function mockPassword({
  hasMinimumLength = true,
  hasOneLowercaseChar = true,
  hasOneUppercaseChar = true,
  hasOneNumber = true,
} = {}) {
  const isValid = hasMinimumLength && hasOneLowercaseChar && hasOneUppercaseChar && hasOneNumber;

  let password = '';

  if (isValid) {
    password = faker.internet.password(minimumPasswordLength, false, validPasswordRegex, 'aA1');
    return password;
  }

  if (hasOneLowercaseChar) {
    password += 'a';
  }

  if (hasOneUppercaseChar) {
    password += 'A';
  }

  if (hasOneNumber) {
    password += '1';
  }

  password = hasMinimumLength
    ? faker.internet.password(minimumPasswordLength, false, invalidPasswordRegex, password)
    : faker.internet.password(minimumPasswordLength - 1, false, invalidPasswordRegex, password);

  return password;
}
