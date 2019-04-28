// TODO: Remove once mulitple methods within
/* eslint-disable import/prefer-default-export */

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

module.exports = {
  insertIf,
};
