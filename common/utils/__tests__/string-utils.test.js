/* eslint-env jest */
<<<<<<< HEAD
import capitalizeFirstLetter from '../string-utils';

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a string with a lower-case first letter', () => {
    expect(capitalizeFirstLetter('testString')).toEqual('TestString');
  });

  it('should return the same string when passed a string with a capitalized first letter', () => {
    const testString = 'TestString';

    expect(capitalizeFirstLetter(testString)).toEqual(testString);
  });

  it('should throw an error when passed undefined', () => {
    expect(() => capitalizeFirstLetter()).toThrow();
  });

  it('should throw an error when passed an object', () => {
    expect(() => capitalizeFirstLetter({ key: 'value' })).toThrow();
  });

  it('should throw an error when passed an array', () => {
    expect(() => capitalizeFirstLetter(['item1', 'item2'])).toThrow();
=======
import { capitalizeFirstLetter } from '../string-utils';

describe('String Utilities', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of a string with a lower-case first letter', () => {
      expect(capitalizeFirstLetter('testString')).toStrictEqual('TestString');
    });

    it('should return the same string when passed a string with a capitalized first letter', () => {
      expect(capitalizeFirstLetter('TestString')).toStrictEqual('TestString');
    });

    it('should return an empty string when passed undefined', () => {
      expect(capitalizeFirstLetter(undefined)).toStrictEqual('');
    });
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  });
});
