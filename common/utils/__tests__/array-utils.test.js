const { isFilledArray, mapStringsToSelectOptions } = require('../array-utils');

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

  describe('mapStringsToSelectOptions', () => {
    it('should return an arrray of specifically shaped objects from an array of strings', () => {
      expect(mapStringsToSelectOptions(['army', 'navy'])).toStrictEqual([
        { label: 'army', value: 'army' },
        { label: 'navy', value: 'navy' },
      ]);
    });
  });
});
