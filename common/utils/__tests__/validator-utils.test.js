/* eslint-env jest */
import { zipCodeValidator } from '../validator-utils';

describe('capitalizeFirstLetter', () => {
  it('should return true for any string', () => {
    // this may seem counter-intuitive, but it's difficult to get a zipcode regex correctly.
    // see https://stackoverflow.com/questions/578406/what-is-the-ultimate-postal-code-and-zip-regex for more info
    expect(zipCodeValidator('testString')).toEqual(true);
  });

  it('should return false when passed an empty string', () => {
    expect(zipCodeValidator('')).toEqual(false);
  });

  it('should throw an error when passed any amount of number characters', () => {
    expect(() => zipCodeValidator(12)).toThrow();
  });

  it('should throw an error when passed undefined', () => {
    expect(() => zipCodeValidator()).toThrow();
  });

  it('should throw an error when passed an object', () => {
    expect(() => zipCodeValidator({ key: 'value' })).toThrow();
  });

  it('should throw an error when passed an array', () => {
    expect(() => zipCodeValidator(['item1', 'item2'])).toThrow();
  });
});
