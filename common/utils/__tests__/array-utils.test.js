const { insertIf, isFilledArray, mapStringsToSelectOptions } = require('../array-utils');

describe('Array Utilities', () => {
  describe('insertIf', () => {
    it('should return an empty array if condition is false', () => {
      const someEmptyArray = [];

      expect(insertIf(false, someEmptyArray)).toStrictEqual([]);
    });

    it('should return an passed argument if condition is true', () => {
      const someObject = { key: 'value' };
      expect(insertIf(true, someObject)).toStrictEqual([someObject]);
    });

    it('should return an array of every argument if condition is true', () => {
      expect(insertIf(true, 'yo', 'yes', 'wow', 2)).toStrictEqual(['yo', 'yes', 'wow', 2]);
    });
  });

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
