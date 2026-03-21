import { render } from '@testing-library/react';

/**
 * Used to create fully-rendered snapshot test.
 * Useful for reusable component smoke tests.
 *
 * @export
 * @param {*} Component
 */
export default Component => {
  const { container } = render(Component);
  expect(container).toMatchSnapshot();
};
