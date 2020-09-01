import { hasRequiredCharacters } from '../validator-utils';
import mockPassword from '../../../test-utils/mockGenerators/mockPassword';

const validPassword = mockPassword();

describe('Validator Utilities', () => {
  describe('hasRequiredCharacters', () => {
    it('should work with a lowercase letter, an uppercase letter, and a number', () => {
      expect(hasRequiredCharacters(validPassword)).toStrictEqual(true);
    });

    it('should pass with a space', () => {
      expect(hasRequiredCharacters(`${validPassword} `)).toStrictEqual(true);
    });

    it('should pass with symbols', () => {
      expect(hasRequiredCharacters(`${validPassword}@$`)).toStrictEqual(true);
    });

    it('should pass with multiple seperated spaces', () => {
      expect(hasRequiredCharacters(`${validPassword}_ ! _`)).toStrictEqual(true);
    });

    it('should pass leading and trailing whitespace', () => {
      expect(hasRequiredCharacters(` ${validPassword} `)).toStrictEqual(true);
    });

    it('should pass with password that broke CI on 5/3/2019', () => {
      const specialPassword = '_DGMaDV4!1Aa';
      expect(hasRequiredCharacters(specialPassword)).toStrictEqual(true);
    });

    it('should fail when missing a number', () => {
      const passwordWithoutNumber = mockPassword({
        hasOneNumber: false,
      });

      expect(hasRequiredCharacters(passwordWithoutNumber)).toStrictEqual(false);
    });

    it('should fail when missing an uppercase letter', () => {
      const passwordWithoutUppercase = mockPassword({
        hasOneUppercaseChar: false,
      });

      expect(hasRequiredCharacters(passwordWithoutUppercase)).toStrictEqual(false);
    });

    it('should fail when missing a lowercase letter', () => {
      const passwordWithoutLowercase = mockPassword({
        hasOneLowercaseChar: false,
      });

      expect(hasRequiredCharacters(passwordWithoutLowercase)).toStrictEqual(false);
    });
  });
});
