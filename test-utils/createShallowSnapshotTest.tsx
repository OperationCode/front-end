import ShallowRenderer from 'react-test-renderer/shallow';

/**
 * Used to create a snapshot test off of surface leaves of the tree.
 * Useful for regression tests on containers, components utilizing something that requires large
 * mocking, or very large components.
 *
 * @export
 * @param {*} Component
 */
export default Component => {
  const shallowRenderer = new ShallowRenderer();
  const tree = shallowRenderer.render(Component);

  expect(tree).toMatchSnapshot();
};
