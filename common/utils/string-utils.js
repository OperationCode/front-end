/**
 * Functions are being exported using module.exports, so we can use the methods in
 * node.js and ES6 client side.
 * */

/**
 * Capitalize the first letter in a string
 *
 * @export
 * @param {string} someString
 * @returns {string } Returns string with the first character capitalized
 */
function capitalizeFirstLetter(someString = '') {
  const stringCopy = someString.slice(0);

  return stringCopy.charAt(0).toUpperCase() + stringCopy.slice(1);
}

/**
 * Checks to see if a string contains white space
 *
 * @export
 * @param {string} someString
 * @returns {boolean} Returns a boolean. True if a white space is found
 */
function containsWhiteSpace(someString) {
  if (typeof someString !== 'string') {
    throw new Error(`${someString} is not a string`);
  }

  return /\s/.test(someString);
}

/**
 * Checks to see if a string contains dash (-) characters
 *
 * @export
 * @param {string} someString
 * @returns {boolean} Returns a boolean. True if (-) is found
 */
function containsDashCharacter(someString) {
  if (Array.isArray(someString)) {
    throw new Error(`${someString} is not a string`);
  }
  return someString.indexOf('-') >= 0;
}

module.exports = {
  capitalizeFirstLetter,
  containsWhiteSpace,
  containsDashCharacter,
};
