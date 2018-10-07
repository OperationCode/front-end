module.exports = {};
/**
 * Capitalize the first letter in a string
 *
 * @export
 * @param {string} someString
 * @returns {string} Returns string with the first character capitalized
 */
module.exports.capitalizeFirstLetter = someString => {
  const stringCopy = someString.slice(0);

  return stringCopy.charAt(0).toUpperCase() + stringCopy.slice(1);
};

/**
 * Checks to see if a string contains white space
 *
 * @export
 * @param {string} someString
 * @returns {boolean} Returns a boolean. True if a white space is found
 */
module.exports.containsWhiteSpace = someString => /\s/.test(someString);

/**
 * Checks to see if a string contains dash (-) characters
 *
 * @export
 * @param {string} someString
 * @returns {boolean} Returns a boolean. True if (-) is found
 */
module.exports.containsDashCharacter = someString => someString.indexOf('-') >= 0;
