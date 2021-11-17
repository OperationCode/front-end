import renderer from 'react-test-renderer';

/**
 * Used to create fully-rendered snapshot test.
 * Useful for reusable component smoke tests.
 *
 * @export
 * @param {*} Component
 */
export default Component => {
  let root = null;
  renderer.act(() => {
    root = renderer.create(Component);
  });

  const tree = root.toJSON();
  renderer.act(() => {
    root.unmount();
    root = null;
  });
  // eslint-disable-next-line jest/no-standalone-expect -- This function is always called in tests.
  expect(tree).toMatchSnapshot();
};
