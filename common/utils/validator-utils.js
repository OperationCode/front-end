/**
 * Take a string and determine if it has non-whitespace characters in it
 *
 * This may seem counter-intuitive, but it's difficult to get a zipcode regex correctly.
 * See https://stackoverflow.com/questions/578406/what-is-the-ultimate-postal-code-and-zip-regex
 * for more info
 *
 * @param {string} zipcode
 * @returns {boolean}
 */
export function isValidZipcode(zipcode = '') {
  return zipcode.length !== 0 && zipcode.trim().length !== 0;
}

/**
 * Check if provided value meets minimum password strength requirements.
 * 1. one lowercase letter
 * 2. one uppercase letter
 * 3. one number
 *
 * @param {string} val
 * @return {boolean} true if min requirements are met
 */
export function isMinPasswordStrength(val) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/.test(val);
}
