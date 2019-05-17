const get = require('lodash/get');
const isEmpty = require('lodash/isEmpty');

/**
 * Functions are being exported using module.exports, so we can use the methods in
 * node.js and ES6 client side.
 * */

/**
 * @description a method to conditionally apply items into an array
 * @see http://2ality.com/2017/04/conditional-literal-entries.html#variations-of-the-original-approach
 * @export
 * @param {boolean} condition
 * @param {...[]} elements (1 or many arguments which are spread into an array)
 * @returns {[]}
 */
function insertIf(condition, ...elements) {
  return condition ? elements : [];
}

/**
 * @description used to identify if an array is filled with real values
 * @export
 * @param {array} potentialArray passed arg isnt required to be an array
 * @returns {boolean}
 */
function isFilledArray(potentialArray) {
  return Boolean(
    Array.isArray(potentialArray) &&
      !isEmpty(potentialArray) &&
      get(potentialArray, '[0]', undefined),
  );
}

/**
 * @description used to quickly define Select-ready options array from just an array of strings
 * @export
 * @param {sring[]} arrayOfStrings
 * @returns {{ label: string, value: string }[]} array of options ready for use in Select component
 */
function mapStringsToSelectOptions(arrayOfStrings) {
  return arrayOfStrings.map(someString => {
    return {
      value: someString,
      label: someString,
    };
  });
}

module.exports = {
  insertIf,
  isFilledArray,
  mapStringsToSelectOptions,
};
