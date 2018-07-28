/**
 * Capitalize the first letter in a string
 *
 * @export
 * @param {string} someString
 * @returns {string} Returns string with the first character capitalized
 */
export default function capitalizeFirstLetter(someString) {
  const stringCopy = someString.slice(0);

  return stringCopy.charAt(0).toUpperCase() + stringCopy.slice(1);
}
