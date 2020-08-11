import { isMinPasswordStrength } from '../validator-utils';
import mockPassword from '../../../test-utils/mockGenerators/mockPassword';

describe('Validator Utilities', () => {
  describe('isMinPasswordStrength', () => {
    it(
      'should work with 8 characters, ' +
        'a lowercase letter, ' +
        'an uppercase letter, ' +
        'and a number',
      () => {
        const password = mockPassword();
        expect(isMinPasswordStrength(password)).toStrictEqual(true);
      },
    );

    it('should pass with a space', () => {
      const password = `${mockPassword()} `;
      expect(isMinPasswordStrength(password)).toStrictEqual(true);
    });

    it('should pass with symbols', () => {
      const password = `${mockPassword()}@$`;
      expect(isMinPasswordStrength(password)).toStrictEqual(true);
    });

    it('should pass with multiple seperated spaces', () => {
      const password = `${mockPassword()}_ ! _`;
      expect(isMinPasswordStrength(password)).toStrictEqual(true);
    });

    it('should pass leading and trailing whitespace', () => {
      const password = ` ${mockPassword()} `;
      expect(isMinPasswordStrength(password)).toStrictEqual(true);
    });

    it('should pass with password that broke CI on 5/3/2019', () => {
      const password = '_DGMaDV4!1Aa';
      expect(isMinPasswordStrength(password)).toStrictEqual(true);
    });

    it('should fail when missing a number', () => {
      const password = mockPassword({ hasOneNumber: false });
      expect(isMinPasswordStrength(password)).toStrictEqual(false);
    });

    it('should fail when missing an uppercase letter', () => {
      const password = mockPassword({ hasOneUppercaseChar: false });
      expect(isMinPasswordStrength(password)).toStrictEqual(false);
    });

    it('should fail when missing a lowercase letter', () => {
      const password = mockPassword({ hasOneLowercaseChar: false });
      expect(isMinPasswordStrength(password)).toStrictEqual(false);
    });
  });
});
