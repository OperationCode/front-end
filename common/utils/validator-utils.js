// Remove lint error below when a second validator is added.
/* eslint-disable import/prefer-default-export */
<<<<<<< HEAD
=======

>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
/**
 * Take a string and determine if it has non-whitespace characters in it
 *
 * This may seem counter-intuitive, but it's difficult to get a zipcode regex correctly.
 * See https://stackoverflow.com/questions/578406/what-is-the-ultimate-postal-code-and-zip-regex
 * for more info
 * @export
 * @param {string} input
 * @returns {boolean}
 */
<<<<<<< HEAD
export const zipCodeValidator = input => input.length !== 0 && input.trim().length !== 0;
=======
export function zipCodeStringValidator(input = '') {
  return input.length !== 0 && input.trim().length !== 0;
}
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
