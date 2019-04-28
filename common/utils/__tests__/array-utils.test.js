import { insertIf } from '../array-utils';

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
});
