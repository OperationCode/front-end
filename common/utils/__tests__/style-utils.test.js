import {
  getNumberFromPixelValue,
  hasPixelSuffix,
  isHexColor,
  getSortedBreakpointValues,
  getBreakpoints,
} from '../style-utils';

describe('Style Utilities', () => {
  describe('getNumberFromPixelValue', () => {
    it('should return 50 when passed "50px"', () => {
      expect(getNumberFromPixelValue('50px')).toStrictEqual(50);
    });

    it('should return 1000 when passed "1000px"', () => {
      expect(getNumberFromPixelValue('1000px')).toStrictEqual(1000);
    });

    it('should error when passing a string without a pixel unit suffix', () => {
      expect(() => getNumberFromPixelValue('700')).toThrow('700 is not a pixel value!');
    });
  });

  describe('hasPixelSuffix', () => {
    it('should return true if px is at the end of the string', () => {
      expect(hasPixelSuffix('700px')).toStrictEqual(true);
    });

    it('should return false the string is just px', () => {
      expect(hasPixelSuffix('px')).toStrictEqual(false);
    });

    it('should return false if not related to pixel value', () => {
      expect(hasPixelSuffix('#663399')).toStrictEqual(false);
    });
  });

  describe('isHexColor', () => {
    it('should return true if # is at the start of passed string of 4 characters', () => {
      expect(isHexColor('#3ab')).toStrictEqual(true);
    });

    it('should return true if # is at the start of passed string of 7 all-caps characters', () => {
      expect(isHexColor('#FFFFFF')).toStrictEqual(true);
    });

    it('should return false if passed string is just #', () => {
      expect(isHexColor('#')).toStrictEqual(false);
    });

    it('should return false if passed string starts with #, but is 5 characters long', () => {
      expect(isHexColor('#2345')).toStrictEqual(false);
    });

    it('should return false if passed string starts with #, but is 10 characters long', () => {
      expect(isHexColor('#123456789')).toStrictEqual(false);
    });

    it('should throw an error if not passed a string', () => {
      expect(() => isHexColor(3725)).toThrow(
        'Must pass a string to this method. You passed 3725 which is type of: number.',
      );
    });

    it('should throw an error if not passed a string - specifically an object', () => {
      const someObject = { someKey: 'value' };
      const errorMessage = `Must pass a string to this method. You passed an object! Keys: someKey`;

      expect(() => isHexColor(someObject)).toThrow(errorMessage);
    });
  });

  describe('getSortedBreakpointValues', () => {
    const testValues = ['768px', '1000px', '900px'];
    const sortedBreakpointValues = [768, 900, 1000];

    it('should return an array', () => {
      expect(Array.isArray(getSortedBreakpointValues(testValues))).toStrictEqual(true);
    });

    it('should return breakpoint-related values in order from least to greatest', () => {
      expect(getSortedBreakpointValues(testValues)).toStrictEqual([...sortedBreakpointValues]);
    });
  });

  describe('getBreakpoints', () => {
    const testValues = ['768px', '1000px', '900px', '500px'];

    const errorMessage = `We require a small, medium, large, and extra-large breakpoint. Ensure
      "common/styles/variables.css" has exactly 4 breakpoint values.`;

    it('should throw an error when passed an array with fewer than 4 items', () => {
      expect(() => getBreakpoints([testValues[0], testValues[1], testValues[2]])).toThrow(
        errorMessage,
      );
    });

    it('should throw an error when passed an array with more than 4 items', () => {
      expect(() => getBreakpoints([...testValues, '1200px'])).toThrow(errorMessage);
    });

    it('should return a breakpoint object when passed an array of 4 pixel-suffixed values', () => {
      expect(getBreakpoints(testValues)).toStrictEqual({
        sm: 500,
        md: 768,
        lg: 900,
        xl: 1000,
      });
    });
  });
});
