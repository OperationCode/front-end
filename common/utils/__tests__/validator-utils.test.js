/* eslint-env jest */
import { zipCodeStringValidator } from '../validator-utils';

describe('Validator Utilities', () => {
  describe('zipCodeStringValidator', () => {
    it('should return true for any string', () => {
      expect(zipCodeStringValidator('testString')).toStrictEqual(true);
    });

    it('should return false when passed an empty string', () => {
      expect(zipCodeStringValidator('')).toStrictEqual(false);
    });

    it('should return false when passed undefined', () => {
      expect(zipCodeStringValidator()).toStrictEqual(false);
    });
  });
});
