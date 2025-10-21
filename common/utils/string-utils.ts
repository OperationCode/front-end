/**
 * @description Capitalize the first letter in a string
 *
 * @export
 * @param {string} someString
 * @returns {string} Returns string with the first character capitalized
 */
export function capitalizeFirstLetter(someString: string = ''): string {
  const stringCopy = [...someString].join('');

  return stringCopy.charAt(0).toUpperCase() + stringCopy.slice(1);
}

/**
 * @description Return undefined if passed string is empty, otherwise pass the string thru
 *
 * @export
 * @param {string} someString
 * @returns {(undefined|string)} undefined or string
 */
export function coerceEmptyStringToUndefined(someString: string): string | undefined {
  if (someString === '') {
    return undefined;
  }

  return someString;
}
