import { capitalizeFirstLetter, coerceEmptyStringToUndefined } from '../string-utils';

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
  });

  describe('coerceEmptyStringToUndefined', () => {
    it('should return undefined when passed string is empty', () => {
      expect(coerceEmptyStringToUndefined('')).toBeUndefined();
    });

    it('should return the string itself if it is not empty', () => {
      const theString = 'yo';
      expect(coerceEmptyStringToUndefined(theString)).toStrictEqual(theString);
    });
  });
});
