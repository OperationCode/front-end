/* eslint-env jest */
import capitalizeFirstLetter from '../string-utils';

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a string with a lower-case first letter', () => {
    const testString = 'testString';

    expect(capitalizeFirstLetter(testString).toEqual('TestString'));
  });

  it('should return the same string when passed a string with a capitalized first letter', () => {
    const testString = 'TestString';

    expect(capitalizeFirstLetter(testString)).toEqual(testString);
  });

  it('should throw an error when passed undefined', () => {
    expect(capitalizeFirstLetter()).toThrowError();
  });

  it('should throw an error when passed an object', () => {
    expect(capitalizeFirstLetter({ key: 'value' })).toThrowError();
  });

  it('should throw an error when passed an array', () => {
    expect(capitalizeFirstLetter(['item1', 'item2'])).toThrowError();
  });
});
