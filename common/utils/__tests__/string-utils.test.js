/* eslint-env jest */
import { capitalizeFirstLetter, containsDashCharacter, containsWhiteSpace } from '../string-utils';

describe('String Utilities', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of a string with a lower-case first letter', () => {
      expect(capitalizeFirstLetter('testString')).toStrictEqual('TestString');
    });

    it('should return the same string when passed a string with a capitalized first letter', () => {
      expect(capitalizeFirstLetter('TestString')).toStrictEqual('TestString');
    });

    it('should return an empty string when passed undefined', () => {
      expect(capitalizeFirstLetter()).toStrictEqual('');
    });
  });
});

describe('containsWhiteSpace', () => {
  it('should return true when passed a string with white space(s)', () => {
    const testString = 'Test String';
    expect(containsWhiteSpace(testString)).toStrictEqual(true);
  });

  it('should return false when when passing a string without white space(s)', () => {
    const testString = 'testString';
    expect(containsWhiteSpace(testString)).toStrictEqual(false);
  });

  it('should throw an error when passed an object', () => {
    expect(() => {
      containsWhiteSpace({ a: 1, b: 2 });
    }).toThrow('is not a string');
  });

  it('should throw an error when passed a number', () => {
    expect(() => {
      containsWhiteSpace(22);
    }).toThrow('is not a string');
  });

  it('should throw an error when passed a boolean', () => {
    expect(() => {
      containsWhiteSpace(false);
    }).toThrow('is not a string');
  });

  it('should throw an error when passed undefined', () => {
    expect(() => {
      containsWhiteSpace(undefined);
    }).toThrow('is not a string');
  });

  it('should throw an error when passed an array', () => {
    expect(() => {
      containsWhiteSpace([1, 3, 4]);
    }).toThrow('is not a string');
  });
});

describe('containsDashCharacter', () => {
  it('should return true when passed a string with dash(-) characters', () => {
    const someString = 'some-string';
    expect(containsDashCharacter(someString)).toStrictEqual(true);
  });

  it('should return false when passed a string without dash(-) characters', () => {
    const someString = 'somestring';
    expect(containsDashCharacter(someString)).toStrictEqual(false);
  });

  it('should throw an error when passed undefined', () => {
    expect(() => containsDashCharacter(undefined)).toThrow('Cannot read property');
  });

  it('should throw an error when passed an object', () => {
    expect(() => containsDashCharacter({ key: 'value' })).toThrow('is not a function');
  });

  it('should throw an error when passed an array', () => {
    expect(() => containsDashCharacter(['item1', 'item2'])).toThrow('is not a string');
  });
});
