import { getPropertiesStartingWith, getDataAttributes, getAriaAttributes } from '../prop-utils';

describe('Prop Utilities', () => {
  describe('getPropertiesStartingWith', () => {
    it('should return the props that start with the given string', () => {
      const props = {
        'test-1': 'test',
        'test-2': 'test 2',
        'another-prop': 'test 3',
      };

      const result = getPropertiesStartingWith('test-', props);
      expect(result).toStrictEqual({
        'test-1': 'test',
        'test-2': 'test 2',
      });
    });
  });

  describe('getDataAttributes', () => {
    it('should return only the props that start with `data-`', () => {
      const props = {
        'data-ci': 'ci',
        'data-gtm': 'gtm',
        children: 'test children',
      };

      const result = getDataAttributes(props);

      expect(result).toStrictEqual({
        'data-ci': 'ci',
        'data-gtm': 'gtm',
      });
    });
  });

  describe('getAriaAttributes', () => {
    it('should return only the props that start with `aria-`', () => {
      const props = {
        'aria-label': 'a11y rocks!',
        'aria-checked': 'true',
        children: 'test children',
      };

      const result = getAriaAttributes(props);

      expect(result).toStrictEqual({
        'aria-label': 'a11y rocks!',
        'aria-checked': 'true',
      });
    });
  });
});
