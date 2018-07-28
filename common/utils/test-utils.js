/* eslint-env jest */
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

/**
 * Used to create fully-rendered snapshot test.
 * Useful for reusable component smoke tests.
 *
 * @export
 * @param {*} Component
 */
export function createSnapshotTest(Component) {
  const tree = renderer.create(Component).toJSON();
  expect(tree).toMatchSnapshot();
}

/**
 * Used to create a snapshot test off of surface leaves of the tree.
 * Useful for regression tests on containers or larger components.
 *
 * @export
 * @param {*} Component
 */
export function createShallowSnapshotTest(Component) {
  const shallowRenderer = new ShallowRenderer();
  const tree = shallowRenderer.render(Component);

  expect(tree).toMatchSnapshot();
}
