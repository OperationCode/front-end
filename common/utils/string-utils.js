// Remove lint error below when a second validator is added.
/* eslint-disable import/prefer-default-export */

/**
 * Capitalize the first letter in a string
 *
 * @export
 * @param {string} someString
 * @returns {string} Returns string with the first character capitalized
 */
export function capitalizeFirstLetter(someString = '') {
  const stringCopy = someString.slice(0);

  return stringCopy.charAt(0).toUpperCase() + stringCopy.slice(1);
}
