/**
 * Functions are being exported using module.exports, so we can use the methods in
 * node.js and ES6 client side.
 * */

/**
 * @description used to identify if an array is filled with real values
 * @export
 * @param {array} potentialArray passed arg isnt required to be an array
 * @returns {boolean}
 */
function isFilledArray(potentialArray) {
  return Boolean(Array.isArray(potentialArray) && potentialArray.length > 0 && potentialArray[0]);
}

module.exports = {
  isFilledArray,
};
