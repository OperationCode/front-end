/* eslint-env jest */
import { isMinPasswordStrength, isValidZipcode } from '../validator-utils';

describe('Validator Utilities', () => {
  describe('isValidZipcode', () => {
    it('should return true for any string', () => {
      expect(isValidZipcode('testString')).toStrictEqual(true);
    });

    it('should return false when passed an empty string', () => {
      expect(isValidZipcode('')).toStrictEqual(false);
    });

    it('should return false when passed undefined', () => {
      expect(isValidZipcode()).toStrictEqual(false);
    });
  });

  describe('isMinPasswordStrength', () => {
    it('should work with a lowercase letter, an uppercase letter, and a number', () => {
      const password = 'aA1';
      expect(isMinPasswordStrength(password)).toStrictEqual(true);
    });

    it('should pass with a space', () => {
      const password = 'a A1';
      expect(isMinPasswordStrength(password)).toStrictEqual(true);
    });

    it('should pass with symbols', () => {
      const password = 'aA1@$';
      expect(isMinPasswordStrength(password)).toStrictEqual(true);
    });

    it('should pass with multiple spaces', () => {
      const password = '111a d G';
      expect(isMinPasswordStrength(password)).toStrictEqual(true);
    });

    it('should pass with password that broke CI on 5/3/2019', () => {
      const password = '_DGMaDV4!1Aa';
      expect(isMinPasswordStrength(password)).toStrictEqual(true);
    });

    it('should pass leading and trailing whitespace', () => {
      const password = ' _DGMaDV4!1Aa ';
      expect(isMinPasswordStrength(password)).toStrictEqual(true);
    });

    it('should fail when missing a number', () => {
      const password = 'aA';
      expect(isMinPasswordStrength(password)).toStrictEqual(false);
    });

    it('should fail when missing a uppercase letter', () => {
      const password = 'a^&*@ba1';
      expect(isMinPasswordStrength(password)).toStrictEqual(false);
    });

    it('should fail when missing a lowercase letter', () => {
      const password = 'A#$#(&(1';
      expect(isMinPasswordStrength(password)).toStrictEqual(false);
    });
  });
});
