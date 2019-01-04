/* eslint-env jest */
import { getPropsStartingWith, getDataAttributes, getAriaAttributes } from '../prop-utils';

describe('getPropsStartingWith', () => {
  test('should return the props that start with the given string', () => {
    const props = {
      'test-1': 'test',
      'test-2': 'test 2',
      'another-prop': 'test 3',
    };

    const result = getPropsStartingWith('test-', props);
    expect(result).toEqual({
      'test-1': 'test',
      'test-2': 'test 2',
    });
  });
});

describe('getDataAttributes', () => {
  test('should return only the props that start with `data-`', () => {
    const props = {
      'data-ci': 'ci',
      'data-gtm': 'gtm',
      children: 'test children',
    };

    const result = getDataAttributes(props);

    expect(result).toEqual({
      'data-ci': 'ci',
      'data-gtm': 'gtm',
    });
  });
});

describe('getAriaAttributes', () => {
  test('should return only the props that start with `aria-`', () => {
    const props = {
      'aria-label': 'a11y rocks!',
      'aria-checked': 'true',
      children: 'test children',
    };

    const result = getAriaAttributes(props);

    expect(result).toEqual({
      'aria-label': 'a11y rocks!',
      'aria-checked': 'true',
    });
  });
});
