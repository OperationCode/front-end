import { passwordStrengthRegex } from '../constants/validations';

/**
 * Check if provided value meets minimum password strength requirements.
 * 1. one lowercase letter
 * 2. one uppercase letter
 * 3. one number
 * 4. minimum 8 characters
 *
 * @param {string} val
 * @return {boolean} true if min requirements are met
 */
export function isMinPasswordStrength(value) {
  return passwordStrengthRegex.test(value);
}
