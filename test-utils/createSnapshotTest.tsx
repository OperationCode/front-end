import renderer from 'react-test-renderer';

/**
 * Used to create fully-rendered snapshot test.
 * Useful for reusable component smoke tests.
 *
 * @export
 * @param {*} Component
 */
export default Component => {
  const tree = renderer.create(Component).toJSON();
  expect(tree).toMatchSnapshot();
};
