import { requiredCharactersRegex } from '../constants/validations';

/**
 * Check if provided value meets minimum password strength requirements.
 * 1. one lowercase letter
 * 2. one uppercase letter
 * 3. one number
 *
 * @param {string} val
 * @return {boolean} true if min requirements are met
 */
export function hasRequiredCharacters(value) {
  return requiredCharactersRegex.test(value);
}
