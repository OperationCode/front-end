const { isFilledArray } = require('../array-utils');

describe('Array Utilities', () => {
  describe('isFilledArray', () => {
    it('should return false for undefined', () => {
      expect(isFilledArray(undefined)).toBe(false);
    });

    it('should return false for an empty array', () => {
      expect(isFilledArray([])).toBe(false);
    });

    it('should return false for an array with an empty string', () => {
      expect(isFilledArray([''])).toBe(false);
    });

    it('should return false for an array with an undefined item', () => {
      expect(isFilledArray([undefined])).toBe(false);
    });

    it('should return true for an array with one defined item', () => {
      expect(isFilledArray(['Yo'])).toBe(true);
    });

    it('should return true for an array with two defined items', () => {
      expect(isFilledArray(['Yo', 'Test'])).toBe(true);
    });

    it('should return true for an array of one number', () => {
      expect(isFilledArray([9])).toBe(true);
    });
  });
});
