/* eslint-env jest */
import { capitalizeFirstLetter, containsWhiteSpace, containsDashCharacter } from '../node-utils';

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a string with a lower-case first letter', () => {
    expect(capitalizeFirstLetter('testString')).toEqual('TestString');
  });

  it('should return the same string when passed a string with a capitalized first letter', () => {
    const testString = 'TestString';

    expect(capitalizeFirstLetter(testString)).toEqual(testString);
  });

  it('should throw an error when passed undefined', () => {
    expect(() => capitalizeFirstLetter()).toThrow();
  });

  it('should throw an error when passed an object', () => {
    expect(() => capitalizeFirstLetter({ key: 'value' })).toThrow();
  });

  it('should throw an error when passed an array', () => {
    expect(() => capitalizeFirstLetter(['item1', 'item2'])).toThrow();
  });
});

describe('containsWhiteSpace', () => {
  it('should return true when passed a string with white space(s)', () => {
    const testString = 'Test String';
    expect(containsWhiteSpace(testString)).toEqual(true);
  });

  it('should return false when when passing a string without white space(s)', () => {
    const testString = 'testString';
    expect(containsWhiteSpace(testString)).toEqual(false);
  });

  it('should throw an error when passed an object', () => {
    expect(() => {
      containsWhiteSpace({ a: 1, b: 2 });
    }).toThrow();
  });

  it('should throw an error when passed a number', () => {
    expect(() => {
      containsWhiteSpace(22);
    }).toThrow();
  });

  it('should throw an error when passed a boolean', () => {
    expect(() => {
      containsWhiteSpace(false);
    }).toThrow();
  });

  it('should throw an error when passed undefined', () => {
    expect(() => {
      containsWhiteSpace(undefined);
    }).toThrow();
  });

  it('should throw an error when passed an array', () => {
    expect(() => {
      containsWhiteSpace([1, 3, 4]);
    }).toThrow();
  });
});

describe('containsDashCharacter', () => {
  it('should return true when passed a string with dash(-) characters', () => {
    const someString = 'some-string';
    expect(containsDashCharacter(someString)).toEqual(true);
  });

  it('should return false when passed a string without dash(-) characters', () => {
    const someString = 'somestring';
    expect(containsDashCharacter(someString)).toEqual(false);
  });

  it('should throw an error when passed undefined', () => {
    expect(() => containsDashCharacter(undefined)).toThrow();
  });

  it('should throw an error when passed an object', () => {
    expect(() => containsDashCharacter({ key: 'value' })).toThrow();
  });

  it('should throw an error when passed an array', () => {
    expect(() => containsDashCharacter(['item1', 'item2'])).toThrow();
  });
});
